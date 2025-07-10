import express from 'express';
import checkAuth from '../middleware/checkAuth';
import { registerFarm } from '../controllers/farm.controller';

const router = express.Router();

router.post('/register-farm', checkAuth, registerFarm);

export default router;