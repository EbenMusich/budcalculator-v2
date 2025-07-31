import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact BUD Calculator - Get Help with Cannabis Business Tools",
  description: "Get in touch with the BUD Calculator team for support, feature requests, or questions about our cannabis business calculators and tools.",
  keywords: "contact BUD calculator, cannabis business support, marijuana calculator help, cannabis tools contact",
  openGraph: {
    title: "Contact BUD Calculator - Get Help with Cannabis Business Tools",
    description: "Get in touch with the BUD Calculator team for support, feature requests, or questions about our cannabis business calculators and tools.",
    url: "https://budcalculator.com/contact",
    images: [
      {
        url: "https://budcalculator.com/assets/preview.png",
        width: 1200,
        height: 630,
        alt: "Contact BUD Calculator - Cannabis Business Support",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact BUD Calculator - Get Help with Cannabis Business Tools",
    description: "Get in touch with the BUD Calculator team for support and questions about our cannabis business tools.",
    images: ["https://budcalculator.com/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 