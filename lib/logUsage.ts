export async function logUsage(calculator: string, inputs: any, result: any) {
  const email =
    typeof localStorage !== 'undefined' && localStorage.getItem('bud_user_email') || 'anonymous';

  const referralId =
    typeof localStorage !== 'undefined' && localStorage.getItem('referral_id') || 'none';

  // Use hardcoded Supabase credentials for static deployment
  const supabaseUrl = "https://gvgucgahetbcpdwfivif.supabase.co";
  const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2Z3VjZ2FoZXRiY3Bkd2ZpdmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NzY4MjYsImV4cCI6MjA2NjM1MjgyNn0.Oaca0OnRXR86xbRvm1j6YWUBoPR5Tk4N_qMiuauUC5U";

  try {
    await fetch(`${supabaseUrl}/rest/v1/calculator_logs`, {
      method: 'POST',
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        referral_id: referralId,
        calculator,
        inputs,
        result,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (error: any) {
    console.error('Logging failed:', error.message);
  }
}