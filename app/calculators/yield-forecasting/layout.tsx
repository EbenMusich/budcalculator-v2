import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Yield Forecasting Calculator | BUD Calculator",
  description: "Predict harvest yields based on historical data and growing conditions. Use plant count, average yield per plant, and environmental factors to forecast your cannabis production output.",
  keywords: "yield forecasting, cannabis yield calculator, harvest prediction, marijuana yield estimation, cannabis production planning",
  openGraph: {
    title: "Yield Forecasting Calculator | BUD Calculator",
    description: "Predict harvest yields based on historical data and growing conditions. Use plant count, average yield per plant, and environmental factors to forecast your cannabis production output.",
    url: "https://budcalculator.com/pages/yield-forecasting",
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
    title: "Yield Forecasting Calculator | BUD Calculator",
    description: "Predict harvest yields based on historical data and growing conditions. Use plant count, average yield per plant, and environmental factors to forecast your cannabis production output.",
    images: ["/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/pages/yield-forecasting",
  },
};

export default function YieldForecastingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 