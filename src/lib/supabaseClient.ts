import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://cjmhljphmaqnnyyvfcrz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqbWhsanBobWFxbm55eXZmY3J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxMzY2MjAsImV4cCI6MjA2MDcxMjYyMH0.9jBRYIauMkNc7ZuSynKDuL6xAEVn0mXVkGYoYrUnp68',
)
