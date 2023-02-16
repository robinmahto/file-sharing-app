import nodemailer from 'nodemailer';
import { SMTP_HOST, SMTP_PORT, SMTP_USER_MAIL, SMTP_USER_PASSWORD } from '../config';

async function sendEmail({ from, to, subject, text, html }) {

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: false,
        auth: {
            user: SMTP_USER_MAIL,
            pass: SMTP_USER_PASSWORD
        }
    })

    const info = await transporter.sendMail({
        from: `mailShare<${from}>`,
        to,
        subject,
        text,
        html
    })
    
   return info
}

export default sendEmail;