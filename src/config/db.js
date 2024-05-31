import mongoose from 'mongoose';
import config from './keys.js';

const DB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(config.DATABASE.URL);
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default DB;
