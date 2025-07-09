import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Extraction Cost Calculator | BUD Calculator",
  description: "Calculate costs and efficiency of extraction processes. Compare CO2, ethanol, hydrocarbon, and other extraction methods to determine the most cost-effective approach for your cannabis concentrates.",
  keywords: "extraction cost calculator, cannabis extraction cost, concentrate production cost, CO2 extraction cost, ethanol extraction calculator",
  openGraph: {
    title: "Extraction Cost Calculator | BUD Calculator",
    description: "Calculate costs and efficiency of extraction processes. Compare CO2, ethanol, hydrocarbon, and other extraction methods to determine the most cost-effective approach for your cannabis concentrates.",
    url: "https://budcalculator.com/pages/extraction-cost",
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
    title: "Extraction Cost Calculator | BUD Calculator",
    description: "Calculate costs and efficiency of extraction processes. Compare CO2, ethanol, hydrocarbon, and other extraction methods to determine the most cost-effective approach.",
    images: ["/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/pages/extraction-cost",
  },
};

export default function ExtractionCostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 