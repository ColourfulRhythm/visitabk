import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Development = {
  id: string
  name: string
  location: string
  city: string
  gps_lat?: number
  gps_lng?: number
  developer: string
  description: string
  website?: string
  instagram?: string
  facebook?: string
  twitter?: string
  linkedin?: string
  youtube?: string
  email?: string
  phone?: string
  status: 'pre-launch' | 'selling' | 'under development' | 'completed'
  price_min?: number
  price_max?: number
  created_at: string
  updated_at: string
  images?: string[]
}

export type NewsUpdate = {
  id: string
  title: string
  content: string
  source: string
  url?: string
  development_id?: string
  published_at: string
  created_at: string
  tags: string[]
}
