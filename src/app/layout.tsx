import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CONTENT_WEBSITE_LINKS } from '@/content/navContent'
import ActiveSectionContextProvider from '@/context/active-section-context'
import ColorModeContextProvider from '@/context/color-mode-context'
import ResponsiveNav from '@/components/nav/ResponsiveNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className + ' theme-mintset bg-neutralBg text-onNeutralBg'}>
        <ColorModeContextProvider>
          <ActiveSectionContextProvider>
            <ResponsiveNav links={CONTENT_WEBSITE_LINKS} isTransparent/>
            {children}
          </ActiveSectionContextProvider>
        </ColorModeContextProvider>
      </body>
    </html>
  )
}
