'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'motion/react'
import { Counter } from '@/components/site/motion'
import { SectionLabel } from '@/components/site/ui'
import { InteractiveGrid } from '@/components/site/interactive-grid'
import { HeroGrainOverlay } from '@/components/site/hero-grain-overlay'
import { EncryptedReveal } from '@/components/site/encrypted-reveal'
import styles from './cinematic-hero.module.css'

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(3px)' },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: custom * 0.07 + 0.28,
      duration: 0.55,
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

  // Direct transforms from scroll progress — Lenis handles the smoothing,
  // so no useSpring needed here (double-smoothing causes wobble/jiggle)

  // 1. Left hero copy (Eyebrow + Title) slides UP and fades early
  const copyY = useTransform(scrollYProgress, [0, 0.18], [0, -180], { clamp: true })
  const copyOpacity = useTransform(scrollYProgress, [0, 0.18, 0.28], [1, 1, 0], { clamp: true })
  const copyDisplay = useTransform(scrollYProgress, (p) => (p >= 0.28 ? 'none' : 'flex'))

  // 2. Right sidebar "Get a quote" orange CTA fades
  const ctaY = useTransform(scrollYProgress, [0, 0.40], [0, 0], { clamp: true })
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.20, 0.32], [1, 1, 0], { clamp: true })

  // 3. Right metrics block slides UPWARDS and fades
  const metricsY = useTransform(scrollYProgress, [0, 0.18], [0, -360], { clamp: true })
  const metricsOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0], { clamp: true })

  // Right sidebar container fades out and hides completely as video expands
  const sideOpacity = useTransform(scrollYProgress, [0, 0.20, 0.32], [1, 1, 0], { clamp: true })
  const sideDisplay = useTransform(scrollYProgress, (p) => (p >= 0.32 ? 'none' : 'flex'))

  // 4. Video expands to full screen by progress 0.35 (~70vh scroll), then stays pinned for the curtain
  const videoTop = useTransform(scrollYProgress, [0, 0.18, 0.35], ['80%', '26%', '0%'], { clamp: true })
  const videoHeight = useTransform(scrollYProgress, [0, 0.18, 0.35], ['20%', '74%', '100%'], { clamp: true })

  // 5. Dark overlay scrim smoothly fades out as curtain reaches 50% coverage
  const videoOverlayOpacity = useTransform(scrollYProgress, [0.68, 0.84], [1, 0], { clamp: true })

  // 6. Colour blend & blur animation: when curtain covers 50% (progress ~0.68-0.72), gradually blur and dissolve video into solid #636573 theme bg
  const videoBlur = useTransform(scrollYProgress, [0.68, 0.86], [0, 28], { clamp: true })
  const videoBlurFilter = useTransform(videoBlur, (v) => (v > 0 ? `blur(${v}px)` : 'none'))
  const videoOpacity = useTransform(scrollYProgress, [0.68, 0.86], [1, 0], { clamp: true })
  const videoTintOpacity = useTransform(scrollYProgress, [0.68, 0.86], [0, 1], { clamp: true })

  return (
    <div ref={containerRef} className={styles['cinematic-hero-container']}>
      <div className={styles['cinematic-hero-sticky']}>
        {/* HIGH-CONTRAST PROCEDURAL DARK FILM GRAIN */}
        <HeroGrainOverlay />

        {/* INTERACTIVE KINETIC DASH GRID */}
        <InteractiveGrid />

        {/* TOP LEFT COPY: Eyebrow and Headline slide UP together as shown in the reference frames */}
        <motion.div
          className={styles['hero-copy']}
          style={{ y: copyY, opacity: copyOpacity, display: copyDisplay }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>Engineering Excellence</SectionLabel>
          </motion.div>

          <h1>
            <span className={styles['hero-words-line']}>
              {['Industrial', 'Wear', 'Components'].map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className={styles['hero-word']}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </span>
            <br />
            <span className={styles['hero-words-line']}>
              {['Engineered', 'to'].map((word, i) => (
                <motion.span
                  key={i}
                  custom={i + 3}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className={styles['hero-word']}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
              <motion.span
                custom={5}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className={styles['hero-word']}
              >
                <EncryptedReveal text="Outlast OEM Standards" revealDelay={580} />
              </motion.span>
            </span>
          </h1>
        </motion.div>

        {/* RIGHT SIDEBAR */}
        <motion.div
          className={styles['hero-side']}
          style={{ opacity: sideOpacity, display: sideDisplay }}
        >
          {/* Orange CTA stays pinned at top right aligned with the headline */}
          <motion.div
            className={styles['hero-side-top']}
            style={{ y: ctaY, opacity: ctaOpacity }}
          >
            <Link href="/contact" className={styles['hero-side-cta']}>
              <span>Get Started</span>
              <svg
                viewBox="0 0 24 24"
                className={styles['hero-morph-icon']}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="square"
                strokeLinejoin="miter"
                aria-hidden="true"
              >
                <path d="M7 7h10v10" className="icon-head" />
                <line x1="7" y1="17" x2="16" y2="8" className="icon-stem" strokeLinecap="square" />
              </svg>
            </Link>
          </motion.div>

          {/* Black metrics box slides directly UP under the orange header and hides */}
          <motion.div
            className={styles['hero-side-body']}
            style={{ y: metricsY, opacity: metricsOpacity }}
          >
            <div className={styles['hero-metrics-group']}>
              <div className={styles['hero-metric-block']}>
                <div className={styles['hero-metric-header']}>
                  <div className={styles['metric-icon']} aria-hidden="true">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 11.25L12 2.25L21 11.25H16.5V14.25H7.5V11.25H3Z"
                        stroke="#C8370B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 20.25H7.5"
                        stroke="#C8370B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 17.25H7.5"
                        stroke="#C8370B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <strong className={styles['metric-value']}>
                    <Counter to={10} />
                    <span className={styles['metric-plus']}>+</span>
                  </strong>
                </div>
                <span className={styles['metric-label']}>years experience</span>
              </div>

              <div className={styles['hero-metric-block']}>
                <div className={styles['hero-metric-header']}>
                  <div className={styles['metric-icon']} aria-hidden="true">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.25 4.5H21V8.25"
                        stroke="#C8370B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.75 19.5H3V15.75"
                        stroke="#C8370B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 15.75V19.5H17.25"
                        stroke="#C8370B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 8.25V4.5H6.75"
                        stroke="#C8370B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.5 8.25V15.75"
                        stroke="#C8370B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 8.25V15.75"
                        stroke="#C8370B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.5 8.25V15.75"
                        stroke="#C8370B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.5 8.25V15.75"
                        stroke="#C8370B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <strong className={styles['metric-value']}>
                    <Counter to={100} />
                    <span className={styles['metric-plus']}>+</span>
                  </strong>
                </div>
                <span className={styles['metric-label']}>projects delivered</span>
              </div>
            </div>

            <p className={styles['hero-side-desc']}>
              Reliable engineering, precision manufacturing, and scalable solutions for modern industries.
            </p>
          </motion.div>
        </motion.div>

        {/* EXPANDING CINEMATIC VIDEO */}
        <motion.div
          className={styles['hero-art-expanding']}
          style={{
            top: videoTop,
            height: videoHeight,
            zIndex: 15,
          }}
        >
          <motion.video
            className={styles['hero-video']}
            autoPlay
            muted
            loop
            playsInline
            poster="/images/asphalt-plant-hero.webp"
            style={{
              filter: videoBlurFilter,
              opacity: videoOpacity,
            }}
          >
            <source src="/images/wearguard-hero-reel.mp4" type="video/mp4" />
          </motion.video>
          <motion.div
            className={styles['hero-video-overlay']}
            style={{
              opacity: videoOverlayOpacity,
            }}
            aria-hidden="true"
          />
          <motion.div
            className={styles['hero-video-slate-blend']}
            style={{
              opacity: videoTintOpacity,
            }}
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </div>
  )
}
