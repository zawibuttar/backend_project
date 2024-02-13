import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInst = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_Name}`
    );
    console.log(
      `\n mongoDB connected !! DB Host ${connectionInst.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection Failed :", error);
    process.exit(1);
  }
};

export default connectDB;
