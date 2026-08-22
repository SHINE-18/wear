'use client'

import Link from 'next/link'
import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import { Application } from '@/lib/site-data'
import { Arrow } from '@/components/site/ui'

interface Props {
  applications: Application[]
}

export function ApplicationInspector({ applications }: Props) {
  const [activeIdx, setActiveIdx] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isUserInteractingRef = useRef(false)
  const userInteractionTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const items = applications.slice(0, 4)
  const activeApp = items[activeIdx] || items[0]

  // Track scroll through the pinned container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Synchronize scroll position with active index
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (isUserInteractingRef.current) return

    // Distribute across the 4 items evenly
    const count = items.length
    const rawIndex = Math.floor(progress * count)
    const index = Math.max(0, Math.min(count - 1, rawIndex))

    setActiveIdx((prev) => (prev !== index ? index : prev))
  })

  // Preload images for buttery smooth instant transitions
  useEffect(() => {
    items.forEach((app) => {
      if (app.image) {
        const img = new Image()
        img.src = app.image
      }
    })
  }, [items])

  // Direct click-to-scroll handler
  const handleSelect = useCallback(
    (idx: number) => {
      setActiveIdx(idx)
      isUserInteractingRef.current = true

      if (userInteractionTimeoutRef.current) {
        clearTimeout(userInteractionTimeoutRef.current)
      }
      userInteractionTimeoutRef.current = setTimeout(() => {
        isUserInteractingRef.current = false
      }, 800)

      if (containerRef.current && typeof window !== 'undefined') {
        const rect = containerRef.current.getBoundingClientRect()
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        const containerTop = rect.top + scrollTop
        const scrollableDistance = rect.height - window.innerHeight
        if (scrollableDistance > 0) {
          // Scroll to the middle of this step's segment
          const stepSize = scrollableDistance / items.length
          const targetScroll = containerTop + (idx + 0.5) * stepSize
          window.scrollTo({ top: targetScroll, behavior: 'smooth' })
        }
      }
    },
    [items.length]
  )

  return (
    <div ref={containerRef} className="inspector-scroll-track">
      <div className="inspector-sticky-viewport">
        {/* TOP HUD / TELEMETRY STATUS BAR */}
        <div className="inspector-telemetry-hud">
          <div className="inspector-step-track">
            {items.map((app, idx) => {
              const isSelected = idx === activeIdx
              return (
                <button
                  key={app.slug}
                  type="button"
                  className={`inspector-step-pip-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => handleSelect(idx)}
                  aria-label={`Jump to application ${app.num}: ${app.title}`}
                >
                  <span className="step-pip-indicator" />
                  <span className="step-pip-label">
                    {app.num} {app.title.split(' ')[0]}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="inspector-hud-live-tag">
            <span className="hud-pulse-dot" />
            <span className="hud-label">
              APPLICATION 0{activeIdx + 1} / 0{items.length} &middot; SCROLL ACTIVATED
            </span>
          </div>
        </div>

        {/* 2-COLUMN MAIN INSPECTOR LAYOUT */}
        <div className="inspector-container">
          {/* LEFT: 4 APPLICATION ROWS WITH ACTIVE ACCORDION */}
          <div className="inspector-list" role="tablist" aria-label="Applications list">
            {items.map((app, idx) => {
              const isActive = idx === activeIdx
              return (
                <div
                  key={app.slug}
                  className={`inspector-row ${isActive ? 'active' : ''}`}
                  onClick={() => handleSelect(idx)}
                  tabIndex={0}
                  role="tab"
                  aria-selected={isActive}
                >
                  <div className="row-main-header">
                    <span className="inspector-num">{app.num}</span>
                    <Link
                      href={`/applications/${app.slug}`}
                      className="inspector-title-link"
                      onClick={(e) => {
                        if (!isActive) {
                          e.preventDefault()
                          handleSelect(idx)
                        }
                      }}
                    >
                      <h3>{app.title}</h3>
                    </Link>
                    <Link
                      href={`/applications/${app.slug}`}
                      className="inspector-arrow-btn"
                      aria-label={`View ${app.title}`}
                    >
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
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href={`/applications/${activeApp.slug}`} className="inspector-img-link">
                    <img
                      src={activeApp.image}
                      alt={activeApp.title}
                      className="inspector-preview-img"
                    />
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
      </div>
    </div>
  )
}
