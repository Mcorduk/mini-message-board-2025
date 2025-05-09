import { Member } from "../types/db/database.types";
import supabase from "./supabaseClient";

export class MemberService {
  async getAllMembers(chatroomId: number): Promise<Member[] | null> {
    const { data, error } = await supabase
      .from("members")
      .select("*")
      .eq("id", chatroomId);

    if (error) {
      console.error("Error fetching members for chatroom:", error);
      return null;
    }

    return data;
  }

  async getProfileMemberships(profileId: string) {
    const { data, error } = await supabase
      .from("members")
      .select("*")
      .eq("profile_id", profileId);

    if (error) {
      console.error("Error fetching members for chatroom:", error);
      return null;
    }

    return data;
  }

  async createMember(newMember: Partial<Member>): Promise<Member | null> {
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

  async updateMember(
    memberId: number,
    updates: Partial<Member>
  ): Promise<Member | null> {
    const { data, error } = await supabase
      .from("members")
      .update(updates)
      .eq("id", memberId)
      .single();

    if (error) {
      console.error("Error updating Member:", error);
      return null;
    }

    return data;
  }

  async deleteMember(memberId: number): Promise<boolean> {
    const { error } = await supabase
      .from("members")
      .delete()
      .eq("id", memberId);

    if (error) {
      console.error("Error deleting Member:", error);
      return false;
    }

    return true;
  }
}
