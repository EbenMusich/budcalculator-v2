import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gummy Recipe Calculator | BUD Calculator",
  description: "Calculate ingredients and dosages for gummy production. Determine precise THC/CBD content, ingredient ratios, and batch sizes for consistent, accurately dosed cannabis gummies.",
  keywords: "gummy recipe calculator, cannabis gummy calculator, THC gummy recipe, cannabis edibles recipe, gummy dosage calculator",
  openGraph: {
    title: "Gummy Recipe Calculator | BUD Calculator",
    description: "Calculate ingredients and dosages for gummy production. Determine precise THC/CBD content, ingredient ratios, and batch sizes for consistent, accurately dosed cannabis gummies.",
    url: "https://budcalculator.com/pages/gummy-recipe",
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
    title: "Gummy Recipe Calculator | BUD Calculator",
    description: "Calculate ingredients and dosages for gummy production. Determine precise THC/CBD content, ingredient ratios, and batch sizes for consistent, accurately dosed cannabis gummies.",
    images: ["/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/pages/gummy-recipe",
  },
};

export default function GummyRecipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 