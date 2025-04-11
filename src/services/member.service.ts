import { Member } from "../types/db/database.types";

import supabase from "./supabaseClient";

export async function getAllMembers(
  chatroomId: number
): Promise<Member[] | null> {
  const { data, error } = await supabase
    .from("members")
    .select("*")
    .eq("chatroom_id", chatroomId);

  if (error) {
    console.error("Error fetching members for chatroom:", error);
    return null;
  }

  return data;
}

export async function createMember(
  newMember: Partial<Member>
): Promise<Member | null> {
  const { data, error } = await supabase
    .from("members")
    .insert(newMember)
    .single();

  if (error) {
    console.error("Error creating Member:", error);

    return null;
  }

  return data;
}
