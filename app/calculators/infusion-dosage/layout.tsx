import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Infusion Dosage Calculator | BUD Calculator",
  description: "Calculate precise dosages for infused products. Determine THC/CBD content per serving, total potency, and accurate dosing for edibles, tinctures, and other cannabis-infused products.",
  keywords: "infusion dosage calculator, cannabis dosage calculator, THC dosage calculator, edibles dosage, cannabis infusion calculator",
  openGraph: {
    title: "Infusion Dosage Calculator | BUD Calculator",
    description: "Calculate precise dosages for infused products. Determine THC/CBD content per serving, total potency, and accurate dosing for edibles, tinctures, and other cannabis-infused products.",
    url: "https://budcalculator.com/pages/infusion-dosage",
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
    title: "Infusion Dosage Calculator | BUD Calculator",
    description: "Calculate precise dosages for infused products. Determine THC/CBD content per serving, total potency, and accurate dosing for edibles, tinctures, and other cannabis-infused products.",
    images: ["/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/pages/infusion-dosage",
  },
};

export default function InfusionDosageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 