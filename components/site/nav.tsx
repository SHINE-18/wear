'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import { navItems } from '@/lib/site-data'
import { ScrollProgress } from './motion'
import { Arrow, Logo, Mark } from './ui'
import { SiteSearchModal } from './search-modal'

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [docked, setDocked] = useState(false)
  const [footerProgress, setFooterProgress] = useState(0)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Animate top navbar out smoothly on initial scroll
  const topNavOpacity = useTransform(scrollY, [0, 90], [1, 0])
  const topNavY = useTransform(scrollY, [0, 90], [0, -70])

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      if (latest > 140) {
        setDocked(true)
      } else {
        setDocked(false)
      }
    })
  }, [scrollY])

  // Immediately hide docked navbar as soon as the footer enters the viewport
  useEffect(() => {
    const checkFooterVisibility = () => {
      const footerEl = document.querySelector('.footer-root, footer, .footer-cta-banner, .footer-main-dark')
      if (footerEl) {
        const rect = footerEl.getBoundingClientRect()
        const viewportHeight = window.innerHeight

        // As soon as the footer comes into the viewport
        if (rect.top <= viewportHeight + 20) {
          setFooterProgress(1)
          return
        }
      }

      setFooterProgress(0)
    }

    window.addEventListener('scroll', checkFooterVisibility, { passive: true })
    window.addEventListener('resize', checkFooterVisibility, { passive: true })
    checkFooterVisibility()

    return () => {
      window.removeEventListener('scroll', checkFooterVisibility)
      window.removeEventListener('resize', checkFooterVisibility)
    }
  }, [pathname])

  const isHidden = footerProgress === 1

  return (
    <>
      {pathname === '/' && <ScrollProgress />}
      <motion.header
        className={`nav-wrap ${docked ? 'docked' : ''} ${pathname === '/' ? 'nav-home' : 'nav-full'}`}
        animate={
          docked
            ? {
                opacity: isHidden ? 0 : 1,
                x: '-50%',
                y: isHidden ? 40 : 0,
                scale: isHidden ? 0.96 : 1,
              }
            : undefined
        }
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        style={
          docked
            ? {
                pointerEvents: isHidden ? 'none' : 'auto',
                visibility: isHidden ? 'hidden' : 'visible',
              }
            : {
                opacity: topNavOpacity,
                x: 0,
                y: topNavY,
                scale: 1,
              }
        }
      >
        <Link className="brand" href="/">
          {docked ? (
            <span className="dock-brand-text">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ marginRight: '0.35rem', flexShrink: 0 }}>
                <rect x="2" y="2" width="20" height="20" rx="2" fill="#D94B2B" />
                <path d="M6.5 7L9.5 16H10.5L12 11L13.5 16H14.5L17.5 7H16L14 14L12.5 9H11.5L10 14L8 7H6.5Z" fill="white" />
              </svg>
              WEAR<span className="dock-brand-accent">GUARD</span>
            </span>
          ) : (
            <Logo height={28} />
          )}
        </Link>
        <nav className="nav-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? 'nav-active' : ''}>
              <span className="nav-text">{item.label}</span>
              <span className="nav-dot" aria-hidden="true" />
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            type="button"
            className="search-btn"
            aria-label="Search site (Ctrl+K)"
            onClick={() => setSearchOpen(true)}
            title="Search (Ctrl+K)"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          {docked && (
            <Link href="/contact" className="dock-cta">
              <span>Get a quote</span>
              <span className="dock-corner-icon" aria-hidden="true" />
            </Link>
          )}
          <button
            className={`menu-btn ${open ? 'menu-btn-open' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </motion.header>

      {/* FULL-SCREEN TILANIUM-STYLE MOBILE NAV DRAWER */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-nav-inner">
              <div className="mobile-nav-header-row">
                <Link href="/" onClick={() => setOpen(false)}>
                  <Logo height={26} />
                </Link>
                <button
                  type="button"
                  className="mobile-nav-close-btn"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <div className="mobile-nav-links-list">
                {navItems.map((item, idx) => {
                  const isActive = pathname === item.href
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * idx, duration: 0.22 }}
                    >
                      <Link
                        href={item.href}
                        className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                        onClick={() => setOpen(false)}
                      >
                        <span className="mobile-item-title">{item.label}</span>
                        <span className="mobile-item-dot" aria-hidden="true">▪</span>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              <div className="mobile-nav-bottom">
                <button
                  type="button"
                  className="mobile-search-trigger"
                  onClick={() => {
                    setOpen(false)
                    setSearchOpen(true)
                  }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <span>Quick Search (Formulations, Parts)</span>
                </button>

                <Link
                  href="/contact"
                  className="mobile-drawer-cta"
                  onClick={() => setOpen(false)}
                >
                  <span>Request Technical Quote</span>
                  <span className="mobile-cta-arrow">↗</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SiteSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
