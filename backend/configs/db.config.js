import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected Database');
  } catch (error) {
    console.log(`MongoDB Error: ${error}`);
  }
};

export default connectDB;
