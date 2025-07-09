export async function logUsage(calculator: string, inputs: any, result: any) {
  const email =
    typeof localStorage !== 'undefined' && localStorage.getItem('bud_user_email') || 'anonymous';

  const referralId =
    typeof localStorage !== 'undefined' && localStorage.getItem('referral_id') || 'none';

  try {
    await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/calculator_logs`, {
      method: 'POST',
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
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