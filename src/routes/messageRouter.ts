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

messageRouter.post("/", (req: Request, res: Response) => {
  const { content, chatId } = req.body;
  res.send("Message Created");
});

messageRouter.put("/:messageId", (req: Request, res: Response) => {
  const { messageId } = req.params;
  const { content } = req.body;

  res.send(`Message Id: ${messageId} updated`);
});

messageRouter.delete("/:messageId", (req: Request, res: Response) => {
  const { messageId } = req.params;

  res.send(`Message Id: ${messageId} deleted`);
});

export default messageRouter;
