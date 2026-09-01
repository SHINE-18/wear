'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { Arrow, Button, SectionLabel } from '@/components/site/ui'

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
  },
  {
    id: 'small-batch',
    stepNum: '03',
    title: 'Small-Batch Flexibility',
    subtitle: '1–10 Units With No Minimums',
    category: 'RAPID FOUNDRY PRODUCTION',
    heading: 'Zero Minimum Order Barrier for Emergency & Trial Runs',
    description: 'Rapid foundry pattern tooling, mold simulation, and tight-tolerance casting for 1–10 unit prototype batches, field trial sets, or emergency breakdown replacements dispatched in 4–6 weeks.',
    specs: [
      { label: 'Minimum Order', value: '1 Unit Prototype Supported' },
      { label: 'Pattern Tooling', value: 'Rapid CNC High-Density Poly' },
      { label: 'Dispatch Window', value: '4–6 Weeks Emergency Line' },
      { label: 'Batch Scaling', value: '1 to 500+ Restocking Contracts' },
    ],
    highlights: [
      'Low tooling costs for one-off custom components',
      'Field-trial testing sets to prove wear-life before plant-wide rollout',
      'Scheduled recurring subscription restocking for zero stockouts',
    ],
    image: '/images/wearguard-hero-3d.png',
    imageBadgeTop: 'BATCH: 1–10 UNITS',
    imageBadgeBottom: 'Rapid Dispatch Facility',
    ctaText: 'Start a Small-Batch Run',
    ctaHref: '/contact',
  },
]

export function CustomPartsOverview() {
  const [activeTab, setActiveTab] = useState<string>('reverse-engineering')
  const [mobileOpenStep, setMobileOpenStep] = useState<string>('reverse-engineering')
  const currentStep = customSteps.find((s) => s.id === activeTab) || customSteps[0]

  const toggleMobileStep = (id: string) => {
    setMobileOpenStep((prev) => (prev === id ? '' : id))
  }

  return (
    <section id="custom-parts" className="custom-interactive-section">
      <div className="custom-interactive-container">
        {/* TOP SECTION HEADER */}
        <div className="custom-interactive-header">
          <SectionLabel>Custom parts &amp; engineering</SectionLabel>
          <h2>
            Engineered for any OEM part.
            <br />
            <em>Built for extreme service.</em>
          </h2>
          <p className="custom-interactive-lead">
            WearGuard provides 3D laser-scanned reverse engineering, custom metallurgy, and small-batch flexibility (1–10 units) to eliminate downtime on any plant machinery.
          </p>
        </div>

        {/* --- DESKTOP VIEW: 3-STEP TAB SWITCHER & SHOWCASE STAGE --- */}
        <div className="custom-desktop-only">
          <div className="custom-steps-nav" role="tablist" aria-label="Custom engineering process steps">
            {customSteps.map((step) => {
              const isActive = step.id === activeTab
              return (
                <button
                  key={step.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(step.id)}
                  className={`custom-step-tab ${isActive ? 'active' : ''}`}
                >
                  <div className="step-tab-content">
                    <div className="step-tab-text">
                      <strong>{step.title}</strong>
                      <span>{step.subtitle}</span>
                    </div>
                  </div>

                  <svg
                    className="step-tab-arrow"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </button>
              )
            })}
          </div>

          {/* ANIMATED ACTIVE STEP SHOWCASE STAGE */}
          <div className="custom-step-display-stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="custom-showcase-card"
              >
                {/* LEFT COLUMN: TECHNICAL SPECS & ACTIONS */}
                <div className="custom-showcase-content">
                  <span className="custom-step-tag">{currentStep.category}</span>
                  <h3 className="custom-step-heading">{currentStep.heading}</h3>
                  <p className="custom-step-desc">{currentStep.description}</p>

                  {/* 4-CELL TELEMETRY SPECS GRID */}
                  <div className="custom-telemetry-grid">
                    {currentStep.specs.map((sp, idx) => (
                      <div key={idx} className="custom-telemetry-cell">
                        <span className="telemetry-label">{sp.label}</span>
                        <strong className="telemetry-val">{sp.value}</strong>
                      </div>
                    ))}
                  </div>

                  {/* HIGHLIGHTS CHECKLIST */}
                  <div className="custom-highlights-list">
                    {currentStep.highlights.map((h, i) => (
                      <div key={i} className="custom-highlight-item">
                        <span className="highlight-check" aria-hidden="true">✓</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* ACTIONS ROW */}
                  <div className="custom-actions-row">
                    <Button href={currentStep.ctaHref}>
                      {currentStep.ctaText}
                    </Button>
                    <Link href="/contact" className="about-sub-link">
                      <span>Request technical consultation</span>
                      <Arrow />
                    </Link>
                  </div>
                </div>

                {/* RIGHT COLUMN: RICH VISUAL MEDIA */}
                <div className="custom-showcase-visual">
                  <div className={`custom-visual-box ${currentStep.id === 'reverse-engineering' ? 'is-scanning' : ''}`}>
                    <img
                      src={currentStep.image}
                      alt={currentStep.title}
                      className="custom-visual-image custom-visual-base"
                    />

                    {currentStep.id === 'reverse-engineering' && (
                      <>
                        <img
                          src="/images/custom-casting-cad-scan.jpg"
                          alt="3D CAD laser reverse-engineering scan"
                          className="custom-visual-image custom-visual-cad-scan"
                        />

                        <div className="custom-laser-scan-container" aria-hidden="true">
                          <div className="laser-scan-mesh" />
                          <div className="laser-scan-beam-wrap">
                            <div className="laser-scan-trail" />
                            <div className="laser-scan-beam" />
                          </div>
                          <div className="laser-scan-hud">
                            <div className="laser-hud-top">
                              <span className="laser-hud-live-dot" />
                              <span>3D CMM SCANNING ACTIVE</span>
                            </div>
                            <div className="laser-hud-coords">
                              <span>X: 428.14mm</span>
                              <span>Y: 890.52mm</span>
                              <span>Z: 14.00mm</span>
                            </div>
                          </div>
                          <div className="laser-scan-reticle reticle-tl" />
                          <div className="laser-scan-reticle reticle-tr" />
                          <div className="laser-scan-reticle reticle-bl" />
                          <div className="laser-scan-reticle reticle-br" />
                        </div>
                      </>
                    )}

                    <div className="custom-visual-top-badge">
                      <span>{currentStep.imageBadgeTop}</span>
                    </div>
                    <div className="custom-visual-bottom-badge">
                      <span className="badge-tag">WEARGUARD ENGINEERING</span>
                      <strong>{currentStep.imageBadgeBottom}</strong>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- MOBILE VIEW: INDEPENDENT COLLAPSIBLE ACCORDION CARDS --- */}
        <div className="custom-mobile-accordion-group">
          {customSteps.map((step) => {
            const isOpen = mobileOpenStep === step.id

            return (
              <div key={step.id} className={`mobile-step-accordion-card ${isOpen ? 'is-open' : ''}`}>
                {/* ACCORDION HEADER BUTTON */}
                <button
                  type="button"
                  className="mobile-step-accordion-header"
                  onClick={() => toggleMobileStep(step.id)}
                  aria-expanded={isOpen}
                >
                  <div className="accordion-title-wrap">
                    <span className="accordion-step-num">{step.stepNum}</span>
                    <div className="accordion-titles">
                      <strong>{step.title}</strong>
                      <span>{step.subtitle}</span>
                    </div>
                  </div>
                  <span className="accordion-chevron" aria-hidden="true">
                    {isOpen ? '▲' : '▼'}
                  </span>
                </button>

                {/* ACCORDION EXPANDABLE CONTENT */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
                      className="mobile-step-accordion-body"
                    >
                      <div className="mobile-step-inner-content">
                        <span className="custom-step-tag">{step.category}</span>
                        <h4 className="mobile-step-heading">{step.heading}</h4>
                        <p className="mobile-step-desc">{step.description}</p>

                        {/* 4-CELL TELEMETRY MATRIX */}
                        <div className="mobile-telemetry-grid">
                          {step.specs.map((sp, idx) => (
                            <div key={idx} className="mobile-telemetry-cell">
                              <span className="telemetry-label">{sp.label}</span>
                              <strong className="telemetry-val">{sp.value}</strong>
                            </div>
                          ))}
                        </div>

                        {/* HIGHLIGHTS */}
                        <div className="mobile-highlights-list">
                          {step.highlights.map((h, i) => (
                            <div key={i} className="mobile-highlight-item">
                              <span className="highlight-check" aria-hidden="true">✓</span>
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>

                        {/* MEDIA IMAGE */}
                        <div className="mobile-accordion-image-box">
                          <img src={step.image} alt={step.title} className="mobile-accordion-img" />
                          <div className="mobile-image-badge">
                            <span>{step.imageBadgeTop}</span>
                          </div>
                        </div>

                        {/* CTA ACTION */}
                        <div className="mobile-step-action">
                          <Button href={step.ctaHref}>
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
