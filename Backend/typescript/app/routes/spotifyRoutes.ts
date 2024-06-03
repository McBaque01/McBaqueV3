import { Router } from 'express';

import { AuthorizeMe, getMyTokens, getMyCurrentPlayingMusic, acceptToken, SpotifyRefresh } from '../config/spotifyAPI.js';
import { SpotifyCallBack } from '../config/spotifyAPI.js';
import { AuthorizeMeServer } from '../config/spotifyAPI.js';

const router = Router();

router.get("/AuthorizeMe",AuthorizeMe)
router.get("/Callback",SpotifyCallBack)
router.get("/SpotifyServer",AuthorizeMeServer)
router.get("/SpotifyToken",getMyTokens)
router.get("/CurrentMusic",getMyCurrentPlayingMusic)

router.get("/Refresh",SpotifyRefresh)



export default router;