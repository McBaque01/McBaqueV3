import { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
    // Your serverless function logic here
    res.status(200).end('Hello Cron!');
  }