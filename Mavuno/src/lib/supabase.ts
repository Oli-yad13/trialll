import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types for the contacts table
export interface ContactFormData {
  full_name: string
  role?: string | null
  company_organization?: string | null
  email: string
  help_type?: string | null
  message?: string | null
}