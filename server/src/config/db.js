import logger from "./logger.js";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    logger.info("Database connected successfully");
  } catch (error) {
    logger.error("Database connection failed:", error);
  }
};
