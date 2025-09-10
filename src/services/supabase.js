import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kxeokphaawxfpmydcvad.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4ZW9rcGhhYXd4ZnBteWRjdmFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTg0MTQsImV4cCI6MjA3MzA5NDQxNH0.zpOuqjfmSkH6yLwQmkwBtsXsDUUh9AXMpll6mPQpyFI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
