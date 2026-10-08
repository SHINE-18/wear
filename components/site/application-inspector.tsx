'use client'

import Link from 'next/link'
import { useState, useRef } from 'react'
import { SectionLabel, Arrow } from '@/components/site/ui'
import type { Application } from '@/lib/site-data'
import styles from './application-inspector.module.css'

interface Props {
  applications: Application[]
}

const COMPONENT_INDUSTRY_MAP: Record<string, { href: string; label: string }> = {
  'dryer-components': { href: '/industries/asphalt#dryer-components', label: 'Asphalt Plants' },
  'filter-components': { href: '/industries/asphalt#filter-components', label: 'Asphalt Plants' },
  'mixer-components': { href: '/industries/concrete#mixer-components', label: 'Concrete Batching' },
  'bucket-elevators': { href: '/industries/asphalt#bucket-elevators-drag-conveyors', label: 'Asphalt Plants' },
  'wear-liners-transfer-protection': { href: '/industries/process-industries#wear-liners-transfer-protection', label: 'Process Industries' },
  'drag-conveyors': { href: '/industries/asphalt#bucket-elevators-drag-conveyors', label: 'Asphalt Plants' },
  'earthmoving-bucket-tips': { href: '/industries/mining#earthmoving-bucket-tips', label: 'Mining & Quarrying' },
}

export function ApplicationInspector({ applications }: Props) {
  const [activeIdx, setActiveIdx] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const items = applications.slice(0, 4)

  return (
    <div ref={containerRef} className={styles['inspector-scroll-track']}>
      <div className={styles['inspector-sticky-viewport']}>
        {/* SECTION HEADING WITH VIEW ALL BUTTON */}
        <div className={styles['inspector-heading-wrap']}>
          <div className={`section-heading ${styles['inspector-heading']}`}>
            <SectionLabel>Plant Component Assemblies</SectionLabel>
            <h2>
              Protection where
              <br />
              <em>wear happens.</em>
            </h2>
            <p>
              Inspect high-wear operational assemblies engineered for critical processing sectors. Select any assembly to inspect technical metallurgy, then explore its industry implementation.
            </p>
          </div>

          <div className={styles['inspector-heading-action']}>
            <Link href="/industries" className={styles['inspector-all-link']}>
              <span>View All Engineering</span>
              <Arrow />
            </Link>
          </div>
        </div>

        {/* FULL-WIDTH TECHNICAL INSPECTOR ROWS */}
        <div className={styles['inspector-container']}>
          <div className={styles['inspector-list']} aria-label="Applications list">
            {items.map((app, idx) => {
              const isActive = idx === activeIdx
              const industryLink = COMPONENT_INDUSTRY_MAP[app.slug]?.href || '/industries'
              return (
                <div
                  key={app.slug}
                  className={`${styles['inspector-row']} ${isActive ? styles.active : ''}`}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  aria-label={`${app.title} engineering specifications`}
                >
                  <div className={styles['row-content-left']}>
                    <div className={styles['row-main-header']}>
                      <span className={styles['inspector-num']}>{app.num}</span>
                      <div className={styles['inspector-title-link']}>
                        <h3>{app.title}</h3>
                      </div>
                    </div>

                    <p className={styles['inspector-summary']}>{app.summary}</p>

                    <div className={styles['row-action-wrap']}>
                      <Link
                        href={industryLink}
                        className={styles['inspector-inline-specs-link']}
                        aria-label={`View full specifications for ${app.title} in ${COMPONENT_INDUSTRY_MAP[app.slug]?.label || 'industry'}`}
                      >
                        <span>Full Specs</span>
                        <Arrow />
                      </Link>
                    </div>
                  </div>

                  {app.image && (
                    <div className={styles['row-thumbnail-wrap']}>
                      <img
                        src={app.image}
                        alt={app.title}
                        className={styles['row-thumbnail-img']}
                        width={180}
                        height={110}
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
