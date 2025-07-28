/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      // Legacy .html redirects - redirect to clean URLs
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      // Legacy /pages/ redirects from Version 1 sitemap
      {
        source: '/pages/break-even.html',
        destination: '/calculators/break-even',
        permanent: true,
      },
      {
        source: '/pages/production-goal-planner.html',
        destination: '/production-goal-planner',
        permanent: true,
      },
      {
        source: '/pages/cost-per-unit.html',
        destination: '/calculators/cost-per-unit',
        permanent: true,
      },
      {
        source: '/pages/extraction-cost.html',
        destination: '/calculators/extraction-cost',
        permanent: true,
      },
      {
        source: '/pages/gummy-recipe.html',
        destination: '/calculators/gummy-recipe',
        permanent: true,
      },
      {
        source: '/pages/infusion-dosage.html',
        destination: '/calculators/infusion-dosage',
        permanent: true,
      },
      {
        source: '/pages/labor-cost-plant.html',
        destination: '/calculators/labor-cost-plant',
        permanent: true,
      },
      {
        source: '/pages/lighting-cost.html',
        destination: '/calculators/lighting-cost',
        permanent: true,
      },
      {
        source: '/pages/process-comparison.html',
        destination: '/calculators/process-comparison',
        permanent: true,
      },
      {
        source: '/pages/processing-output.html',
        destination: '/calculators/processing-output',
        permanent: true,
      },
      {
        source: '/pages/profit-margin.html',
        destination: '/calculators/profit-margin',
        permanent: true,
      },
      {
        source: '/pages/solvent-recovery.html',
        destination: '/calculators/solvent-recovery',
        permanent: true,
      },
      {
        source: '/pages/sop-time-tracker.html',
        destination: '/calculators/sop-time-tracker',
        permanent: true,
      },
      {
        source: '/pages/thc-loss.html',
        destination: '/calculators/thc-loss',
        permanent: true,
      },
      {
        source: '/pages/yield-forecasting.html',
        destination: '/yield-forecasting',
        permanent: true,
      },
      {
        source: '/pages/decarboxylation-calculator.html',
        destination: '/calculators/decarboxylation-calculator',
        permanent: true,
      },
      {
        source: '/pages/edibles-unit-cost.html',
        destination: '/calculators/edibles-unit-cost',
        permanent: true,
      },
      {
        source: '/pages/cost-allocation-tool.html',
        destination: '/calculators/cost-allocation-tool',
        permanent: true,
      },
      // Explicit calculator redirects
      {
        source: '/calculators/break-even.html',
        destination: '/calculators/break-even',
        permanent: true,
      },
      {
        source: '/calculators/bundle-builder.html',
        destination: '/calculators/bundle-builder',
        permanent: true,
      },
      {
        source: '/calculators/cost-allocation-tool.html',
        destination: '/calculators/cost-allocation-tool',
        permanent: true,
      },
      {
        source: '/calculators/cost-per-unit.html',
        destination: '/calculators/cost-per-unit',
        permanent: true,
      },
      {
        source: '/calculators/decarboxylation-calc.html',
        destination: '/calculators/decarboxylation-calc',
        permanent: true,
      },
      {
        source: '/calculators/discount-strategy.html',
        destination: '/calculators/discount-strategy',
        permanent: true,
      },
      {
        source: '/calculators/edibles-unit-cost.html',
        destination: '/calculators/edibles-unit-cost',
        permanent: true,
      },
      {
        source: '/calculators/extraction-cost.html',
        destination: '/calculators/extraction-cost',
        permanent: true,
      },
      {
        source: '/calculators/gummy-recipe.html',
        destination: '/calculators/gummy-recipe',
        permanent: true,
      },
      {
        source: '/calculators/infusion-dosage.html',
        destination: '/calculators/infusion-dosage',
        permanent: true,
      },
      {
        source: '/calculators/labor-cost-plant.html',
        destination: '/calculators/labor-cost-plant',
        permanent: true,
      },
      {
        source: '/calculators/lighting-cost.html',
        destination: '/calculators/lighting-cost',
        permanent: true,
      },
      {
        source: '/calculators/process-comparison.html',
        destination: '/calculators/process-comparison',
        permanent: true,
      },
      {
        source: '/calculators/processing-output.html',
        destination: '/calculators/processing-output',
        permanent: true,
      },
      {
        source: '/calculators/profit-margin.html',
        destination: '/calculators/profit-margin',
        permanent: true,
      },
      {
        source: '/calculators/profit-per-menu-slot.html',
        destination: '/calculators/profit-per-menu-slot',
        permanent: true,
      },
      {
        source: '/calculators/solvent-recovery.html',
        destination: '/calculators/solvent-recovery',
        permanent: true,
      },
      {
        source: '/calculators/sop-time-tracker.html',
        destination: '/calculators/sop-time-tracker',
        permanent: true,
      },
      {
        source: '/calculators/thc-loss.html',
        destination: '/calculators/thc-loss',
        permanent: true,
      },
      {
        source: '/calculators/production-goal-planner.html',
        destination: '/production-goal-planner',
        permanent: true,
      },
      {
        source: '/calculators/yield-forecasting.html',
        destination: '/yield-forecasting',
        permanent: true,
      },
      // Catch-all redirect for any other .html pages
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

