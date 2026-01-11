import { v2 as cloudinary } from "cloudinary";
import parsedEnv from "./env.js";

cloudinary.config({
  cloud_name: parsedEnv.CLOUDINARY_CLOUD_NAME,
  api_key: parsedEnv.CLOUDINARY_API_KEY,
  api_secret: parsedEnv.CLOUDINARY_API_SECRET,
});

export default cloudinary;
