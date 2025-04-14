import { Message } from "../types/db/database.types";
import supabase from "./supabaseClient";

export class MessageService {
  async getAllMessages(chatroomId: number): Promise<Message[] | null> {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .eq("chatroom_id", chatroomId);

    if (error) {
      console.error("Error fetching all message:", error);

      return null;
    }

    return data;
  }

  async createMessage(newMessage: Partial<Message>): Promise<Message | null> {
    const { data, error } = await supabase
      .from("messages")
      .insert(newMessage)
      .single();

    if (error) {
      console.error("Error creating messages:", error);

      return null;
    }

    return data;
  }

  async updateMessage(
    messageId: number,
    updates: Partial<Message>
  ): Promise<Message | null> {
    const { data, error } = await supabase
      .from("messages")
      .update(updates)
      .eq("id", messageId)
      .single();

    if (error) {
      console.error("Error creating message:", error);

      return null;
    }

    return data;
  }

  async deleteMessage(messageId: number): Promise<Message | null> {
    const { data, error } = await supabase
      .from("messages")
      .delete()
      .eq("id", messageId);

    if (error) {
      console.error("Error deleting message:", error);

      return null;
    }

    return data;
  }
}
