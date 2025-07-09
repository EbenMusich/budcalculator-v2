import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Break-even Calculator | BUD Calculator",
  description: "Determine your break-even point and optimal pricing strategy for cannabis products. Calculate when your business becomes profitable with fixed costs, variable costs, and revenue analysis.",
  keywords: "break-even calculator, cannabis pricing, marijuana business profitability, cannabis break-even point, cannabis business planning",
  openGraph: {
    title: "Break-even Calculator | BUD Calculator",
    description: "Determine your break-even point and optimal pricing strategy for cannabis products. Calculate when your business becomes profitable with fixed costs, variable costs, and revenue analysis.",
    url: "https://budcalculator.com/pages/break-even",
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
    title: "Break-even Calculator | BUD Calculator",
    description: "Determine your break-even point and optimal pricing strategy for cannabis products. Calculate when your business becomes profitable.",
    images: ["/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/pages/break-even",
  },
};

export default function BreakEvenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 