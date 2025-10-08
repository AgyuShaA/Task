'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { HeroUIProvider } from '@heroui/react';
import ReactQueryProvider from '../../shared/providers/query-clinet-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReactQueryProvider>
          <HeroUIProvider>{children}</HeroUIProvider>\
        </ReactQueryProvider>
      </body>
    </html>
  );
}
