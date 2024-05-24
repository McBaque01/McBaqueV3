import express, { Response, Request } from "express"; // nodejs framework
import dotenv from "dotenv"
import { replyTo } from "./nodemailer/nodemailer.js";



const app = express();
dotenv.config()

app.use(express.json());

const name = "Mark John";
const email = "mcbaque01@gmail.com";

replyTo({name, email})

// EmailSender();


export default app;

