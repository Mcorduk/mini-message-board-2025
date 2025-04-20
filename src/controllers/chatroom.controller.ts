import { Request, Response } from "express";
import { ChatroomService } from "../services/chatroom.service";

export class ChatroomController {
  private chatroomService: ChatroomService;

  constructor() {
    this.chatroomService = new ChatroomService();
  }

  async getAllChatrooms(req: Request, res: Response) {
    try {
      const chatrooms = await this.chatroomService.getAllChatrooms();

      if (!chatrooms) {
        return res.status(404).json({ error: "Chatrooms not found" });
      }

      res.status(200).json(chatrooms);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch chatrooms" });
    }
  }

  async getChatroom(req: Request, res: Response) {
    try {
      const chatroomId = Number(req.query.chatroomId);
      const chatroom = await this.chatroomService.getChatroom(chatroomId);

      if (!chatroom) {
        return res.status(404).json({ error: "Chatroom not found" });
      }

      res.status(200).json(chatroom);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch chatroom" });
    }
  }

  async createChatroom(req: Request, res: Response) {
    try {
      //FIXME I won't work
      const { newChatroom } = req.body;
      const chatroom = await this.chatroomService.createChatroom(newChatroom);

      if (!chatroom) {
        res.status(400).json({ error: "Failed to create chatroom" });
        return;
      }

      res.status(200).json(chatroom);
    } catch (error) {
      res.status(500).json({ error: "Failed to create chatroom" });
    }
  }

  async updateChatroom(req: Request, res: Response) {
    try {
      //FIXME I won't work
      const chatroomId = Number(req.query.chatroomId);
      const { updates } = req.body;
      const chatrooms = await this.chatroomService.updateChatroom(
        chatroomId,
        updates
      );

      res.status(200).json(chatrooms);
    } catch (error) {
      res.status(500).json({ error: "Failed to create chatroom" });
    }
  }

  async deleteChatroom(req: Request, res: Response) {
    try {
      const chatroomId = Number(req.query.chatroomId);
      const chatrooms = await this.chatroomService.deleteChatroom(chatroomId);

      res.status(200).json(chatrooms);
    } catch (error) {
      res.status(500).json({ error: "Failed to create chatroom" });
    }
  }
}
