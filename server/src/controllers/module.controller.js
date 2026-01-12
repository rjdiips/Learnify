import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";
import { moduleCreationSchema } from "../validations/index.js";

export const createModule = asyncHandler(async (req, res, next) => {
  const moduleCreationData = moduleCreationSchema.safeParse(req.body);

  if (!moduleCreationData.success) {
    throw new ApiError(
      400,
      "Validation Error",
      moduleCreationData.error.issues.map((issue) => issue.message).join(", ")
    );

    const video = req.file;
  }

  const { courseId, title } = moduleCreationData.data;
});
