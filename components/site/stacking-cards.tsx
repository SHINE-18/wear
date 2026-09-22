'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Arrow, SectionLabel } from '@/components/site/ui'
import { InteractiveGrid } from '@/components/site/interactive-grid'
import styles from './stacking-cards.module.css'

interface CardData {
  id: string
  title: string
  desc: string
  image: string
  imageAlt: string
  link: string
}

const cards: CardData[] = [
  {
    id: 'asphalt',
    title: 'Asphalt Plants',
    desc: 'High-temp pugmill paddle tips, flighting liners, and slinger arms engineered for 400°C abrasive aggregate mixing.',
    image: '/images/asphalt-plant-tower.jpg',
    imageAlt: 'Asphalt plant aggregate conveyor elevator and mixing tower',
    link: '/industries/asphalt',
  },
  {
    id: 'concrete',
    title: 'Concrete Batching',
    desc: 'Heavy-duty pan mixer floor tiles, scraper blades, and discharge chutes built to resist slurry grinding.',
    image: '/images/concrete-batching-silos.jpg',
    imageAlt: 'Concrete batch plant storage silos, ready-mix truck, and mixing assembly',
    link: '/industries/concrete',
  },
  {
    id: 'process-industries',
    title: 'Process Industries',
    desc: 'Custom ceramic-rubber composite chutes, hopper wear plates, and pneumatic transfer elbows.',
    image: '/images/process-chemical-refinery.jpg',
    imageAlt: 'Process industry high-pressure chemical refinery piping and distillation towers',
    link: '/industries/process-industries',
  },
  {
    id: 'mining',
    title: 'Mining & Quarrying',
    desc: 'Hyper-eutectic high-chrome crusher liners, grizzly bars, and severe impact wear plates.',
    image: '/images/mining-quarry-excavation.jpg',
    imageAlt: 'Mining open pit rock face excavation with heavy wheel loader and haul truck',
    link: '/industries/mining',
  },
]

function IndividualStackCard({
  card,
  index,
}: {
  card: CardData
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  // Target dock position for this card
  const dockOffsetPx = 100 + index * 76
  const stickyTop = `calc(var(--stack-base-top, 100px) + ${index * 76}px)`

  // Track scroll position of this individual card from entering viewport until it docks
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', `start ${dockOffsetPx + 30}px`],
  })

  // 3D curving entrance from flat/tilted surface into upright position
  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.0])
  const opacity = useTransform(scrollYProgress, [0, 0.25, 1], [0.45, 1, 1])

  return (
    <div
      ref={cardRef}
      className={styles['stack-card-pin']}
      style={{
        position: 'sticky',
        top: stickyTop,
        zIndex: index + 1,
      }}
    >
      <motion.div
        className={`${styles['stack-card']} ${index === 0 ? styles['first-card'] : ''}`}
        style={
          index === 0
            ? undefined
            : {
                rotateX,
                scale,
                opacity,
                transformOrigin: 'top center',
                transformPerspective: 1200,
              }
        }
      >
        <Link href={card.link} className={styles['stack-card-inner']}>
          {/* LEFT COLUMN: Title at top, Arrow + Description at bottom */}
          <div className={styles['stack-card-content']}>
            <div className={styles['stack-card-title-wrap']}>
              <h3 className={styles['stack-card-title']}>{card.title}</h3>
            </div>

            <div className={styles['stack-card-footer-wrap']}>
              <span className={styles['stack-card-arrow']} aria-hidden="true">
                <Arrow />
              </span>
              <p className={styles['stack-card-desc']}>{card.desc}</p>
            </div>
          </div>

          {/* RIGHT COLUMN: Framed image */}
          <div className={styles['stack-card-image']}>
            <div className={styles['stack-card-image-frame']}>
              <img src={card.image} alt={card.imageAlt} width={836} height={628} />
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  )
}

export function IndustryStackingCards({
  showAllLink = true,
  extendGridToNavbar = false,
}: {
  showAllLink?: boolean
  extendGridToNavbar?: boolean
}) {
  const { scrollY } = useScroll()
  // As user scrolls past the header, area below What We Offer turns to pure white #FFFFFF
  const cardsWhiteBgOpacity = useTransform(scrollY, [40, 180], [0, 1])

  return (
    <div className={styles['stack-container']}>
      {/* Section Header */}
      <div className={styles['stack-header']}>
        {/* MAGNETIC LINES EFFECT BEHIND WHAT WE OFFER AND NAVBAR (ONLY ON INDUSTRIES PAGE) */}
        {extendGridToNavbar && (
          <div
            className={`${styles['stack-header-canvas-wrap']} ${styles['canvas-wrap-extended']}`}
            aria-hidden="true"
          >
            <InteractiveGrid />
          </div>
        )}

        <div className={styles['stack-header-content']}>
          <SectionLabel>Services</SectionLabel>
          <h2 className={styles['stack-title']}>
            What We <span>Offer</span>
          </h2>
        </div>
        {showAllLink && (
          <Link href="/industries" className={styles['stack-all-link']}>
            <span>All Services</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        )}
      </div>

      {/* 3D Stack Cards Container */}
      <div className={styles['stack-cards-wrapper']}>
        {/* WHITE BACKGROUND LAYER BELOW WHAT WE OFFER */}
        <motion.div
          className={styles['stack-cards-white-bg']}
          style={{ opacity: cardsWhiteBgOpacity }}
          aria-hidden="true"
        />

        {cards.map((card, index) => (
          <IndividualStackCard key={card.id} card={card} index={index} />
        ))}
        {/* End spacer to hold the completed 4-card stack in view before scrolling into the next section */}
        <div className={styles['stack-end-space']} aria-hidden="true" />
      </div>
    </div>
  )
}
