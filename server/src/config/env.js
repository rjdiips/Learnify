import dotenv from "dotenv";
dotenv.config({ quiet: true });
import zod from "zod";
import logger from "./logger.js";

const envSchema = zod.object({
  MONGO_URI: zod.string().min(1, "MONGO_URI is required"),
  CLIENT_URL: zod.string().min(1, "CLIENT_URL is required"),
  PORT: zod.string().optional(),
  LOG_LEVEL: zod.string().optional(),
  JWT_SECRET: zod.string().min(1, "JWT_SECRET is required"),
  ADMIN_EMAIL: zod.string().min(1, "ADMIN_EMAIL is required"),
  BREVO_SMTP_HOST: zod.string().min(1, "BREVO_SMTP_HOST is required"),
  BREVO_SMTP_PORT: zod.string().min(1, "BREVO_SMTP_PORT is required"),
  BREVO_SMTP_USER: zod.string().min(1, "BREVO_SMTP_USER is required"),
  BREVO_SMTP_PASSWORD: zod.string().min(1, "BREVO_SMTP_PASSWORD is required"),
  EMAIL_FROM: zod.string().min(1, "EMAIL_FROM is required"),
  EMAIL_FROM_NAME: zod.string().min(1, "EMAIL_FROM_NAME is required"),
});

const ENV = {
  MONGO_URI: process.env.MONGO_URI,
  CLIENT_URL: process.env.CLIENT_URL,
  PORT: process.env.PORT || "3000",
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
  JWT_SECRET: process.env.JWT_SECRET,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  BREVO_SMTP_HOST: process.env.BREVO_SMTP_HOST,
  BREVO_SMTP_PORT: process.env.BREVO_SMTP_PORT,
  BREVO_SMTP_USER: process.env.BREVO_SMTP_USER,
  BREVO_SMTP_PASSWORD: process.env.BREVO_SMTP_PASSWORD,
  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
};

const result = envSchema.safeParse(ENV);

if (!result.success) {
  logger.error(
    "Environment validation failed: " +
      result.error.issues.map((issue) => issue.message).join(", ")
  );
  process.exit(1);
}

export const parsedEnv = result.data;
export default parsedEnv;
