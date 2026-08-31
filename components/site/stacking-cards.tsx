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
    id: 'automation',
    title: 'Automation Solutions',
    desc: 'Smart systems to improve productivity and reduce downtime across high-temp circuits.',
    image: '/images/1.png',
    imageAlt: 'Automation solutions and industrial plant control systems',
    link: '/industries#asphalt-paving',
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    desc: 'Heavy-duty wear inspection, paddle tips, and mixer liners built to resist slurry grinding.',
    image: '/images/2.png',
    imageAlt: 'Industrial maintenance and heavy wear assembly rebuilds',
    link: '/industries#concrete-batching',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    desc: 'Custom high-chrome castings, chrome-carbide plates, and bespoke liner geometries.',
    image: '/images/3.png',
    imageAlt: 'Custom wear liner manufacturing and precision metallurgy',
    link: '/industries#recycling-shredding',
  },
  {
    id: 'engineering',
    title: 'Industrial Engineering',
    desc: 'Custom solutions designed to optimize performance and efficiency.',
    image: '/images/4.png',
    imageAlt: 'Industrial engineering and heavy mining wear protection',
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

        {/* RIGHT COLUMN: Full-bleed image */}
        <div className="stack-card-image">
          <img src={card.image} alt={card.imageAlt} />
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
          All Services <span className="stack-link-glyph">↗</span>
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
