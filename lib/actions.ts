'use server'

export async function logContactMessage(name: string, email: string, subject: string, message: string) {
  // TODO: Implement actual contact form logging to Supabase
  // For now, return success response
  return {
    success: true,
    data: {
      message: 'Message received successfully.',
    },
  };
}
