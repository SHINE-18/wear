'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'motion/react'
import { InteractiveGrid } from '@/components/site/interactive-grid'
import type { IndustryData } from '@/lib/industries-data'
import styles from './industry-hero-expand.module.css'

interface HotspotData {
  id: string
  num: string
  name: string
  category: string
  x: number // percentage from left
  y: number // percentage from top
  align?: 'left' | 'center' | 'right'
  description: string
  metallurgy: string
  benefit: string
}

const sectorHotspots: Record<string, HotspotData[]> = {
  asphalt: [
    {
      id: 'conveyor',
      num: '01',
      name: 'Aggregate Feed Chute',
      category: 'Feed & Transfer System',
      x: 15,
      y: 52,
      align: 'left',
      description: 'Composite ceramic-embedded drop liners designed to absorb continuous crushed quartz and granite impact.',
      metallurgy: 'Ceramic Matrix & Structural Steel',
      benefit: 'Zero face washout record',
    },
    {
      id: 'dryer',
      num: '02',
      name: 'Rotary Drying Drum & Flights',
      category: 'Thermal Aggregate Drying',
      x: 35,
      y: 60,
      align: 'center',
      description: 'Ni-Hard 4 and high-chrome flight liners engineered for combined 950°C thermal shock and severe aggregate sliding abrasion.',
      metallurgy: 'Ni-Hard 4 & Cr 18–28% Castings',
      benefit: '+200% campaign tonnes vs OEM',
    },
    {
      id: 'pugmill',
      num: '03',
      name: 'Continuous Pugmill Mixer',
      category: 'High-Shear Mixing Assembly',
      x: 52,
      y: 36,
      align: 'center',
      description: 'Martensitic cast paddle tips and slinger arms engineered to withstand severe gouging friction and abrasive slurry grinding.',
      metallurgy: 'Cr-Mo Martensitic Alloy',
      benefit: '120,000+ tonnes geometry retention',
    },
    {
      id: 'silo',
      num: '04',
      name: 'Hot Storage Silos & Discharge',
      category: 'Storage & Discharge Assembly',
      x: 64,
      y: 34,
      align: 'right',
      description: 'Heavy cast segment liners and flanged gates built for continuous high-temperature sliding erosion.',
      metallurgy: 'EnduraCast High-Chrome Alloy',
      benefit: '3× changeover cycle extension',
    },
  ],
  concrete: [
    {
      id: 'skip-hoist',
      num: '01',
      name: 'Skip Hoist & Weigh Bin Liners',
      category: 'Batch Feed Circuit',
      x: 78,
      y: 38,
      align: 'right',
      description: 'Hyper-eutectic wear plates engineered to absorb direct coarse aggregate impact and continuous dropping shock.',
      metallurgy: 'Hyper-Eutectic High-Chrome',
      benefit: '+180% fracture resistance',
    },
    {
      id: 'mixer-blades',
      num: '02',
      name: 'Twin-Shaft Mixer Blades',
      category: 'Batch Mixing Assembly',
      x: 46,
      y: 48,
      align: 'center',
      description: 'Precision-cast paddle blades engineered to resist intense quartz sand gouging and cementitious slurry wear.',
      metallurgy: 'EnduraCast Z-Core Cast Blades',
      benefit: '150,000+ m³ batch life',
    },
    {
      id: 'floor-tiles',
      num: '03',
      name: 'Reversible Floor & Wall Tiles',
      category: 'Pan Casing Protection',
      x: 28,
      y: 62,
      align: 'left',
      description: 'Dual-sided chromium carbide wear tiles that can be inverted to double total operational service life.',
      metallurgy: 'Cast Chromium Carbide Matrix',
      benefit: 'Double service life via inversion',
    },
    {
      id: 'discharge-chute',
      num: '04',
      name: 'Discharge Chute Assembly',
      category: 'Discharge Circuit',
      x: 64,
      y: 54,
      align: 'center',
      description: 'Ceramic-matrix composite deflector liners preventing high-velocity cement slurry erosion.',
      metallurgy: 'Ceramic-Matrix Elastomer Composite',
      benefit: 'Zero unscheduled outages',
    },
  ],
  'process-industries': [
    {
      id: 'chutes',
      num: '01',
      name: 'Bulk Transfer Chutes & Hoppers',
      category: 'Bulk Material Handling',
      x: 24,
      y: 42,
      align: 'left',
      description: 'Dead-box composite tile layouts that create a protective rock-on-rock cushion, dampening impact and structural noise.',
      metallurgy: 'Composite Ceramic-Steel Matrix',
      benefit: '79 dB acoustic noise reduction',
    },
    {
      id: 'hammers',
      num: '02',
      name: 'High-Impact Shredder Hammers',
      category: 'Shredding & Fragmentation',
      x: 58,
      y: 45,
      align: 'center',
      description: 'Forged alloy steel hammers hardfaced with chromium carbide tips for extreme dynamic fragmentation impact.',
      metallurgy: 'Forged Alloy with Hardfaced CrC',
      benefit: 'Zero catastrophic fracturing',
    },
    {
      id: 'cyclones',
      num: '03',
      name: 'Cyclone Separator Cones',
      category: 'Centrifugal Separation',
      x: 75,
      y: 36,
      align: 'right',
      description: 'Bonded silicon carbide and cast basalt cone liners resisting severe high-velocity scouring wear.',
      metallurgy: 'Cast Basalt & Silicon Carbide',
      benefit: '4× standard OEM durability',
    },
    {
      id: 'elbows',
      num: '04',
      name: 'Pneumatic Transfer Elbows',
      category: 'Pneumatic Conveying',
      x: 42,
      y: 50,
      align: 'center',
      description: 'Monolithic alumina ceramic lined elbows built for high-velocity abrasive dust and corrosive particulate streams.',
      metallurgy: '96% Al₂O₃ Monolithic Ceramic',
      benefit: '28+ months continuous service',
    },
  ],
  mining: [
    {
      id: 'grizzly',
      num: '01',
      name: 'Grizzly Feeder Bars',
      category: 'Feed Screening Assembly',
      x: 26,
      y: 48,
      align: 'left',
      description: 'High-moly white iron castings designed for continuous dropping shock from heavy 800mm blasted boulders.',
      metallurgy: 'Martensitic High-Moly White Iron',
      benefit: '+250% tonnage throughput',
    },
    {
      id: 'jaw-liners',
      num: '02',
      name: 'Primary Crusher Jaw Liners',
      category: 'Primary Crushing Circuit',
      x: 46,
      y: 55,
      align: 'center',
      description: 'Formulated austenitic manganese steel die plates with optimized tooth profiles to absorb 500-tonne dynamic impact.',
      metallurgy: 'Mn 18–22% Austenitic Steel with Cr',
      benefit: 'Zero catastrophic failure record',
    },
    {
      id: 'ball-mill',
      num: '03',
      name: 'Ball Mill Lifter Bars',
      category: 'Grinding Circuit',
      x: 62,
      y: 40,
      align: 'center',
      description: 'Bi-metallic formulated Cr-Mo castings engineered to survive continuous heavy steel grinding ball collisions.',
      metallurgy: 'Bi-Metallic Cr-Mo Alloy',
      benefit: 'Synchronized maintenance schedule',
    },
    {
      id: 'blow-bars',
      num: '04',
      name: 'Impact Crusher Blow Bars',
      category: 'Secondary Crushing Circuit',
      x: 76,
      y: 52,
      align: 'right',
      description: 'Ceramic-insert high-chrome matrix castings combining sharp cutting edge retention with high core toughness.',
      metallurgy: 'Ceramic-Insert High-Chrome Matrix',
      benefit: '+140% cutting edge retention',
    },
  ],
}

export function IndustryHeroExpand({ industry }: { industry: IndustryData }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null)

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

  const hotspots = sectorHotspots[industry.slug] || sectorHotspots['asphalt']

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

        {/* 2. Expanding Media Canvas with Interactive Hotspots */}
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

          {/* Contrast Scrim for HUD hotspots */}
          <div className={styles.indMediaScrim} aria-hidden="true" />

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

          {/* Interactive Plant Hotspots Layer */}
          <div className={styles.indHotspotsLayer}>
            {hotspots.map((spot) => {
              const isActive = activeHotspotId === spot.id

              return (
                <div
                  key={spot.id}
                  className={`${styles.indHotspotItem} ${isActive ? styles.active : ''}`}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  onMouseEnter={() => setActiveHotspotId(spot.id)}
                  onMouseLeave={() => setActiveHotspotId(null)}
                >
                  <button
                    type="button"
                    className={`${styles.indHotspotBtn} ${isActive ? styles.btnActive : ''}`}
                    onClick={() => setActiveHotspotId(isActive ? null : spot.id)}
                    aria-label={`Inspect ${spot.name}`}
                  >
                    <span className={styles.indBadgeBox}>
                      <span className={styles.indBadgeDot} aria-hidden="true" />
                      <span className={styles.indBadgeNum}>{spot.num}</span>
                    </span>
                  </button>

                  {/* Minimal Matte Dark Component Card (Visible on hover only) */}
                  {isActive && (
                    <motion.div
                      className={`${styles.indTelemetryCard} ${
                        spot.y < 45 ? styles.posBelow : styles.posAbove
                      } ${
                        spot.align === 'left'
                          ? styles.alignLeft
                          : spot.align === 'right'
                          ? styles.alignRight
                          : styles.alignCenter
                      }`}
                      initial={{ opacity: 0, y: spot.y < 45 ? -6 : 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: spot.y < 45 ? -6 : 6, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className={styles.indCardCategoryRow}>
                        <div className={styles.indCardHeaderBadge}>
                          <span className={styles.indCardNumBadge}>{spot.num}</span>
                          <span className={styles.indCardCategory}>{spot.category}</span>
                        </div>
                        <span className={styles.indCardDot} aria-hidden="true" />
                      </div>
                      <h4 className={styles.indCardTitle}>{spot.name}</h4>
                      <p className={styles.indCardDesc}>{spot.description}</p>
                      <div className={styles.indCardFooter}>
                        <div className={styles.indCardMetaItem}>
                          <span className={styles.indCardMetaLabel}>Material</span>
                          <span className={styles.indCardMetaVal}>{spot.metallurgy}</span>
                        </div>
                        <div className={styles.indCardMetaItem}>
                          <span className={styles.indCardMetaLabel}>Advantage</span>
                          <span className={styles.indCardBenefitVal}>{spot.benefit}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
