import type { ReactNode } from 'react'
import Link from 'next/link'
import { FadeUp } from './motion'
import { Arrow, SectionLabel } from './ui'

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
    <section className="page-hero-split section-slate">
      <div className="page-hero-split-grid">
        {/* LEFT COLUMN: EDITORIAL & QUICK JUMPS */}
        <FadeUp className="page-hero-split-left">
          <SectionLabel>{eyebrow}</SectionLabel>
          <h1 className="page-hero-split-title">{title}</h1>

          {description && (
            <p className="page-hero-split-desc">{description}</p>
          )}

          {quickJumps && quickJumps.length > 0 && (
            <div className="page-hero-quick-jumps">
              <span className="quick-jumps-label">Quick Navigation:</span>
              <div className="quick-jumps-pills">
                {quickJumps.map((jump, idx) => (
                  <a key={`${jump.href}-${jump.code ?? idx}`} href={jump.href} className="quick-jump-pill">
                    <span className="jump-code">{jump.code ?? `0${idx + 1}`}</span>
                    <span className="jump-txt">{jump.label}</span>
                    <span className="jump-arrow" aria-hidden="true">↓</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="page-hero-split-actions">
            <Link href={ctaHref} className="page-hero-cta-btn">
              <span>{ctaLabel}</span>
              <Arrow />
            </Link>
          </div>
        </FadeUp>

        {/* RIGHT COLUMN: TALL INDUSTRIAL VISUAL CARD */}
        <FadeUp delay={0.12} className="page-hero-split-right">
          <div className="page-hero-visual-card">
            <div className="visual-card-frame">
              <img src={image} alt={imageAlt} className="visual-card-img" />
              <div className="visual-card-overlay" aria-hidden="true" />
            </div>

            {/* INDUSTRIAL SPEC TAGS */}
            <div className="page-hero-spec-tag-top">
              <span>FIELD SPECIFIED</span>
            </div>

            {badge && (
              <div className="page-hero-badge-bottom">
                <span>{badge}</span>
              </div>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
