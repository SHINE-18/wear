import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site/footer'
import { SiteNav } from '@/components/site/nav'
import { CatalogGrid } from '@/components/site/catalog-grid'

export const metadata: Metadata = {
  title: 'Precision Wear Components & Replacement Assemblies | WearGuard Catalog',
  description: 'Engineered replacement parts for rotary drums, pugmills, pan mixers, chute transfer points, bucket elevators, baghouses, and heavy excavation machinery.',
}

export default function ApplicationsPage() {
  return (
    <main id="top" className="catalog-page-layout">
      <SiteNav />
      <CatalogGrid />
      <SiteFooter />
    </main>
  )
}
