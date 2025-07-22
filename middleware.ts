import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''
  const ageVerified = request.cookies.get('ageVerified')?.value === 'true'

  // ✅ Allow known crawlers to skip age gate
  const isBot = /googlebot|bingbot|slurp|duckduckbot|yahoo|facebookexternalhit/i.test(userAgent)
  if (isBot) {
    return NextResponse.next()
  }

  // ✅ Skip age gate for .html files
  if (request.nextUrl.pathname.endsWith('.html')) {
    return NextResponse.next()
  }

  // ✅ Allow if cookie shows age verified
  if (ageVerified) {
    return NextResponse.next()
  }

  // ✅ Don’t redirect if already on age gate
  if (request.nextUrl.pathname === '/age-gate') {
    return NextResponse.next()
  }

  // 🔁 Otherwise, redirect to age gate
  const url = request.nextUrl.clone()
  url.pathname = '/age-gate'
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|age-gate).*)',
  ],
}
