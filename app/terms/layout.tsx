import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | BUD Calculator",
  description: "Terms of service and usage agreement for BUD Calculator. Learn about our policies, user responsibilities, and service terms for our cannabis business tools.",
  keywords: "terms of service, BUD calculator terms, cannabis calculator terms, marijuana business tools terms",
  openGraph: {
    title: "Terms of Service | BUD Calculator",
    description: "Terms of service and usage agreement for BUD Calculator. Learn about our policies, user responsibilities, and service terms for our cannabis business tools.",
    url: "https://budcalculator.com/terms",
    images: [
      {
        url: "https://budcalculator.com/assets/preview.png",
        width: 1200,
        height: 630,
        alt: "BUD Calculator - Terms of Service",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | BUD Calculator",
    description: "Terms of service and usage agreement for BUD Calculator. Learn about our policies and service terms.",
    images: ["https://budcalculator.com/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 