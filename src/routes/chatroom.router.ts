import { Router, Request, Response } from "express";

const chatroomRouter = Router();

chatroomRouter.get("/", (req: Request, res: Response) => {
  res.send("All chatrooms");
});

chatroomRouter.get("/:chatroomId", (req: Request, res: Response) => {
  const { chatroomId } = req.params;
  res.send(`Chatroom Id: ${chatroomId}`);
});

chatroomRouter.post("/", (req: Request, res: Response) => {
  const { name, description, type } = req.body;
  res.send("Chatroom Created");
});

chatroomRouter.put("/:chatroomId", (req: Request, res: Response) => {
  const { chatroomId } = req.params;
  const { name, description, type } = req.body;
  res.send(`Chatroom Id: ${chatroomId} updated`);
});

chatroomRouter.delete("/:chatroomId", (req: Request, res: Response) => {
  const { chatroomId } = req.params;
  res.send(`Chatroom Id: ${chatroomId} deleted`);
});

export default chatroomRouter;
