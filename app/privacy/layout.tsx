import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | BUD Calculator",
  description: "Privacy policy for BUD Calculator. Learn how we collect, use, and protect your data when using our cannabis business tools and calculators.",
  keywords: "privacy policy, BUD calculator privacy, cannabis tools privacy, data protection",
  openGraph: {
    title: "Privacy Policy | BUD Calculator",
    description: "Privacy policy for BUD Calculator. Learn how we collect, use, and protect your data when using our cannabis business tools and calculators.",
    url: "https://budcalculator.com/privacy",
    images: [
      {
        url: "https://budcalculator.com/assets/preview.png",
        width: 1200,
        height: 630,
        alt: "BUD Calculator - Privacy Policy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | BUD Calculator",
    description: "Privacy policy for BUD Calculator. Learn how we collect, use, and protect your data.",
    images: ["https://budcalculator.com/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 