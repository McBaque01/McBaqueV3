import express from "express"; // nodejs framework
import userRoutes from "./routes/userRoutes.js";
import mailerRoutes from "./routes/mailerRoutes.js";
import spotifyRoutes from "./routes/spotifyRoutes.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "https://mcbaquev3.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
    optionsSuccessStatus: 204,
}));
app.post('/PortfolioTest', async (req, res) => {
    console.log("HI, I Received something!");
    res.status(200).json({ message: "Sucess PortfolioTEst" });
});
app.get('/MakeMeAlive', (req, res) => {
    res.status(200).json({ message: 'Server is alive!' });
});
app.use('/Send', userRoutes);
app.use('/Mailer', mailerRoutes);
app.use('/Spotify', spotifyRoutes);
console.log("APP is Working!");
// const name = "Mark John";
// const email = "mcbaque01@gmail.com";
// replyTo({name, email})
// EmailSender();
export default app;
