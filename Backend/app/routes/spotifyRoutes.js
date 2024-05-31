import { Router } from 'express';
import { AuthorizeMe } from '../config/spotifyAPI.js';
import { SpotifyCallBack } from '../config/spotifyAPI.js';
const router = Router();
router.get("/AuthorizeMe", AuthorizeMe);
router.get("/Callback", SpotifyCallBack);
export default router;
