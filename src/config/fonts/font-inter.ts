import { Inter } from 'next/font/google'

// main font
export const interFont = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'Arial'], // optional
})
