import { Router, Request, Response } from "express";
import { ChatroomController } from "../controllers/chatroom.controller";

const chatroomRouter = Router();
const chatroomController = new ChatroomController();

chatroomRouter.get("/", (req, res) => {
  chatroomController.getAllChatrooms(req, res);
});

chatroomRouter.get("/:chatroomId", (req, res) => {
  chatroomController.getChatroom(req, res);
});

chatroomRouter.post("/", (req, res) => {
  chatroomController.createChatroom(req, res);
});

chatroomRouter.put("/:chatroomId", (req, res) => {
  chatroomController.updateChatroom(req, res);
});

chatroomRouter.delete("/:chatroomId", (req, res) => {
  chatroomController.deleteChatroom(req, res);
});

export default chatroomRouter;
