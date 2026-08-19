import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter } from '@/components/site/footer'
import { FadeUp } from '@/components/site/motion'
import { SiteNav } from '@/components/site/nav'
import { PageHero } from '@/components/site/page-hero'
import { Arrow, Button, SectionLabel } from '@/components/site/ui'
import { materialGrades, plantImage } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Materials & Engineered Alloys | WearGuard',
  description: 'Engineered wear alloys matched to impact, abrasion, erosion, temperature, corrosion, material flow and service-life targets.',
}

export default function MaterialsPage() {
  return (
    <main id="top">
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
          { code: '01', label: 'Ni-Hard Class IV', href: '#materials-list' },
          { code: '02', label: 'High-Chrome (Cr 28)', href: '#materials-list' },
          { code: '03', label: 'Austenitic Manganese', href: '#materials-list' },
          { code: '04', label: 'Comparative Matrix', href: '#matrix-table' },
        ]}
      />

      {/* --- COMPARATIVE SELECTION MATRIX --- */}
      <section className="material-matrix-section section-dark">
        <FadeUp className="section-heading">
          <SectionLabel>Alloy Selection Matrix</SectionLabel>
          <h2>
            Engineered for specific
            <br />
            <em>wear mechanisms.</em>
          </h2>
          <p>
            Wear rate is governed by kinetic impact energy, abrasive particle morphology, sliding velocity, and thermal cycling. We engineer 6 targeted metallurgy categories to eliminate downtime.
          </p>
        </FadeUp>

        <div className="matrix-table-wrap">
          <table className="matrix-table">
            <thead>
              <tr>
                <th>Grade Code</th>
                <th>Alloy Family</th>
                <th>Hardness</th>
                <th>Impact Toughness</th>
                <th>Max Temp</th>
                <th>Primary Wear Mechanism</th>
              </tr>
            </thead>
            <tbody>
              {materialGrades.map((m) => (
                <tr key={m.code}>
                  <td>
                    <span className="matrix-code-badge">{m.code}</span>
                  </td>
                  <td>
                    <strong>{m.name}</strong>
                    <span className="matrix-cat-sub">{m.category}</span>
                  </td>
                  <td>
                    <span className="matrix-val-chip">{m.hardness}</span>
                  </td>
                  <td>{m.impactResistance}</td>
                  <td>{m.tempLimit}</td>
                  <td>{m.primaryUse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* --- 6 RICH EDITORIAL METALLURGY SECTIONS --- */}
      <div className="material-deep-dives">
        {materialGrades.map((grade, index) => {
          const isReversed = index % 2 === 1
          const isDark = index % 2 === 1
          return (
            <section
              key={grade.code}
              id={`grade-${grade.code}`}
              className={`material-detail-stage ${isDark ? 'section-dark' : 'section-light'}`}
            >
              <div className={`material-stage-inner ${isReversed ? 'stage-reversed' : ''}`}>
                {/* LEFT CONTENT COLUMN */}
                <FadeUp className="material-content-col">
                  <div className="material-code-row">
                    <span className="material-code-pill">GRADE {grade.code} / 06</span>
                    <span className="material-hardness-badge">{grade.hardness}</span>
                  </div>

                  <h2 className="material-grade-title">{grade.name}</h2>
                  <p className="material-category-tag">{grade.category}</p>

                  <p className="material-grade-desc">{grade.desc}</p>

                  {/* TELEMETRY SPECS MATRIX */}
                  <div className="material-specs-box">
                    <div className="spec-row-item">
                      <span className="spec-label">Chemical Matrix</span>
                      <span className="spec-val-mono">{grade.composition}</span>
                    </div>
                    <div className="spec-row-item">
                      <span className="spec-label">Impact Resistance</span>
                      <span className="spec-val">{grade.impactResistance}</span>
                    </div>
                    <div className="spec-row-item">
                      <span className="spec-label">Thermal Limit</span>
                      <span className="spec-val">{grade.tempLimit}</span>
                    </div>
                    <div className="spec-row-item">
                      <span className="spec-label">Primary Application</span>
                      <span className="spec-val">{grade.primaryUse}</span>
                    </div>
                  </div>

                  {/* KEY ENGINEERING HIGHLIGHTS */}
                  <div className="material-highlights-list">
                    {grade.highlights.map((h, i) => (
                      <div key={i} className="material-highlight-item">
                        <span className="material-check-icon">✓</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="material-action-row">
                    <Button href="/contact">
                      Request Grade {grade.code} Quote
                    </Button>
                    <Link href="/custom-parts" className="about-sub-link">
                      <span>Custom drawing submission</span>
                      <Arrow />
                    </Link>
                  </div>
                </FadeUp>

                {/* RIGHT VISUAL COLUMN */}
                <FadeUp className="material-visual-col">
                  <div className="material-visual-frame">
                    <img src={grade.image} alt={grade.name} className="material-visual-img" />

                    {/* OVERLAY SPEC BADGE */}
                    <div className="material-visual-badge">
                      <div>
                        <strong>{grade.hardness}</strong>
                        <span>{grade.category.split('(')[0]}</span>
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
