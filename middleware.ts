import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const ageVerified = request.cookies.get('ageVerified')?.value === 'true'

  if (!ageVerified) {
    const url = request.nextUrl.clone()
    url.pathname = '/age-gate'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - age-gate (the age gate page itself)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|age-gate).*)',
  ],
} 