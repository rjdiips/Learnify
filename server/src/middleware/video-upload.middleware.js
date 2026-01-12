import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";
import { ApiError } from "../utils/api-error.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "learnify/course-videos",
    resource_type: "video",
    allowed_formats: ["mp4", "mov", "avi", "mkv", "webm"],
    chunk_size: 6000000,
  },
});

const videoUpload = multer({
  storage,
  limits: {
    fileSize: 100 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("video/")) {
      cb(null, true);
    } else {
      cb(new ApiError(400, "Only video files are allowed"), false);
    }
  },
});

export default videoUpload;
