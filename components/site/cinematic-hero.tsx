'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, type Variants } from 'motion/react'
import { Counter } from '@/components/site/motion'
import { SectionLabel } from '@/components/site/ui'
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
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
}

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

  // 1. Left hero copy (Eyebrow + Title) sits BELOW at rest, and slides UP to the top row as you scroll down
  const copyY = useTransform(smoothProgress, [0, 0.35], [0, -180])
  const copyOpacity = useTransform(smoothProgress, [0, 0.45, 0.65], [1, 1, 0])

  // 2. Right sidebar "Get a quote" orange CTA stays pinned at top right
  const ctaY = useTransform(smoothProgress, [0, 0.75], [0, 0])
  const ctaOpacity = useTransform(smoothProgress, [0, 0.50, 0.68], [1, 1, 0])

  // 3. Right metrics block slides UPWARDS directly behind the orange "Get a quote" card and hides
  const metricsY = useTransform(smoothProgress, [0, 0.35], [0, -360])
  const metricsOpacity = useTransform(smoothProgress, [0, 0.30], [1, 0])

  // 4. Video: starts at 80% top / 20% height on rest, rises up to 26% (directly below title & CTA in Frame 5), then expands to FULL SCREEN (0% top, 100% height)
  const videoTop = useTransform(smoothProgress, [0, 0.35, 0.70], ['80%', '26%', '0%'])
  const videoHeight = useTransform(smoothProgress, [0, 0.35, 0.70], ['20%', '74%', '100%'])

  return (
    <div ref={containerRef} className="cinematic-hero-container">
      <div className="cinematic-hero-sticky">
        {/* INTERACTIVE KINETIC DASH GRID */}
        <InteractiveGrid />

        {/* TOP LEFT COPY: Eyebrow and Headline slide UP together as shown in the reference frames */}
        <motion.div
          className="hero-copy"
          style={{ y: copyY, opacity: copyOpacity }}
        >
          <SectionLabel>Engineering Excellence</SectionLabel>

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
        </motion.div>

        {/* RIGHT SIDEBAR */}
        <div className="hero-side">
          {/* Orange CTA stays pinned at top right aligned with the headline */}
          <motion.div
            className="hero-side-top"
            style={{ y: ctaY, opacity: ctaOpacity }}
          >
            <Link href="/contact" className="hero-side-cta">
              <span>Get Started</span>
              <svg
                viewBox="0 0 24 24"
                className="hero-morph-icon"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 7h10v10" className="icon-head" />
                <line x1="7" y1="17" x2="17" y2="7" className="icon-stem" />
              </svg>
            </Link>
          </motion.div>

          {/* Black metrics box slides directly UP under the orange header and hides */}
          <motion.div
            className="hero-side-body"
            style={{ y: metricsY, opacity: metricsOpacity }}
          >
            <div className="hero-metrics-group">
              <div className="hero-metric-block">
                <div className="hero-metric-header">
                  <div className="metric-icon" aria-hidden="true">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 11.25L12 2.25L21 11.25H16.5V14.25H7.5V11.25H3Z"
                        stroke="#D94B2B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 20.25H7.5"
                        stroke="#D94B2B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 17.25H7.5"
                        stroke="#D94B2B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <strong className="metric-value">
                    <Counter to={20} />
                    <span className="metric-plus">+</span>
                  </strong>
                </div>
                <span className="metric-label">years experience</span>
              </div>

              <div className="hero-metric-block">
                <div className="hero-metric-header">
                  <div className="metric-icon" aria-hidden="true">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.25 4.5H21V8.25"
                        stroke="#D94B2B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.75 19.5H3V15.75"
                        stroke="#D94B2B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 15.75V19.5H17.25"
                        stroke="#D94B2B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 8.25V4.5H6.75"
                        stroke="#D94B2B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.5 8.25V15.75"
                        stroke="#D94B2B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 8.25V15.75"
                        stroke="#D94B2B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.5 8.25V15.75"
                        stroke="#D94B2B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.5 8.25V15.75"
                        stroke="#D94B2B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <strong className="metric-value">
                    <Counter to={500} />
                    <span className="metric-plus">+</span>
                  </strong>
                </div>
                <span className="metric-label">projects delivered</span>
              </div>
            </div>

            <p className="hero-side-desc">
              Reliable engineering, precision manufacturing, and scalable solutions for modern industries.
            </p>
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
