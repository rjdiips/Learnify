import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema(
  {
    moduleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
    },
    video: { type: String, required: true, trim: true },
    videoPublicId: { type: String, required: true, trim: true },
    videoDuration: { type: Number, required: true },
    comment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const Lecture = mongoose.model("Lecture", lectureSchema);
export default Lecture;
