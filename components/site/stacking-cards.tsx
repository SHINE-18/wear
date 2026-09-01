'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Arrow } from '@/components/site/ui'

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
    image: '/images/1.png',
    imageAlt: 'Asphalt plant pugmill liners and aggregate processing wear assemblies',
    link: '/industries#asphalt-paving',
  },
  {
    id: 'concrete',
    title: 'Concrete Batching',
    desc: 'Heavy-duty pan mixer floor tiles, scraper blades, and discharge chutes built to resist slurry grinding.',
    image: '/images/2.png',
    imageAlt: 'Concrete batch plant wear liners and pan mixer blades',
    link: '/industries#concrete-batching',
  },
  {
    id: 'process-industries',
    title: 'Process Industries',
    desc: 'Custom ceramic-rubber composite chutes, hopper wear plates, and pneumatic transfer elbows.',
    image: '/images/3.png',
    imageAlt: 'Process industry wear plates, chutes and transfer point liners',
    link: '/industries#recycling-shredding',
  },
  {
    id: 'mining',
    title: 'Mining & Quarrying',
    desc: 'Hyper-eutectic high-chrome crusher liners, grizzly bars, and severe impact wear plates.',
    image: '/images/4.png',
    imageAlt: 'Mining and quarry heavy wear liners and crusher wear parts',
    link: '/industries#mining-mineral',
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
  const dockOffsetPx = 110 + index * 76
  const stickyTop = `calc(var(--stack-base-top, 110px) + ${index * 76}px)`

  // Track scroll position of this individual card from entering viewport until it docks
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', `start ${dockOffsetPx + 40}px`],
  })

  // 3D curving entrance from flat/tilted surface into upright position
  const rotateX = useTransform(scrollYProgress, [0, 1], [index === 0 ? 0 : 24, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [index === 0 ? 1 : 0.94, 1.0])
  const opacity = useTransform(scrollYProgress, [0, 0.25, 1], [index === 0 ? 1 : 0.4, 1, 1])

  return (
    <motion.div
      ref={cardRef}
      className="stack-card"
      style={{
        top: stickyTop,
        zIndex: index + 1,
        rotateX,
        scale,
        opacity,
        transformOrigin: 'top center',
      }}
    >
      <Link href={card.link} className="stack-card-inner">
        {/* LEFT COLUMN: Title at top, Orange mark + Description at bottom */}
        <div className="stack-card-content">
          <div className="stack-card-title-wrap">
            <h3 className="stack-card-title">{card.title}</h3>
            <span className="stack-card-arrow" aria-hidden="true">
              <Arrow />
            </span>
          </div>

          <div className="stack-card-footer-wrap">
            <p className="stack-card-desc">{card.desc}</p>
          </div>
        </div>

        {/* RIGHT COLUMN: Framed image */}
        <div className="stack-card-image">
          <div className="stack-card-image-frame">
            <img src={card.image} alt={card.imageAlt} />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function IndustryStackingCards() {
  return (
    <div className="stack-container">
      {/* Section Header */}
      <div className="stack-header">
        <div>
          <div className="stack-eyebrow">Services</div>
          <h2 className="stack-title">
            What We <span>Offer</span>
          </h2>
        </div>
        <Link href="/industries" className="stack-all-link">
          <span>All Services</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </Link>
      </div>

      {/* 3D Stack Cards Container */}
      <div className="stack-cards-wrapper">
        {cards.map((card, index) => (
          <IndividualStackCard key={card.id} card={card} index={index} />
        ))}
        {/* End spacer to hold the completed 4-card stack in view before scrolling into the next section */}
        <div className="stack-end-space" aria-hidden="true" />
      </div>
    </div>
  )
}
