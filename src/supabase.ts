import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase Project URL and Anon Public Key from your Supabase Dashboard Settings -> API
const supabaseUrl = 'https://lgeyujmfwifmijmkbyvj.supabase.co';
const supabaseAnonKey = 'sb_publishable_HvOmCvzoiK_qgpKCVgRffQ_lAfhDlFl';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);