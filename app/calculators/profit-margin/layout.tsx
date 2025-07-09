import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Profit Margin Calculator | BUD Calculator",
  description: "Calculate and optimize profit margins across product lines. Analyze revenue, costs, and pricing strategies to maximize profitability for your cannabis business operations.",
  keywords: "profit margin calculator, cannabis profit calculator, marijuana business profit, cannabis pricing strategy, profit optimization calculator",
  openGraph: {
    title: "Profit Margin Calculator | BUD Calculator",
    description: "Calculate and optimize profit margins across product lines. Analyze revenue, costs, and pricing strategies to maximize profitability for your cannabis business operations.",
    url: "https://budcalculator.com/pages/profit-margin",
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
    title: "Profit Margin Calculator | BUD Calculator",
    description: "Calculate and optimize profit margins across product lines. Analyze revenue, costs, and pricing strategies to maximize profitability for your cannabis business operations.",
    images: ["/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/pages/profit-margin",
  },
};

export default function ProfitMarginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 