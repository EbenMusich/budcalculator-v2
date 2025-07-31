import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Profit Margin Calculator | BUD Calculator",
  description: "Calculate profit margins for cannabis products. Analyze costs, pricing, and revenue to optimize your pricing strategy and maximize profitability across your product line.",
  keywords: "profit margin calculator, cannabis profit calculator, marijuana pricing, cannabis business profitability, cannabis pricing strategy",
  openGraph: {
    title: "Profit Margin Calculator | BUD Calculator",
    description: "Calculate profit margins for cannabis products. Analyze costs, pricing, and revenue to optimize your pricing strategy and maximize profitability across your product line.",
    url: "https://budcalculator.com/calculators/profit-margin",
    images: [
      {
        url: "https://budcalculator.com/assets/preview.png",
        width: 1200,
        height: 630,
        alt: "BUD Calculator – Cannabis Tools",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Profit Margin Calculator | BUD Calculator",
    description: "Calculate profit margins for cannabis products. Analyze costs, pricing, and revenue to optimize your pricing strategy.",
    images: ["https://budcalculator.com/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/calculators/profit-margin",
  },
};

export default function ProfitMarginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 