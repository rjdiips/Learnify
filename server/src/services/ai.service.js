import { GoogleGenerativeAI } from "@google/generative-ai";
import parsedEnv from "../config/env.js";
import logger from "../config/logger.js";

const genAI = new GoogleGenerativeAI(parsedEnv.GEMINI_API_KEY);

export const getKeywordsFromAI = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    logger.info(`AI Response: ${text}`);
    return text.trim();
  } catch (error) {
    logger.error("AI keyword extraction failed:", error);
    throw new Error("Failed to extract keywords from AI");
  }
};
