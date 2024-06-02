import express from "express"; // nodejs framework

import userRoutes from "./routes/userRoutes.js"
import mailerRoutes from "./routes/mailerRoutes.js"
import spotifyRoutes from "./routes/spotifyRoutes.js"

import cors from "cors"
import { Request, Response } from "express";


const app = express();
app.use(express.json());





// interface corsvalues {
//     origin: string[],
//     methods:string[],
//     credentials: boolean,
//     allowedHeaders: string[],
//     optionsSuccessStatus: number,
// }

// const corsOptions: corsvalues = {
    
//     origin: ["http://localhost:5173"],
//     methods: ["POST", "GET"],
//     credentials: true,
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     optionsSuccessStatus: 204,
//   };

// app.use(cors(corsOptions))

  interface corsvalues {
  origin: string[],
  methods:string[],
  credentials: boolean,
  optionsSuccessStatus: number,
}

app.use(cors (<corsvalues>{
  origin: ["http://localhost:5173", "https://mcbaquev3.vercel.app"],
  methods: ["POST", "GET"],
  credentials: true,
  optionsSuccessStatus: 204,
}))


  app.post('/PortfolioTest', async (req: Request, res: Response) => {
    console.log("HI, I Received something!")
    res.status(200).json({message: "Sucess PortfolioTEst"});
  });

app.get('/MakeMeAlive', (req: Request, res: Response) =>{
  res.status(200).json({ message: 'Server is alive!' });
})


app.use('/Send', userRoutes)
app.use('/Mailer', mailerRoutes)
app.use('/Spotify', spotifyRoutes)

console.log("APP is Working!")

// const name = "Mark John";
// const email = "mcbaque01@gmail.com";

// replyTo({name, email})

// EmailSender();


export default app;

