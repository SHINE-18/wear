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

export function Logo({
  height = 28,
  variant = 'auto',
  className = '',
}: {
  height?: number
  variant?: 'auto' | 'black' | 'white'
  className?: string
}) {
  if (variant === 'white') {
    return (
      <span className={`brand-logo-frame ${className}`} aria-label="WearGuard">
        <img
          src="/logo/final-logo-white.svg"
          alt="WearGuard"
          className="brand-logo"
          width={170}
          height={height}
          style={{ height: `${height}px`, width: 'auto', maxHeight: `${height}px`, objectFit: 'contain', display: 'block' }}
        />
      </span>
    )
  }

  if (variant === 'black') {
    return (
      <span className={`brand-logo-frame ${className}`} aria-label="WearGuard">
        <img
          src="/logo/black-logo.svg"
          alt="WearGuard"
          className="brand-logo"
          width={170}
          height={height}
          style={{ height: `${height}px`, width: 'auto', maxHeight: `${height}px`, objectFit: 'contain', display: 'block' }}
        />
      </span>
    )
  }

  return (
    <span className={`brand-logo-frame ${className}`} aria-label="WearGuard">
      <picture className="brand-logo-picture">
        <source media="(max-width: 1024px)" srcSet="/logo/final-logo-white.svg" />
        <source media="(min-width: 1025px)" srcSet="/logo/black-logo.svg" />
        <img
          src="/logo/black-logo.svg"
          alt="WearGuard"
          className="brand-logo"
          width={170}
          height={height}
          style={{ height: `${height}px`, width: 'auto', maxHeight: `${height}px`, objectFit: 'contain', display: 'block' }}
        />
      </picture>
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

