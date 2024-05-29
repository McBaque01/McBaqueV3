import nodemailer from 'nodemailer';
import { env } from './env.js';
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: env.GmailEmail,
        pass: env.GmailPassword,
    },
});
export const SendtoMe = async ({ name, email, message }) => {
    const info = await transporter.sendMail({
        from: `McBaque <${env.GmailEmail}>`, // sender address
        to: `McBaque <mcbaque01@gmail.com>`, // list of receivers
        subject: "Portfolio have new Message!", // Subject line
        html: `
            <pre>
                THIS MESSAGE IS FROM <strong>${name}</strong> <br>
                Email from <strong>${email}</strong> <br><br>
                "${message}"
            </pre>
        `, // plain text body
        replyTo: `mcbaque01@gmail.com`
    });
    console.log("Message sent to me!: %s", info.messageId);
};
export const replyTo = async ({ name, email, message }) => {
    await SendtoMe({ name, email, message });
    const info = await transporter.sendMail({
        from: `McBaque <${env.GmailEmail}>`, // sender address
        to: `${name} <${email}>`, // list of receivers
        subject: "McBaque Reply", // Subject line
        text: `
        Hi ${name},

        Thank you for your message. I appreciate your patience as I navigate a high workload at the moment.
        Rest assured, I'll address your concerns as soon as possible.

        Best regards,
        McBaque
        `
        // html: `
        //     <pre>
        //     Hi ${name},
        //     Thanks for reaching out. I'm currently tackling a high workload but wanted to acknowledge receipt of your message. 
        //     I'll circle back as soon as I'm able to give it the attention it deserves.
        //     Best regards,
        //     McBaque
        //     </pre>
        // `, // plain text body
    });
    console.log("Message sent to sender: %s", info.messageId);
};
