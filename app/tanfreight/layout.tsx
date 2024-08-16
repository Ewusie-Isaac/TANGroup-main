import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

import type { Metadata } from 'next';
import { Inter, Kanit } from 'next/font/google';
import './globals.css';
import './main.scss';
import { Analytics } from '@vercel/analytics/react';
import Navigation from '@/components/tanfreight/Navigation';
import Footer from '@/components/tanfreight/Footer';

const inter = Inter({ subsets: ['latin'] });
const kanit = Kanit({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: {
    template: '%s | TAN Freight and Logistics',
    default: 'Home | TAN Freight and Logistics',
  },
  description:
    'Reimagining the face of Freight and Logistics services. Your reliable and genuine partner for all your freight and logistics needs, ensuring smooth and efficient transportation solutions tailored to your requirements. Trust us for dependable and authentic services that prioritize your business success Air Freight | Sea Freight | Land Freight |Ship to Ghana | Shop online | buy from china | Customs Clearance | Warehousing | Project cargo | Consolidation | Ship goods | ship conatainer | From china to Ghana | from USA to Ghana | shipping',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <GoogleTagManager gtmId="G-7JEZX3QXBN" />
        <GoogleAnalytics gaId="G-7JEZX3QXBN" />
        <Navigation />
        <main className="relative overflow-hidden">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
