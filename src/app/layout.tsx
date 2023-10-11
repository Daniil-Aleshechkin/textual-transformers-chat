import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AiDA',
  description: 'AI Curated Single Source of Truth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
