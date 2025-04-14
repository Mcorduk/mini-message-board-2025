import { Request, Response } from "express";
import { MessageService } from "../services/message.service";

export class MessageController {
  private messageService: MessageService;

  constructor() {
    this.messageService = new MessageService();
  }

  async getAllMessages(req: Request, res: Response) {
    try {
      const { chatroomId } = req.query;
      const messages = await this.messageService.getAllMessages(
        parseInt(chatroomId)
      );

      if (!messages) {
        return res.status(404).json({ error: "Messages not found" });
      }

      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  }
}
