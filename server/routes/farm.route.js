import express from 'express';
import checkAuth from '../middleware/checkAuth.js';
import { registerFarm } from '../controllers/farm.controller.js';

const router = express.Router();

router.post('/register-farm', checkAuth, registerFarm);

export default router;