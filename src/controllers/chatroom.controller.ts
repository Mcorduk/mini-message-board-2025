import { Request, Response } from "express";
import { ChatroomService } from "../services/chatroom.service";

export class ChatroomController {
  private chatroomService: ChatroomService;

  constructor() {
    this.chatroomService = new ChatroomService();
  }

  async getAllChatrooms(req: Request, res: Response) {
    try {
      const { chatroomId } = req.query;
      const chatrooms = await this.chatroomService.getAllChatrooms();

      if (!chatrooms) {
        return res.status(404).json({ error: "Chatrooms not found" });
      }

      res.status(200).json(chatrooms);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch chatrooms" });
    }
  }
}
