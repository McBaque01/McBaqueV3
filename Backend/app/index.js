import app from './app.js';
const port = 8080;
// app.use(express.json());
// dotenv.config()
const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
// Error handling for server setup
server.on('error', (err) => {
    console.error('Server error:', err);
});
// Error handling for server setup
// app.on('error', (err) => {
//     console.error('Server error:', err);
// });
// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // Use `true` for port 465, `false` for all other ports
//     auth: {
//       user: process.env.GMAIL_EMAIL,
//       pass: process.env.GMAIL_PASSWORD,
//     },
//   });
// const EmailSender = async () => {
//     const info = await transporter.sendMail({
//         from: `"TEST GMAIL" ${process.env.GMAIL_EMAIL}`, // sender address
//         to: "mcbaque01@gmail.com", // list of receivers
//         subject: "Test Messsage!", // Subject line
//         text: "Hello worldEST again?", // plain text body
//       });
//       console.log("Message sent: %s", info.messageId);
// }
// EmailSender();
