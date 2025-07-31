import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BUD Calculator – Cannabis Business Tools for Cultivators, Manufacturers, and Retailers',
  description: 'Free calculators for cannabis operators to improve margins, price strategy, cost tracking, and production planning. Built for growers, labs, and dispensaries.',
  keywords: 'cannabis calculator, marijuana business tools, cannabis cost calculator, cannabis profit calculator, cannabis business software',
  openGraph: {
    title: 'BUD Calculator – Cannabis Business Tools for Cultivators, Manufacturers, and Retailers',
    description: 'Free calculators for cannabis operators to improve margins, price strategy, cost tracking, and production planning. Built for growers, labs, and dispensaries.',
    url: 'https://budcalculator.com',
    images: [
      {
        url: 'https://budcalculator.com/assets/preview.png',
        width: 1200,
        height: 630,
        alt: 'BUD Calculator - Cannabis Business Tools',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BUD Calculator – Cannabis Business Tools for Cultivators, Manufacturers, and Retailers',
    description: 'Free calculators for cannabis operators to improve margins, price strategy, cost tracking, and production planning.',
    images: ['https://budcalculator.com/assets/preview.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  alternates: {
    canonical: 'https://budcalculator.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0];
              if(f){var j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-T4X5TKGP'+dl;f.parentNode.insertBefore(j,f);}
            })(window,document,'script','dataLayer','GTM-T4X5TKGP');`,
          }}
        />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4X5TKGP"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
