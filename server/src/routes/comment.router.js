import express from "express";
import { createComment } from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create-comment/:moduleId", createComment);

export default router;
