'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { Arrow, Button } from '@/components/site/ui'
import { materialGrades, MaterialGrade } from '@/lib/site-data'

type FilterCategory = 'ALL' | 'STEEL PLATES' | 'CAST IRONS' | 'COMPOSITES' | 'CCO OVERLAY'

const FILTER_TABS: { id: FilterCategory; label: string }[] = [
  { id: 'ALL', label: 'ALL FORMULATIONS' },
  { id: 'STEEL PLATES', label: 'THROUGH-HARDENED PLATES' },
  { id: 'CAST IRONS', label: 'HIGH-CHROME & NI-HARD CASTINGS' },
  { id: 'COMPOSITES', label: 'CERAMIC-RUBBER COMPOSITES' },
  { id: 'CCO OVERLAY', label: 'BI-METALLIC CCO CLADDING' },
]

export function MaterialsMatrix() {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('ALL')
  const [activeCode, setActiveCode] = useState<string>('01')

  const filteredGrades = materialGrades.filter((g) => {
    if (selectedFilter === 'ALL') return true
    if (selectedFilter === 'STEEL PLATES') return g.code === '01' || g.code === '02'
    if (selectedFilter === 'CAST IRONS') return g.code === '03' || g.code === '04'
    if (selectedFilter === 'COMPOSITES') return g.code === '05'
    if (selectedFilter === 'CCO OVERLAY') return g.code === '06'
    return true
  })

  const activeGrade = materialGrades.find((g) => g.code === activeCode) || materialGrades[0]

  return (
    <div className="materials-matrix-wrapper">
      {/* 1. FILTER BAR WITH MINIMAL DROPDOWN & TABS */}
      <div className="matrix-filter-bar">
        <div className="matrix-dropdown-select-wrap">
          <label htmlFor="matrix-category-select" className="filter-bar-label">
            CLASSIFICATION:
          </label>
          <div className="dropdown-select-box">
            <select
              id="matrix-category-select"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value as FilterCategory)}
              className="clean-dropdown-select"
            >
              {FILTER_TABS.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </select>
            <span className="dropdown-arrow-icon" aria-hidden="true">▾</span>
          </div>
        </div>

        <div className="matrix-tabs-group" role="tablist" aria-label="Alloy categories">
          {FILTER_TABS.map((tab) => {
            const isActive = selectedFilter === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedFilter(tab.id)}
                className={`matrix-tab-btn ${isActive ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* --- DESKTOP VIEW: HIGH-DENSITY SWISS ALLOY MATRIX TABLE & SPOTLIGHT --- */}
      <div className="materials-desktop-only">
        {/* 2. HIGH-DENSITY TECHNICAL ALLOY MATRIX TABLE */}
        <div className="matrix-table-container">
          <table className="matrix-table" aria-label="WearGuard Metallurgical Formulations">
            <thead>
              <tr>
                <th scope="col" className="col-grade">ALLOY GRADE</th>
                <th scope="col" className="col-hardness">HARDNESS RATING</th>
                <th scope="col" className="col-chemistry">CHEMICAL MATRIX</th>
                <th scope="col" className="col-impact">IMPACT TOUGHNESS</th>
                <th scope="col" className="col-temp">THERMAL LIMIT</th>
                <th scope="col" className="col-action">SPEC SHEET</th>
              </tr>
            </thead>
            <tbody>
              {filteredGrades.map((grade) => {
                const isSelected = grade.code === activeCode

                return (
                  <tr
                    key={grade.code}
                    className={`matrix-row ${isSelected ? 'row-active' : ''}`}
                    onClick={() => setActiveCode(grade.code)}
                  >
                    <td className="col-grade">
                      <div className="grade-title-cell">
                        <div className="grade-meta-text">
                          <strong className="grade-name">{grade.name}</strong>
                          <span className="grade-cat-tag">{grade.category}</span>
                        </div>
                      </div>
                    </td>

                    <td className="col-hardness">
                      <div className="hardness-cell">
                        <span className="hardness-val">{grade.hardness}</span>
                        <div className="hardness-bar-track">
                          <div
                            className="hardness-bar-fill"
                            style={{
                              width:
                                grade.code === '01'
                                  ? '65%'
                                  : grade.code === '02'
                                  ? '75%'
                                  : grade.code === '03'
                                  ? '95%'
                                  : grade.code === '04'
                                  ? '90%'
                                  : grade.code === '05'
                                  ? '100%'
                                  : '92%',
                            }}
                          />
                        </div>
                      </div>
                    </td>

                    <td className="col-chemistry">
                      <span className="chemistry-text">{grade.composition}</span>
                    </td>

                    <td className="col-impact">
                      <span className="impact-text">{grade.impactResistance}</span>
                    </td>

                    <td className="col-temp">
                      <span className="temp-text">{grade.tempLimit}</span>
                    </td>

                    <td className="col-action">
                      <button
                        type="button"
                        className={`inspect-spec-btn ${isSelected ? 'btn-selected' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          setActiveCode(grade.code)
                        }}
                      >
                        <span>{isSelected ? 'Selected' : 'Inspect'}</span>
                        <span className="btn-arrow" aria-hidden="true">→</span>
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* 3. ACTIVE ALLOY TECHNICAL SPOTLIGHT DRAWER (NO PHOTO - PURE ENGINEERING DATA) */}
        <div className="active-grade-spotlight-drawer">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGrade.code}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="grade-spotlight-inner"
            >
              {/* TECHNICAL HEADER BAR */}
              <div className="spotlight-tech-header">
                <div className="tech-header-left">
                  <span className="spotlight-badge-num">Alloy Specification</span>
                  <span className="spotlight-badge-cat">{activeGrade.category}</span>
                </div>
                <div className="tech-header-right">
                  <span className="spotlight-hardness-chip">{activeGrade.hardness}</span>
                </div>
              </div>

              {/* MAIN SPEC CONTENT GRID */}
              <div className="spotlight-main-grid">
                {/* LEFT COLUMN: TITLE, METALLURGICAL SUMMARY & HIGHLIGHTS */}
                <div className="spotlight-desc-col">
                  <h3 className="spotlight-title">{activeGrade.name}</h3>
                  <p className="spotlight-desc-text">{activeGrade.desc}</p>

                  <div className="spotlight-highlights-block">
                    <span className="highlights-title">Engineering Capabilities</span>
                    <ul className="highlights-checklist">
                      {activeGrade.highlights.map((item, i) => (
                        <li key={i}>
                          <span className="check-icon" aria-hidden="true">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* RIGHT COLUMN: 4-CELL TELEMETRY MATRIX */}
                <div className="spotlight-telemetry-col">
                  <div className="telemetry-box-grid">
                    <div className="telemetry-box">
                      <span className="t-box-lbl">Chemical Composition</span>
                      <span className="t-box-val-clean">{activeGrade.composition}</span>
                    </div>

                    <div className="telemetry-box">
                      <span className="t-box-lbl">Impact &amp; Shock Capacity</span>
                      <strong className="t-box-val">{activeGrade.impactResistance}</strong>
                    </div>

                    <div className="telemetry-box">
                      <span className="t-box-lbl">Continuous Thermal Limit</span>
                      <strong className="t-box-val">{activeGrade.tempLimit}</strong>
                    </div>

                    <div className="telemetry-box">
                      <span className="t-box-lbl">Primary Target Equipment</span>
                      <strong className="t-box-val">{activeGrade.primaryUse}</strong>
                    </div>
                  </div>

                  {/* ACTION BAR */}
                  <div className="spotlight-actions-bar">
                    <Button href={`/contact?grade=${activeGrade.code}`}>
                      Request {activeGrade.name} Quote
                    </Button>
                    <Link href="/custom-parts" className="about-sub-link">
                      <span>Submit CAD Drawing for Casting / Fabrication</span>
                      <Arrow />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* --- MOBILE VIEW: COLLAPSIBLE MATERIAL ACCORDION CARDS --- */}
      <div className="materials-mobile-accordion-group">
        {filteredGrades.map((grade) => {
          const isOpen = activeCode === grade.code

          return (
            <div
              key={grade.code}
              className={`mobile-material-accordion-card ${isOpen ? 'is-open' : ''}`}
            >
              {/* ACCORDION TRIGGER */}
              <button
                type="button"
                className="mobile-mat-header-btn"
                onClick={() => setActiveCode(isOpen ? '' : grade.code)}
                aria-expanded={isOpen}
              >
                <div className="mobile-mat-header-left">
                  <strong className="mobile-mat-name">{grade.name}</strong>
                  <div className="mobile-mat-chips">
                    <span className="mobile-mat-cat">{grade.category}</span>
                    <span className="mobile-mat-hardness">{grade.hardness}</span>
                  </div>
                </div>
                <span className="mobile-mat-chevron" aria-hidden="true">
                  {isOpen ? '▲' : '▼'}
                </span>
              </button>

              {/* ACCORDION EXPANDABLE BODY */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                    className="mobile-mat-drawer-body"
                  >
                    <div className="mobile-mat-drawer-inner">
                      <p className="mobile-mat-desc">{grade.desc}</p>

                      {/* 4-CELL TELEMETRY */}
                      <div className="mobile-mat-telemetry">
                        <div className="mat-tele-cell">
                          <span className="tele-lbl">Chemistry</span>
                          <span className="tele-val">{grade.composition}</span>
                        </div>
                        <div className="mat-tele-cell">
                          <span className="tele-lbl">Impact</span>
                          <span className="tele-val">{grade.impactResistance}</span>
                        </div>
                        <div className="mat-tele-cell">
                          <span className="tele-lbl">Thermal</span>
                          <span className="tele-val">{grade.tempLimit}</span>
                        </div>
                        <div className="mat-tele-cell">
                          <span className="tele-lbl">Primary Use</span>
                          <span className="tele-val">{grade.primaryUse}</span>
                        </div>
                      </div>

                      {/* HIGHLIGHTS */}
                      <div className="mobile-mat-highlights">
                        <span className="mat-hl-title">Capabilities</span>
                        <ul className="mat-hl-list">
                          {grade.highlights.map((hl, i) => (
                            <li key={i}>
                              <span className="check" aria-hidden="true">✓</span>
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* ACTION */}
                      <div className="mobile-mat-actions">
                        <Button href={`/contact?grade=${grade.code}`}>
                          Request {grade.name} Quote
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

      {/* 4. WEAR DYNAMICS SELECTOR GUIDE (MATCHING MACHINE ZONES TO ALLOYS) */}
      <div className="wear-zones-matcher-section">
        <div className="matcher-header">
          <span className="matcher-eyebrow">SELECTION MATRIX</span>
          <h3 className="matcher-title">Match Your Equipment Wear Mode</h3>
          <p className="matcher-subtitle">
            Different mechanical processes produce radically different wear vectors. Select your primary failure mode to view the recommended metallurgy.
          </p>
        </div>

        <div className="matcher-cards-grid">
          <div className="matcher-card">
            <span className="matcher-mode-tag">ABRASIVE SLIDING</span>
            <h4>Continuous High-Volume Sliding</h4>
            <p>Pugmills, asphalt transfer chutes, feeder liners and hopper bottoms where fine abrasive quartz/aggregate causes rapid wall thinning.</p>
            <div className="matcher-rec-alloy">
              <span className="rec-lbl">RECOMMENDED:</span>
              <strong className="rec-grade">P500 Extreme Plate / 28% Chrome Iron</strong>
            </div>
          </div>

          <div className="matcher-card">
            <span className="matcher-mode-tag">GOUGING &amp; HIGH IMPACT</span>
            <h4>Heavy Crushing &amp; Point Loads</h4>
            <p>Primary jaw crushers, blow bars, grizzly decks, and heavy mining buckets subjected to devastating shock loads from solid boulders.</p>
            <div className="matcher-rec-alloy">
              <span className="rec-lbl">RECOMMENDED:</span>
              <strong className="rec-grade">Austenitic Manganese / P450 Tough Plate</strong>
            </div>
          </div>

          <div className="matcher-card">
            <span className="matcher-mode-tag">SLURRY &amp; FINE GRINDING</span>
            <h4>Dense Slurry &amp; Particle Grinding</h4>
            <p>Concrete twin-shaft mixers, slurry pump casings, cyclone feed boxes, and cement raw mills operating in abrasive wet media.</p>
            <div className="matcher-rec-alloy">
              <span className="rec-lbl">RECOMMENDED:</span>
              <strong className="rec-grade">EnduraCast 28% Chrome / Ni-Hard Class IV</strong>
            </div>
          </div>

          <div className="matcher-card">
            <span className="matcher-mode-tag">THERMAL &amp; CORROSIVE EROSION</span>
            <h4>High Temperature &amp; Gas Flow</h4>
            <p>Drum dryer internal lifters, induced draft fan housings, and baghouse ducts operating continuously up to 600°C–950°C.</p>
            <div className="matcher-rec-alloy">
              <span className="rec-lbl">RECOMMENDED:</span>
              <strong className="rec-grade">Bi-Metallic CCO / High-Chrome Heat Resistant</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
