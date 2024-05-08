
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ikyrmbusufmbnbimnykw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlreXJtYnVzdWZtYm5iaW1ueWt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxMTc3MjgsImV4cCI6MjAzMDY5MzcyOH0.PHCtLhXUoBksS-Z1RwoXermDbFpZxIxABya7fQGCuDc'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase