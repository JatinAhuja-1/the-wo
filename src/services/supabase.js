import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cbabjjkxxqrwjsqernpf.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiYWJqamt4eHFyd2pzcWVybnBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwNjEyOTYsImV4cCI6MjA0MzYzNzI5Nn0.Zl2irUQXSwgUI-fP3kLt0rwusB3mYcbwAjxy7L_p8zw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
export { supabaseUrl };
