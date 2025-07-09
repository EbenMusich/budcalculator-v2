import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Edibles Cost Per Unit Calculator | BUD Calculator",
  description: "Estimate your edible cost per unit using ingredient, labor, and packaging inputs. Perfect for gummies, chocolates, and tinctures. Calculate cost per mg of THC for accurate pricing.",
  keywords: "edibles cost calculator, cannabis edibles pricing, gummy cost calculator, THC cost per unit, edible production cost",
  openGraph: {
    title: "Edibles Cost Per Unit Calculator | BUD Calculator",
    description: "Estimate your edible cost per unit using ingredient, labor, and packaging inputs. Perfect for gummies, chocolates, and tinctures. Calculate cost per mg of THC for accurate pricing.",
    url: "https://budcalculator.com/pages/edibles-unit-cost",
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
    title: "Edibles Cost Per Unit Calculator | BUD Calculator",
    description: "Estimate cost per unit and cost per mg of THC using your production inputs.",
    images: ["/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/pages/edibles-unit-cost",
  },
};

export default function EdiblesUnitCostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 