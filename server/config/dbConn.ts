import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(process.env.CONECTION_URL as string);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
  }
}

export default connectDB;