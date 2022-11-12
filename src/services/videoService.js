import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://smdoispptwkghywnauai.supabase.co";
const PUBLIC_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtZG9pc3BwdHdrZ2h5d25hdWFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNjI3MzUsImV4cCI6MTk4MzgzODczNX0.2lZXr8TFGFZ5fVMLdcIIxnm85PfeNHi3imahqyHO7Kk";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}