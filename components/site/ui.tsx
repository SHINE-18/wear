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

export function Logo({ height = 38, className = '' }: { height?: number; className?: string }) {
  return (
    <span className={`brand-logo-frame ${className}`} aria-label="WearGuard">
      <img
        src="/logo/logo.svg"
        alt="WearGuard"
        className="brand-logo"
        width={150}
        height={height}
        style={{ height: `${height}px`, width: 'auto', maxHeight: `${height || 28}px`, objectFit: 'contain', display: 'block' }}
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
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
    >
      <path d="M7 7h10v10" className="arrow-head" />
      <line x1="7" y1="17" x2="16" y2="8" className="arrow-stem" strokeLinecap="square" />
    </svg>
  )
}

export function Button({
  children = 'Get a quote',
  dark = false,
  href = '/contact',
  magnetic = true,
  className = '',
}: {
  children?: ReactNode
  dark?: boolean
  href?: string
  magnetic?: boolean
  className?: string
}) {
  const content = (
    <Link className={`cta ${dark ? 'cta-dark' : ''} ${className}`.trim()} href={href}>
      <span className="cta-label">{children}</span>
      <Arrow />
    </Link>
  )

  if (!magnetic) {
    return content
  }

  return <Magnetic>{content}</Magnetic>
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="section-label">
      <span>{children}</span>
    </div>
  )
}

