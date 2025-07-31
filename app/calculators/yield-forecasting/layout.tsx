import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Yield Forecasting Calculator | BUD Calculator",
  description: "Forecast cannabis yields based on strain, growing conditions, and historical data. Plan production capacity and optimize cultivation strategies with data-driven yield predictions.",
  keywords: "yield forecasting calculator, cannabis yield prediction, marijuana yield calculator, cannabis production planning, cultivation yield estimate",
  openGraph: {
    title: "Yield Forecasting Calculator | BUD Calculator",
    description: "Forecast cannabis yields based on strain, growing conditions, and historical data. Plan production capacity and optimize cultivation strategies with data-driven yield predictions.",
    url: "https://budcalculator.com/calculators/yield-forecasting",
    images: [
      {
        url: "https://budcalculator.com/assets/preview.png",
        width: 1200,
        height: 630,
        alt: "BUD Calculator – Cannabis Tools",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yield Forecasting Calculator | BUD Calculator",
    description: "Forecast cannabis yields based on strain, growing conditions, and historical data. Plan production capacity and optimize cultivation strategies.",
    images: ["https://budcalculator.com/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/calculators/yield-forecasting",
  },
};

export default function YieldForecastingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 