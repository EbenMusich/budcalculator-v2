import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Production Goal Calculator | BUD Calculator",
  description: "Plan production targets and resource requirements. Set realistic production goals, calculate resource needs, and optimize your cannabis cultivation and manufacturing operations for maximum efficiency.",
  keywords: "production goal calculator, cannabis production planning, marijuana production targets, cannabis manufacturing planning, production capacity calculator",
  openGraph: {
    title: "Production Goal Calculator | BUD Calculator",
    description: "Plan production targets and resource requirements. Set realistic production goals, calculate resource needs, and optimize your cannabis cultivation and manufacturing operations for maximum efficiency.",
    url: "https://budcalculator.com/pages/production-goal-planner",
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
    title: "Production Goal Calculator | BUD Calculator",
    description: "Plan production targets and resource requirements. Set realistic production goals, calculate resource needs, and optimize your cannabis cultivation and manufacturing operations for maximum efficiency.",
    images: ["/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/pages/production-goal-planner",
  },
};

export default function ProductionGoalPlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 