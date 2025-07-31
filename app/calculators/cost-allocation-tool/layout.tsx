import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cost Allocation Calculator | BUD Calculator",
  description: "Allocate overhead costs across different products and processes. Distribute facility costs, labor, utilities, and other expenses accurately across your cannabis product lines for better pricing decisions.",
  keywords: "cost allocation calculator, cannabis overhead allocation, marijuana cost distribution, cannabis accounting calculator, overhead cost calculator",
  openGraph: {
    title: "Cost Allocation Calculator | BUD Calculator",
    description: "Allocate overhead costs across different products and processes. Distribute facility costs, labor, utilities, and other expenses accurately across your cannabis product lines for better pricing decisions.",
    url: "https://budcalculator.com/pages/cost-allocation-tool",
    images: [
      {
        url: "/assets/preview.png",
        width: 1200,
        height: 630,
        alt: "BUD Calculator – Cannabis Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost Allocation Calculator | BUD Calculator",
    description: "Allocate overhead costs across different products and processes. Distribute facility costs, labor, utilities, and other expenses accurately across your cannabis product lines for better pricing decisions.",
    images: ["/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/calculators/cost-allocation-tool",
  },
};

export default function CostAllocationToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 