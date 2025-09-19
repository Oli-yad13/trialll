import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kana TV - Ethiopia\'s Premier Entertainment Destination',
  description: 'Discover the best in Ethiopian entertainment with Kana TV. Watch dramas, variety shows, educational content, and more.',
  keywords: 'Kana TV, Ethiopian TV, Drama, Variety Shows, Entertainment, Ethiopia',
  authors: [{ name: 'Kana TV' }],
  icons: {
    icon: '/Kana_TV.png',
  },
  openGraph: {
    title: 'Kana TV - Ethiopia\'s Premier Entertainment Destination',
    description: 'Discover the best in Ethiopian entertainment with Kana TV.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kana TV - Ethiopia\'s Premier Entertainment Destination',
    description: 'Discover the best in Ethiopian entertainment with Kana TV.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>
        <div className="min-h-screen flex flex-col overflow-x-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}