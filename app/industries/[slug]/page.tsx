import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteFooter } from '@/components/site/footer'
import { InteractiveGrid } from '@/components/site/interactive-grid'
import { SiteNav } from '@/components/site/nav'
import { Arrow, Button, SectionLabel } from '@/components/site/ui'
import { industriesData } from '@/lib/industries-data'

export function generateStaticParams() {
  return industriesData.map((ind) => ({ slug: ind.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const industry = industriesData.find((ind) => ind.slug === slug)
  if (!industry) return {}

  return {
    title: `${industry.title} Industrial Wear Engineering | WearGuard`,
    description: industry.cardDesc,
    alternates: {
      canonical: `/industries/${slug}`,
    },
  }
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const industry = industriesData.find((ind) => ind.slug === slug)
  if (!industry) notFound()

  const otherIndustries = industriesData.filter((ind) => ind.slug !== industry.slug)

  return (
    <main id="top" className="ind-detail-page-root">
      <SiteNav />

      {/* 1. TOP HERO SECTION MATCHING IMAGE 2 */}
      <section className="ind-detail-hero">
        {/* Kinetic interactive dash grid canvas */}
        <div className="ind-hero-canvas-wrap" aria-hidden="true">
          <InteractiveGrid />
        </div>

        <div className="ind-detail-hero-content">
          {/* Split Header: Left Title / Right Square Orange CTA Card */}
          <div className="ind-detail-header">
            <div className="ind-header-left">
              <div className="ind-eyebrow">
                <span className="ind-eyebrow-bar" aria-hidden="true" />
                <span>{industry.eyebrow}</span>
              </div>
              <h1 className="ind-title">{industry.title}</h1>
              <p className="ind-subtitle">{industry.subtitle}</p>
            </div>

            {/* Prominent Square Orange "Get in Touch" Card matching Image 2 */}
            <div className="ind-header-right">
              <Link href="/contact" className="ind-cta-square" aria-label="Get in Touch with WearGuard engineering">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  className="ind-cta-bracket"
                  aria-hidden="true"
                >
                  <path
                    d="M16 10H34V28"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                </svg>
                <span className="ind-cta-label">Get in Touch</span>
              </Link>
            </div>
          </div>

          {/* Full-width Media Banner with diagonal hatch pinstripe texture on left matching Image 2 */}
          <div className="ind-detail-banner-wrap">
            <div className="ind-banner-hatch" aria-hidden="true" />
            <img
              src={industry.bannerImage}
              alt={industry.imageAlt}
              className="ind-banner-img"
              width={1600}
              height={700}
            />
            <div className="ind-banner-badge">
              <span className="ind-badge-dot" aria-hidden="true" />
              <span>{industry.badgeText}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PLANT ENGINEERING OVERVIEW & FAILURE MODES */}
      <section className="ind-content-section ind-content-warm">
        <div className="ind-content-container">
          <div className="ind-overview-grid">
            <div className="ind-overview-copy">
              <SectionLabel>Plant Engineering Analysis</SectionLabel>
              <h2 className="ind-section-h2">
                Built for the sectors that <em>wear hardest.</em>
              </h2>
              {industry.desc.map((paragraph, i) => (
                <p key={i} className="ind-body-lead">
                  {paragraph}
                </p>
              ))}

              <div className="ind-catalog-action">
                <Button href={industry.appLink}>
                  Explore {industry.appLabel}
                </Button>
                <Link href="/contact" className="about-sub-link">
                  <span>Request metallurgy datasheet</span>
                  <Arrow />
                </Link>
              </div>
            </div>

            {/* Technical Specifications Matrix */}
            <div className="ind-specs-panel">
              <div className="ind-specs-panel-header">
                <span className="ind-specs-mono-label">SPECIFICATIONS // DATASHEET</span>
                <span className="ind-specs-hud-tag">{industry.num}</span>
              </div>
              <div className="ind-specs-grid">
                {industry.specs.map((spec, i) => (
                  <div key={i} className="ind-spec-item">
                    <span className="ind-spec-label">{spec.label}</span>
                    <span className="ind-spec-value mono-val">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CRITICAL WEAR COMPONENTS MANUFACTURED */}
      <section className="ind-components-section section-dark">
        <div className="ind-content-container">
          <div className="ind-section-heading">
            <SectionLabel>Component Architecture</SectionLabel>
            <h2 className="ind-section-h2" style={{ color: '#ffffff' }}>
              Engineered replacement parts &amp; <em>wear assemblies.</em>
            </h2>
            <p className="ind-sublead" style={{ color: '#9ba3b8' }}>
              Every assembly is 100% bolt-on compatible with OEM specifications, reverse-engineered from precision 3D scans.
            </p>
          </div>

          <div className="ind-features-grid">
            {industry.features.map((feature, i) => (
              <div key={i} className="ind-feature-card">
                <div className="ind-feature-num">0{i + 1}</div>
                <div className="ind-feature-text">{feature}</div>
                <div className="ind-feature-accent" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OEM VS WEARGUARD COMPARISON MATRIX */}
      <section className="ind-comparison-section section-slate">
        <div className="ind-content-container">
          <div className="ind-section-heading">
            <SectionLabel>Field Performance Verification</SectionLabel>
            <h2 className="ind-section-h2">
              OEM standard limitations vs. <em>WearGuard solution.</em>
            </h2>
          </div>

          {/* Limitations vs Solution Cards */}
          <div className="ind-oem-cards-grid">
            <div className="ind-oem-card oem-problem">
              <div className="ind-oem-badge oem-badge-standard">STANDARD OEM LIMITATION</div>
              <p className="ind-oem-text">{industry.oemComparison.oemLimitation}</p>
            </div>
            <div className="ind-oem-card oem-solution">
              <div className="ind-oem-badge oem-badge-wearguard">WEARGUARD ALLOY SOLUTION</div>
              <p className="ind-oem-text">{industry.oemComparison.wearguardSolution}</p>
            </div>
          </div>

          {/* Campaign Metrics Comparison Table */}
          <div className="ind-oem-table-wrap">
            <table className="ind-oem-table">
              <thead>
                <tr>
                  <th scope="col">Campaign Benchmark</th>
                  <th scope="col" className="col-oem">Standard OEM Castings</th>
                  <th scope="col" className="col-wearguard">WearGuard Engineered Alloy</th>
                </tr>
              </thead>
              <tbody>
                {industry.oemComparison.campaignMetrics.map((metric, i) => (
                  <tr key={i}>
                    <td className="metric-label">{metric.label}</td>
                    <td className="metric-oem">{metric.oem}</td>
                    <td className="metric-wearguard">
                      <span className="metric-badge-gain">{metric.wearguard}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. SWITCH TO OTHER SECTORS */}
      <section className="ind-switcher-section section-light">
        <div className="ind-content-container">
          <div className="ind-switcher-header">
            <div>
              <SectionLabel>Sector Portfolio</SectionLabel>
              <h2 className="ind-section-h2" style={{ margin: '0.4rem 0 0' }}>
                Explore other <em>industrial sectors.</em>
              </h2>
            </div>
            <Link href="/industries" className="stack-all-link">
              <span>All Sectors</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          </div>

          <div className="ind-switcher-grid">
            {otherIndustries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="ind-switcher-card">
                <div className="ind-switcher-img-wrap">
                  <img src={ind.cardImage} alt={ind.title} className="ind-switcher-img" width={400} height={280} />
                  <span className="ind-switcher-num">{ind.num}</span>
                </div>
                <div className="ind-switcher-body">
                  <div className="ind-switcher-title-row">
                    <h3>{ind.title}</h3>
                    <span className="ind-switcher-arrow" aria-hidden="true">
                      <Arrow />
                    </span>
                  </div>
                  <p>{ind.cardDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONSULTATION CTA BANNER */}
      <section className="page-cta section-dark">
        <h2>
          Ready to extend component campaign life in your <em>{industry.title.toLowerCase()}?</em>
        </h2>
        <p style={{ color: '#8c92a4', maxWidth: '38rem', margin: '1rem auto 2.5rem', lineHeight: 1.6 }}>
          Share your equipment model, part number, 2D drawings, or 3D CAD files. Our metallurgical engineering team provides a full wear analysis and replacement quote within 24 hours.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button href="/contact">Talk to a Metallurgical Engineer</Button>
          <Button dark href={industry.appLink}>
            Browse Application Catalog
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
