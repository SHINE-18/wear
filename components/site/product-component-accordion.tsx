'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { Arrow, SectionLabel } from './ui'
import { FadeUp } from './motion'
import type { Application, SubComponent } from '@/lib/site-data'
import styles from './product-component-accordion.module.css'

export function ProductComponentAccordion({
  application,
}: {
  application: Application
}) {
  // First item open by default
  const [activeId, setActiveId] = useState<string | null>(
    application.subComponents?.[0]?.id ?? null
  )

  const toggleComponent = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id))
  }

  return (
    <div className={styles.productShowcaseWrapper}>
      {/* 1. EDITORIAL & ENGINEERING SUPPORT (SCREENSHOT 1) */}
      <section className={`${styles.productEditorialSection} section-light`}>
        <div className={styles.productEditorialGrid}>
          {/* LEFT: EDITORIAL COPY */}
          <FadeUp className={styles.productEditorialLeft}>
            <span className={styles.productManifestoEyebrow}>
              ANY BRAND. ANY ERA. NO EXCUSES.
            </span>
            <h2 className={styles.productEditorialTitle}>
              Engineering Specifications &amp; Performance Overview
            </h2>

            <div className={styles.productEditorialParagraphs}>
              {application.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* QUICK SPECS CHIPS */}
            <div className={styles.productSpecsChipRow}>
              {application.specs.map((spec, i) => (
                <div key={i} className={styles.productSpecChip}>
                  <span className={styles.chipLbl}>{spec.label}</span>
                  <strong className={styles.chipVal}>{spec.value}</strong>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* RIGHT: ENGINEERING ASSISTANCE & SUPPORT CARD */}
          <FadeUp delay={0.15} className={styles.productEditorialRight}>
            <div className={styles.productSupportCard}>
              <div className={styles.supportCardHeader}>
                <span className={styles.supportBadge}>TECHNICAL ASSISTANCE</span>
                <h3>{application.engineeringSupport.title}</h3>
              </div>

              <p className={styles.supportCardDesc}>
                {application.engineeringSupport.text}
              </p>

              <ul className={styles.supportPointsList}>
                {application.engineeringSupport.points.map((pt, i) => (
                  <li key={i}>
                    <span className={styles.supportCheck}>✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* CARD PREVIEW IMAGE */}
              <div className={styles.supportCardPreviewFrame}>
                <img
                  src={application.engineeringSupport.image}
                  alt={application.engineeringSupport.title}
                  className={styles.supportCardPreviewImg}
                  width={616}
                  height={464}
                />
                <div className={styles.supportPreviewOverlay} />
                <span className={styles.supportPreviewTag}>
                  CAD SPEC: WG-{application.num}
                </span>
              </div>

              <Link href="/contact" className={styles.supportCardCta}>
                <span>Talk to an Engineer</span>
                <Arrow />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 2. INTERACTIVE SUB-COMPONENT ACCORDION GRID (SCREENSHOT 2) */}
      <section className={`${styles.productComponentsGridSection} section-slate`}>
        <FadeUp className={styles.componentsSectionHeader}>
          <SectionLabel>Engineered Assemblies</SectionLabel>
          <h2 className={styles.componentsSectionTitle}>
            ANY BRAND. ANY ERA. <em>NO EXCUSES.</em>
          </h2>
          <p className={styles.componentsSectionSubtitle}>
            Verified direct drop-in bolt-on interchangeability across major OEM equipment.
          </p>
        </FadeUp>

        <div className={styles.subcomponentsCardsGrid}>
          {application.subComponents.map((comp: SubComponent) => {
            const isOpen = activeId === comp.id

            return (
              <div
                key={comp.id}
                className={`${styles.subcomponentCard} ${isOpen ? styles.isActive : ''}`}
                onClick={() => toggleComponent(comp.id)}
              >
                {/* COMPONENT IMAGE HEADER */}
                <div className={styles.subcomponentImgFrame}>
                  <img
                    src={comp.image}
                    alt={comp.title}
                    className={styles.subcomponentImg}
                    width={616}
                    height={464}
                  />
                  <div className={styles.subcomponentBadgeTag}>
                    <span>{comp.subtitle}</span>
                  </div>
                </div>

                {/* COMPONENT ACCORDION BAR */}
                <div className={styles.subcomponentHeaderBar}>
                  <h3 className={styles.subcomponentTitle}>{comp.title}</h3>
                  <button
                    type="button"
                    className={styles.subcomponentToggleBtn}
                    aria-expanded={isOpen}
                    aria-label={`Toggle ${comp.title}`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`${styles.chevronIcon} ${isOpen ? styles.rotated : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                </div>

                {/* EXPANDABLE ACCORDION DRAWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.subcomponentDrawer}
                    >
                      <p className={styles.drawerDesc}>{comp.description}</p>

                      <div className={styles.drawerSpecsList}>
                        {comp.specs.map((sp, idx) => (
                          <div key={idx} className={styles.drawerSpecRow}>
                            <span className={styles.drawerSpecKey}>{sp.label}:</span>
                            <span className={styles.drawerSpecVal}>{sp.value}</span>
                          </div>
                        ))}
                      </div>

                      <div className={styles.drawerActions}>
                        <Link
                          href="/contact"
                          className={styles.drawerSpecBtn}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Request Drawing / Quote</span>
                          <Arrow />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
