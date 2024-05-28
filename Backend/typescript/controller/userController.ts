import { Request, Response } from 'express';

export const testRequest = (req: Request, res: Response) => {
    // Logic to create a user
    console.log("Receive in TestRequest!")
    res.status(200).json({messsage: " TestRequest Working"});
  };


  