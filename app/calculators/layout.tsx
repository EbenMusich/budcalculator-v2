import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: "Cannabis Business Calculators | BUD Calculator",
    template: "%s | BUD Calculator"
  },
  description: "Professional cannabis business calculators for cultivation, extraction, edibles, and business operations. Calculate costs, forecast yields, and optimize production with our free tools.",
  keywords: "cannabis calculator, marijuana business tools, cultivation calculator, extraction calculator, edibles calculator, cannabis cost calculator",
  openGraph: {
    title: "Cannabis Business Calculators | BUD Calculator",
    description: "Professional cannabis business calculators for cultivation, extraction, edibles, and business operations. Calculate costs, forecast yields, and optimize production.",
    url: "https://budcalculator.com/calculators",
    images: [
      {
        url: "https://budcalculator.com/assets/preview.png",
        width: 1200,
        height: 630,
        alt: "BUD Calculator - Cannabis Business Tools",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cannabis Business Calculators | BUD Calculator",
    description: "Professional cannabis business calculators for cultivation, extraction, edibles, and business operations.",
    images: ["https://budcalculator.com/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/calculators",
  },
};

export default function CalculatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 