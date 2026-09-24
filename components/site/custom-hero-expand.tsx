'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'motion/react'
import { InteractiveGrid } from '@/components/site/interactive-grid'
import styles from './custom-hero-expand.module.css'

export function CustomHeroExpand() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // 1. Header Copy: Slides UP and fades out smoothly on scroll
  const copyY = useTransform(scrollYProgress, [0, 0.22], [0, -140], { clamp: true })
  const copyOpacity = useTransform(scrollYProgress, [0, 0.16, 0.26], [1, 1, 0], { clamp: true })
  const copyDisplay = useTransform(scrollYProgress, (p) => (p >= 0.26 ? 'none' : 'block'))

  // 2. Media Expansion: Framed banner -> 100% x 100vh fullscreen canvas
  // Smoothly expands from top: 335px (clear of header with navbar clearance) to top: 0px
  const mediaTop = useTransform(scrollYProgress, (p) => {
    if (p >= 0.35) return '0px'
    const progress = p / 0.35
    const topPx = 335 * (1 - progress)
    return `${topPx}px`
  })

  const mediaWidth = useTransform(scrollYProgress, (p) => {
    if (p >= 0.35) return '100%'
    const progress = p / 0.35
    const subtractPx = 64 * (1 - progress)
    return `min(1536px, calc(100% - ${subtractPx}px))`
  })

  const mediaHeight = useTransform(scrollYProgress, (p) => {
    if (p >= 0.35) return '100vh'
    const progress = p / 0.35
    const subtractPx = 375 * (1 - progress)
    return `calc(100vh - ${subtractPx}px)`
  })

  const mediaBorderWidth = useTransform(scrollYProgress, (p) => (p >= 0.35 ? '0px' : '1px'))
  const mediaShadow = useTransform(scrollYProgress, (p) =>
    p >= 0.35 ? 'none' : '0 16px 45px rgba(0, 0, 0, 0.14)'
  )

  // 3. Dissolve upper edge into theme slate as curtain section approaches
  const slateBlendOpacity = useTransform(scrollYProgress, [0.65, 0.88], [0, 1], { clamp: true })

  return (
    <div ref={containerRef} className={styles.heroScrollContainer}>
      <div className={styles.heroStickyStage}>
        {/* Fullscreen Interactive Magnetic Grid Canvas */}
        <div className={styles.heroGridCanvas} aria-hidden="true">
          <InteractiveGrid />
        </div>

        {/* 1. Header Content (Eyebrow, Title, Subtitle, "Submit RFQ" Orange Button) */}
        <motion.div
          className={styles.heroHeaderWrap}
          style={{
            y: copyY,
            opacity: copyOpacity,
            display: copyDisplay,
          }}
        >
          <div className={styles.heroHeaderGrid}>
            <div className={styles.heroHeaderLeft}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowBar} aria-hidden="true" />
                <span>Custom Metallurgy & Reverse Engineering</span>
              </div>
              <h1 className={styles.heroTitle}>Custom Wear Parts</h1>
              <p className={styles.heroSubtitle}>
                Rapid 3D reverse engineering, custom pattern tooling, and 1–10 unit low-volume casting delivered in 6–8 weeks with zero OEM markup.
              </p>
            </div>

            <Link
              href="/contact"
              className={styles.ctaSquare}
              aria-label="Submit Drawings or RFQ to WearGuard engineering"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 44 44"
                fill="none"
                className={styles.ctaBracket}
                aria-hidden="true"
              >
                <path
                  d="M16 10H34V28"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
              </svg>
              <span className={styles.ctaLabel}>Submit RFQ</span>
            </Link>
          </div>
        </motion.div>

        {/* 2. Expanding Media Canvas (Foundry Photography) */}
        <motion.div
          className={styles.mediaWrapper}
          style={{
            top: mediaTop,
            width: mediaWidth,
            height: mediaHeight,
            borderWidth: mediaBorderWidth,
            boxShadow: mediaShadow,
          }}
        >
          {/* Photorealistic Facility Image */}
          <img
            src="/images/custom-foundry-batch.jpg"
            alt="WearGuard custom industrial casting batch in high-alloy metallurgy"
            className={styles.plantImage}
            width={1920}
            height={1080}
          />

          {/* Smooth Dissolve into Theme Slate as Curtain Stacks */}
          <motion.div
            className={styles.mediaSlateBlend}
            style={{ opacity: slateBlendOpacity }}
            aria-hidden="true"
          />

          {/* Static Plant Badge */}
          <div className={styles.hudBadge}>
            <span className={styles.hudDot} aria-hidden="true" />
            <span>6–8 WEEKS TURNAROUND • 1–10 UNIT BATCHES</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
