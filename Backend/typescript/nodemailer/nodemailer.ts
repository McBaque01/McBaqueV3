import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config();


interface replyToTypes {
    name: string;
    email: string;
}

const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: process.env.GMAIL_EMAIL,
          pass: process.env.GMAIL_PASSWORD,
        },
});

export const EmailSender = async () => {
        const info = await transporter.sendMail({
            from: `"TEST GMAIL" ${process.env.GMAIL_EMAIL}`, // sender address
            to: "mcbaque01@gmail.com", // list of receivers
            subject: "Test Messsage!", // Subject line
            text: "Hello worldEST again?", // plain text body
    
          });
    
          console.log("Message sent: %s", info.messageId);
    
}

export const replyTo = async ({name, email}: replyToTypes) => {

    
    const info = await transporter.sendMail({
        from: `mcbaque01@gmail.com`, // sender address
        to: `mcbaque01@gmail.com`, // list of receivers
        subject: "Testing Development", // Subject line
        text: "THIS IS TEST4!", // plain text body

        replyTo: `mcbaque01@gmail.com`
    
      });
      console.log("Message sent: %s", info.messageId);
}