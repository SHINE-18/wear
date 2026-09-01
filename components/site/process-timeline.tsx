'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'motion/react'
import { SectionLabel } from '@/components/site/ui'

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
    ['#22252C', '#D94B2B']
  )

  const dotScale = useTransform(
    progress,
    [Math.max(0, stepThreshold - 0.03), stepThreshold, Math.min(1, stepThreshold + 0.07)],
    [1, 1.15, 1]
  )

  return (
    <div className="process-step-item">
      {/* Circle node on the spine - margin-centered so transforms never offset alignment */}
      <motion.div
        className="spine-node-dot"
        style={{
          backgroundColor: dotBackground,
          scale: dotScale,
        }}
      />

      {/* STEP CONTENT with scroll-linked opacity */}
      <motion.div className="step-content-row" style={{ opacity: textOpacity }}>
        <div className="step-title-wrap">
          <h3>
            {step.title}
            <span className="step-sup-num">{step.num}</span>
          </h3>
        </div>
        <div className="step-desc-wrap">
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

  // Ultra smooth spring interpolation for buttery, fluid motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 24,
    mass: 0.5,
    restDelta: 0.0005,
  })

  return (
    <section ref={containerRef} className="process-timeline-section section-dark">
      <div className="process-timeline-container">
        {/* HEADER */}
        <div className="process-header">
          <div className="process-eyebrow">
            <span className="eyebrow-pipe" aria-hidden="true" />
            <span>How We Work</span>
          </div>
          <h2 className="process-main-title">
            Engineered <span className="title-muted">Processes</span>
            <br />
            that Ensure Consistency
          </h2>
        </div>

        {/* TIMELINE LIST */}
        <div className="process-timeline-wrapper" ref={listRef}>
          {/* Full-height vertical hatched spine running continuously past Support */}
          <div className="process-vertical-spine" aria-hidden="true">
            <motion.div
              className="spine-track-laser"
              style={{ scaleY: smoothProgress, originY: 0 }}
            />
          </div>

          {/* PROCESS STEP ITEMS */}
          <div className="process-steps-column">
            {industrialSteps.map((step, idx) => (
              <StepRow
                key={step.num}
                step={step}
                index={idx}
                total={industrialSteps.length}
                progress={smoothProgress}
              />
            ))}
          </div>
        </div>

        {/* BOTTOM STATS DECK */}
        <div className="process-stats-deck">
          <div className="process-stat-card">
            <strong>10+</strong>
            <span>Years Technical Metallurgy</span>
          </div>

          <div className="process-stat-card">
            <strong>250+</strong>
            <span>Heavy Plant Overhauls</span>
          </div>

          <div className="process-stat-card">
            <strong>98%</strong>
            <span>Client Satisfaction</span>
          </div>

          <Link href="/contact" className="process-cta-card">
            <span>Get a quote</span>
            <span className="cta-corner-arrow">⌝</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
