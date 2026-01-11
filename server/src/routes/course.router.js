import express from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import { createCourse } from "../controllers/course.controller.js";
import upload from "../middleware/multer.middleware.js";

const router = express.Router();

router.post(
  "/create-course",
  protectedRoute,
  upload.single("thumbnail"),
  createCourse
);

export default router;
