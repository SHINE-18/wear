import type { Metadata } from 'next'
import { ContactPageClient } from '@/components/site/contact-page-client'

export const metadata: Metadata = {
  title: 'Contact WearGuard | Direct Metallurgy & Engineering Support',
  description: 'Connect directly with WearGuard wear engineers in Melbourne for custom alloy quotes, 3D laser scan audits, and 24-hour technical manufacturing reviews.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
