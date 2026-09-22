'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react'
import { SectionLabel, Arrow } from '@/components/site/ui'
import type { Application } from '@/lib/site-data'
import styles from './application-inspector.module.css'

interface Props {
  applications: Application[]
}

export function ApplicationInspector({ applications }: Props) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const items = applications.slice(0, 4)

  // Smooth floating card mouse tracking
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)
  const springConfig = { stiffness: 450, damping: 35, mass: 0.1 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const handleRowMouseEnter = (idx: number, e: React.MouseEvent) => {
    setActiveIdx(idx)
    setHoveredIdx(idx)
    const cardWidth = 250
    const cardHeight = 210
    let targetX = e.clientX + 20
    let targetY = e.clientY - 70

    if (typeof window !== 'undefined') {
      if (targetX + cardWidth > window.innerWidth - 16) {
        targetX = e.clientX - cardWidth - 24
      }
      if (targetY + cardHeight > window.innerHeight - 16) {
        targetY = window.innerHeight - cardHeight - 16
      }
      if (targetY < 16) {
        targetY = 16
      }
    }

    springX.jump(targetX)
    springY.jump(targetY)
    mouseX.set(targetX)
    mouseY.set(targetY)
  }

  const handleRowMouseMove = (e: React.MouseEvent) => {
    const cardWidth = 250
    const cardHeight = 210
    let targetX = e.clientX + 20
    let targetY = e.clientY - 70

    if (typeof window !== 'undefined') {
      if (targetX + cardWidth > window.innerWidth - 16) {
        targetX = e.clientX - cardWidth - 24
      }
      if (targetY + cardHeight > window.innerHeight - 16) {
        targetY = window.innerHeight - cardHeight - 16
      }
      if (targetY < 16) {
        targetY = 16
      }
    }

    mouseX.set(targetX)
    mouseY.set(targetY)
  }

  const handleRowClick = (_slug: string, e: React.MouseEvent) => {
    // Allow direct clicks on links (title, Full Specs) to navigate naturally
    if ((e.target as HTMLElement).closest('a')) {
      return
    }
    router.push('/applications')
  }

  // Preload images for buttery smooth instant preview transitions
  useEffect(() => {
    items.forEach((app) => {
      if (app.image) {
        const img = new Image()
        img.src = app.image
      }
    })
  }, [items])

  return (
    <div ref={containerRef} className={styles['inspector-scroll-track']}>
      {/* FLOATING CURSOR-FOLLOW PREVIEW CARD PORTALED TO BODY TO PREVENT TRANSFORM CLIPPING */}
      {mounted && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {hoveredIdx !== null && items[hoveredIdx] && (
            <motion.div
              className={styles['floating-preview-card']}
              style={{
                x: springX,
                y: springY,
              }}
              initial={{ opacity: 0, scale: 0.88, filter: 'blur(6px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.88, filter: 'blur(6px)' }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles['floating-card-image-wrap']}>
                <img
                  src={items[hoveredIdx].image}
                  alt={items[hoveredIdx].title}
                  width={250}
                  height={148}
                />
                <div className={styles['floating-card-badge']}>
                  <span>{items[hoveredIdx].num}</span>
                </div>
              </div>
              <div className={styles['floating-card-info']}>
                <div className={styles['floating-card-title-row']}>
                  <span className={styles['floating-card-title']}>{items[hoveredIdx].title}</span>
                  <span className={styles['floating-card-arrow']} aria-hidden="true">↗</span>
                </div>
                <span className={styles['floating-card-hint']}>Click to explore engineering</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      <div className={styles['inspector-sticky-viewport']}>
        {/* SECTION HEADING WITH VIEW ALL BUTTON */}
        <div className={styles['inspector-heading-wrap']}>
          <div className={`section-heading ${styles['inspector-heading']}`}>
            <SectionLabel>Application Engineering</SectionLabel>
            <h2>
              Protection where
              <br />
              <em>wear happens.</em>
            </h2>
            <p>
              Explore the 4 primary high-wear operational assemblies engineered to eliminate maintenance downtime. Hover over any assembly to inspect technical metallurgy and component specifications.
            </p>
          </div>

          <div className={styles['inspector-heading-action']}>
            <Link href="/applications" className={styles['inspector-all-link']}>
              <span>View All Engineering</span>
              <Arrow />
            </Link>
          </div>
        </div>

        {/* FULL-WIDTH TECHNICAL INSPECTOR ROWS */}
        <div className={styles['inspector-container']}>
          <div className={styles['inspector-list']} role="tablist" aria-label="Applications list">
            {items.map((app, idx) => {
              const isActive = idx === activeIdx
              return (
                <div
                  key={app.slug}
                  className={`${styles['inspector-row']} ${isActive ? styles.active : ''}`}
                  onClick={(e) => handleRowClick(app.slug, e)}
                  onMouseEnter={(e) => handleRowMouseEnter(idx, e)}
                  onMouseMove={handleRowMouseMove}
                  onMouseLeave={() => setHoveredIdx(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${app.title} engineering specifications`}
                >
                  <div className={styles['row-main-header']}>
                    <span className={styles['inspector-num']}>{app.num}</span>
                    <Link
                      href="/applications"
                      className={styles['inspector-title-link']}
                    >
                      <h3>{app.title}</h3>
                    </Link>
                    <Link
                      href="/applications"
                      className={styles['inspector-inline-specs-link']}
                      aria-label={`View full specifications for ${app.title}`}
                    >
                      <span>Full Specs</span>
                      <Arrow />
                    </Link>
                  </div>

                  <p className={styles['inspector-summary']}>{app.summary}</p>

                  {/* EXPANDED SPECS ON ACTIVE */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        className={styles['inspector-expanded']}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className={styles['inspector-metrics-grid']}>
                          {app.specs.map((spec) => (
                            <div key={spec.label} className={styles['inspector-spec-chip']}>
                              <span className={styles['spec-chip-label']}>{spec.label}</span>
                              <strong className={styles['spec-chip-val']}>{spec.value}</strong>
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
