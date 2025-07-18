import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: "Profit per Menu Slot Calculator | BUD Calculator",
  description: "Calculate the profitability of your menu items based on shelf space utilization. Optimize your product mix by analyzing margin velocity and daily profit per shelf slot.",
  keywords: "profit per menu slot calculator, cannabis menu optimization, shelf space profitability, margin velocity calculator, cannabis business tools",
  openGraph: {
    title: "Profit per Menu Slot Calculator | BUD Calculator",
    description: "Calculate the profitability of your menu items based on shelf space utilization. Optimize your product mix by analyzing margin velocity and daily profit per shelf slot.",
    url: "https://budcalculator.com/calculators/profit-per-menu-slot",
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
    title: "Profit per Menu Slot Calculator | BUD Calculator",
    description: "Calculate the profitability of your menu items based on shelf space utilization. Optimize your product mix by analyzing margin velocity and daily profit per shelf slot.",
    images: ["/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/calculators/profit-per-menu-slot",
  },
};

export default function ProfitPerMenuSlotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 