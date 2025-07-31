import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cannabis Business Resources & Industry Guides | BUD Calculator",
  description: "Comprehensive cannabis business resources including industry guides, production templates, cost analysis tools, and recommended software for cultivators, manufacturers, and retailers.",
  keywords: "cannabis business resources, marijuana industry guides, cannabis production templates, cannabis software tools, cannabis compliance services",
  openGraph: {
    title: "Cannabis Business Resources & Industry Guides | BUD Calculator",
    description: "Comprehensive cannabis business resources including industry guides, production templates, cost analysis tools, and recommended software for cultivators, manufacturers, and retailers.",
    url: "https://budcalculator.com/resources",
    images: [
      {
        url: "https://budcalculator.com/assets/preview.png",
        width: 1200,
        height: 630,
        alt: "BUD Calculator - Cannabis Business Resources",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cannabis Business Resources & Industry Guides | BUD Calculator",
    description: "Comprehensive cannabis business resources including industry guides, production templates, and recommended software.",
    images: ["https://budcalculator.com/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/resources",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 