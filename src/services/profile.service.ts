import { Profile } from "../types/db/database.types";
import supabase from "./supabaseClient";

export async function getAllMessages(): Promise<Profile[] | null> {
  const { data, error } = await supabase.from("profiles").select("*");

  if (error) {
    console.error("Error fetching all message:", error);

    return null;
  }

  return data;
}
