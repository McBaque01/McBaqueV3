import { Router } from 'express';
import { InputMessage } from '../config/mongoDb.js';
const router = Router();
router.post("/Send", InputMessage);
export default router;
