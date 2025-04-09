export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      chatgroup_members: {
        Row: {
          chatgroup_id: number | null;
          created_at: string;
          id: number;
          is_muted: boolean | null;
          joined_at: string | null;
          last_seen_at: string | null;
          role: number | null;
          status: number | null;
          updated_at: string | null;
          user_id: number | null;
        };
        Insert: {
          chatgroup_id?: number | null;
          created_at?: string;
          id?: number;
          is_muted?: boolean | null;
          joined_at?: string | null;
          last_seen_at?: string | null;
          role?: number | null;
          status?: number | null;
          updated_at?: string | null;
          user_id?: number | null;
        };
        Update: {
          chatgroup_id?: number | null;
          created_at?: string;
          id?: number;
          is_muted?: boolean | null;
          joined_at?: string | null;
          last_seen_at?: string | null;
          role?: number | null;
          status?: number | null;
          updated_at?: string | null;
          user_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "chatgroup_members_chatgroup_id_fkey";
            columns: ["chatgroup_id"];
            isOneToOne: true;
            referencedRelation: "chatroom";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "chatgroup_members_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      chatroom: {
        Row: {
          admins: string | null;
          avatar: string | null;
          created_at: string;
          description: string | null;
          id: number;
          invite_code: string | null;
          is_private: boolean | null;
          name: string | null;
          status: string | null;
          updated_at: string | null;
        };
        Insert: {
          admins?: string | null;
          avatar?: string | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          invite_code?: string | null;
          is_private?: boolean | null;
          name?: string | null;
          status?: string | null;
          updated_at?: string | null;
        };
        Update: {
          admins?: string | null;
          avatar?: string | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          invite_code?: string | null;
          is_private?: boolean | null;
          name?: string | null;
          status?: string | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      messages: {
        Row: {
          body: string | null;
          created_at: string;
          id: number;
          isRead: boolean | null;
          status_id: number | null;
          updated_at: string | null;
          user_id: number | null;
        };
        Insert: {
          body?: string | null;
          created_at?: string;
          id?: number;
          isRead?: boolean | null;
          status_id?: number | null;
          updated_at?: string | null;
          user_id?: number | null;
        };
        Update: {
          body?: string | null;
          created_at?: string;
          id?: number;
          isRead?: boolean | null;
          status_id?: number | null;
          updated_at?: string | null;
          user_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "messages_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      users: {
        Row: {
          created_at: string;
          id: number;
          name: string | null;
          updated_at: string | null;
          user_status: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name?: string | null;
          updated_at?: string | null;
          user_status?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string | null;
          updated_at?: string | null;
          user_status?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DefaultSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;

export type Chatroom = Database["public"]["Tables"]["chatroom"]["Row"];
export type User = Database["public"]["Tables"]["users"]["Row"];
export type Member = Database["public"]["Tables"]["chatgroup_members"]["Row"];
export type Message = Database["public"]["Tables"]["messages"]["Row"];
