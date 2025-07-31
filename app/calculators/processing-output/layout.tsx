import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Processing Output Calculator | BUD Calculator",
  description: "Estimate processing output and material requirements for cannabis extraction and manufacturing. Calculate expected yields, material needs, and production capacity for efficient planning.",
  keywords: "processing output calculator, cannabis processing yield, extraction output calculator, manufacturing capacity, cannabis production planning",
  openGraph: {
    title: "Processing Output Calculator | BUD Calculator",
    description: "Estimate processing output and material requirements for cannabis extraction and manufacturing. Calculate expected yields, material needs, and production capacity for efficient planning.",
    url: "https://budcalculator.com/pages/processing-output",
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
    title: "Processing Output Calculator | BUD Calculator",
    description: "Estimate processing output and material requirements for cannabis extraction and manufacturing. Calculate expected yields, material needs, and production capacity for efficient planning.",
    images: ["https://budcalculator.com/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/calculators/processing-output",
  },
};

export default function ProcessingOutputLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 