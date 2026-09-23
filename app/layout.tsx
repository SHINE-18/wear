import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { AdaptiveScrollbar } from '@/components/site/adaptive-scrollbar'
import { SmoothScroll } from '@/components/site/smooth-scroll'
import './globals.css'

const fontDisplay = Inter({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  fallback: ['Inter Placeholder', 'sans-serif'],
})

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  fallback: ['Inter Placeholder', 'sans-serif'],
})

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
  fallback: ['monospace'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wearguard.com.au'),
  title: 'WearGuard | Precision Industrial Wear Engineering',
  description: 'WearGuard engineers high-performance wear castings, custom alloy liners, and precision replacement parts that outlast OEM standards across heavy industry.',
  alternates: {
    canonical: '/',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: '#C8370B',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scrollbar-theme="dark"
      data-scroll-behavior="smooth"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable} bg-[#EDEDED]`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-body bg-[#EDEDED] text-ink" suppressHydrationWarning>
        <SmoothScroll />
        <AdaptiveScrollbar />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
