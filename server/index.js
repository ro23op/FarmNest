import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import {connectDB} from './lib/db.js';
import authRoutes from './routes/auth.route.js';
import productRoutes from './routes/product.route.js';
import farmRoutes from './routes/farm.route.js';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}));

app.use('/auth',authRoutes);
app.use('/products',productRoutes);
app.use('/farm',farmRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});