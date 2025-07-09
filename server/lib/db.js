import mongoose from "mongoose";

export const connectDB = () => mongoose.connect(process.env.MONGO_DB_URI,{})
.then(()=>{
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
