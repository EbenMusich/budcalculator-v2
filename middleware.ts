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

  // ✅ Handle .html redirects
  if (request.nextUrl.pathname.endsWith('.html')) {
    const pathname = request.nextUrl.pathname
    const redirectMap: { [key: string]: string } = {
      '/break-even.html': '/calculators/break-even',
      '/cost-allocation-tool.html': '/calculators/cost-allocation-tool',
      '/cost-per-unit.html': '/calculators/cost-per-unit',
      '/decarboxylation-calculator.html': '/calculators/decarboxylation-calculator',
      '/edibles-unit-cost.html': '/calculators/edibles-unit-cost',
      '/extraction-cost.html': '/calculators/extraction-cost',
      '/gummy-recipe.html': '/calculators/gummy-recipe',
      '/infusion-dosage.html': '/calculators/infusion-dosage',
      '/labor-cost-plant.html': '/calculators/labor-cost-plant',
      '/lighting-cost.html': '/calculators/lighting-cost',
      '/process-comparison.html': '/calculators/process-comparison',
      '/processing-output.html': '/calculators/processing-output',
      '/production-goal-planner.html': '/calculators/production-goal-planner',
      '/profit-margin.html': '/calculators/profit-margin',
      '/solvent-recovery.html': '/calculators/solvent-recovery',
      '/sop-time-tracker.html': '/calculators/sop-time-tracker',
      '/thc-loss.html': '/calculators/thc-loss',
      '/yield-forecasting.html': '/calculators/yield-forecasting',
      '/bundle-builder.html': '/calculators/bundle-builder',
      '/discount-strategy.html': '/calculators/discount-strategy',
      '/profit-per-menu-slot.html': '/calculators/profit-per-menu-slot',
      '/calculators.html': '/calculators',
      '/contact.html': '/contact',
      '/resources.html': '/resources',
      '/index.html': '/',
      '/age-gate.html': '/age-gate',
      '/terms.html': '/terms',
      '/privacy.html': '/privacy'
    }

    const redirectPath = redirectMap[pathname]
    if (redirectPath) {
      const url = request.nextUrl.clone()
      url.pathname = redirectPath
      return NextResponse.redirect(url, 301)
    }
  }

  // ✅ Allow if cookie shows age verified
  if (ageVerified) {
    return NextResponse.next()
  }

  // ✅ Don't redirect if already on age gate
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
