import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Decarboxylation Calculator | BUD Calculator",
  description: "Calculate optimal time and temperature for decarboxylation. Convert THCA to THC and CBDA to CBD with precise temperature and duration settings for maximum potency in edibles and extracts.",
  keywords: "decarboxylation calculator, THCA to THC conversion, cannabis decarb, marijuana decarboxylation, edibles decarb calculator",
  openGraph: {
    title: "Decarboxylation Calculator | BUD Calculator",
    description: "Calculate optimal time and temperature for decarboxylation. Convert THCA to THC and CBDA to CBD with precise temperature and duration settings for maximum potency in edibles and extracts.",
    url: "https://budcalculator.com/pages/decarboxylation-calculator",
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
    title: "Decarboxylation Calculator | BUD Calculator",
    description: "Calculate optimal time and temperature for decarboxylation. Convert THCA to THC and CBDA to CBD with precise temperature and duration settings for maximum potency.",
    images: ["https://budcalculator.com/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/calculators/decarboxylation-calculator",
  },
};

export default function DecarboxylationCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 