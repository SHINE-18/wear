import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site/footer'
import { SiteNav } from '@/components/site/nav'
import { PageHero } from '@/components/site/page-hero'
import { Button } from '@/components/site/ui'
import { EditorialMaterialsSwitcher } from '@/components/site/editorial-materials-switcher'
import { plantImage } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Materials & Engineered Alloys | WearGuard',
  description: 'Engineered wear alloys matched to impact, abrasion, erosion, temperature, corrosion, material flow and service-life targets.',
}

export default function MaterialsPage() {
  return (
    <main id="top" className="materials-page-root">
      <SiteNav />
      <PageHero
        eyebrow="Metallurgical Engineering"
        title={
          <>
            The right material
            <br />
            for the <em>right wear zone.</em>
          </>
        }
        description="Engineered formulations from 650 BHN high-chrome castings to shock-absorbing austenitic manganese and CCO cladding, precisely tailored for your operational wear dynamics."
        image={plantImage}
        imageAlt="Cast wear alloy components in production"
        badge="6 Engineered Formulations"
        quickJumps={[
          { code: '01', label: 'P400 / P450 Plate', href: '#materials-editorial' },
          { code: '02', label: 'P500 Extreme Plate', href: '#materials-editorial' },
          { code: '03', label: '28% Chrome White Iron', href: '#materials-editorial' },
          { code: '04', label: 'Ni-Hard Class IV', href: '#materials-editorial' },
        ]}
      />

      {/* --- MINIMALIST EDITORIAL MATERIAL SWITCHER --- */}
      <div id="materials-editorial">
        <EditorialMaterialsSwitcher />
      </div>

      {/* --- BOTTOM CTA --- */}
      <section className="page-cta section-dark">
        <h2>
          Need custom metallurgical <em>chemistry?</em>
        </h2>
        <p style={{ color: '#8c92a4', maxWidth: '34rem', margin: '1rem auto 2.5rem', lineHeight: 1.6 }}>
          We formulate bespoke alloy chemistry and heat-treatment cycles for high-tonnage applications with aggressive multi-mode wear.
        </p>
        <Button href="/contact">Consult a WearGuard Metallurgist</Button>
      </section>

      <SiteFooter />
    </main>
  )
}
