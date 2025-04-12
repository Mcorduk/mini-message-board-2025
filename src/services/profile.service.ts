import { Profile } from "../types/db/database.types";
import supabase from "./supabaseClient";

export async function getAllProfiles(): Promise<Profile[] | null> {
  const { data, error } = await supabase.from("profiles").select("*");

  if (error) {
    console.error("Error fetching all message:", error);

    return null;
  }

  return data;
}

export async function getProfile(profileId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("profile_id", profileId)
    .single();

  if (error) {
    console.error("Error fetching all message:", error);

    return null;
  }

  return data;
}

export async function updateProfile(
  profileId: string,
  updates: Partial<Profile>
): Promise<Profile | null> {
  const { data, error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("id", profileId)
    .single();

  if (error) {
    console.error("Error updating Profile:", error);
    return null;
  }

  return data;
}

// Currently risky to use
// export async function deleteProfile(profileId: number): Promise<boolean> {
//   const { error } = await supabase.from("profiles").delete().eq("id", profileId);

//   if (error) {
//     console.error("Error deleting Profile:", error);
//     return false;
//   }

//   return true;
// }
