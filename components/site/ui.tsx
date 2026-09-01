import Link from 'next/link'
import type { ReactNode } from 'react'
import { Magnetic } from './motion'

export function Mark() {
  return (
    <span className="tilanium-mark" aria-hidden="true">
      <span className="bracket tl" />
      <span className="bracket br" />
      <span className="core-box" />
    </span>
  )
}

export function Logo({ height = 28, className = '' }: { height?: number; className?: string }) {
  return (
    <span className={`brand-logo-frame ${className}`} aria-label="WearGuard">
      <img
        src="/images/Vector.svg"
        alt="WearGuard"
        className="brand-logo"
        style={{ height: `${height}px`, width: 'auto', maxHeight: '28px', objectFit: 'contain', display: 'block' }}
      />
    </span>
  )
}

export function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="arrow"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 7h10v10" className="arrow-head" />
      <line x1="7" y1="17" x2="17" y2="7" className="arrow-stem" />
    </svg>
  )
}

export function Button({ children = 'Get a quote', dark = false, href = '/contact' }: { children?: ReactNode; dark?: boolean; href?: string }) {
  return (
    <Magnetic>
      <Link className={`cta ${dark ? 'cta-dark' : ''}`} href={href}>
        {children}
        <Arrow />
      </Link>
    </Magnetic>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="section-label">
      <span>{children}</span>
    </div>
  )
}

