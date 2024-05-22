import express, { Response, Request } from "express"; // nodejs framework
import dotenv from "dotenv"
import nodemailer from 'nodemailer'

const app = express();
const port: number = 8080;

app.use(express.json());
dotenv.config()

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
    console.log(process.env.TEST_ENV)
    console.log(process.env.GMAIL_EMAIL)
    console.log(process.env.GMAIL_PASSWORD)
})

// Error handling for server setup
app.on('error', (err) => {
    console.error('Server error:', err);
});

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD,
    },
  });


const EmailSender = async () => {
    const info = await transporter.sendMail({
        from: `"TEST GMAIL" ${process.env.GMAIL_EMAIL}`, // sender address
        to: "mcbaque01@gmail.com", // list of receivers
        subject: "Test Messsage!", // Subject line
        text: "Hello worldEST again?", // plain text body

      });

      console.log("Message sent: %s", info.messageId);

}

EmailSender();
