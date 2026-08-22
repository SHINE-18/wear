'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, type Variants } from 'motion/react'
import { Counter } from '@/components/site/motion'
import { Arrow, SectionLabel } from '@/components/site/ui'
import { InteractiveGrid } from '@/components/site/interactive-grid'
import { EncryptedReveal } from '@/components/site/encrypted-reveal'

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: custom * 0.08 + 0.1,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
}

const subWordVariants: Variants = {
  hidden: { opacity: 0, y: 10, filter: 'blur(3px)' },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: custom * 0.04 + 0.42,
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
}

const subtitleWords = 'Engineered wear solutions for the industries that keep the world moving.'.split(' ')

export function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Smooth spring progress for slow, fluid, cinematic animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 24,
    restDelta: 0.001,
  })

  // 1. Top left copy slides up and fades out smoothly
  const copyY = useTransform(smoothProgress, [0, 0.45], [0, -110])
  const copyOpacity = useTransform(smoothProgress, [0, 0.45], [1, 0])

  // 2. Right sidebar "Get a quote" orange CTA stays fixed initially, then slides up smoothly
  const ctaY = useTransform(smoothProgress, [0, 0.45], [0, -85])
  const ctaOpacity = useTransform(smoothProgress, [0, 0.45], [1, 0])

  // 3. Right metrics block slides up
  const metricsY = useTransform(smoothProgress, [0, 0.5], [0, -120])
  const metricsOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0])

  // 4. Video: expands from bottom (62% top, 38% height) to FULL SCREEN (0% top, 100% height)
  const videoTop = useTransform(smoothProgress, [0, 0.55], ['62%', '0%'])
  const videoHeight = useTransform(smoothProgress, [0, 0.55], ['38%', '100%'])

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
          <motion.div
            initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const, delay: 0.05 }}
          >
            <SectionLabel>Engineering Excellence</SectionLabel>
          </motion.div>
          <h1>
            <span className="hero-words-line">
              {['Industrial', 'Wear', 'Components'].map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="hero-word"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </span>
            <br />
            <span className="hero-words-line">
              {['Engineered', 'to'].map((word, i) => (
                <motion.span
                  key={i}
                  custom={i + 3}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="hero-word"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
              <motion.span
                custom={5}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className="hero-word"
              >
                <EncryptedReveal text="Outlast OEM Standards" revealDelay={580} />
              </motion.span>
            </span>
          </h1>
          <p className="hero-subtitle-words">
            {subtitleWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={subWordVariants}
                className="hero-subword"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </p>
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
            <div className="hero-metrics-row">
              <div className="hero-metric-block">
                <div className="metric-icon" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
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
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
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
            </div>

            <p className="hero-side-desc">Custom alloy metallurgy, reverse engineering from 2D/3D CAD, and small-batch manufacturing for asphalt, concrete, mining, and bulk process plants.</p>
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
        </motion.div>
      </div>
    </div>
  )
}
