import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Dancing_Script } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'mintset',
  description: 'Agence digitale',
}

export const dancing_script = Dancing_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--dancing_script',

})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dancing_script.variable}`}>{children}</body>
    </html>
  )
}
