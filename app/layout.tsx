import React from "react"
import type { Metadata } from 'next'
import { Cairo, Inter } from 'next/font/google'

import './globals.css'
import { LanguageProvider } from '@/lib/language-context'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const cairo = Cairo({ subsets: ['arabic', 'latin'], variable: '--font-arabic' })

export const metadata: Metadata = {
  title: 'من وإلى الناس | From & To People',
  description: 'A 10-month artistic, ecological, and craft-based training program rooted in contemporary arts and sustainable design, based in South Tunisia.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar">
      <body className={`${inter.variable} ${cairo.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
