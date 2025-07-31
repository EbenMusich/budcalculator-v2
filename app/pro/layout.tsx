import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "BUD Calculator Pro - Advanced Cannabis Business Analytics | Coming Soon",
  description: "Take your cannabis business to the next level with BUD Calculator Pro. Advanced analytics, custom templates, and professional-grade tools for serious cannabis operators.",
  keywords: "cannabis business analytics, marijuana business software, cannabis pro tools, cannabis data tracking, cannabis business intelligence",
  openGraph: {
    title: "BUD Calculator Pro - Advanced Cannabis Business Analytics | Coming Soon",
    description: "Take your cannabis business to the next level with BUD Calculator Pro. Advanced analytics, custom templates, and professional-grade tools for serious cannabis operators.",
    url: "https://budcalculator.com/pro",
    images: [
      {
        url: "https://budcalculator.com/assets/preview.png",
        width: 1200,
        height: 630,
        alt: "BUD Calculator Pro - Advanced Cannabis Business Tools",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BUD Calculator Pro - Advanced Cannabis Business Analytics | Coming Soon",
    description: "Take your cannabis business to the next level with advanced analytics and professional-grade tools.",
    images: ["https://budcalculator.com/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/pro",
  },
};

export default function ProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 