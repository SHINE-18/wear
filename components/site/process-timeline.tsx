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

  // Node color — transitions from subtle muted block to solid orange block
  const dotBackground = useTransform(
    progress,
    [Math.max(0, stepThreshold - 0.04), stepThreshold],
    ['rgba(255,255,255,0.18)', '#D94B2B']
  )

  const dotScale = useTransform(
    progress,
    [Math.max(0, stepThreshold - 0.04), stepThreshold, Math.min(1, stepThreshold + 0.08)],
    [1, 1.15, 1]
  )

  return (
    <motion.div className="process-step-item" style={{ opacity }}>
      {/* Sharp rectangular node on the spine */}
      <motion.div
        className="spine-node-dot"
        style={{ backgroundColor: dotBackground, scale: dotScale }}
      />
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
  const [spineBounds, setSpineBounds] = useState<{ top: number; height: number } | null>(null)

  // Measure exact vertical centers of first and last step for pixel-perfect line anchoring
  useEffect(() => {
    const updateBounds = () => {
      if (!listRef.current) return
      const stepEls = listRef.current.querySelectorAll('.process-step-item')
      if (stepEls.length >= 2) {
        const first = stepEls[0] as HTMLElement
        const last = stepEls[stepEls.length - 1] as HTMLElement
        const listRect = listRef.current.getBoundingClientRect()
        const firstRect = first.getBoundingClientRect()
        const lastRect = last.getBoundingClientRect()

        const top = firstRect.top + firstRect.height / 2 - listRect.top
        const bottom = lastRect.top + lastRect.height / 2 - listRect.top
        setSpineBounds({ top, height: bottom - top })
      }
    }

    updateBounds()
    window.addEventListener('resize', updateBounds)
    return () => window.removeEventListener('resize', updateBounds)
  }, [])

  // Track scroll through the list
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 65%', 'end 60%'],
  })

  // Ultra smooth spring interpolation for buttery, fluid motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 24,
    mass: 0.5,
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
          {/* Vertical spine running exactly between step 1 and step 4 */}
          <div
            className="process-vertical-spine"
            aria-hidden="true"
            style={
              spineBounds
                ? { top: `${spineBounds.top}px`, height: `${spineBounds.height}px` }
                : { top: '3.5rem', height: 'calc(100% - 7rem)' }
            }
          >
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
