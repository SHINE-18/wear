'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'motion/react'
import { Arrow } from '@/components/site/ui'

interface CardData {
  id: string
  title: string
  desc: string
  image: string
  imageAlt: string
  link: string
  entrySlant: number
}

const cards: CardData[] = [
  {
    id: 'asphalt',
    title: 'Asphalt Systems',
    desc: 'Smart systems to improve productivity and eliminate plant downtime across high-temp drying circuits.',
    image: '/images/1.png',
    imageAlt: 'Asphalt mixing and drying plant operations',
    link: '/industries#asphalt-paving',
    entrySlant: -3.5,
  },
  {
    id: 'concrete',
    title: 'Concrete Batching',
    desc: 'Heavy-duty Ni-Hard and high-chrome paddle tips and mixer floor liners built to resist slurry grinding.',
    image: '/images/2.png',
    imageAlt: 'Concrete mixer shaft and reinforced arm assemblies',
    link: '/industries#concrete-batching',
    entrySlant: 3.2,
  },
  {
    id: 'process',
    title: 'Process Industries',
    desc: 'Custom ceramic-rubber composites, chrome-carbide plates, and pneumatic transitions designed for 24/7 uptime.',
    image: '/images/3.png',
    imageAlt: 'Process industry custom wear liners and engineered chute assemblies',
    link: '/industries#recycling-shredding',
    entrySlant: -2.8,
  },
  {
    id: 'mining',
    title: 'Mining & Quarrying',
    desc: 'Custom solutions designed to optimize performance, eliminate shock failure, and maximize wear tonnage.',
    image: '/images/4.png',
    imageAlt: 'Heavy earthmoving and mining bucket wear parts',
    link: '/industries#mining-mineral',
    entrySlant: 2.5,
  },
]

function StackingCardItem({
  card,
  index,
}: {
  card: CardData
  index: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start 240px'],
  })

  // Dynamic slant entrance -> smoothly straightens to 0 on settle
  const rotate = useTransform(scrollYProgress, [0, 1], [card.entrySlant, 0])
  const skewX = useTransform(scrollYProgress, [0, 1], [card.entrySlant > 0 ? 2 : -2, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.5, 0.9, 1])

  return (
    <div
      ref={containerRef}
      className="stacked-card-wrapper"
      style={{
        position: 'sticky',
        top: `calc(85px + ${index * 86}px)`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          rotate,
          skewX,
          scale,
          opacity,
          transformOrigin: index % 2 === 0 ? 'bottom left' : 'bottom right',
          willChange: 'transform, opacity',
        }}
      >
        <Link href={card.link} className="stacked-industry-card">
          {/* LEFT COLUMN: TITLE + ARROW AT TOP, NARRATIVE AT BOTTOM */}
          <div className="stacked-card-left">
            <div className="card-title-row">
              <h3 className="card-title">{card.title}</h3>
              <span className="card-title-arrow" aria-hidden="true">
                <Arrow />
              </span>
            </div>

            <div className="card-signature-bottom">
              <p className="card-signature-desc">{card.desc}</p>
            </div>
          </div>

          {/* RIGHT COLUMN: CLEAN IMAGE ON RIGHT HALF */}
          <div className="stacked-card-right">
            <img src={card.image} alt={card.imageAlt} className="card-full-img" />
          </div>
        </Link>
      </motion.div>
    </div>
  )
}

export function IndustryStackingCards() {
  return (
    <div className="stacking-cards-container">
      {cards.map((card, index) => (
        <StackingCardItem key={card.id} card={card} index={index} />
      ))}
    </div>
  )
}
