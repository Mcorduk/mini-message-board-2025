import { Chatroom } from "../types/db/database.types";

import supabase from "./supabaseClient";

export async function getAllChatrooms(): Promise<Chatroom[] | null> {
  const { data, error } = await supabase.from("chatrooms").select("*");

  if (error) {
    console.error("Error fetching all Chatroom:", error);

    return null;
  }

  return data;
}

export async function getChatroom(
  chatroomId: number
): Promise<Chatroom | null> {
  const { data, error } = await supabase
    .from("chatrooms")
    .select("*")
    .eq("id", chatroomId)
    .single();

  if (error) {
    console.error("Error fetching the chatroom:", error);

    return null;
  }

  return data;
}

export async function createChatroom(
  newChatroom: Partial<Chatroom>
): Promise<Chatroom | null> {
  const { data, error } = await supabase
    .from("chatrooms")
    .insert(newChatroom)
    .single();

  if (error) {
    console.error("Error creating chatroom:", error);

    return null;
  }

  return data;
}

export async function updateChatroom(
  chatroomId: number,
  updates: Partial<Chatroom>
): Promise<Chatroom | null> {
  const { data, error } = await supabase
    .from("chatrooms")
    .update(updates)
    .eq("id", chatroomId)
    .single();

  if (error) {
    console.error("Error creating chatroom:", error);

    return null;
  }

  return data;
}

export async function deleteChatroom(
  chatroomId: number
): Promise<Chatroom | null> {
  const { data, error } = await supabase
    .from("chatrooms")
    .delete()
    .eq("id", chatroomId);

  if (error) {
    console.error("Error deleting chatroom:", error);

    return null;
  }

  return data;
}
