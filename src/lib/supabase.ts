import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

// Server-side Supabase client with service role key
// Returns null if not configured (allows build to succeed without env vars)
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseServiceKey
    ? createClient(supabaseUrl, supabaseServiceKey)
    : null;

// Database types
export interface ContactSubmission {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  company_name: string;
  phone: string | null;
  company_type: string;
  message: string;
  referral_source: string | null;
  status: "new" | "contacted" | "closed";
}
