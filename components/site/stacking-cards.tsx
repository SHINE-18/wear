'use client'

import Link from 'next/link'
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

/**
 * Pure CSS sticky-stacking card scroll.
 *
 * Every card is the SAME full height. Each uses `position: sticky` with an
 * increasing `top` offset (0, 80, 160, 240px — relative to nav clearance)
 * and increasing `z-index`. At scroll-position 0 only Card 1 is on screen,
 * reading as one single full card. As the user scrolls, Card 2 slides up
 * and — because it has a higher z-index — covers Card 1 entirely except
 * for the top 80px "title sliver." Same logic repeats down the stack.
 */
export function IndustryStackingCards() {
  return (
    <div className="stack-container">
      {/* Section header — eyebrow + two-tone title + link */}
      <div className="stack-header">
        <div>
          <div className="stack-eyebrow">Targeted Engineering</div>
          <h2 className="stack-title">
            Built for the <span>hardest</span>
            <br />
            working environments.
          </h2>
        </div>
        <Link href="/industries" className="stack-all-link">
          All Industries <span className="stack-link-glyph">↗</span>
        </Link>
      </div>

      {/* The actual sticky stack */}
      <div className="stack-cards">
        {cards.map((card, index) => (
          <Link
            key={card.id}
            href={card.link}
            className="stack-card"
            style={{
              top: `calc(var(--stack-top, 84px) + ${index * 42}px)`,
              zIndex: index + 1,
            }}
          >
            {/* LEFT: title at top, arrow + desc at bottom */}
            <div className="stack-card-content">
              <div className="stack-card-title-row">
                <h3>{card.title}</h3>
                <span className="stack-card-arrow" aria-hidden="true">
                  <Arrow />
                </span>
              </div>
              <div className="stack-card-footer">
                <p>{card.desc}</p>
              </div>
            </div>

            {/* RIGHT: full-bleed image */}
            <div className="stack-card-image">
              <img src={card.image} alt={card.imageAlt} />
            </div>
          </Link>
        ))}

        {/* End spacer — keeps the last card pinned long enough before the next section scrolls in */}
        <div className="stack-end-space" />
      </div>
    </div>
  )
}
