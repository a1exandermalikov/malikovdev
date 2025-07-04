import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://riwjhuafhszimsauswdo.supabase.co'
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpd2podWFmaHN6aW1zYXVzd2RvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDA0MDEzOCwiZXhwIjoyMDY1NjE2MTM4fQ.qnSIlY72FxG9XIu-i8NBKdLu5o31GAeHrqiwsEtB49c' // вставь service_role из Supabase
export const supabase = createClient(supabaseUrl, supabaseKey)
