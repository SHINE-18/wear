import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter } from '@/components/site/footer'
import { FadeUp } from '@/components/site/motion'
import { SiteNav } from '@/components/site/nav'
import { PageHero } from '@/components/site/page-hero'
import { Arrow, Button, SectionLabel } from '@/components/site/ui'
import { applications, plantImage } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Application Engineering & Assemblies | WearGuard',
  description: 'Wear-resistant components engineered for dryers, filters, mixers, transfer points, bucket elevators and drag conveyors.',
}

export default function ApplicationsPage() {
  return (
    <main id="top">
      <SiteNav />
      <PageHero
        eyebrow="Application Engineering"
        title={
          <>
            Protection where
            <br />
            <em>wear happens.</em>
          </>
        }
        description="Precision bolt-on wear parts and custom retrofit components engineered for continuous batching, drying, crushing, and abrasive transport lines."
        image={plantImage}
        imageAlt="Industrial machinery in production"
        badge="6 High-Wear Assembly Groups"
        quickJumps={[
          { code: '01', label: 'Mixer Components', href: '/applications/mixer-components' },
          { code: '02', label: 'Dryer Circuits', href: '/applications/dryer-components' },
          { code: '03', label: 'Transfer Liners', href: '/applications/wear-liners-transfer-protection' },
          { code: '04', label: 'Reverse Eng.', href: '/custom-parts' },
        ]}
      />

      {/* --- APPLICATION ARCHITECTURE OVERVIEW --- */}
      <section className="app-overview-intro section-dark">
        <FadeUp className="section-heading">
          <SectionLabel>Assembly-Level Protection</SectionLabel>
          <h2>
            Engineered for severe
            <br />
            <em>operational wear zones.</em>
          </h2>
          <p>
            Standard OEM wear parts fail predictably because single-grade materials cannot accommodate compound wear forces. WearGuard analyzes your exact velocity, impact geometry, and temperature to engineer high-uptime components.
          </p>
        </FadeUp>
      </section>

      {/* --- 6 RICH EDITORIAL APPLICATION SECTIONS --- */}
      <div className="application-deep-dives">
        {applications.map((app, index) => {
          const isReversed = index % 2 === 1
          const isDark = index % 2 === 0
          return (
            <section
              key={app.slug}
              id={app.slug}
              className={`application-section-stage ${isDark ? 'section-dark' : 'section-light'}`}
            >
              <div className={`app-stage-inner ${isReversed ? 'stage-reversed' : ''}`}>
                {/* LEFT CONTENT COLUMN */}
                <FadeUp className="app-content-col">
                  <div className="app-code-row">
                    <span className="app-code-pill">ASSEMBLY {app.num} / 06</span>
                    <span className="app-badge-tag">{app.specs[0]?.value}</span>
                  </div>

                  <h2 className="app-title-text">{app.title}</h2>
                  <p className="app-summary-lead">{app.summary}</p>

                  <div className="app-body-text">
                    {app.description.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  {/* SPECS GRID */}
                  <div className="app-specs-grid">
                    {app.specs.map((spec, i) => (
                      <div key={i} className="app-spec-item">
                        <span className="app-spec-label">{spec.label}</span>
                        <strong className="app-spec-value">{spec.value}</strong>
                      </div>
                    ))}
                  </div>

                  <div className="app-action-row">
                    <Button href={`/applications/${app.slug}`}>
                      Explore {app.title} Assemblies
                    </Button>
                    <Link href="/contact" className="about-sub-link">
                      <span>Request CAD Spec</span>
                      <Arrow />
                    </Link>
                  </div>
                </FadeUp>

                {/* RIGHT VISUAL COLUMN */}
                <FadeUp className="app-visual-col">
                  <div className="app-visual-frame">
                    <img src={app.image} alt={app.title} className="app-visual-img" />

                    {/* SPEC BADGE */}
                    <div className="app-visual-badge">
                      <div>
                        <strong>{app.title}</strong>
                        <span>Engineered Wear Assembly</span>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </section>
          )
        })}
      </div>

      {/* --- BOTTOM CTA --- */}
      <section className="page-cta section-dark">
        <h2>
          Don&apos;t see your <em>specific machine?</em>
        </h2>
        <p style={{ color: '#8c92a4', maxWidth: '34rem', margin: '1rem auto 2.5rem', lineHeight: 1.6 }}>
          We reverse-engineer bespoke parts from sample physical pieces, hand sketches, or CAD drawings with 1–10 unit batch flexibility.
        </p>
        <Button href="/custom-parts">Explore Custom Reverse Engineering</Button>
      </section>

      <SiteFooter />
    </main>
  )
}
