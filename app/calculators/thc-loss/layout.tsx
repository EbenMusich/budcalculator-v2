import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "THC Loss Calculator | BUD Calculator",
  description: "Estimate THC loss during processing and storage. Calculate potency degradation over time, temperature effects, and storage conditions to maintain product quality and accurate labeling.",
  keywords: "THC loss calculator, cannabis potency degradation, THC degradation calculator, cannabis storage calculator, potency loss calculator",
  openGraph: {
    title: "THC Loss Calculator | BUD Calculator",
    description: "Estimate THC loss during processing and storage. Calculate potency degradation over time, temperature effects, and storage conditions to maintain product quality and accurate labeling.",
    url: "https://budcalculator.com/pages/thc-loss",
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
    title: "THC Loss Calculator | BUD Calculator",
    description: "Estimate THC loss during processing and storage. Calculate potency degradation over time, temperature effects, and storage conditions to maintain product quality and accurate labeling.",
    images: ["/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/pages/thc-loss",
  },
};

export default function THCLossLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 