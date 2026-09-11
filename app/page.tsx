import type { Metadata } from 'next'
import { HomePageClient } from '@/components/site/home-page-client'

export const metadata: Metadata = {
  title: 'WearGuard | Precision Industrial Wear Engineering',
  description: 'WearGuard engineers high-performance wear castings, custom alloy liners, and precision replacement parts that outlast OEM standards across heavy industry.',
  alternates: {
    canonical: '/',
  },
}

export default function Page() {
  return <HomePageClient />
}
