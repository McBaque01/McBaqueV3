import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { env } from './env.js';
import { Request, Response } from 'express';
import { Buffer } from 'buffer';

import axios from 'axios';


export const AuthorizeMe = async (req: Request, res: Response) =>{
    console.log("HERE")
    try{
        // const sdk = SpotifyApi.withUserAuthorization(env.SpotifyClient, `http://localhost:5173`, ["user-read-playback-state"]);
       
        // // const sdk = SpotifyApi.withClientCredentials(env.SpotifyClient, env.SpotifySecret, ["user-read-playback-state"]);

        // console.log(sdk);
      
  
        // const user = await sdk.currentUser.profile();
        
        // // Log the user profile
        // console.log(user);
        // const serializedSdk = {
        //     accessToken: sdk.getAccessToken(),
            
        //     // Add other properties as needed
        // };

        // res.status(200).json({SDK: serializedSdk})

        console.log("Auth Activate")
        const scope = 'user-read-playback-state';

        const client_id = env.SpotifyClient;

        const redirectUri = 'http://localhost:3000/Spotify/Callback'; // Replace with your actual redirect URI
        const authorizationUrl = new URL('https://accounts.spotify.com/authorize');
        authorizationUrl.searchParams.set('response_type', 'code');
        authorizationUrl.searchParams.set('client_id', client_id);
        authorizationUrl.searchParams.set('scope', scope);
        authorizationUrl.searchParams.set('redirect_uri', redirectUri);
       
        
        console.log(authorizationUrl.toString());

        res.json({authorizationUrl: authorizationUrl})

    }catch(error){
        console.error('The Error was:', error);
        res.status(500).json("Spotify Authorize Bad")
    }
}

export const AuthorizeMeServer = async (req: Request, res: Response) => {
  console.log("HERE SERVER")
  try{
    const sdk = SpotifyApi.withUserAuthorization(env.SpotifyClient, `http://localhost:3000`, ["user-read-playback-state"]);
    const user = await sdk.currentUser.profile()

    console.log(user)
    console.log("Auth Server")
   
  }catch(error){
    console.error('The Error was:', error);
    
  }

}


export const SpotifyCallBack = async (req: Request, res: Response) => {

    console.log("Callback Activate")
    var code = req.query.code || null;
    var state = req.query.state || null;

    console.log(code)
    console.log(state)
    // res.status(200).json({code: code})


    const redirectUri = 'http://localhost:3000/Spotify/Callback';
    const client_id = env.SpotifyClient
    const client_secret = env.SpotifySecret


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

    const authOptions = {
      method: 'POST',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
      },
      data: new URLSearchParams({
          code: code as string,
          redirect_uri: redirectUri,
          grant_type: 'authorization_code'
      }).toString()
  };

      try {
        const response = await axios(authOptions);
        console.log(response.data);
        res.status(200).json(response.data);
      } catch (error) {
          console.error('Error during token exchange:', error);
          res.status(500).json("Spotify Callback Bad");
      }


}
// const sdk = SpotifyApi.withUserAuthorization(env.SpotifyClient, `${env.Host}${env.Port}`, ["user-read-playback-state"]);
// const user = await sdk.currentUser.profile()
