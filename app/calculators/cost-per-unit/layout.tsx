import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cost Per Unit Calculator | BUD Calculator",
  description: "Calculate your true cost per gram and pound of cannabis flower. Input labor, rent, utilities, nutrients, and supplies to determine accurate production costs for better pricing decisions.",
  keywords: "cannabis cost calculator, cost per gram, cost per pound, cannabis pricing, cultivation costs, marijuana production cost",
  openGraph: {
    title: "Cost Per Unit Calculator | BUD Calculator",
    description: "Calculate your true cost per gram and pound of cannabis flower. Input labor, rent, utilities, nutrients, and supplies to determine accurate production costs for better pricing decisions.",
    url: "https://budcalculator.com/calculators/cost-per-unit",
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
    title: "Cost Per Unit Calculator | BUD Calculator",
    description: "Calculate your true cost per gram and pound of cannabis flower. Input labor, rent, utilities, nutrients, and supplies to determine accurate production costs.",
    images: ["https://budcalculator.com/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/calculators/cost-per-unit",
  },
};

export default function CostPerUnitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 