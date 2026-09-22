'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { Arrow, Button } from '@/components/site/ui'
import { materialGrades, MaterialGrade } from '@/lib/site-data'
import styles from './materials-matrix.module.css'

type FilterCategory = 'ALL' | 'STEEL PLATES' | 'CAST IRONS' | 'COMPOSITES' | 'CCO OVERLAY'

const FILTER_TABS: { id: FilterCategory; label: string }[] = [
  { id: 'ALL', label: 'ALL FORMULATIONS' },
  { id: 'STEEL PLATES', label: 'THROUGH-HARDENED PLATES' },
  { id: 'CAST IRONS', label: 'CAST LINERS & FOUNDRY GRADES' },
  { id: 'COMPOSITES', label: 'CERAMIC-RUBBER COMPOSITES' },
  { id: 'CCO OVERLAY', label: 'BI-METALLIC CCO CLADDING' },
]

export function MaterialsMatrix() {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('ALL')
  const [activeCode, setActiveCode] = useState<string>('01')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const syncHash = () => {
      const hash = window.location.hash.toLowerCase()
      if (!hash) return
      if (hash.includes('p400') || hash.includes('plate')) {
        setActiveCode('01')
        setSelectedFilter('ALL')
      } else if (hash.includes('p450')) {
        setActiveCode('02')
        setSelectedFilter('ALL')
      } else if (hash.includes('p500')) {
        setActiveCode('03')
        setSelectedFilter('ALL')
      } else if (hash.includes('enduracast')) {
        setActiveCode('04')
        setSelectedFilter('ALL')
      } else if (hash.includes('wearcast') || hash.includes('castings')) {
        setActiveCode('05')
        setSelectedFilter('ALL')
      } else if (hash.includes('ceramic')) {
        setActiveCode('06')
        setSelectedFilter('ALL')
      } else if (hash.includes('cco')) {
        setActiveCode('07')
        setSelectedFilter('ALL')
      }
    }
    syncHash()
    window.addEventListener('hashchange', syncHash)
    return () => window.removeEventListener('hashchange', syncHash)
  }, [])

  const filteredGrades = materialGrades.filter((g) => {
    if (selectedFilter === 'ALL') return true
    if (selectedFilter === 'STEEL PLATES') return ['01', '02', '03'].includes(g.code)
    if (selectedFilter === 'CAST IRONS') return ['04', '05'].includes(g.code)
    if (selectedFilter === 'COMPOSITES') return g.code === '06'
    if (selectedFilter === 'CCO OVERLAY') return g.code === '07'
    return true
  })

  const getAnchorId = (code: string) => {
    switch (code) {
      case '01': return 'p400'
      case '02': return 'p450'
      case '03': return 'p500'
      case '04': return 'enduracast'
      case '05': return 'wearcast'
      case '06': return 'ceramic-rubber'
      case '07': return 'cco'
      default: return `grade-${code}`
    }
  }

  const activeGrade = materialGrades.find((g) => g.code === activeCode) || materialGrades[0]

  return (
    <div className={styles['materials-matrix-wrapper']}>
      {/* 1. FILTER BAR WITH MINIMAL DROPDOWN & TABS */}
      <div className={styles['matrix-filter-bar']}>
        <div className={styles['matrix-dropdown-select-wrap']}>
          <label htmlFor="matrix-category-select" className={styles['filter-bar-label']}>
            CLASSIFICATION:
          </label>
          <div className={styles['dropdown-select-box']}>
            <select
              id="matrix-category-select"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value as FilterCategory)}
              className={styles['clean-dropdown-select']}
            >
              {FILTER_TABS.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </select>
            <span className={styles['dropdown-arrow-icon']} aria-hidden="true">▾</span>
          </div>
        </div>

        <div className={styles['matrix-tabs-group']} role="tablist" aria-label="Alloy categories">
          {FILTER_TABS.map((tab) => {
            const isActive = selectedFilter === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedFilter(tab.id)}
                className={`${styles['matrix-tab-btn']} ${isActive ? styles.active : ''}`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* --- DESKTOP VIEW: HIGH-DENSITY SWISS ALLOY MATRIX TABLE & SPOTLIGHT --- */}
      <div className={styles['materials-desktop-only']}>
        {/* 2. HIGH-DENSITY TECHNICAL ALLOY MATRIX TABLE */}
        <div className={styles['matrix-data-list']} aria-label="WearGuard Metallurgical Formulations">
          <div className={styles['matrix-data-header']}>
            <div className={styles['col-grade']}>ALLOY SPECIFICATION</div>
            <div className={styles['col-hardness']}>HARDNESS</div>
            <div className={styles['col-chemistry']}>MATRIX</div>
            <div className={styles['col-impact']}>IMPACT</div>
            <div className={styles['col-temp']}>THERMAL</div>
          </div>

          <div className={styles['matrix-data-body']}>
            {filteredGrades.map((grade) => {
              const isSelected = grade.code === activeCode

              return (
                <div
                  id={getAnchorId(grade.code)}
                  key={grade.code}
                  className={`${styles['matrix-data-row']} ${isSelected ? styles['row-active'] : ''}`}
                  onClick={() => setActiveCode(grade.code)}
                  role="button"
                  tabIndex={0}
                >
                  <div className={`${styles['matrix-cell']} ${styles['col-grade']}`}>
                    <span className={styles['grade-cat-tag']}>{grade.category}</span>
                    <strong className={styles['grade-name']}>{grade.name}</strong>
                  </div>

                  <div className={`${styles['matrix-cell']} ${styles['col-hardness']}`}>
                    <span className={styles['hardness-massive']}>{grade.hardness.split(' ')[0]}</span>
                    <span className={styles['hardness-unit']}>{grade.hardness.split(' ')[1] || ''}</span>
                  </div>

                  <div className={`${styles['matrix-cell']} ${styles['col-chemistry']}`}>
                    <span className={styles['chemistry-text']}>{grade.composition}</span>
                  </div>

                  <div className={`${styles['matrix-cell']} ${styles['col-impact']}`}>
                    <span className={styles['impact-text']}>{grade.impactResistance}</span>
                  </div>

                  <div className={`${styles['matrix-cell']} ${styles['col-temp']}`}>
                    <span className={styles['temp-text']}>{grade.tempLimit}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 3. ACTIVE ALLOY TECHNICAL SPOTLIGHT DRAWER (NO PHOTO - PURE ENGINEERING DATA) */}
        <div className={styles['active-grade-spotlight-drawer']}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGrade.code}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className={styles['grade-spotlight-inner']}
            >
              {/* TECHNICAL HEADER BAR */}
              <div className={styles['spotlight-tech-header']}>
                <div className={styles['tech-header-left']}>
                  <span className={styles['spotlight-badge-num']}>Alloy Specification</span>
                  <span className={styles['spotlight-badge-cat']}>{activeGrade.category}</span>
                </div>
                <div className={styles['tech-header-right']}>
                  <span className={styles['spotlight-hardness-chip']}>{activeGrade.hardness}</span>
                </div>
              </div>

              {/* MAIN SPEC CONTENT GRID */}
              <div className={styles['spotlight-main-grid']}>
                {/* LEFT COLUMN: TITLE, METALLURGICAL SUMMARY & HIGHLIGHTS */}
                <div className={styles['spotlight-desc-col']}>
                  <h3 className={styles['spotlight-title']}>{activeGrade.name}</h3>
                  <p className={styles['spotlight-desc-text']}>{activeGrade.desc}</p>

                  <div className={styles['spotlight-highlights-block']}>
                    <span className={styles['highlights-title']}>Engineering Capabilities</span>
                    <ul className={styles['highlights-checklist']}>
                      {activeGrade.highlights.map((item, i) => (
                        <li key={i}>
                          <span className={styles['check-icon']} aria-hidden="true">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* RIGHT COLUMN: 4-CELL TELEMETRY MATRIX */}
                <div className={styles['spotlight-telemetry-col']}>
                  <div className={styles['telemetry-box-grid']}>
                    <div className={styles['telemetry-box']}>
                      <span className={styles['t-box-lbl']}>Chemical Composition</span>
                      <span className={styles['t-box-val-clean']}>{activeGrade.composition}</span>
                    </div>

                    <div className={styles['telemetry-box']}>
                      <span className={styles['t-box-lbl']}>Impact &amp; Shock Capacity</span>
                      <strong className={styles['t-box-val']}>{activeGrade.impactResistance}</strong>
                    </div>

                    <div className={styles['telemetry-box']}>
                      <span className={styles['t-box-lbl']}>Continuous Thermal Limit</span>
                      <strong className={styles['t-box-val']}>{activeGrade.tempLimit}</strong>
                    </div>

                    <div className={styles['telemetry-box']}>
                      <span className={styles['t-box-lbl']}>Primary Target Equipment</span>
                      <strong className={styles['t-box-val']}>{activeGrade.primaryUse}</strong>
                    </div>
                  </div>

                  {/* ACTION BAR */}
                  <div className={styles['spotlight-actions-bar']}>
                    <Button href="/contact">
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
      <div className={styles['materials-mobile-accordion-group']}>
        {filteredGrades.map((grade) => {
          const isOpen = activeCode === grade.code

          return (
            <div
              id={`m-${getAnchorId(grade.code)}`}
              key={grade.code}
              className={`${styles['mobile-material-accordion-card']} ${isOpen ? styles['is-open'] : ''}`}
            >
              {/* ACCORDION TRIGGER */}
              <button
                type="button"
                className={styles['mobile-mat-header-btn']}
                onClick={() => setActiveCode(isOpen ? '' : grade.code)}
                aria-expanded={isOpen}
              >
                <div className={styles['mobile-mat-header-left']}>
                  <strong className={styles['mobile-mat-name']}>{grade.name}</strong>
                  <div className={styles['mobile-mat-chips']}>
                    <span className={styles['mobile-mat-cat']}>{grade.category}</span>
                    <span className={styles['mobile-mat-hardness']}>{grade.hardness}</span>
                  </div>
                </div>
                <span className={styles['mobile-mat-chevron']} aria-hidden="true">
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
                    className={styles['mobile-mat-drawer-body']}
                  >
                    <div className={styles['mobile-mat-drawer-inner']}>
                      <p className={styles['mobile-mat-desc']}>{grade.desc}</p>

                      {/* 4-CELL TELEMETRY */}
                      <div className={styles['mobile-mat-telemetry']}>
                        <div className={styles['mat-tele-cell']}>
                          <span className={styles['tele-lbl']}>Chemistry</span>
                          <span className={styles['tele-val']}>{grade.composition}</span>
                        </div>
                        <div className={styles['mat-tele-cell']}>
                          <span className={styles['tele-lbl']}>Impact</span>
                          <span className={styles['tele-val']}>{grade.impactResistance}</span>
                        </div>
                        <div className={styles['mat-tele-cell']}>
                          <span className={styles['tele-lbl']}>Thermal</span>
                          <span className={styles['tele-val']}>{grade.tempLimit}</span>
                        </div>
                        <div className={styles['mat-tele-cell']}>
                          <span className={styles['tele-lbl']}>Primary Use</span>
                          <span className={styles['tele-val']}>{grade.primaryUse}</span>
                        </div>
                      </div>

                      {/* HIGHLIGHTS */}
                      <div className={styles['mobile-mat-highlights']}>
                        <span className={styles['mat-hl-title']}>Capabilities</span>
                        <ul className={styles['mat-hl-list']}>
                          {grade.highlights.map((hl, i) => (
                            <li key={i}>
                              <span className={styles.check} aria-hidden="true">✓</span>
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* ACTION */}
                      <div className={styles['mobile-mat-actions']}>
                        <Button href="/contact">
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
      <div className={styles['wear-zones-matcher-section']}>
        <div className={styles['matcher-header']}>
          <span className={styles['matcher-eyebrow']}>SELECTION MATRIX</span>
          <h3 className={styles['matcher-title']}>Match Your Equipment Wear Mode</h3>
          <p className={styles['matcher-subtitle']}>
            Different mechanical processes produce radically different wear vectors. Select your primary failure mode to view the recommended metallurgy.
          </p>
        </div>

        <div className={styles['matcher-cards-grid']}>
          <div className={styles['matcher-card']}>
            <span className={styles['matcher-mode-tag']}>ABRASIVE SLIDING</span>
            <h4>Continuous High-Volume Sliding</h4>
            <p>Pugmills, asphalt transfer chutes, feeder liners and hopper bottoms where fine abrasive quartz/aggregate causes rapid wall thinning.</p>
            <div className={styles['matcher-rec-alloy']}>
              <span className={styles['rec-lbl']}>RECOMMENDED:</span>
              <strong className={styles['rec-grade']}>P500 Extreme Plate / 28% Chrome Iron</strong>
            </div>
          </div>

          <div className={styles['matcher-card']}>
            <span className={styles['matcher-mode-tag']}>GOUGING &amp; HIGH IMPACT</span>
            <h4>Heavy Crushing &amp; Point Loads</h4>
            <p>Primary jaw crushers, blow bars, grizzly decks, and heavy mining buckets subjected to devastating shock loads from solid boulders.</p>
            <div className={styles['matcher-rec-alloy']}>
              <span className={styles['rec-lbl']}>RECOMMENDED:</span>
              <strong className={styles['rec-grade']}>Austenitic Manganese / P450 Tough Plate</strong>
            </div>
          </div>

          <div className={styles['matcher-card']}>
            <span className={styles['matcher-mode-tag']}>SLURRY &amp; FINE GRINDING</span>
            <h4>Dense Slurry &amp; Particle Grinding</h4>
            <p>Concrete twin-shaft mixers, slurry pump casings, cyclone feed boxes, and cement raw mills operating in abrasive wet media.</p>
            <div className={styles['matcher-rec-alloy']}>
              <span className={styles['rec-lbl']}>RECOMMENDED:</span>
              <strong className={styles['rec-grade']}>EnduraCast 28% Chrome / Ni-Hard Class IV</strong>
            </div>
          </div>

          <div className={styles['matcher-card']}>
            <span className={styles['matcher-mode-tag']}>THERMAL &amp; CORROSIVE EROSION</span>
            <h4>High Temperature &amp; Gas Flow</h4>
            <p>Drum dryer internal lifters, induced draft fan housings, and baghouse ducts operating continuously up to 600°C–950°C.</p>
            <div className={styles['matcher-rec-alloy']}>
              <span className={styles['rec-lbl']}>RECOMMENDED:</span>
              <strong className={styles['rec-grade']}>Bi-Metallic CCO / High-Chrome Heat Resistant</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

