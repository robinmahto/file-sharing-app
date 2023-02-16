import dotenv from 'dotenv';
dotenv.config();

export const {
    APP_PORT,
    MONGODB_URL,
    APP_BASE_URL,
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER_MAIL,
    SMTP_USER_PASSWORD } = process.env;