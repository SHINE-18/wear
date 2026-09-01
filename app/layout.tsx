import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google'
import { AdaptiveScrollbar } from '@/components/site/adaptive-scrollbar'
import { SmoothScroll } from '@/components/site/smooth-scroll'
import './globals.css'

const fontDisplay = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  fallback: ['sans-serif'],
})

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  fallback: ['sans-serif'],
})

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
  fallback: ['monospace'],
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
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable} bg-[#E4EAF2]`}
      suppressHydrationWarning
    >
      <body className="antialiased font-body bg-[#E4EAF2] text-ink" suppressHydrationWarning>
        <SmoothScroll />
        <AdaptiveScrollbar />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
