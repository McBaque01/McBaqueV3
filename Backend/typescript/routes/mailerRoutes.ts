import { Router } from 'express';

import { replyTo } from '../config/nodemailer.js';
import { InputMessage } from '../config/mongoDb.js';

const router = Router();

router.post("/Send",InputMessage)



export default router;