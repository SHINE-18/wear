'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useScroll } from 'motion/react'
import { navItems } from '@/lib/site-data'
import { ScrollProgress } from './motion'
import { Arrow, Logo, Mark } from './ui'

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [docked, setDocked] = useState(false)
  const [footerProgress, setFooterProgress] = useState(0)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      if (latest > 140) {
        setDocked(true)
      } else {
        setDocked(false)
      }
    })
  }, [scrollY])

  // Continuous, gradual fade starting when the stats deck reaches viewport (1400px before bottom)
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const clientHeight = window.innerHeight

      const distanceFromBottom = scrollHeight - (scrollTop + clientHeight)
      
      // Start fading right around the Process stats deck
      const fadeThreshold = 1400

      if (distanceFromBottom < fadeThreshold) {
        // Continuous linear progression from 0.0 (at stats deck) to 1.0 (at bottom)
        const progress = Math.min(1, Math.max(0, 1 - (distanceFromBottom / fadeThreshold)))
        setFooterProgress(progress)
      } else {
        setFooterProgress(0)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [pathname])

  // Linear continuous opacity: 1.0 at stats deck -> 0.0 at footer bottom
  const opacity = docked ? Math.max(0, 1 - footerProgress) : 1
  const translateY = docked ? footerProgress * 30 : 0
  const isHidden = footerProgress >= 0.98

  return (
    <>
      <ScrollProgress />
      <header
        className={`nav-wrap ${docked ? 'docked' : ''}`}
        style={
          docked
            ? {
                opacity,
                transform: `translate(-50%, ${translateY}px) scale(${1 - footerProgress * 0.04})`,
                pointerEvents: isHidden ? 'none' : 'auto',
                visibility: isHidden ? 'hidden' : 'visible',
              }
            : undefined
        }
      >
        <Link className="brand" href="/">
          {docked ? (
            <span className="dock-brand-text">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ marginRight: '0.35rem', flexShrink: 0 }}>
                <rect x="2" y="2" width="20" height="20" rx="2" fill="#eb4d2a" />
                <path d="M6.5 7L9.5 16H10.5L12 11L13.5 16H14.5L17.5 7H16L14 14L12.5 9H11.5L10 14L8 7H6.5Z" fill="white" />
              </svg>
              WEAR<span className="dock-brand-accent">GUARD</span>
            </span>
          ) : (
            <Logo height={44} />
          )}
        </Link>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? 'nav-active' : ''} onClick={() => setOpen(false)}>
              <span className="nav-text">{item.label}</span>
              <span className="nav-dot" aria-hidden="true" />
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          {docked && (
            <Link href="/contact" className="dock-cta">
              <span>Get a quote</span>
              <span className="dock-corner-icon" aria-hidden="true" />
            </Link>
          )}
          <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            {open ? '×' : '☰'}
          </button>
        </div>
      </header>
    </>
  )
}
