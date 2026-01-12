import Comment from "../models/comment.model.js";
import Module from "../models/module.model.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
import { commendCreationSchema } from "../validations/index.js";

export const createComment = asyncHandler(async (req, res, next) => {
  const { moduleId } = req.params;
  const module = await Module.findById(moduleId);
  if (!module) {
    throw new ApiError(404, "Module not found");
  }

  const commentCreationData = commendCreationSchema.safeParse(req.body);
  if (!commentCreationData.success) {
    throw new ApiError(
      400,
      "Validation Error",
      commentCreationData.error.issues.map((issue) => issue.message).join(", ")
    );
  }

  const { comment } = commentCreationData.data;
  const newComment = await Comment.create({
    userId: req.user._id,
    moduleId: module._id,
    comment,
  });

  module.comment.push(newComment._id);
  await module.save();

  return res
    .status(200)
    .json(new ApiResponse(200, module, "Comment created successfully"));
});
