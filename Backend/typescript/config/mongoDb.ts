import mongoose, { Document, Schema, Model } from 'mongoose';
import { Request, Response } from 'express';
import { env } from './env.js';
import { ClientRequest } from 'http';
import { replyTo } from './nodemailer.js';


// Define the schema interface
interface ClientMessage extends Document {
    name: string;
    email: string;
    message: string;
    
    createdAt: Date;
    updatedAt: Date;
}

// Define the Mongoose schema
const ClientMessageSchema: Schema<ClientMessage> = new mongoose.Schema({
    
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
   
},{
    timestamps: true // This will add createdAt and updatedAt fields
});

interface MessageResult extends Document {
    _id: mongoose.Types.ObjectId;
  
    // Add other fields as needed
}


export const ConnectMongo = async () => {
    try {
          await mongoose.connect(env.mongoURI, { dbName: "Portfolio" }); 
          console.log('MongoDB connected');
    } catch (error) {
      console.error('Error connecting to MongoDB: Database', error);
      process.exit(1); // Exit with failure
    }
  };


//   const Contact = mongoose.model('ContactUs', ClientMessageSchema, 'ContactUs');
    const Contact: Model<ClientMessage> = mongoose.model<ClientMessage>('ContactUs', ClientMessageSchema, 'ContactUs');
    export default Contact;

  export const InputMessage = async (req: Request, res: Response): Promise<MessageResult> => {
    const {name, email, messageInput} = req.body;

    const newMessage = new Contact({
        name: name,
        email: email,
        message: messageInput,
    })

    try{
        await newMessage.save();
        await replyTo({name, email, message: messageInput})
        const savedMessage  = await Contact.findOne({_id: newMessage._id}, {_id: 1, name: 1, email: 1, message: 1, createdAt: 1, updatedAt: 1})
       
        if(!savedMessage){
            throw new Error("Message not found after creation")
        }
        const result: MessageResult = savedMessage as MessageResult;
        console.log("New Message!", result)
        res.status(200).json({result});
        return result;
    }catch(error){
        console.error('Error creating user:', error);
        throw error; // Throw the error to be handled by the calling function

    }

  }

