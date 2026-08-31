'use client'

import { useRef } from 'react'
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
    desc: 'We analyze your operating wear zones, aggregate abrasion patterns, and temperature loads to diagnose failure root-causes and define exact metallurgy targets.',
  },
  {
    num: '02.',
    title: 'Planning',
    desc: '3D laser scanning, precise CAD reverse-engineering, and alloy chemistry formulation (High-Chrome, Ni-Hard, Manganese) tailored to your machinery.',
  },
  {
    num: '03.',
    title: 'Implementation',
    desc: 'Foundry casting, controlled heat treatment, and CNC precision machining executed to strict ISO 9001 tolerances for 100% guaranteed bolt-on fit.',
  },
  {
    num: '04.',
    title: 'Support',
    desc: 'Rapid global dispatch, field installation assistance, subscription-based restocking, and continuous operational wear-life optimization.',
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
  const stepThreshold = index / (total - 1)
  
  // Smooth active highlight as scroll passes step
  const opacity = useTransform(
    progress,
    [Math.max(0, stepThreshold - 0.15), stepThreshold, Math.min(1, stepThreshold + 0.15)],
    [0.35, 1, 1]
  )

  return (
    <motion.div className="process-step-item" style={{ opacity }}>
      {/* STEP CONTENT */}
      <div className="step-content-row">
        <div className="step-title-wrap">
          <h3>
            {step.title}
            <span className="step-sup-num">{step.num}</span>
          </h3>
        </div>
        <div className="step-desc-wrap">
          <p>{step.desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  // Track scroll through the list
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 65%', 'end 60%'],
  })

  // Ultra smooth spring interpolation for buttery, fluid motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 22,
    mass: 0.6,
    restDelta: 0.0005,
  })

  return (
    <section ref={containerRef} className="process-timeline-section section-dark">
      <div className="process-timeline-container">
        {/* HEADER */}
        <div className="process-header">
          <SectionLabel>How We Work</SectionLabel>
          <h2>
            Engineered <em>Processes</em>
            <br />
            that Ensure Consistency
          </h2>
        </div>

        {/* TIMELINE LIST */}
        <div className="process-timeline-wrapper" ref={listRef}>
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
