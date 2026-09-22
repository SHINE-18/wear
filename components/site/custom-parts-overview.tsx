'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react'
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
  angleDeg: number
}

const customSteps: CustomStep[] = [
  {
    id: 'reverse-engineering',
    stepNum: '01',
    title: '3D Laser Scanning & CAD',
    subtitle: '100% Guaranteed OEM Match',
    category: 'REVERSE ENGINEERING & 3D SCANNING',
    heading: 'Guaranteed 100% Bolt-On Interchangeability Without OEM Drawings',
    description: 'High-precision coordinate laser scanning of worn or OEM parts to capture exact working geometries, bolt patterns, and wear profiles with ±0.05mm tolerance without needing original manufacturer drawings.',
    specs: [
      { label: 'Scanning Accuracy', value: '±0.05mm CMM Laser' },
      { label: 'Input Formats', value: 'Physical Sample, 2D DWG, or CAD' },
      { label: 'Deliverables', value: '3D SolidWorks, STEP, Parasolid' },
      { label: 'Turnaround', value: '48-Hour Drawing Approval' },
    ],
    highlights: [
      'Eliminates OEM lock-in and excessive replacement lead times',
      'Optimizes original part metallurgy to fix premature fracture zones',
      'Guaranteed 100% direct drop-in bolt fitment for all machinery brands',
    ],
    image: '/images/custom-casting-engineering.jpg',
    imageBadgeTop: 'TOLERANCE ±0.05mm',
    imageBadgeBottom: 'Precision CNC & Laser Inspection',
    ctaText: 'Explore 3D Scanning Capabilities',
    ctaHref: '/custom-parts',
    angleDeg: 0,
  },
  {
    id: 'alloy-formulation',
    stepNum: '02',
    title: 'Application-Tailored Alloys',
    subtitle: 'Cr 15–28%, Ni-Hard & Manganese',
    category: 'METALLURGICAL FORMULATION',
    heading: 'Bespoke Metallurgy Formulated for Your Exact Wear Zone',
    description: 'Cross-sectional wear analysis and custom chemistry formulation matched to your operating wear dynamics (high kinetic impact, severe quartz abrasion, high temperature, or acidic corrosion).',
    specs: [
      { label: 'Hardness Range', value: '400–680 BHN (42–65 HRC)' },
      { label: 'Alloy Matrix', value: 'Cr 15–28%, Ni-Hard, Mn 12–18%' },
      { label: 'Wear Extension', value: '45%–70% Over Standard OEM' },
      { label: 'Quality Assurance', value: 'Ultrasonic & Hardness Certified' },
    ],
    highlights: [
      'Hyper-eutectic chromium white irons for extreme aggregate gouging',
      'Work-hardening austenitic manganese for severe crushing impact',
      'Custom controlled heat-treatment cycles for stress-relief longevity',
    ],
    image: '/images/hardfaced-plate.webp',
    imageBadgeTop: 'HARDNESS: 600–680 BHN',
    imageBadgeBottom: 'Custom Metallurgy Foundry',
    ctaText: 'Explore Alloy Chemistry',
    ctaHref: '/materials',
    angleDeg: -120,
  },
  {
    id: 'small-batch',
    stepNum: '03',
    title: 'Small-Batch Flexibility',
    subtitle: '1–10 Units With No Minimums',
    category: 'RAPID FOUNDRY PRODUCTION',
    heading: 'Zero Minimum Order Barrier for Emergency & Trial Runs',
    description: 'Rapid foundry pattern tooling, mold simulation, and tight-tolerance casting for 1–10 unit prototype batches, field trial sets, or emergency breakdown replacements dispatched in 6–8 weeks.',
    specs: [
      { label: 'Minimum Order', value: '1 Unit Prototype Supported' },
      { label: 'Pattern Tooling', value: 'Rapid CNC High-Density Poly' },
      { label: 'Dispatch Window', value: '6–8 Weeks Dispatch' },
      { label: 'Batch Scaling', value: '1 to 500+ Restocking Contracts' },
    ],
    highlights: [
      'Low tooling costs for one-off custom components',
      'Field-trial testing sets to prove wear-life before plant-wide rollout',
      'Scheduled recurring subscription restocking for zero stockouts',
    ],
    image: '/images/custom-foundry-batch.jpg',
    imageBadgeTop: 'BATCH: 1–10 UNITS',
    imageBadgeBottom: 'Rapid Dispatch Facility',
    ctaText: 'Start a Small-Batch Run',
    ctaHref: '/contact',
    angleDeg: -240,
  },
]

export function CustomPartsOverview() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [mobileOpenStep, setMobileOpenStep] = useState<string>('reverse-engineering')

  // Pinned scroll-scrubbing progress: 0 to 1 over the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Subtle continuous disc rotation in place linked to scroll for tactile responsiveness
  const rawContinuousRotation = useTransform(scrollYProgress, [0, 1], [0, -180])
  const continuousRotation = useSpring(rawContinuousRotation, { stiffness: 120, damping: 24, mass: 0.8 })

  // Track discrete active index based on scroll progress
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

  const currentStep = customSteps[activeIndex]

  return (
    <section id="custom-parts" ref={containerRef} className={styles.customSectionWrapper}>
      {/* --- DESKTOP VIEW: STICKY 100VH STAGE WITH STATIONARY DISC & REEL --- */}
      <div className={styles.customStickyStage}>
        {/* CAD BACKGROUND GRID */}
        <div className={styles.cadGridBackground} aria-hidden="true" />

        <div className={styles.stageContentWrap}>
          {/* LEFT COLUMN: OPEN ARCHITECTURAL EDITORIAL + REEL TELEMETRY */}
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

            {/* OPEN STEP PROGRESS TRACKER */}
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

            {/* VERTICAL REEL VIEWPORT: Text translates vertically on scroll */}
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

                    {/* 4-CELL TELEMETRY SPECS GRID */}
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

                    {/* ACTIONS ROW WITH LEFT-TO-RIGHT SWEEP CTA */}
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

          {/* RIGHT COLUMN: STATIONARY DISC (STAYS FIRMLY IN PLACE, ONLY IMAGE CHANGES INSIDE) */}
          <div className={styles.rightColumn}>
            {/* THE STATIONARY FULL PICTURE DISC */}
            <div className={styles.pictureDiscStage}>
              <div className={styles.fullPictureDisc}>
                {/* 1. IMAGES CONTAINER: Crossfade smoothly inside the stationary disc */}
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
                        scale: activeIndex === idx ? 1 : 1.05,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  ))}
                </div>

                {/* 2. ROTATING CD TEXTURES (SPINS IN PLACE AS YOU SCROLL) */}
                <motion.div
                  className={styles.discRotaryOverlayTrack}
                  style={{ rotate: continuousRotation }}
                >
                  {/* CONCENTRIC CD GROOVES */}
                  <div className={styles.discGrooveSurface} />

                  {/* IRIDESCENT LASER SHEEN */}
                  <div className={styles.discIridescentSheen} />

                  {/* 360° CALIBRATED RIM GRADUATIONS */}
                  <div className={styles.discOuterBezel} />
                  <div className={styles.rimGraduations}>
                    {Array.from({ length: 36 }).map((_, i) => (
                      <span
                        key={i}
                        className={`${styles.rimTick} ${i % 3 === 0 ? styles.rimMajorTick : ''}`}
                        style={{ transform: `rotate(${i * 10}deg)` }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* 3. LASER SCANNING BEAM ON STEP 1 */}
                <AnimatePresence>
                  {currentStep.id === 'reverse-engineering' && (
                    <motion.div
                      key="laser-overlay"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className={styles.fullDiscLaserOverlay}
                    >
                      <div className={styles.laserLine} />
                      <div className={styles.laserGlow} />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 4. AUTHENTIC CD CENTER SPINDLE HOLE & CLAMP RING */}
                <div className={styles.cdCenterHub}>
                  <div className={styles.cdClampRing}>
                    <div className={styles.cdMirrorBand} />
                    <div className={styles.cdCenterHole} />
                  </div>
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
