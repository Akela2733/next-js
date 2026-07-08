import { createClient } from "@supabase/supabase-js";

// Note: Supabase client disabled for frontend-only app
// Can be re-enabled when backend is ready
export const supabase = {
  storage: {
    from: () => ({
      upload: async () => ({ data: { path: "" } }),
    }),
  },
} as any;