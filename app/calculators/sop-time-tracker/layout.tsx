import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SOP Time Tracker | BUD Calculator",
  description: "Track labor time spent on SOPs by task and employee. Optimize productivity in your cannabis operation.",
  keywords: "SOP time tracking, cannabis SOP calculator, marijuana workflow efficiency, cannabis labor tracking, SOP optimization calculator",
  openGraph: {
    title: "SOP Time Tracker | BUD Calculator",
    description: "Track labor time spent on SOPs by task and employee. Optimize productivity in your cannabis operation.",
    url: "https://budcalculator.com/pages/sop-time-tracker",
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
    title: "SOP Time Tracker | BUD Calculator",
    description: "Track labor time spent on SOPs by task and employee. Optimize productivity in your cannabis operation.",
    images: ["/assets/preview.png"],
  },
  alternates: {
    canonical: "https://budcalculator.com/pages/sop-time-tracker",
  },
};

export default function SOPTimeTrackerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 