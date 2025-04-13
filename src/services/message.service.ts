import { Message } from "../types/db/database.types";
import supabase from "./supabaseClient";

export async function getAllMessages(): Promise<Message[] | null> {
  const { data, error } = await supabase.from("messages").select("*");

  if (error) {
    console.error("Error fetching all message:", error);

    return null;
  }

  return data;
}

export async function createMessage(
  newMessage: Partial<Message>
): Promise<Message | null> {
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

export async function updateMessage(
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

export async function deleteMessage(
  messageId: number
): Promise<Message | null> {
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
