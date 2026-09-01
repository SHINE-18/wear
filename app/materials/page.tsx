import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site/footer'
import { SiteNav } from '@/components/site/nav'
import { Button, SectionLabel } from '@/components/site/ui'
import { MaterialsMatrix } from '@/components/site/materials-matrix'

export const metadata: Metadata = {
  title: 'Materials & Engineered Alloys | WearGuard',
  description: 'Engineered wear alloys matched to impact, abrasion, erosion, temperature, corrosion, material flow and service-life targets.',
}

export default function MaterialsPage() {
  return (
    <main id="top" className="materials-page-root">
      <SiteNav />

      {/* 1. MINIMAL METALLURGICAL EDITORIAL HERO (NO PHOTO - PURE ENGINEERING) */}
      <section className="materials-hero-section">
        <div className="materials-hero-container">
          <SectionLabel>Metallurgical Engineering</SectionLabel>
          <h1 className="materials-hero-title">
            The right material
            <br />
            for the <em>right wear zone.</em>
          </h1>
          <p className="materials-hero-desc">
            Engineered formulations from 680 BHN high-chrome castings to shock-absorbing austenitic manganese and CCO cladding, precisely tailored for your operational wear dynamics.
          </p>

          <div className="materials-hero-actions">
            <Button href="/contact">Request Technical Audit</Button>
          </div>
        </div>
      </section>

      {/* 2. SWISS ENGINEERING ALLOY MATRIX & TELEMETRY */}
      <section id="materials-matrix" className="materials-matrix-section">
        <MaterialsMatrix />
      </section>

      <SiteFooter />
    </main>
  )
}
