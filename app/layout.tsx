import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import { AdaptiveScrollbar } from '@/components/site/adaptive-scrollbar'
import { SmoothScroll } from '@/components/site/smooth-scroll'
import './globals.css'

const fontDisplay = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '700'],
  display: 'swap',
})

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const fontMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'WearGuard | Precision Industrial Wear Engineering',
  description: 'Engineered wear-resistant components, materials and custom wear solutions for demanding industrial applications.',
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: '#C23E20',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scrollbar-theme="dark"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable} bg-[#111213]`}
      suppressHydrationWarning
    >
      <body className="antialiased font-body bg-charcoal text-ink" suppressHydrationWarning>
        <SmoothScroll />
        <AdaptiveScrollbar />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
