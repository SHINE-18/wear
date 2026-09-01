'use client'

import Link from 'next/link'
import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import { SectionLabel, Arrow } from '@/components/site/ui'
import type { Application } from '@/lib/site-data'

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
    offset: ['start 40px', 'end end'],
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
        {/* SECTION HEADING WITH VIEW ALL BUTTON */}
        <div className="inspector-heading-wrap">
          <div className="section-heading inspector-heading">
            <SectionLabel>Application Engineering</SectionLabel>
            <h2>
              Protection where
              <br />
              <em>wear happens.</em>
            </h2>
            <p>
              Explore the 4 primary high-wear operational assemblies engineered to eliminate maintenance downtime. Scroll through each stage to inspect technical metallurgy and component assemblies.
            </p>
          </div>

          <div className="inspector-heading-action">
            <Link href="/applications" className="inspector-all-link">
              <span>View All Engineering</span>
              <Arrow />
            </Link>
          </div>
        </div>

        {/* FULL-WIDTH TECHNICAL INSPECTOR ROWS */}
        <div className="inspector-container">
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
                      className="inspector-inline-specs-link"
                      aria-label={`View full specifications for ${app.title}`}
                    >
                      <span>Full Specs</span>
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
