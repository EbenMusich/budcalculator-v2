import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Labor Cost per Plant Calculator | BUD Calculator",
  description: "Track and optimize labor costs across cultivation cycles. Calculate labor expenses per plant, per square foot, and per harvest to improve operational efficiency and profitability.",
  keywords: "labor cost calculator, cannabis labor cost, marijuana cultivation labor, plant labor cost, cannabis workforce efficiency",
  openGraph: {
    title: "Labor Cost per Plant Calculator | BUD Calculator",
    description: "Track and optimize labor costs across cultivation cycles. Calculate labor expenses per plant, per square foot, and per harvest to improve operational efficiency and profitability.",
    url: "https://budcalculator.com/pages/labor-cost-plant",
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
    title: "Labor Cost per Plant Calculator | BUD Calculator",
    description: "Track and optimize labor costs across cultivation cycles. Calculate labor expenses per plant, per square foot, and per harvest to improve operational efficiency.",
    images: ["/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/pages/labor-cost-plant",
  },
};

export default function LaborCostPlantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 