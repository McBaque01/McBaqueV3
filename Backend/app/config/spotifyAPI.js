import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { env } from './env.js';
export const AuthorizeMe = async () => {
    try {
        const sdk = SpotifyApi.withUserAuthorization(env.SpotifyClient, `${env.Host}${env.Port}`, ["user-read-playback-state"]);
        // Await the user profile response
        const user = await sdk.currentUser.profile();
        // Log the user profile
        console.log(user);
    }
    catch (error) {
        console.error('Error fetching user profile:', error);
    }
};
// const sdk = SpotifyApi.withUserAuthorization(env.SpotifyClient, `${env.Host}${env.Port}`, ["user-read-playback-state"]);
// const user = await sdk.currentUser.profile()
