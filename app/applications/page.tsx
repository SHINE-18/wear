import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site/footer'
import { FadeUp } from '@/components/site/motion'
import { SiteNav } from '@/components/site/nav'
import { SectionLabel } from '@/components/site/ui'
import { WearHeroExpand } from '@/components/site/wear-solutions/wear-hero-expand'
import { WearDecisionHub } from '@/components/site/wear-solutions/wear-decision-hub'
import { MaterialSelectionMatrix } from '@/components/site/wear-solutions/material-matrix'
import { WearDiagnosisFaq } from '@/components/site/wear-solutions/wear-faq'
import styles from '@/components/site/wear-solutions/wear-solutions-page.module.css'

export const metadata: Metadata = {
  title: 'Engineering Application & Wear Decision Guide | WearGuard',
  description:
    'A reference guide to common wear mechanisms in asphalt, concrete, process, and mining equipment, and the alloy families engineered for each.',
  alternates: {
    canonical: '/applications',
  },
}

export default function ApplicationsPage() {
  return (
    <main id="top" className={`${styles.pageRoot} wear-solutions-page-root`}>
      <SiteNav />

      {/* 1. SCROLL-DRIVEN EXPANDING HERO */}
      <WearHeroExpand />

      {/* 2. CONTINUOUS CURTAIN LAYER (STACKS OVER PINNED EXPANDING HERO LIKE A CURTAIN) */}
      <div className={`${styles.pageContentLayer} page-content-layer`}>
        {/* INTERACTIVE ENGINEERING DECISION HUB */}
        <section className={`${styles.selectorSection} selector-section`}>
          <FadeUp className={styles.sectionHeader}>
            <SectionLabel>Engineering Decision Framework</SectionLabel>
            <h2 className={styles.sectionTitle}>
              When to use what: <em>Mechanics &amp; Metallurgy Matching.</em>
            </h2>
            <p className={styles.sectionDesc}>
              A reference guide to common wear mechanisms in asphalt, concrete, process, and mining equipment, and the alloy families engineered for each.
            </p>
          </FadeUp>

          <WearDecisionHub />
        </section>

        {/* MATERIAL SELECTION MATRIX */}
        <section id="matrix" className={`${styles.matrixSection} matrix-section`}>
          <FadeUp className={styles.sectionHeader}>
            <SectionLabel>Comparative Metallurgy</SectionLabel>
            <h2 className={styles.sectionTitle}>
              Material selection &amp; <em>performance matrix.</em>
            </h2>
            <p className={styles.sectionDesc}>
              Cross-reference dynamic impact resistance, sliding abrasion tolerance, and maximum operating temperatures across WearGuard cast and plate alloys.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <MaterialSelectionMatrix />
          </FadeUp>
        </section>

        {/* DIAGNOSIS FAQ ACCORDION */}
        <section className={`${styles.accordionSection} accordion-section`}>
          <div className={styles.accordionContainer}>
            <FadeUp>
              <div className={styles.hudHeaderCard}>
                <div className={styles.hudHeaderTop}>
                  <div className={styles.hudMetaLeft}>
                    <span className={styles.hudDot} aria-hidden="true" />
                    <span className={styles.hudProtocolTag}>Diagnostic Protocol</span>
                  </div>
                  <span className={styles.hudMetaRight}>Field Failure Troubleshooting • 6 Core Modes</span>
                </div>

                <div className={styles.hudHeaderBody}>
                  <h2 className={styles.hudTitle}>
                    When wear happens: <em>Engineering Diagnosis.</em>
                  </h2>
                  <p className={styles.hudDesc}>
                    Root-cause diagnostic reasoning for common component wear across asphalt pugmills, concrete mixers, rotary drying drums, and transfer chutes.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <WearDiagnosisFaq />
            </FadeUp>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  )
}
