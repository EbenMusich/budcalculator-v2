/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      // Root level redirects
      { source: '/index.html', destination: '/', permanent: true },
      
      // Calculator page redirects
      { source: '/pages/break-even.html', destination: '/calculators/break-even', permanent: true },
      { source: '/pages/production-goal-planner.html', destination: '/calculators/production-goal-planner', permanent: true },
      { source: '/pages/cost-per-unit.html', destination: '/calculators/cost-per-unit', permanent: true },
      { source: '/pages/extraction-cost.html', destination: '/calculators/extraction-cost', permanent: true },
      { source: '/pages/gummy-recipe.html', destination: '/calculators/gummy-recipe', permanent: true },
      { source: '/pages/infusion-dosage.html', destination: '/calculators/infusion-dosage', permanent: true },
      { source: '/pages/labor-cost-plant.html', destination: '/calculators/labor-cost-plant', permanent: true },
      { source: '/pages/lighting-cost.html', destination: '/calculators/lighting-cost', permanent: true },
      { source: '/pages/process-comparison.html', destination: '/calculators/process-comparison', permanent: true },
      { source: '/pages/processing-output.html', destination: '/calculators/processing-output', permanent: true },
      { source: '/pages/profit-margin.html', destination: '/calculators/profit-margin', permanent: true },
      { source: '/pages/solvent-recovery.html', destination: '/calculators/solvent-recovery', permanent: true },
      { source: '/pages/sop-time-tracker.html', destination: '/calculators/sop-time-tracker', permanent: true },
      { source: '/pages/thc-loss.html', destination: '/calculators/thc-loss', permanent: true },
      { source: '/pages/yield-forecasting.html', destination: '/calculators/yield-forecasting', permanent: true },
      { source: '/pages/decarboxylation-calculator.html', destination: '/calculators/decarboxylation-calculator', permanent: true },
      { source: '/pages/edibles-unit-cost.html', destination: '/calculators/edibles-unit-cost', permanent: true },
      { source: '/pages/cost-allocation-tool.html', destination: '/calculators/cost-allocation-tool', permanent: true },
      
      // Additional redirects for URLs found in Google Search Console
      { source: '/pages/yield-forecasting', destination: '/calculators/yield-forecasting', permanent: true },
      { source: '/pages/extraction-cost', destination: '/calculators/extraction-cost', permanent: true },
      { source: '/pages/edibles-unit-cost', destination: '/calculators/edibles-unit-cost', permanent: true },
      { source: '/resources/industry-guides/cost-per-pound', destination: '/resources/true-cost-per-pound', permanent: true },
    ];
  },
};

module.exports = nextConfig;

