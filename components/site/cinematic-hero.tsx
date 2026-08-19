'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { Counter } from '@/components/site/motion'
import { Arrow, SectionLabel } from '@/components/site/ui'
import { InteractiveGrid } from '@/components/site/interactive-grid'

export function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Smooth spring progress for slow, fluid, cinematic animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 26,
    restDelta: 0.001,
  })

  // 1. Headline & Copy: slides up and fades
  const copyY = useTransform(smoothProgress, [0, 0.5], [0, -140])
  const copyOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0])

  // 2. Black Metrics Box: slides straight UP under the orange "Get Started" block
  const metricsY = useTransform(smoothProgress, [0, 0.52], [0, -280])
  const metricsOpacity = useTransform(smoothProgress, [0, 0.42], [1, 0])

  // 3. Orange Get Started block: stays pinned then fades
  const ctaY = useTransform(smoothProgress, [0.35, 0.55], [0, -60])
  const ctaOpacity = useTransform(smoothProgress, [0.35, 0.55], [1, 0])

  // 4. Video: expands from bottom (62% top, 38% height) to FULL SCREEN (0% top, 100% height)
  const videoTop = useTransform(smoothProgress, [0, 0.55], ['62%', '0%'])
  const videoHeight = useTransform(smoothProgress, [0, 0.55], ['38%', '100%'])

  // 5. Pill badge fades out
  const badgeOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0])

  return (
    <div ref={containerRef} className="cinematic-hero-container">
      <div className="cinematic-hero-sticky">
        {/* INTERACTIVE KINETIC DASH GRID */}
        <InteractiveGrid />

        {/* TOP LEFT COPY */}
        <motion.div
          className="hero-copy"
          style={{ y: copyY, opacity: copyOpacity }}
        >
          <SectionLabel>Engineering Excellence</SectionLabel>
          <h1>
            Industrial Solutions
            <br />
            Built for <em>Performance</em>
          </h1>
          <p>Engineered wear solutions for the industries that keep the world moving.</p>
        </motion.div>

        {/* RIGHT SIDEBAR */}
        <div className="hero-side">
          {/* Orange header sits above the sliding metrics */}
          <motion.div
            className="hero-side-top"
            style={{ y: ctaY, opacity: ctaOpacity }}
          >
            <Link href="/contact" className="hero-side-cta">
              <span>Get a quote</span>
              <Arrow />
            </Link>
          </motion.div>

          {/* Black metrics box slides up under the orange header */}
          <motion.div
            className="hero-side-body"
            style={{ y: metricsY, opacity: metricsOpacity }}
          >
            <div className="hero-metric-block">
              <div className="metric-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 12l10 10 10-10L12 2z" />
                  <line x1="12" y1="8" x2="12" y2="14" />
                  <polyline points="9 10 12 7 15 10" />
                </svg>
              </div>
              <strong>
                <Counter to={20} suffix="+" />
              </strong>
              <span>years experience</span>
            </div>

            <div className="hero-metric-block">
              <div className="metric-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </div>
              <strong>
                <Counter to={500} suffix="+" />
              </strong>
              <span>projects delivered</span>
            </div>

            <p className="hero-side-desc">Reliable engineering, precision manufacturing, and scalable solutions for modern industries.</p>
          </motion.div>
        </div>

        {/* EXPANDING CINEMATIC VIDEO */}
        <motion.div
          className="hero-art-expanding"
          style={{
            top: videoTop,
            height: videoHeight,
            zIndex: 15,
          }}
        >
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/asphalt-plant-hero.png"
          >
            <source src="/images/wearguard-hero-reel.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" aria-hidden="true" />
          <motion.div
            className="hero-badge-pill"
            style={{ opacity: badgeOpacity }}
          >
            <span>Explore Solutions</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
