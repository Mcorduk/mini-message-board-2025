// src/routes/messageRouter.ts
import { Router, Request, Response } from "express";

const messageRouter = Router();

messageRouter.get("/", (req: Request, res: Response) => {
  res.send("All messages");
});

messageRouter.get("/:messageId", (req: Request, res: Response) => {
  const { messageId } = req.params;
  res.send(`Message Id: ${messageId}`);
});

export default messageRouter;
