import { Router } from "express";
import { MessageController } from "../controllers/message.controller";

const messageRouter: Router = Router();
const messageController: MessageController = new MessageController();

messageRouter.get("/", (req, res) =>
  messageController.getAllMessages(req, res)
);

messageRouter.post("/", (req, res) =>
  messageController.createMessage(req, res)
);

messageRouter.put("/:messageId", (req, res) =>
  messageController.updateMessage(req, res)
);

messageRouter.delete("/:messageId", (req, res) =>
  messageController.deleteMessage(req, res)
);

export default messageRouter;
