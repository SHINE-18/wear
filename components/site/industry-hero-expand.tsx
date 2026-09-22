'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'motion/react'
import { InteractiveGrid } from '@/components/site/interactive-grid'
import type { IndustryData } from '@/lib/industries-data'
import styles from './industry-hero-expand.module.css'

export function IndustryHeroExpand({ industry }: { industry: IndustryData }) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // 1. Header Copy: Slides UP and fades out smoothly on scroll
  const copyY = useTransform(scrollYProgress, [0, 0.22], [0, -140], { clamp: true })
  const copyOpacity = useTransform(scrollYProgress, [0, 0.16, 0.26], [1, 1, 0], { clamp: true })
  const copyDisplay = useTransform(scrollYProgress, (p) => (p >= 0.26 ? 'none' : 'block'))

  // 2. Media Expansion: Framed banner -> 100vw x 100vh fullscreen canvas
  // Smoothly expands from top: 255px (clear of header) to top: 0px
  const mediaTop = useTransform(scrollYProgress, (p) => {
    if (p >= 0.35) return '0px'
    const progress = p / 0.35
    const topPx = 255 * (1 - progress)
    return `${topPx}px`
  })

  const mediaWidth = useTransform(scrollYProgress, (p) => {
    if (p >= 0.35) return '100vw'
    const progress = p / 0.35
    const subtractPx = 64 * (1 - progress)
    return `min(1536px, calc(100vw - ${subtractPx}px))`
  })

  const mediaHeight = useTransform(scrollYProgress, (p) => {
    if (p >= 0.35) return '100vh'
    const progress = p / 0.35
    const subtractPx = 280 * (1 - progress)
    return `calc(100vh - ${subtractPx}px)`
  })

  const mediaBorderWidth = useTransform(scrollYProgress, (p) => (p >= 0.35 ? '0px' : '1px'))
  const mediaShadow = useTransform(scrollYProgress, (p) =>
    p >= 0.35 ? 'none' : '0 16px 45px rgba(0, 0, 0, 0.14)'
  )

  // 3. Dissolve upper edge into theme slate as curtain section approaches
  const slateBlendOpacity = useTransform(scrollYProgress, [0.65, 0.88], [0, 1], { clamp: true })

  return (
    <div ref={containerRef} className={styles.indHeroScrollContainer}>
      <div className={styles.indHeroStickyStage}>
        {/* Fullscreen Interactive Magnetic Grid Canvas */}
        <div className={styles.indHeroGridCanvas} aria-hidden="true">
          <InteractiveGrid />
        </div>

        {/* 1. Header Content (Eyebrow, Title, Subtitle, "Get in Touch" Orange Button) */}
        <motion.div
          className={styles.indHeroHeaderWrap}
          style={{
            y: copyY,
            opacity: copyOpacity,
            display: copyDisplay,
          }}
        >
          <div className={styles.indHeroHeaderGrid}>
            <div className={styles.indHeroHeaderLeft}>
              <div className={styles.indEyebrow}>
                <span className={styles.indEyebrowBar} aria-hidden="true" />
                <span>{industry.eyebrow}</span>
              </div>
              <h1 className={styles.indHeroTitle}>{industry.title}</h1>
              <p className={styles.indHeroSubtitle}>{industry.subtitle}</p>
            </div>

            <Link
              href="/contact"
              className={styles.indCtaSquare}
              aria-label="Get in Touch with WearGuard engineering"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 44 44"
                fill="none"
                className={styles.indCtaBracket}
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
              <span className={styles.indCtaLabel}>Get in Touch</span>
            </Link>
          </div>
        </motion.div>

        {/* 2. Expanding Media Canvas (Clean Photography) */}
        <motion.div
          className={styles.indMediaWrapper}
          style={{
            top: mediaTop,
            width: mediaWidth,
            height: mediaHeight,
            borderWidth: mediaBorderWidth,
            boxShadow: mediaShadow,
          }}
        >
          {/* Photorealistic Facility Image (Razor sharp, no blur filter) */}
          <img
            src={industry.bannerImage}
            alt={industry.imageAlt}
            className={styles.indPlantImage}
          />

          {/* Smooth Dissolve into Theme Slate as Curtain Stacks */}
          <motion.div
            className={styles.indMediaSlateBlend}
            style={{ opacity: slateBlendOpacity }}
            aria-hidden="true"
          />

          {/* Static Plant Badge */}
          <div className={styles.indHudBadge}>
            <span className={styles.indHudDot} aria-hidden="true" />
            <span>{industry.badgeText}</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
