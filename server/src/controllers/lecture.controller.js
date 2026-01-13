import Lecture from "../models/lecture.model.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
import { lectureCreationSchema } from "../validations/index.js";

export const createLecture = asyncHandler(async (req, res, next) => {
  const lectureCreationData = lectureCreationSchema.safeParse(req.body);

  if (!lectureCreationData.success) {
    throw new ApiError(
      400,
      "Validation Error",
      lectureCreationData.error.issues.map((issue) => issue.message).join(", ")
    );
  }

  const { moduleId, title } = lectureCreationData.data;
  const lecture = await Lecture.create({
    moduleId,
    title,
    video: req.file.path,
    videoPublicId: req.file.filename,
    videoDuration: req.file.duration || 0,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, lecture, "Lecture created successfully"));
});
