import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EcoNova - Sustainable Innovation',
  description: 'Discover cutting-edge eco-friendly solutions for a sustainable future',
  keywords: ['sustainability', 'innovation', 'eco-friendly', 'green technology'],
  authors: [{ name: 'EcoNova Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    siteName: 'EcoNova',
    title: 'EcoNova - Sustainable Innovation',
    description: 'Discover cutting-edge eco-friendly solutions for a sustainable future',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EcoNova - Sustainable Innovation',
    description: 'Discover cutting-edge eco-friendly solutions for a sustainable future',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}