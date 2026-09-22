'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, AnimatePresence } from 'motion/react'
import { Button, SectionLabel } from '@/components/site/ui'
import styles from './custom-parts-overview.module.css'

interface CustomStep {
  id: string
  stepNum: string
  title: string
  subtitle: string
  category: string
  heading: string
  description: string
  specs: { label: string; value: string }[]
  highlights: string[]
  image: string
  imageBadgeTop: string
  imageBadgeBottom: string
  ctaText: string
  ctaHref: string
}

const customSteps: CustomStep[] = [
  {
    id: 'reverse-engineering',
    stepNum: '01',
    title: '3D Laser Scanning & CAD',
    subtitle: '100% Guaranteed OEM Match',
    category: 'Reverse Engineering & CAD',
    heading: 'Guaranteed 100% Bolt-On Fit Without OEM Drawings',
    description: 'High-precision 3D coordinate laser scanning of worn or OEM parts to capture exact working geometries, bolt patterns, and wear profiles to ±0.05mm tolerance without original manufacturer drawings.',
    specs: [
      { label: 'Scanning Accuracy', value: '±0.05mm CMM Laser' },
      { label: 'Engineering Output', value: '3D CAD & STEP Models' },
      { label: 'Drawing Turnaround', value: '48-Hour Approval' },
    ],
    highlights: [
      'Eliminates OEM lock-in and excessive replacement lead times',
      'Guaranteed 100% direct drop-in bolt fitment for all machinery brands',
    ],
    image: '/images/workplace-cad-meeting.jpg',
    imageBadgeTop: 'TOLERANCE ±0.05mm',
    imageBadgeBottom: 'Precision CMM Scanning',
    ctaText: 'Explore 3D Scanning Capabilities',
    ctaHref: '/custom-parts',
  },
  {
    id: 'alloy-formulation',
    stepNum: '02',
    title: 'Application-Tailored Alloys',
    subtitle: 'Cr 15–28%, Ni-Hard & Manganese',
    category: 'Metallurgical Formulation',
    heading: 'Bespoke Metallurgy Formulated for Your Exact Wear Zone',
    description: 'Cross-sectional wear analysis and custom chemistry formulation matched to your operating wear dynamics (high kinetic impact, severe quartz abrasion, high heat, or acidic slurry).',
    specs: [
      { label: 'Hardness Range', value: '400–680 BHN (42–65 HRC)' },
      { label: 'Alloy Chemistry', value: 'Cr 15–28%, Ni-Hard & Mn' },
      { label: 'Campaign Life', value: '+45% to +70% Over OEM' },
    ],
    highlights: [
      'Hyper-eutectic chromium white irons for extreme aggregate gouging',
      'Work-hardening austenitic manganese for severe crushing impact',
    ],
    image: '/images/materials-cast-specimen.jpg',
    imageBadgeTop: 'HARDNESS: 600–680 BHN',
    imageBadgeBottom: 'Custom Metallurgy Foundry',
    ctaText: 'Explore Alloy Chemistry',
    ctaHref: '/materials',
  },
  {
    id: 'small-batch',
    stepNum: '03',
    title: 'Small-Batch Flexibility',
    subtitle: '1–10 Units With No Minimums',
    category: 'Rapid Foundry Production',
    heading: 'Zero Minimum Order Barrier for Emergency & Trial Runs',
    description: 'Rapid pattern tooling, mold simulation, and tight-tolerance casting for 1–10 unit prototype batches, field trial sets, or emergency breakdown replacements shipped in 6–8 weeks.',
    specs: [
      { label: 'Batch Size', value: '1–10 Units Supported' },
      { label: 'Pattern Tooling', value: 'Rapid High-Density Poly' },
      { label: 'Lead Time', value: '6–8 Weeks Direct Delivery' },
    ],
    highlights: [
      'Low tooling costs for one-off custom components and trial sets',
      'Field testing sets to prove wear-life before plant-wide rollout',
    ],
    image: '/images/custom-foundry-batch.jpg',
    imageBadgeTop: 'BATCH: 1–10 UNITS',
    imageBadgeBottom: 'Rapid Dispatch Facility',
    ctaText: 'Start a Small-Batch Run',
    ctaHref: '/contact',
  },
]

export function CustomPartsOverview() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [mobileOpenStep, setMobileOpenStep] = useState<string>('reverse-engineering')

  // Pinned scroll-scrubbing progress: 0 to 1 over the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Track active index based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      if (progress < 0.36) {
        setActiveIndex(0)
      } else if (progress < 0.70) {
        setActiveIndex(1)
      } else {
        setActiveIndex(2)
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const scrollToStep = (index: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const containerTop = rect.top + scrollTop
    const containerHeight = containerRef.current.offsetHeight
    const windowHeight = window.innerHeight

    const targetProgress = index === 0 ? 0.05 : index === 1 ? 0.50 : 0.95
    const targetScrollY = containerTop + targetProgress * (containerHeight - windowHeight)

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    })
  }

  const toggleMobileStep = (id: string) => {
    setMobileOpenStep((prev) => (prev === id ? '' : id))
  }

  return (
    <section id="custom-parts" ref={containerRef} className={styles.customSectionWrapper}>
      {/* --- DESKTOP VIEW: STICKY 100VH STAGE WITH CLEAN CIRCULAR FRAME & REEL --- */}
      <div className={styles.customStickyStage}>
        {/* CAD BACKGROUND GRID */}
        <div className={styles.cadGridBackground} aria-hidden="true" />

        <div className={styles.stageContentWrap}>
          {/* LEFT COLUMN: CLEAN INDUSTRIAL EDITORIAL */}
          <div className={styles.leftColumn}>
            {/* STATIC TOP HEADER */}
            <div className={styles.leftHeader}>
              <SectionLabel>Custom parts &amp; engineering</SectionLabel>
              <h2 className={styles.mainTitle}>
                Engineered for any OEM part.
                <br />
                <em>Built for extreme service.</em>
              </h2>
            </div>

            {/* STEP PROGRESS SELECTOR */}
            <div className={styles.stepProgressDial}>
              <div className={styles.stepPillsGroup}>
                {customSteps.map((step, idx) => (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => scrollToStep(idx)}
                    className={`${styles.stepPillBtn} ${activeIndex === idx ? styles.activePill : ''}`}
                    aria-label={`Jump to ${step.title}`}
                  >
                    <span className={styles.pillNum}>{step.stepNum}</span>
                    <span className={styles.pillLabel}>{step.title.split('—')[0].split('&')[0].trim()}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* VERTICAL REEL VIEWPORT: Streamlined editorial copy */}
            <div className={styles.reelViewport}>
              <div
                className={styles.reelTrack}
                style={{
                  transform: `translateY(-${activeIndex * 100}%)`,
                }}
              >
                {customSteps.map((step, idx) => (
                  <div key={step.id} className={styles.reelCardItem} aria-hidden={activeIndex !== idx}>
                    <span className={styles.stepCategoryTag}>{step.category}</span>
                    <h3 className={styles.stepHeading}>{step.heading}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>

                    {/* 3-CELL STREAMLINED METRICS */}
                    <div className={styles.telemetryGrid}>
                      {step.specs.map((sp, sIdx) => (
                        <div key={sIdx} className={styles.telemetryCell}>
                          <span className={styles.telemetryLabel}>{sp.label}</span>
                          <strong className={styles.telemetryValue}>{sp.value}</strong>
                        </div>
                      ))}
                    </div>

                    {/* HIGHLIGHT CHECKPOINTS */}
                    <div className={styles.highlightsList}>
                      {step.highlights.map((item, hIdx) => (
                        <div key={hIdx} className={styles.highlightRow}>
                          <span className={styles.highlightCheck} aria-hidden="true">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* ACTION CTA BUTTON */}
                    <div className={styles.actionsRow}>
                      <div className={styles.ctaWrapper}>
                        <Button href={step.ctaHref} magnetic={false}>
                          {step.ctaText}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CLEAN CIRCULAR INDUSTRIAL PHOTOGRAPHY FRAME */}
          <div className={styles.rightColumn}>
            <div className={styles.pictureDiscStage}>
              <div className={styles.fullPictureDisc}>
                <div className={styles.discImagesContainer}>
                  {customSteps.map((step, idx) => (
                    <motion.img
                      key={step.id}
                      src={step.image}
                      alt={step.title}
                      className={styles.discFullImage}
                      initial={false}
                      animate={{
                        opacity: activeIndex === idx ? 1 : 0,
                        scale: activeIndex === idx ? 1 : 1.04,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE VIEW: INDEPENDENT TOUCH-OPTIMIZED ACCORDION (< 960px) --- */}
      <div className={styles.mobileSection}>
        <div className={styles.mobileHeader}>
          <SectionLabel>Custom parts &amp; engineering</SectionLabel>
          <h2>
            Engineered for any OEM part.
            <br />
            <em>Built for extreme service.</em>
          </h2>
          <p className={styles.mobileLead}>
            3D laser-scanned reverse engineering, custom metallurgy, and small-batch flexibility (1–10 units) to eliminate downtime on any plant machinery.
          </p>
        </div>

        <div className={styles.mobileAccordionGroup}>
          {customSteps.map((step) => {
            const isOpen = mobileOpenStep === step.id

            return (
              <div
                key={step.id}
                className={`${styles.mobileAccordionCard} ${isOpen ? styles.isOpen : ''}`}
              >
                <button
                  type="button"
                  className={styles.mobileAccordionHeader}
                  onClick={() => toggleMobileStep(step.id)}
                  aria-expanded={isOpen}
                >
                  <div className={styles.accordionTitleWrap}>
                    <span className={styles.accordionStepNum}>{step.stepNum}</span>
                    <div className={styles.accordionTitles}>
                      <strong>{step.title}</strong>
                      <span>{step.subtitle}</span>
                    </div>
                  </div>
                  <span className={styles.accordionChevron} aria-hidden="true">
                    {isOpen ? '▲' : '▼'}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.mobileAccordionBody}
                    >
                      <div className={styles.mobileBodyInner}>
                        <span className={styles.stepCategoryTag}>{step.category}</span>
                        <h4 className={styles.mobileStepHeading}>{step.heading}</h4>
                        <p className={styles.mobileStepDesc}>{step.description}</p>

                        <div className={styles.mobileImgFrame}>
                          <img
                            src={step.image}
                            alt={step.title}
                            className={styles.mobileImg}
                            width={616}
                            height={464}
                          />
                        </div>

                        <div className={styles.telemetryGrid}>
                          {step.specs.map((sp, idx) => (
                            <div key={idx} className={styles.telemetryCell}>
                              <span className={styles.telemetryLabel}>{sp.label}</span>
                              <strong className={styles.telemetryValue}>{sp.value}</strong>
                            </div>
                          ))}
                        </div>

                        <div className={styles.highlightsList}>
                          {step.highlights.map((h, i) => (
                            <div key={i} className={styles.highlightRow}>
                              <span className={styles.highlightCheck} aria-hidden="true">✓</span>
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>

                        <div className={styles.mobileAction}>
                          <Button href={step.ctaHref} magnetic={false}>
                            {step.ctaText}
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
