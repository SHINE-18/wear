import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site/footer'
import { FadeUp } from '@/components/site/motion'
import { SiteNav } from '@/components/site/nav'
import { CustomHeroExpand } from '@/components/site/custom-hero-expand'
import { BuiltForResults } from '@/components/site/built-for-results'
import { Button, SectionLabel } from '@/components/site/ui'
import styles from './custom-parts.module.css'

export const metadata: Metadata = {
  title: 'Custom Wear Parts & 3D Reverse Engineering | WearGuard',
  description:
    'Rapid 3D coordinate laser scanning, custom alloy foundry tooling, and 1–10 unit low-volume casting flexibility delivered in 6–8 weeks with zero OEM markup.',
  alternates: {
    canonical: '/custom-parts',
  },
}

export default function CustomPartsPage() {
  return (
    <main id="top" className={styles.customPartsPageRoot}>
      <SiteNav />

      {/* 1. SCROLL-DRIVEN EXPANDING HERO (ASPHALT PLANTS PARITY) */}
      <CustomHeroExpand />

      {/* CONTINUOUS CURTAIN LAYER (STACKS OVER HERO WITH Z-INDEX 40) */}
      <div className={`${styles.pageContentLayer} page-content-layer`}>
        {/* 2. FOUNDRY & METROLOGY SCOPE */}
        <section className={`${styles.customPillarsSection} custom-pillars-section`}>
          <div className={styles.customPillarsContainer}>
            <FadeUp className="section-heading">
              <SectionLabel>Foundry & Metrology Scope</SectionLabel>
              <h2>
                Cast to any geometry.
                <br />
                <em>Engineered for harsh service.</em>
              </h2>
              <p>
                From one-off prototype castings to recurring batch runs, our metallurgy team analyzes operational wear patterns to engineer alloy formulations that eliminate chronic failure points.
              </p>
            </FadeUp>

            <div className={styles.aboutCapabilities}>
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
          </div>
        </section>

        {/* 3. BUILT FOR RESULTS (DARK VELVET WHITE-NOISE SECTION) */}
        <BuiltForResults />

        {/* 4. SPECIFICATION CHECKLIST */}
        <section id="rfq-guide" className={`${styles.customSpecChecklist} custom-spec-checklist section-light`}>
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
      </div>
    </main>
  )
}
