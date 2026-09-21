import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter } from '@/components/site/footer'
import { FadeUp, Stagger, StaggerItem } from '@/components/site/motion'
import { SiteNav } from '@/components/site/nav'
import { PageHero } from '@/components/site/page-hero'
import { Arrow, Button, SectionLabel } from '@/components/site/ui'
import { customFeatures, plantImage, processSteps } from '@/lib/site-data'
import styles from './custom-parts.module.css'

export const metadata: Metadata = {
  title: 'Custom Wear Parts & 3D Reverse Engineering | WearGuard',
  description: 'Rapid 3D coordinate laser scanning, custom alloy foundry tooling, and 1–10 unit low-volume casting flexibility delivered in 6–8 weeks with zero OEM markup.',
  alternates: {
    canonical: '/custom-parts',
  },
}

export default function CustomPartsPage() {
  return (
    <main id="top">
      <SiteNav />
      <PageHero
        eyebrow="Custom Manufacturing & Metallurgy"
        title={
          <>
            Engineered to
            <br />
            <em>suit your needs.</em>
          </>
        }
        image={plantImage}
        imageAlt="Custom industrial part in production"
        badge="1–10 unit small-batch flexibility"
      />

      {/* --- WHAT WE OFFER: 4 PILLARS --- */}
      <section className={`${styles.customPillarsSection} custom-pillars-section section-light`}>
        <FadeUp className="section-heading">
          <SectionLabel>Capabilities</SectionLabel>
          <h2>
            Bespoke wear parts
            <br />
            <em>without OEM penalties.</em>
          </h2>
          <p>
            When OEM suppliers quote 26-week lead times or refuse small quantities, WearGuard reverse-engineers, optimizes metallurgy, and manufactures replacement assemblies in 6–8 weeks.
          </p>
        </FadeUp>

        <div className={styles.aboutCapabilities} style={{ marginTop: '2rem' }}>
          <div className={styles.aboutCapability}>
            <span className={styles.capabilityMetric}>3D</span>
            <span className={styles.capabilityLabel}>Reverse Engineering & Scanning</span>
          </div>
          <div className={styles.aboutCapability}>
            <span className={styles.capabilityMetric}>Alloy</span>
            <span className={styles.capabilityLabel}>Custom Wear Metallurgy</span>
          </div>
          <div className={styles.aboutCapability}>
            <span className={styles.capabilityMetric}>1–10</span>
            <span className={styles.capabilityLabel}>Small-Batch Production Runs</span>
          </div>
          <div className={styles.aboutCapability}>
            <span className={styles.capabilityMetric}>100%</span>
            <span className={styles.capabilityLabel}>Mechanical & Dimensional QA</span>
          </div>
        </div>
      </section>

      {/* --- 4-STAGE REVERSE-ENGINEERING TIMELINE --- */}
      <section className={`${styles.customProcessSection} custom-process-section section-dark`}>
        <FadeUp className="section-heading">
          <SectionLabel>Lifecycle Process</SectionLabel>
          <h2>
            From worn physical part
            <br />
            to <em>precision casting.</em>
          </h2>
          <p>
            Our in-house metrology and foundry engineers follow an exact 4-stage engineering lifecycle to verify dimensions, optimize chemical alloys, and eliminate historical weak points.
          </p>
        </FadeUp>

        <div className={styles.engineeringTimeline}>
          {processSteps.map((step) => (
            <FadeUp key={step.n} className={styles.timelineNode}>
              <div className={styles.timelineLine} aria-hidden="true" />
              <div className={styles.timelineMarker}>
                <span className={styles.timelineNum}>{step.n}</span>
                <span className={styles.timelineDot} />
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>{step.t}</h3>
                <p className={styles.timelineDesc}>{step.d}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* --- SPECIFICATION CHECKLIST --- */}
      <section className={`${styles.customSpecChecklist} custom-spec-checklist section-light`}>
        <div className={styles.checklistLayout}>
          <FadeUp className={styles.checklistLeft}>
            <SectionLabel>RFQ Submission Guide</SectionLabel>
            <h2>
              What our engineers need
              <br />
              to <em>quote your part.</em>
            </h2>
            <p className={styles.checklistLead}>
              We can work from full 3D CAD files (.STEP / .IGES), 2D manufacturing drawings (.DWG / .PDF), or worn physical samples sent directly to our Australian metrology lab.
            </p>
            <Button href="/contact">Submit Drawings / RFQ</Button>
          </FadeUp>

          <FadeUp className={styles.checklistRight}>
            <div className={styles.checklistCard}>
              <h3 className={styles.checklistCardTitle}>Engineering Checklist</h3>
              <div className={styles.checklistItems}>
                <div className={styles.checklistItem}>
                  <span className={styles.chkBox}>✓</span>
                  <div>
                    <strong>Equipment OEM & Model</strong>
                    <p>Machine type, original part number, and plant installation location.</p>
                  </div>
                </div>
                <div className={styles.checklistItem}>
                  <span className={styles.chkBox}>✓</span>
                  <div>
                    <strong>Operating Environment & Material Handled</strong>
                    <p>Particle sizing (lump mm), tonnage per hour, temperature, and moisture content.</p>
                  </div>
                </div>
                <div className={styles.checklistItem}>
                  <span className={styles.chkBox}>✓</span>
                  <div>
                    <strong>Historical Failure Mode</strong>
                    <p>Gouging impact, abrasive sliding thinning, cracking, or thermal fatigue.</p>
                  </div>
                </div>
                <div className={styles.checklistItem}>
                  <span className={styles.chkBox}>✓</span>
                  <div>
                    <strong>Desired Batch Quantity</strong>
                    <p>Trial batch (1–10 units) or scheduled campaign replacement volumes.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
