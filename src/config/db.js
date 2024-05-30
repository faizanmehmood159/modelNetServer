//E:\React Native\Fyp\modelNetServer\src\config\db.js
import mongoose from "mongoose";
import ENV from "./keys.js";

const DB = async () => {
  try {
    mongoose.set("strictQuery", false);
    
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(`${error.message}`);
    process.exit(1);
  }
};
export default DB;