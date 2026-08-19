'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'motion/react'
import { Arrow, Button, SectionLabel } from '@/components/site/ui'

export function CustomPartsOverview() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll from when top enters bottom of screen to when it's centered
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center 55%'],
  })

  // Smooth dark-to-light background transition
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.85],
    ['#111319', '#1a1e28', '#ecf0f4']
  )

  // Dark overlay opacity that fades to 0 as user scrolls down
  const darkOverlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.85],
    [1, 0.7, 0]
  )

  // Content illumination & elevation
  const contentY = useTransform(scrollYProgress, [0, 0.85], [30, 0])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.35, 0.85], [0.35, 0.75, 1])

  return (
    <motion.section
      id="custom-parts"
      ref={containerRef}
      className="custom-overview-section"
      style={{ backgroundColor: bgColor }}
    >
      {/* Dark veil that dissolves on scroll */}
      <motion.div
        className="custom-dark-veil"
        style={{ opacity: darkOverlayOpacity }}
        aria-hidden="true"
      />

      <motion.div
        className="custom-overview-stage"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* LEFT: PUNCHY COPY & CAPABILITY HIGHLIGHTS */}
        <div className="custom-overview-copy">
          <SectionLabel>Custom parts & engineering</SectionLabel>
          <h2>
            Engineered for any OEM part.
            <br />
            <em>Built for extreme service.</em>
          </h2>
          <p className="custom-overview-lead">
            WearGuard provides 3D laser-scanned reverse engineering, custom metallurgy, and small-batch flexibility (1–10 units) to eliminate downtime on any plant machinery.
          </p>

          <div className="custom-overview-points">
            <div className="custom-overview-point">
              <span className="overview-num">01</span>
              <div>
                <strong>Reverse Engineering & 3D Scanning</strong>
                <p>Guaranteed 100% bolt-on interchangeability with existing OEM equipment without original drawings.</p>
              </div>
            </div>

            <div className="custom-overview-point">
              <span className="overview-num">02</span>
              <div>
                <strong>Application-Tailored Alloys</strong>
                <p>High-Chrome (Cr 15–28%), Ni-Hard, and manganese formulations matched to your wear zone.</p>
              </div>
            </div>

            <div className="custom-overview-point">
              <span className="overview-num">03</span>
              <div>
                <strong>Small-Batch Orders (1–10 Units)</strong>
                <p>Order prototypes, field trial sets, or emergency replacements with no minimum order barriers.</p>
              </div>
            </div>
          </div>

          <div className="custom-overview-actions">
            <Button href="/custom-parts">
              Explore Custom Engineering Details
            </Button>
            <Link href="/contact" className="about-sub-link">
              <span>Request custom wear audit</span>
              <Arrow />
            </Link>
          </div>
        </div>

        {/* RIGHT: INTERACTIVE PRECISION CASTING MEDIA */}
        <div className="custom-overview-visual">
          <Link href="/custom-parts" className="custom-visual-frame" aria-label="Explore Custom Engineering">
            <img 
              src="/images/custom-casting-engineering.jpg" 
              alt="Precision CNC machined wear casting in high-tech workshop" 
              className="custom-visual-img"
            />
            <div className="custom-visual-badge">
              <span className="custom-badge-tag">CNC MACHINING & FOUNDRY</span>
              <strong>Precision Alloy Casting Inspection</strong>
            </div>
            <div className="custom-spec-tag">
              <span>TOLERANCE: ±0.05mm</span>
            </div>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  )
}
