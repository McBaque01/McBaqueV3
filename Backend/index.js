import app from './app/app.js';
import { ConnectMongo } from './app/config/mongoDb.js';
import { env } from './app/config/env.js';
import dotenv from "dotenv";
dotenv.config();
const startServer = async () => {
    try {
        await ConnectMongo();
        const server = app.listen(env.Port, async () => {
            console.log(`Server is working!`);
            console.log(`Server running at ${env.Host}${env.Port}`);
            // const token = await refreshAccessTokenOnStartup();
            // console.log(`Access token on startup: ${token}`);
            // setInterval(async () => {
            //   const token = await refreshAccessTokenOnStartup();
            //   console.log(`Access token on startup: ${token}`);
            // }, 180000);
        });
        server.on('error', (err) => {
            console.error('Server error:', err);
        });
    }
    catch (error) {
        console.error('Failed to connect to the database:', error);
        process.exit(1); // Exit the process with failure
    }
};
startServer();
// const port: number = 8080;
// console.log(env.GmailEmail)
// console.log(env.GmailPassword)
// console.log(env.Host)
// console.log(env.MongoURI)
// console.log(env.Port)
// console.log(env.SpotifyClient)
// console.log(env.SpotifySecret)
// ConnectMongo().then(()=>{
//   const server = app.listen(env.Port, async () => {
//     console.log(`Server is Working!`);
//     console.log(`Server running at ${env.Host}${env.Port}`);
//     const token = await refreshAccessTokenOnStartup(); 
//     console.log(token)
//   });
//   // Error handling for server setup
//   server.on('error', (err) => {
//     console.error('Server error:', err);
//   });
// }).catch(error =>{
//   console.error('Failed to connect to the database:', error);
//   process.exit(1); // Exit the process with failure
// })
// const server = app.listen(port, () => {
//   console.log(`Server is Working!`);
//   console.log(`Server running at http://localhost:${port}`);
// });
// // Error handling for server setup
// server.on('error', (err) => {
//   console.error('Server error:', err);
// });
// import express, { Response, Request } from "express"; // nodejs framework
// import cors from "cors";
// import dotenv from 'dotenv';
// const app = express();
// const port: number = 8080;
// app.use(express.json());
// dotenv.config();
// interface corsvalues {
//   origin: string[],
//   methods:string[],
//   credentials: boolean,
//   optionsSuccessStatus: number,
// }
// app.use(cors (<corsvalues>{
//   origin: ["http://localhost:5173"],
//   methods: ["POST", "GET"],
//   credentials: true,
//   optionsSuccessStatus: 204,
// }))
// app.listen(port, () => {
//   console.log(`Server is running on ${port}`)
// })
// // Error handling for server setup
// app.on('error', (err) => {
//   console.error('Server error:', err);
// });
// app.post('/TestRequest', async (req: Request, res: Response) => {
//   console.log("TestRequest Activate")
//   res.status(200).json("Success!")
// });
// app.get("/Post", (req: Request, res: Response) =>{
//   "Working"
// })
