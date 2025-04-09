import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/db/database.types";

// Fetch these values from environment variables
const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "";

// Create and export the Supabase client
const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
