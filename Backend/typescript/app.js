import express from "express"; // nodejs framework
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
const app = express();
app.use(express.json());
dotenv.config();
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
    optionsSuccessStatus: 204,
}));
app.post('/PortfolioTest', async (req, res) => {
    console.log("HI, I Received something!");
    res.status(200).json({ message: "Sucess PortfolioTEst" });
});
// app.options('/PortfolioTest', (req: Request, res: Response) => {
//     res.sendStatus(200);
//   });
app.use('/Portfolio', userRoutes);
console.log("APP is Working!");
// const name = "Mark John";
// const email = "mcbaque01@gmail.com";
// replyTo({name, email})
// EmailSender();
export default app;
