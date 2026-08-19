'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { Arrow, SectionLabel } from './ui'
import { FadeUp } from './motion'
import type { Application, SubComponent } from '@/lib/site-data'

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
    <div className="product-showcase-wrapper">
      {/* 1. EDITORIAL & ENGINEERING SUPPORT (SCREENSHOT 1) */}
      <section className="product-editorial-section section-light">
        <div className="product-editorial-grid">
          {/* LEFT: EDITORIAL COPY */}
          <FadeUp className="product-editorial-left">
            <span className="product-manifesto-eyebrow">
              ANY BRAND. ANY ERA. NO EXCUSES.
            </span>
            <h2 className="product-editorial-title">
              {application.title}
            </h2>

            <div className="product-editorial-paragraphs">
              {application.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* QUICK SPECS CHIPS */}
            <div className="product-specs-chip-row">
              {application.specs.map((spec, i) => (
                <div key={i} className="product-spec-chip">
                  <span className="chip-lbl">{spec.label}</span>
                  <strong className="chip-val">{spec.value}</strong>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* RIGHT: ENGINEERING ASSISTANCE & SUPPORT CARD */}
          <FadeUp delay={0.15} className="product-editorial-right">
            <div className="product-support-card">
              <div className="support-card-header">
                <span className="support-badge">TECHNICAL ASSISTANCE</span>
                <h3>{application.engineeringSupport.title}</h3>
              </div>

              <p className="support-card-desc">
                {application.engineeringSupport.text}
              </p>

              <ul className="support-points-list">
                {application.engineeringSupport.points.map((pt, i) => (
                  <li key={i}>
                    <span className="support-check">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* CARD PREVIEW IMAGE */}
              <div className="support-card-preview-frame">
                <img
                  src={application.engineeringSupport.image}
                  alt={application.engineeringSupport.title}
                  className="support-card-preview-img"
                />
                <div className="support-preview-overlay" />
                <span className="support-preview-tag">
                  CAD SPEC: WG-{application.num}
                </span>
              </div>

              <Link href="/contact" className="support-card-cta">
                <span>Talk to an Engineer</span>
                <Arrow />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 2. INTERACTIVE SUB-COMPONENT ACCORDION GRID (SCREENSHOT 2) */}
      <section className="product-components-grid-section section-slate">
        <FadeUp className="components-section-header">
          <SectionLabel>Engineered Assemblies</SectionLabel>
          <h2 className="components-section-title">
            ANY BRAND. ANY ERA. <em>NO EXCUSES.</em>
          </h2>
          <p className="components-section-subtitle">
            100% direct drop-in bolt-on interchangeability across major OEM equipment.
          </p>
        </FadeUp>

        <div className="subcomponents-cards-grid">
          {application.subComponents.map((comp: SubComponent) => {
            const isOpen = activeId === comp.id

            return (
              <div
                key={comp.id}
                className={`subcomponent-card ${isOpen ? 'is-active' : ''}`}
                onClick={() => toggleComponent(comp.id)}
              >
                {/* COMPONENT IMAGE HEADER */}
                <div className="subcomponent-img-frame">
                  <img
                    src={comp.image}
                    alt={comp.title}
                    className="subcomponent-img"
                  />
                  <div className="subcomponent-badge-tag">
                    <span>{comp.subtitle}</span>
                  </div>
                </div>

                {/* COMPONENT ACCORDION BAR */}
                <div className="subcomponent-header-bar">
                  <h3 className="subcomponent-title">{comp.title}</h3>
                  <button
                    type="button"
                    className="subcomponent-toggle-btn"
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
                      className={`chevron-icon ${isOpen ? 'rotated' : ''}`}
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
                      className="subcomponent-drawer"
                    >
                      <p className="drawer-desc">{comp.description}</p>

                      <div className="drawer-specs-list">
                        {comp.specs.map((sp, idx) => (
                          <div key={idx} className="drawer-spec-row">
                            <span className="drawer-spec-key">{sp.label}:</span>
                            <span className="drawer-spec-val">{sp.value}</span>
                          </div>
                        ))}
                      </div>

                      <div className="drawer-actions">
                        <Link
                          href={`/contact?part=${encodeURIComponent(comp.title)}`}
                          className="drawer-spec-btn"
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
