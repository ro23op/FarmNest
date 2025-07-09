import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});