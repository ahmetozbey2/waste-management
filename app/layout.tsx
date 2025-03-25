import './globals.css';

import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';

const inter = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'REM Waste Solutions | Sustainable Waste Management Experts',
  description:
    'Revolutionizing waste management through innovative recycling, responsible disposal, and eco-friendly solutions. Your partner in creating a cleaner, greener future.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
