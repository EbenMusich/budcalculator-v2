import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Solvent Recovery Calculator | BUD Calculator",
  description: "Calculate solvent recovery rates and replacement costs for cannabis extraction. Optimize solvent usage, track recovery efficiency, and reduce operational costs in your extraction processes.",
  keywords: "solvent recovery calculator, cannabis solvent recovery, extraction solvent cost, solvent efficiency calculator, cannabis extraction optimization",
  openGraph: {
    title: "Solvent Recovery Calculator | BUD Calculator",
    description: "Calculate solvent recovery rates and replacement costs for cannabis extraction. Optimize solvent usage, track recovery efficiency, and reduce operational costs in your extraction processes.",
    url: "https://budcalculator.com/pages/solvent-recovery",
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
    title: "Solvent Recovery Calculator | BUD Calculator",
    description: "Calculate solvent recovery rates and replacement costs for cannabis extraction. Optimize solvent usage, track recovery efficiency, and reduce operational costs in your extraction processes.",
    images: ["/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/pages/solvent-recovery",
  },
};

export default function SolventRecoveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 