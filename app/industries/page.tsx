import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site/footer'
import { SiteNav } from '@/components/site/nav'
import { IndustryStackingCards } from '@/components/site/stacking-cards'
import styles from './industries.module.css'

export const metadata: Metadata = {
  title: 'Industries We Serve | WearGuard Industrial Wear Solutions',
  description:
    'Custom wear-resistant alloys and heavy cast components engineered for asphalt plants, concrete batching, process industries, and primary mining crushers.',
  alternates: {
    canonical: '/industries',
  },
}

export default function IndustriesPage() {
  return (
    <main id="top" className={`${styles.industriesPageRoot} industries-page-root`}>
      <SiteNav />

      {/* Stacking Cards Experience matching Image 1 */}
      <section className={`${styles.industriesStackSection} industries-stack-section`}>
        <IndustryStackingCards showAllLink={false} extendGridToNavbar={true} />
      </section>

      <SiteFooter />
    </main>
  )
}
