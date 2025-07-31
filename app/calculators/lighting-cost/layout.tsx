import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lighting Cost Calculator | BUD Calculator",
  description: "Calculate energy costs and efficiency for grow lighting systems. Compare LED, HPS, and other lighting options to optimize your cannabis cultivation energy expenses and ROI.",
  keywords: "lighting cost calculator, grow light energy cost, cannabis lighting efficiency, LED vs HPS cost, marijuana grow lighting",
  openGraph: {
    title: "Lighting Cost Calculator | BUD Calculator",
    description: "Calculate energy costs and efficiency for grow lighting systems. Compare LED, HPS, and other lighting options to optimize your cannabis cultivation energy expenses and ROI.",
    url: "https://budcalculator.com/pages/lighting-cost",
    images: [
      {
        url: "https://budcalculator.com/assets/preview.png",
        width: 1200,
        height: 630,
        alt: "BUD Calculator – Cannabis Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lighting Cost Calculator | BUD Calculator",
    description: "Calculate energy costs and efficiency for grow lighting systems. Compare LED, HPS, and other lighting options to optimize your cannabis cultivation energy expenses.",
    images: ["https://budcalculator.com/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/calculators/lighting-cost",
  },
};

export default function LightingCostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 