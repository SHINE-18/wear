'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Application } from '@/lib/site-data'
import { Arrow } from '@/components/site/ui'

interface Props {
  applications: Application[]
}

export function ApplicationInspector({ applications }: Props) {
  const [activeIdx, setActiveIdx] = useState(0)
  const items = applications.slice(0, 4)
  const activeApp = items[activeIdx] || items[0]

  return (
    <div className="inspector-container">
      {/* LEFT: 4 APPLICATION ROWS WITH 1PX DIVIDERS */}
      <div className="inspector-list" role="tablist" aria-label="Applications list">
        {items.map((app, idx) => {
          const isActive = idx === activeIdx
          return (
            <div
              key={app.slug}
              className={`inspector-row ${isActive ? 'active' : ''}`}
              onMouseEnter={() => setActiveIdx(idx)}
              onFocus={() => setActiveIdx(idx)}
              tabIndex={0}
              role="tab"
              aria-selected={isActive}
            >
              <div className="row-main-header">
                <span className="inspector-num">{app.num}</span>
                <Link href={`/applications/${app.slug}`} className="inspector-title-link">
                  <h3>{app.title}</h3>
                </Link>
                <Link href={`/applications/${app.slug}`} className="inspector-arrow-btn" aria-label={`View ${app.title}`}>
                  <Arrow />
                </Link>
              </div>

              <p className="inspector-summary">{app.summary}</p>

              {/* EXPANDED SPECS ON ACTIVE */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    className="inspector-expanded"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="inspector-metrics-grid">
                      {app.specs.map((spec) => (
                        <div key={spec.label} className="inspector-spec-chip">
                          <span className="spec-chip-label">{spec.label}</span>
                          <strong className="spec-chip-val">{spec.value}</strong>
                        </div>
                      ))}
                    </div>

                    <div className="inspector-action-row">
                      <Link href={`/applications/${app.slug}`} className="inspector-cta-link">
                        <span>View technical specifications & CAD drawings</span>
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

      {/* RIGHT: CLEAN INDUSTRIAL PREVIEW PANEL */}
      <div className="inspector-viewport-stage">
        <div className="inspector-viewport-frame">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeApp.slug}
              className="inspector-preview-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <Link href={`/applications/${activeApp.slug}`} className="inspector-img-link">
                <img src={activeApp.image} alt={activeApp.title} className="inspector-preview-img" />
              </Link>

              {/* CLEAN SPEC ANNOTATION BADGE */}
              <div className="inspector-spec-badge-bottom">
                <span className="spec-badge-tag">APPLICATION {activeApp.num}</span>
                <strong>{activeApp.title}</strong>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
