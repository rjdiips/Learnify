import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    options: [{ type: String }],
    correntOptions: { type: String },
    explaination: { type: String },
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);
export default Question;
