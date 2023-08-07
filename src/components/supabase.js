import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    "https://ksrfespgnipooggwknza.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzcmZlc3Bnbmlwb29nZ3drbnphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzODYwMTgsImV4cCI6MjAwNjk2MjAxOH0.F0OLxfZw04KBdjxR3ciDgG36bXGssdTcyrVZCPIoyQg"
)