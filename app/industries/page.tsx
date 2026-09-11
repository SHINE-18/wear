import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site/footer'
import { InteractiveGrid } from '@/components/site/interactive-grid'
import { SiteNav } from '@/components/site/nav'
import { IndustryStackingCards } from '@/components/site/stacking-cards'

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
    <main id="top" className="industries-page-root">
      <SiteNav />

      {/* Kinetic interactive dash grid canvas covering the page background matching Image 1 */}
      <div className="industries-hero-canvas-wrap" aria-hidden="true">
        <InteractiveGrid />
      </div>

      {/* Stacking Cards Experience matching Image 1 */}
      <section className="industries-stack-section">
        <IndustryStackingCards showAllLink={false} />
      </section>

      <SiteFooter />
    </main>
  )
}
