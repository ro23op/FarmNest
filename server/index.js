import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import {connectDB} from './lib/db.js';


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});