import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Edibles Unit Cost Calculator | BUD Calculator",
  description: "Calculate the true cost per unit for cannabis edibles. Factor in ingredients, labor, packaging, and overhead to determine accurate pricing for your edible products.",
  keywords: "edibles cost calculator, cannabis edibles pricing, marijuana edibles cost, edible unit cost calculator, cannabis edibles production cost",
  openGraph: {
    title: "Edibles Unit Cost Calculator | BUD Calculator",
    description: "Calculate the true cost per unit for cannabis edibles. Factor in ingredients, labor, packaging, and overhead to determine accurate pricing for your edible products.",
    url: "https://budcalculator.com/calculators/edibles-unit-cost",
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
    title: "Edibles Unit Cost Calculator | BUD Calculator",
    description: "Calculate the true cost per unit for cannabis edibles. Factor in ingredients, labor, packaging, and overhead to determine accurate pricing.",
    images: ["https://budcalculator.com/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/calculators/edibles-unit-cost",
  },
};

export default function EdiblesUnitCostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 