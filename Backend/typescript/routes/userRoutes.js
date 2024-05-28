import { Router } from 'express';
import { testRequest } from '../controller/userController.js';
const router = Router();
router.post("/testRequest", testRequest);
export default router;
