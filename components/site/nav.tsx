'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import { navItems } from '@/lib/site-data'
import { ScrollProgress } from './motion'
import { Arrow, Logo, Mark } from './ui'
import { SiteSearchModal } from './search-modal'
import styles from './nav.module.css'

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [docked, setDocked] = useState(false)
  const [footerProgress, setFooterProgress] = useState(0)
  const [scrollingDown, setScrollingDown] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const lastScrollY = useRef(0)
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
  const topNavOpacity = useTransform(scrollY, [0, 80], [1, 0])
  const topNavY = useTransform(scrollY, [0, 80], [0, -60])

  useEffect(() => {
    // Initial check on mount
    if (scrollY.get() > 80) {
      setDocked(true)
    }

    return scrollY.on('change', (latest) => {
      const prev = lastScrollY.current
      const diff = latest - prev

      // As soon as the upper navbar finishes hiding (80px), reveal the bottom docked navbar
      if (latest > 80) {
        setDocked(true)
      } else {
        setDocked(false)
        setScrollingDown(false)
      }

      // Hide on scroll down after initial entrance buffer:
      if (latest > 160) {
        if (diff > 6) {
          // Scrolling down: slide down & tuck away to free screen space
          setScrollingDown(true)
        } else if (diff < -6) {
          // Scrolling up: reveal navbar immediately
          setScrollingDown(false)
        }
      } else {
        // In the entrance zone (80px - 160px), keep it visible
        setScrollingDown(false)
      }

      lastScrollY.current = latest
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
  const shouldHide = !open && (isHidden || (scrollingDown && !isHovered))

  return (
    <>
      {pathname === '/' && <ScrollProgress />}

      {/* TOP NAVBAR */}
      <motion.header
        className={`${styles['nav-wrap']} ${pathname === '/' ? styles['nav-home'] : styles['nav-full']}`}
        style={{
          opacity: topNavOpacity,
          y: topNavY,
          pointerEvents: docked ? 'none' : 'auto',
        }}
      >
        <Link className={styles.brand} href="/" aria-label="WearGuard">
          <Logo />
        </Link>
        <nav className={styles['nav-links']}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? styles['nav-active'] : ''}>
              <span className={styles['nav-text']}>{item.label}</span>
              <span className={styles['nav-dot']} aria-hidden="true" />
            </Link>
          ))}
        </nav>
        <div className={styles['nav-actions']}>
          <button
            type="button"
            className={styles['search-btn']}
            aria-label="Search site (Ctrl+K)"
            onClick={() => setSearchOpen(true)}
            title="Search (Ctrl+K)"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button
            className={`${styles['menu-btn']} ${open ? styles['menu-btn-open'] : ''}`}
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

      {/* FLOATING BOTTOM DOCKED NAVBAR */}
      <AnimatePresence>
        {docked && (
          <motion.nav
            className={`${styles['nav-wrap']} ${styles.docked}`}
            initial={{ opacity: 0, y: 32, x: '-50%' }}
            animate={{
              opacity: shouldHide ? 0 : 1,
              y: shouldHide ? 40 : 0,
              x: '-50%',
              scale: shouldHide ? 0.96 : 1,
            }}
            exit={{ opacity: 0, y: 32, x: '-50%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              pointerEvents: shouldHide ? 'none' : 'auto',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Floating navigation"
          >
            <Link className={styles.brand} href="/" aria-label="WearGuard">
              <span className={styles['dock-brand-text']}>
                WEAR<span className={styles['dock-brand-accent']}>GUARD</span>
              </span>
            </Link>
            <nav className={styles['nav-links']}>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className={pathname === item.href ? styles['nav-active'] : ''}>
                  <span className={styles['nav-text']}>{item.label}</span>
                  <span className={styles['nav-dot']} aria-hidden="true" />
                </Link>
              ))}
            </nav>
            <div className={styles['nav-actions']}>
              <button
                type="button"
                className={styles['search-btn']}
                aria-label="Search site (Ctrl+K)"
                onClick={() => setSearchOpen(true)}
                title="Search (Ctrl+K)"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
              <Link href="/contact" className={styles['dock-cta']}>
                <span>Get a quote</span>
                <span className={styles['dock-corner-icon']} aria-hidden="true" />
              </Link>
              <button
                className={`${styles['menu-btn']} ${open ? styles['menu-btn-open'] : ''}`}
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
          </motion.nav>
        )}
      </AnimatePresence>

      {/* FULL-SCREEN TILANIUM-STYLE MOBILE NAV DRAWER */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles['mobile-nav-overlay']}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles['mobile-nav-inner']}>
              <div className={styles['mobile-nav-header-row']}>
                <Link href="/" onClick={() => setOpen(false)}>
                  <Logo height={26} />
                </Link>
                <button
                  type="button"
                  className={styles['mobile-nav-close-btn']}
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <div className={styles['mobile-nav-links-list']}>
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
                        className={`${styles['mobile-nav-item']} ${isActive ? styles.active : ''}`}
                        onClick={() => setOpen(false)}
                      >
                        <span className={styles['mobile-item-title']}>{item.label}</span>
                        <span className={styles['mobile-item-dot']} aria-hidden="true">▪</span>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              <div className={styles['mobile-nav-bottom']}>
                <button
                  type="button"
                  className={styles['mobile-search-trigger']}
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
                  className={styles['mobile-drawer-cta']}
                  onClick={() => setOpen(false)}
                >
                  <span>Request Technical Quote</span>
                  <span className={styles['mobile-cta-arrow']}>↗</span>
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
