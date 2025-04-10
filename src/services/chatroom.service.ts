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

export async function createChatroom(
  newChatroom: Partial<Chatroom>
): Promise<Chatroom | null> {
  const { data, error } = await supabase
    .from("chatrooms")
    .insert(newChatroom)
    .single();

  if (error) {
    console.error("Error creating Chatrooms:", error);

    return null;
  }

  return data;
}
