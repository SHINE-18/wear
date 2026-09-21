'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, MotionValue } from 'motion/react'
import styles from './process-timeline.module.css'

interface ProcessItem {
  num: string
  title: string
  desc: string
}

const industrialSteps: ProcessItem[] = [
  {
    num: '01.',
    title: 'Consultation',
    desc: 'We analyze your needs and define the best solution.',
  },
  {
    num: '02.',
    title: 'Planning',
    desc: 'We design a strategy tailored to your operations.',
  },
  {
    num: '03.',
    title: 'Implementation',
    desc: 'We execute the solution with precision and quality.',
  },
  {
    num: '04.',
    title: 'Support',
    desc: 'We provide continuous support to ensure long-term performance.',
  },
]

function StepRow({
  step,
  index,
  total,
  progress,
}: {
  step: ProcessItem
  index: number
  total: number
  progress: MotionValue<number>
}) {
  // Calibrated so Support (step 3) activates comfortably as it enters view
  const stepThreshold = (index / (total - 1)) * 0.85
  
  // Smooth active highlight for text content
  const textOpacity = useTransform(
    progress,
    [Math.max(0, stepThreshold - 0.12), stepThreshold, Math.min(1, stepThreshold + 0.15)],
    [0.35, 1, 1]
  )

  // Node color — transitions from crisp dark charcoal with border to solid orange
  const dotBackground = useTransform(
    progress,
    [Math.max(0, stepThreshold - 0.03), stepThreshold],
    ['#22252C', '#C8370B']
  )

  const dotScale = useTransform(
    progress,
    [Math.max(0, stepThreshold - 0.03), stepThreshold, Math.min(1, stepThreshold + 0.07)],
    [1, 1.15, 1]
  )

  return (
    <div className={styles['process-step-item']}>
      {/* Circle node on the spine - margin-centered so transforms never offset alignment */}
      <motion.div
        className={styles['spine-node-dot']}
        style={{
          backgroundColor: dotBackground,
          scale: dotScale,
        }}
      />

      {/* STEP CONTENT with scroll-linked opacity */}
      <motion.div className={styles['step-content-row']} style={{ opacity: textOpacity }}>
        <div className={styles['step-title-wrap']}>
          <h3>
            {step.title}
            <span className={styles['step-sup-num']}>{step.num}</span>
          </h3>
        </div>
        <div className={styles['step-desc-wrap']}>
          <p>{step.desc}</p>
        </div>
      </motion.div>
    </div>
  )
}

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  // Track scroll through the list - ensures laser completes into the Support dot as Support comes into view
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 60%', 'end 85%'],
  })

  // Lenis handles scroll smoothing — no spring needed (prevents wobble)

  return (
    <section ref={containerRef} className={`${styles['process-timeline-section']} section-dark`}>
      <div className={styles['process-timeline-container']}>
        {/* HEADER */}
        <div className={styles['process-header']}>
          <div className={styles['process-eyebrow']}>
            <span className="eyebrow-pipe" aria-hidden="true" />
            <span>How We Work</span>
          </div>
          <h2 className={styles['process-main-title']}>
            Engineered <span className={styles['title-muted']}>Processes</span>
            <br />
            that Ensure Consistency
          </h2>
        </div>

        {/* TIMELINE LIST */}
        <div className={styles['process-timeline-wrapper']} ref={listRef}>
          {/* Full-height vertical hatched spine running continuously past Support */}
          <div className={styles['process-vertical-spine']} aria-hidden="true">
            <motion.div
              className={styles['spine-track-laser']}
              style={{ scaleY: scrollYProgress, originY: 0 }}
            />
          </div>

          {/* PROCESS STEP ITEMS */}
          <div className={styles['process-steps-column']}>
            {industrialSteps.map((step, idx) => (
              <StepRow
                key={step.num}
                step={step}
                index={idx}
                total={industrialSteps.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* BOTTOM STATS DECK */}
        <div className={styles['process-stats-deck']}>
          <div className={styles['process-stat-card']}>
            <strong>10+</strong>
            <span>Years Technical Metallurgy</span>
          </div>

          <div className={styles['process-stat-card']}>
            <strong>250+</strong>
            <span>Heavy Plant Overhauls</span>
          </div>

          <div className={styles['process-stat-card']}>
            <strong>98%</strong>
            <span>Client Satisfaction</span>
          </div>

          <Link href="/contact" className={styles['process-cta-card']}>
            <span>Get a quote</span>
            <span className={styles['cta-corner-arrow']}>⌝</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
