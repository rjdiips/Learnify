import app from "./app.js";
import { connectDB } from "./config/db.js";
import parsedEnv from "./config/env.js";
import logger from "./config/logger.js";

const PORT = parseInt(parsedEnv.PORT) || 3000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
      logger.info(`Environment: ${process.env.NODE_ENV || "development"}`);
    });
  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
