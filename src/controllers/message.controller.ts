import { Request, Response } from "express";
import { MessageService } from "../services/message.service";
import { Message } from "../types/db/database.types";

export class MessageController {
  private messageService: MessageService;

  constructor() {
    this.messageService = new MessageService();
  }

  async getAllMessages(req: Request, res: Response) {
    try {
      const chatroomId = Number(req.query.chatroomId);
      const messages = await this.messageService.getAllMessages(chatroomId);

      if (!messages) {
        return res.status(404).json({ error: "Messages not found" });
      }

      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  }

  async createMessage = async (req: Request, res: Response): Promise<void> => {
    try {
      const newMessage: Partial<Message> = req.body;
      const createdMessage = await this.messageService.createMessage(newMessage);

      if (!createdMessage) {
        res.status(400).json({ error: "Failed to create message" });
        return;
      }

      res.status(201).json(createdMessage);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };


  async updateMessage = async (req: Request, res: Response): Promise<void> => {
    try {
      const messageId = Number(req.params.messageId);

      if (isNaN(messageId)) {
        res.status(400).json({ error: "Invalid message ID" });
        return;
      }
      const updates: Partial<Message> = req.body;
      const updatedMessage = await this.messageService.updateMessage(messageId, updates);

      if (!updatedMessage) {
        res.status(404).json({ error: "Message not found" });
        return;
      }

      res.status(200).json(updatedMessage);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };


  async deleteMessage = async (req: Request, res: Response): Promise<void> => {
    try {
      const messageId = Number(req.params.messageId);
      if (isNaN(messageId)) {
        res.status(400).json({ error: "Invalid message ID" });
        return;
      }

      const deletedMessage = await this.messageService.deleteMessage(messageId);
      if (!deletedMessage) {
        res.status(404).json({ error: "Message not found" });
        return;
      }

      res.status(200).json({ message: "Message deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
}
