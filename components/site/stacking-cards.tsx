'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, MotionValue } from 'motion/react'
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
    title: 'Asphalt Systems',
    desc: 'Smart systems to improve productivity and eliminate plant downtime across high-temp drying circuits.',
    image: '/images/1.png',
    imageAlt: 'Asphalt mixing and drying plant operations',
    link: '/industries#asphalt-paving',
  },
  {
    id: 'concrete',
    title: 'Concrete Batching',
    desc: 'Heavy-duty Ni-Hard and high-chrome paddle tips and mixer floor liners built to resist slurry grinding.',
    image: '/images/2.png',
    imageAlt: 'Concrete mixer shaft and reinforced arm assemblies',
    link: '/industries#concrete-batching',
  },
  {
    id: 'process',
    title: 'Process Industries',
    desc: 'Custom ceramic-rubber composites, chrome-carbide plates, and pneumatic transitions designed for 24/7 uptime.',
    image: '/images/3.png',
    imageAlt: 'Process industry custom wear liners and engineered chute assemblies',
    link: '/industries#recycling-shredding',
  },
  {
    id: 'mining',
    title: 'Mining & Quarrying',
    desc: 'Custom solutions designed to optimize performance, eliminate shock failure, and maximize wear tonnage.',
    image: '/images/4.png',
    imageAlt: 'Heavy earthmoving and mining bucket wear parts',
    link: '/industries#mining-mineral',
  },
]

function StackingCardItem({
  card,
  index,
  total,
  progress,
}: {
  card: CardData
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Target scale for earlier cards as new ones stack on top
  const targetScale = 1 - (total - index - 1) * 0.04
  const scale = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [1, targetScale]
  )

  return (
    <div
      ref={containerRef}
      className="stacked-card-wrapper"
      style={{
        position: 'sticky',
        top: `calc(90px + ${index * 26}px)`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale: index === total - 1 ? 1 : scale,
          transformOrigin: 'top center',
          willChange: 'transform',
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
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={containerRef} className="stacking-cards-container">
      {cards.map((card, index) => (
        <StackingCardItem
          key={card.id}
          card={card}
          index={index}
          total={cards.length}
          progress={scrollYProgress}
        />
      ))}
    </div>
  )
}
