import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { env } from './env.js';
import SpotifyWebApi from 'spotify-web-api-node';
let SpotifyRefreshToken;
function generateRandomString(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
const client_id = env.SpotifyClient;
const client_secret = env.SpotifySecret;
const spotifyApi = new SpotifyWebApi({
    clientId: client_id,
    clientSecret: client_secret,
    redirectUri: env.SpotifyCallbackURI,
});
export const AuthorizeMe = async (req, res) => {
    console.log("HERE");
    try {
        // const sdk = SpotifyApi.withUserAuthorization(env.SpotifyClient, env.SpotifyCallbackURI, ["user-read-playback-state"]);
        // const sdk = SpotifyApi.withClientCredentials(env.SpotifyClient, env.SpotifySecret, ["user-read-playback-state"]);
        // // const sdk = SpotifyApi.withClientCredentials(env.SpotifyClient, env.SpotifySecret, ["user-read-playback-state"]);
        //  const user = await sdk.currentUser.profile();
        //   console.log(sdk);
        // const sdk = SpotifyApi.performUserAuthorization(env.SpotifyClient, env.SpotifyCallbackURI, ["user-read-playback-state"], "http://localhost:3000/Spotify/Accept-user-token");
        res.redirect(`${SpotifyApi.performUserAuthorization(env.SpotifyClient, env.SpotifyCallbackURI, ["user-read-playback-state"], "http://localhost:3000/Spotify/Accept-user-token")}`);
        // const user = await sdk.currentUser.profile();
        // // Log the user profile
        // res.send(user)
        // const serializedSdk = {
        //     accessToken: sdk.getAccessToken(),
        //     // Add other properties as needed
        // };
        // res.status(200).json({SDK: serializedSdk})
        // console.log("Auth Activate")
        // const scope = 'user-read-playback-state';
        // const client_id = env.SpotifyClient;
        // const redirectUri =  env.SpotifyCallbackURI; // Replace with your actual redirect URI
        // const authorizationUrl = new URL('https://accounts.spotify.com/authorize');
        // authorizationUrl.searchParams.set('response_type', 'code');
        // authorizationUrl.searchParams.set('client_id', client_id);
        // authorizationUrl.searchParams.set('scope', scope);
        // authorizationUrl.searchParams.set('redirect_uri', redirectUri);
        // console.log(authorizationUrl.toString());
        // res.json({authorizationUrl: authorizationUrl})
    }
    catch (error) {
        console.error('The Error was:', error);
        res.status(500).json("Spotify Authorize Bad");
    }
};
export const AuthorizeMeServer = async (req, res) => {
    const client_id = env.SpotifyClient;
    const client_secret = env.SpotifySecret;
    console.log(client_id);
    console.log(client_secret);
    console.log("HERE SERVER");
    try {
        const scopes = ['user-read-playback-state'];
        const state = generateRandomString(16);
        res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
    }
    catch (error) {
        console.error('The Error was:', error);
    }
};
export const SpotifyCallBack = async (req, res) => {
    const error = req.query.error;
    const code = req.query.code;
    const state = req.query.state;
    if (error) {
        console.error('Callback Error:', error);
        res.send(`Callback Error: ${error}`);
        return;
    }
    spotifyApi
        .authorizationCodeGrant(code)
        .then(data => {
        const access_token = data.body['access_token'];
        const refresh_token = data.body['refresh_token'];
        const expires_in = data.body['expires_in'];
        spotifyApi.setAccessToken(access_token);
        spotifyApi.setRefreshToken(refresh_token);
        SpotifyRefreshToken = access_token;
        console.log('access_token:', access_token);
        console.log('refresh_token:', refresh_token);
        console.log(`Sucessfully retreived access token. Expires in ${expires_in} s.`);
        res.status(200).json({ message: true });
        setInterval(async () => {
            const data = await spotifyApi.refreshAccessToken();
            const access_token = data.body['access_token'];
            console.log('The access token has been refreshed!');
            console.log('access_token:', access_token);
            spotifyApi.setAccessToken(access_token);
        }, expires_in / 2 * 1000);
    })
        .catch(error => {
        console.error('Error getting Tokens:', error);
        res.send(`Error getting Tokens: ${error}`);
    });
};
export const getMyTokens = () => {
    const accesstoken = spotifyApi.getAccessToken();
    const refreshtoken = spotifyApi.getRefreshToken();
    const callBack = spotifyApi.getRedirectURI();
    console.log(accesstoken);
    console.log(refreshtoken);
    console.log(callBack);
};
export const getMyCurrentPlayingMusic = (req, res) => {
    spotifyApi.getMyCurrentPlayingTrack()
        .then(function (data) {
        console.log(data);
        console.log('Now playing: ' + data.body.item?.name);
        res.send(data.body.item);
    }, function (err) {
        console.log('Something went wrong!', err);
    });
};
export const acceptToken = (req, res) => {
    let data = req.body;
    const sdkdata = SpotifyApi.withAccessToken("client-id", data);
    console.log("SDK", sdkdata);
};
export const SpotifyRefresh = async (req, res) => {
    if (!SpotifyRefreshToken) {
        console.log('No refresh token available. Please authorize the application.');
        res.status(200).json({ message: "No Refresh token" });
        ;
    }
    try {
        const data = await spotifyApi.refreshAccessToken();
        const access_token = data.body['access_token'];
        spotifyApi.setAccessToken(access_token);
        console.log("access token: ", access_token);
        res.status(200).json({ message: "Token has refreshed!" });
        ;
    }
    catch (error) {
        console.error('Error refreshing access token on startup:', error);
        res.status(400).json({ message: "Error refreshing access token on startup", error: error });
        ;
    }
};
// export const getCurrentMusic = () => {
//   spotifyApi.getMyCurrentPlayingTrack()
//   .then(function(data) {
//     console.log(data)
//     console.log('Now playing: ' + data.body.item?.name);
//     res.send(data.body.item)
//   }, function(err) {
//     console.log('Something went wrong!', err);
//   });
// }
// console.log("Callback Activate")
// var code = req.query.code || null;
// var state = req.query.state || null;
// console.log(code)
// console.log(state)
// res.status(200).json({code: code})
// const redirectUri = 'http://localhost:3000/Spotify/Callback';
// const client_id = env.SpotifyClient
// const client_secret = env.SpotifySecret
// var authOptions = {
//     url: 'https://accounts.spotify.com/api/token',
//     form: {
//       code: code,
//       redirect_uri: redirectUri,
//       grant_type: 'authorization_code'
//     },
//     headers: {
//       'content-type': 'application/x-www-form-urlencoded',
//       'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
//     },
//     json: true
//   };
//   const authOptions = {
//     method: 'POST',
//     url: 'https://accounts.spotify.com/api/token',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
//     },
//     data: new URLSearchParams({
//         code: code as string,
//         redirect_uri: redirectUri,
//         grant_type: 'authorization_code'
//     }).toString()
// };
//     try {
//       const response = await axios(authOptions);
//       console.log(response.data);
//       res.status(200).json(response.data);
//     } catch (error) {
//         console.error('Error during token exchange:', error);
//         res.status(500).json("Spotify Callback Bad");
//     }
// const sdk = SpotifyApi.withUserAuthorization(env.SpotifyClient, `${env.Host}${env.Port}`, ["user-read-playback-state"]);
// const user = await sdk.currentUser.profile()
