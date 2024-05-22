import express from "express"; // nodejs framework
import dotenv from "dotenv";
const app = express();
const port = 8080;
app.use(express.json());
dotenv.config();
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
    console.log(process.env.TEST_ENV);
});
// Error handling for server setup
app.on('error', (err) => {
    console.error('Server error:', err);
});
