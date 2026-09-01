'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { Arrow } from '@/components/site/ui'
import { materialGrades, MaterialGrade } from '@/lib/site-data'

export function EditorialMaterialsSwitcher() {
  const [activeCode, setActiveCode] = useState<string>('01')
  const activeGrade = materialGrades.find((g) => g.code === activeCode) || materialGrades[0]

  return (
    <section className="editorial-materials-section">
      <div className="editorial-materials-container">
        {/* LEFT COLUMN: HEADLINE & GRADE SELECTOR LIST */}
        <div className="materials-selector-col">
          <div className="materials-selector-header">
            <div className="materials-eyebrow">
              <span className="eyebrow-pipe" aria-hidden="true" />
              <span>Metallurgical Formulations</span>
            </div>

            <h2 className="materials-main-title">
              Engineered for Specific
              <br />
              <span className="title-muted">Wear Dynamics</span>
            </h2>

            <p className="materials-lead-text">
              Select an engineered alloy grade below to inspect chemical matrix chemistry, micro-hardness ratings, and application telemetry.
            </p>
          </div>

          {/* VERTICAL SELECTOR CARDS */}
          <div className="materials-grades-list" role="tablist" aria-label="Material grades">
            {materialGrades.map((grade) => {
              const isActive = grade.code === activeCode
              return (
                <button
                  key={grade.code}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCode(grade.code)}
                  className={`material-tab-card ${isActive ? 'active' : ''}`}
                >
                  <div className="tab-card-left">
                    <span className="tab-grade-num">{grade.code}</span>
                    <div className="tab-text-wrap">
                      <strong className="tab-grade-name">{grade.name}</strong>
                      <span className="tab-grade-spec">
                        {grade.hardness} · {grade.category.split('(')[0].trim()}
                      </span>
                    </div>
                  </div>

                  <svg
                    className="tab-arrow-indicator"
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
        </div>

        {/* RIGHT COLUMN: ACTIVE ALLOY SPOTLIGHT SHOWCASE */}
        <div className="materials-display-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGrade.code}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="material-spotlight-card"
            >
              {/* SPECIMEN IMAGE FRAME WITH OVERLAY BADGES */}
              <div className="material-image-frame">
                <img
                  src={activeGrade.image}
                  alt={activeGrade.name}
                  className="material-showcase-img"
                />

                <div className="material-image-badges">
                  <span className="spotlight-code-badge">
                    GRADE {activeGrade.code} / 06
                  </span>
                  <span className="spotlight-hardness-badge">
                    {activeGrade.hardness}
                  </span>
                </div>
              </div>

              {/* MATERIAL BODY & TELEMETRY */}
              <div className="material-spotlight-body">
                <span className="spotlight-category-tag">
                  {activeGrade.category}
                </span>

                <h3 className="spotlight-grade-title">{activeGrade.name}</h3>

                <p className="spotlight-grade-desc">{activeGrade.desc}</p>

                {/* 4-CELL TELEMETRY METRICS GRID */}
                <div className="spotlight-telemetry-grid">
                  <div className="telemetry-cell">
                    <span className="telemetry-label">Chemical Matrix</span>
                    <strong className="telemetry-value-mono">
                      {activeGrade.composition}
                    </strong>
                  </div>

                  <div className="telemetry-cell">
                    <span className="telemetry-label">Impact Toughness</span>
                    <strong className="telemetry-value">
                      {activeGrade.impactResistance}
                    </strong>
                  </div>

                  <div className="telemetry-cell">
                    <span className="telemetry-label">Thermal Rating</span>
                    <strong className="telemetry-value">
                      {activeGrade.tempLimit}
                    </strong>
                  </div>

                  <div className="telemetry-cell">
                    <span className="telemetry-label">Primary Application</span>
                    <strong className="telemetry-value">
                      {activeGrade.primaryUse}
                    </strong>
                  </div>
                </div>

                {/* ENGINEERING HIGHLIGHTS */}
                <div className="spotlight-highlights-list">
                  {activeGrade.highlights.map((item, idx) => (
                    <div key={idx} className="spotlight-highlight-item">
                      <span className="highlight-check" aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* ACTION CTA ROW */}
                <div className="spotlight-actions-row">
                  <Link
                    href={`/contact?grade=${activeGrade.code}`}
                    className="spotlight-quote-btn"
                  >
                    <span>Request Grade {activeGrade.code} Quote</span>
                    <span className="btn-corner-arrow">⌝</span>
                  </Link>

                  <Link href="/custom-parts" className="spotlight-sub-link">
                    <span>Custom drawing submission</span>
                    <Arrow />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
