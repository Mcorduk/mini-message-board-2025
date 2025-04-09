import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  db_url?: string;
  db_secret?: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  db_url: process.env.SUPABASE_URL,
  db_secret: process.env.SUPABASE_SECRET,
};
