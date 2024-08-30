import type { Metadata } from 'next';
import { Inter, Kanit } from 'next/font/google';
import './globals.css';
import './main.scss';
import { Analytics } from '@vercel/analytics/react';

// const inter = Inter({ subsets: ['latin'] });
const kanit = Kanit({ subsets: ['latin-ext'], weight: '500' });

export const metadata: Metadata = {
  title: {
    template: '%s | TAN GroupE',
    default: 'TAN Group',
  },
  description: 'Innovate. Impact. Inspire.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={kanit.className}> */}
      <body className={kanit.className}>
        {/* <Navigation /> */}
        <main className="relative overflow-hidden">{children}</main>
        <Analytics />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
