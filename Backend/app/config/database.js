import mongoose from 'mongoose';
import { env } from '../config/env';
// Define the Mongoose schema
const ClientMessageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
}, {
    timestamps: true // This will add createdAt and updatedAt fields
});
export const ConnectMongo = async () => {
    try {
        await mongoose.connect(env.mongoURI, { dbName: "Portfolio" });
        console.log('MongoDB connected');
    }
    catch (error) {
        console.error('Error connecting to MongoDB: Database', error);
        process.exit(1); // Exit with failure
    }
};
