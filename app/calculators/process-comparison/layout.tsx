import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Process Comparison Calculator | BUD Calculator",
  description: "Compare different extraction methods for cost and efficiency. Analyze CO2, ethanol, hydrocarbon, and other extraction processes to choose the optimal method for your cannabis concentrates.",
  keywords: "extraction process comparison, cannabis extraction methods, CO2 vs ethanol extraction, extraction efficiency calculator, cannabis concentrate methods",
  openGraph: {
    title: "Process Comparison Calculator | BUD Calculator",
    description: "Compare different extraction methods for cost and efficiency. Analyze CO2, ethanol, hydrocarbon, and other extraction processes to choose the optimal method for your cannabis concentrates.",
    url: "https://budcalculator.com/pages/process-comparison",
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
    title: "Process Comparison Calculator | BUD Calculator",
    description: "Compare different extraction methods for cost and efficiency. Analyze CO2, ethanol, hydrocarbon, and other extraction processes to choose the optimal method for your cannabis concentrates.",
    images: ["https://budcalculator.com/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/calculators/process-comparison",
  },
};

export default function ProcessComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 