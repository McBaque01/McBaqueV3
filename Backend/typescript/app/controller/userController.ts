import { Request, Response } from 'express';

interface requestType  {
  name: string,
  email: string,
  message: string,
}

export const testRequest = (req: Request, res: Response) => {

  const {name, email, messageInput} = req.body

  const data: requestType = {
    name,
    email,
    message: messageInput,
  }

    // Logic to create a user
    console.log("Receive in TestRequest!",data)
    res.status(200).json({messsage: " TestRequest Working", data: data});
  };


  