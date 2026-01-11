import nodemailer from "nodemailer";
import logger from "./logger.js";
import parsedEnv from "./env.js";

const transporter = nodemailer.createTransport({
  host: parsedEnv.BREVO_SMTP_HOST,
  port: parseInt(parsedEnv.BREVO_SMTP_PORT),
  secure: false,
  auth: {
    user: parsedEnv.BREVO_SMTP_USER,
    pass: parsedEnv.BREVO_SMTP_PASSWORD,
  },
});

transporter.verify((error, success) => {
  if (error) {
    logger.error("Email transporter error:", error);
  } else {
    logger.info("Email server is ready to send messages");
  }
});

export default transporter;
