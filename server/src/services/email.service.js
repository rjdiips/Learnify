import transporter from "../config/email.js";
import logger from "../config/logger.js";
import parsedEnv from "../config/env.js";

export const sendWelcomeEmail = async (userEmail, userName) => {
  try {
    const mailOptions = {
      from: `${parsedEnv.EMAIL_FROM_NAME} <${parsedEnv.EMAIL_FROM}>`, // Changed
      to: userEmail,
      subject: "Welcome to Learnify!",
      html: `
        <h1>Welcome to Learnify, ${userName}!</h1>
        <p>Thank you for joining our learning platform.</p>
        <p>Start exploring courses and enhance your skills today!</p>
        <a href="${parsedEnv.CLIENT_URL}/courses">Browse Courses</a>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    logger.info(`Welcome email sent to ${userEmail}: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    logger.error(`Failed to send welcome email to ${userEmail}:`, error);
    throw error;
  }
};
