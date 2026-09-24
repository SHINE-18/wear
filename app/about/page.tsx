import type { Metadata } from 'next'
import { AboutPageClient } from '@/components/site/about-page-client'

export const metadata: Metadata = {
  title: 'About WearGuard | Heavy Industry Wear Metallurgy Specialists',
  description: 'Learn about WearGuard\'s decade of metallurgical innovation, custom alloy casting capabilities, and our dedicated team of wear engineering specialists.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
