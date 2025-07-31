import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Discount Strategy Simulator | BUD Calculator",
  description: "Model how different discount levels affect your margins and break-even sales volume. Optimize your pricing strategy with our discount analysis tool.",
  keywords: "discount strategy calculator, cannabis pricing, marijuana business discounts, cannabis profit optimization, discount analysis tool",
  openGraph: {
    title: "Discount Strategy Simulator | BUD Calculator",
    description: "Model how different discount levels affect your margins and break-even sales volume. Optimize your pricing strategy with our discount analysis tool.",
    url: "https://budcalculator.com/calculators/discount-strategy",
    images: [
      {
        url: "https://budcalculator.com/assets/preview.png",
        width: 1200,
        height: 630,
        alt: "BUD Calculator – Discount Strategy Simulator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discount Strategy Simulator | BUD Calculator",
    description: "Model how different discount levels affect your margins and break-even sales volume. Optimize your pricing strategy with our discount analysis tool.",
    images: ["https://budcalculator.com/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/calculators/discount-strategy",
  },
};

export default function DiscountStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 