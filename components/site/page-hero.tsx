import type { ReactNode } from 'react'
import Link from 'next/link'
import { FadeUp } from './motion'
import { Arrow, SectionLabel } from './ui'
import styles from './page-hero.module.css'

export interface QuickJumpItem {
  label: string
  href: string
  code?: string
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  badge,
  quickJumps,
  ctaLabel = 'Request Technical Audit',
  ctaHref = '/contact',
}: {
  eyebrow: string
  title: ReactNode
  description?: string
  image: string
  imageAlt: string
  badge?: string
  quickJumps?: QuickJumpItem[]
  ctaLabel?: string
  ctaHref?: string
}) {
  return (
    <section className={`${styles['page-hero-split']} section-slate`}>
      <div className={styles['page-hero-split-grid']}>
        {/* LEFT COLUMN: EDITORIAL & QUICK JUMPS */}
        <FadeUp className={styles['page-hero-split-left']}>
          <SectionLabel>{eyebrow}</SectionLabel>
          <h1 className={styles['page-hero-split-title']}>{title}</h1>

          {description && (
            <p className={styles['page-hero-split-desc']}>{description}</p>
          )}

          {quickJumps && quickJumps.length > 0 && (
            <div className={styles['page-hero-quick-jumps']}>
              <span className={styles['quick-jumps-label']}>Quick Navigation:</span>
              <div className={styles['quick-jumps-pills']}>
                {quickJumps.map((jump, idx) => (
                  <a key={`${jump.href}-${jump.code ?? idx}`} href={jump.href} className={styles['quick-jump-pill']}>
                    <span className={styles['jump-code']}>{jump.code ?? `0${idx + 1}`}</span>
                    <span className={styles['jump-txt']}>{jump.label}</span>
                    <span className={styles['jump-arrow']} aria-hidden="true">↓</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className={styles['page-hero-split-actions']}>
            <Link href={ctaHref} className={styles['page-hero-cta-btn']}>
              <span>{ctaLabel}</span>
              <Arrow />
            </Link>
          </div>
        </FadeUp>

        {/* RIGHT COLUMN: TALL INDUSTRIAL VISUAL CARD */}
        <FadeUp delay={0.12} className={styles['page-hero-split-right']}>
          <div className={styles['page-hero-visual-card']}>
            <div className={styles['visual-card-frame']}>
              <img src={image} alt={imageAlt} className={styles['visual-card-img']} width={724} height={543} />
              <div className={styles['visual-card-overlay']} aria-hidden="true" />
            </div>

            {/* INDUSTRIAL SPEC TAGS */}
            <div className={styles['page-hero-spec-tag-top']}>
              <span>FIELD SPECIFIED</span>
            </div>

            {badge && (
              <div className={styles['page-hero-badge-bottom']}>
                <span>{badge}</span>
              </div>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
