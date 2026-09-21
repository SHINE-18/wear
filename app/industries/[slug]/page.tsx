import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteFooter } from '@/components/site/footer'
import { IndustryHeroExpand } from '@/components/site/industry-hero-expand'
import { SiteNav } from '@/components/site/nav'
import { Arrow, Button, SectionLabel } from '@/components/site/ui'
import { industriesData } from '@/lib/industries-data'
import styles from './industry-detail.module.css'

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
    <main id="top" className={`${styles.indDetailPageRoot} ind-detail-page-root`}>
      <SiteNav />

      {/* 1. SCROLL-DRIVEN EXPANDING HERO WITH INTERACTIVE HOTSPOTS */}
      <IndustryHeroExpand industry={industry} />

      {/* 2. PLANT ENGINEERING OVERVIEW & FAILURE MODES (CURTAIN OVERLAY) */}
      <section className={`${styles.indContentSection} ind-content-section ind-content-warm`}>
        <div className={styles.indContentContainer}>
          <div className={styles.indOverviewGrid}>
            <div className={styles.indOverviewCopy}>
              <SectionLabel>Plant Engineering Analysis</SectionLabel>
              <h2 className={styles.indSectionH2}>
                Built for the sectors that <em>wear hardest.</em>
              </h2>
              {industry.desc.map((paragraph, i) => (
                <p key={i} className={styles.indBodyLead}>
                  {paragraph}
                </p>
              ))}

              <div className={styles.indCatalogAction}>
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
            <div className={styles.indSpecsPanel}>
              <div className={styles.indSpecsPanelHeader}>
                <span className={styles.indSpecsMonoLabel}>Specifications & Technical Data</span>
                <span className={styles.indSpecsHudTag}>{industry.num}</span>
              </div>
              <div className={styles.indSpecsGrid}>
                {industry.specs.map((spec, i) => (
                  <div key={i} className={styles.indSpecItem}>
                    <span className={styles.indSpecLabel}>{spec.label}</span>
                    <span className={`${styles.indSpecValue} mono-val`}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CRITICAL WEAR COMPONENTS MANUFACTURED */}
      <section className={`${styles.indComponentsSection} ind-components-section section-dark`}>
        <div className={styles.indContentContainer}>
          <div className={styles.indSectionHeading}>
            <SectionLabel>Component Architecture</SectionLabel>
            <h2 className={styles.indSectionH2} style={{ color: '#ffffff' }}>
              Engineered replacement parts &amp; <em>wear assemblies.</em>
            </h2>
            <p className={styles.indSublead} style={{ color: '#9ba3b8' }}>
              Every assembly is 100% bolt-on compatible with OEM specifications, reverse-engineered from precision 3D scans.
            </p>
          </div>

          <div className={styles.indTypoList}>
            {industry.features.map((feature, i) => (
              <div key={i} className={styles.indTypoItem}>
                <span className={styles.indTypoNum}>0{i + 1}</span>
                <span className={styles.indTypoText}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OEM VS WEARGUARD COMPARISON MATRIX */}
      <section className={`${styles.indComparisonSection} ind-comparison-section section-slate`}>
        <div className={styles.indContentContainer}>
          <div className={styles.indSectionHeading}>
            <SectionLabel>Field Performance Verification</SectionLabel>
            <h2 className={styles.indSectionH2}>
              OEM standard limitations vs. <em>WearGuard solution.</em>
            </h2>
          </div>

          {/* SPLIT-SCREEN TYPOGRAPHIC COMPARISON (NO CARDS) */}
          <div className={styles.indComparisonSplit}>
            <div className={`${styles.indCompCol} ${styles.indCompOem}`}>
              <span className={styles.indCompLabel}>Standard OEM Limitation</span>
              <p className={styles.indCompText}>{industry.oemComparison.oemLimitation}</p>
            </div>
            
            <div className={styles.indCompDivider} aria-hidden="true" />
            
            <div className={`${styles.indCompCol} ${styles.indCompWearguard}`}>
              <span className={`${styles.indCompLabel} ${styles.wearguardLbl}`}>WearGuard Alloy Solution</span>
              <p className={styles.indCompText}>{industry.oemComparison.wearguardSolution}</p>
            </div>
          </div>

          {/* Campaign Metrics Comparison Table */}
          <div className={styles.indOemTableWrap}>
            <table className={styles.indOemTable}>
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
                    <td className={styles.metricLabel}>{metric.label}</td>
                    <td className={styles.metricOem}>{metric.oem}</td>
                    <td className={styles.metricWearguard}>
                      <span className={styles.metricBadgeGain}>{metric.wearguard}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. SWITCH TO OTHER SECTORS */}
      <section className={`${styles.indSwitcherSection} ind-switcher-section section-light`}>
        <div className={styles.indContentContainer}>
          <div className={styles.indSwitcherHeader}>
            <div>
              <SectionLabel>Sector Portfolio</SectionLabel>
              <h2 className={styles.indSectionH2} style={{ margin: '0.4rem 0 0' }}>
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

          <div className={styles.indSwitcherGrid}>
            {otherIndustries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className={styles.indSwitcherCard}>
                <div className={styles.indSwitcherImgWrap}>
                  <img src={ind.cardImage} alt={ind.title} className={styles.indSwitcherImg} width={400} height={280} />
                  <span className={styles.indSwitcherNum}>{ind.num}</span>
                </div>
                <div className={styles.indSwitcherBody}>
                  <div className={styles.indSwitcherTitleRow}>
                    <h3>{ind.title}</h3>
                    <span className={styles.indSwitcherArrow} aria-hidden="true">
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
      <section className={`${styles.pageCta} page-cta section-dark`}>
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
