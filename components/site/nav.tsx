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

  // Close menu on escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  // Close menu on route navigation
  useEffect(() => {
    setOpen(false)
  }, [pathname])

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
        className={`${styles['nav-wrap']} ${pathname === '/' ? styles['nav-home'] : styles['nav-full']} ${open ? styles['nav-open'] : ''}`}
        style={{
          opacity: topNavOpacity,
          y: topNavY,
          pointerEvents: open ? 'auto' : (docked ? 'none' : 'auto'),
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
            type="button"
            className={`${styles['menu-btn']} ${open ? styles['menu-btn-open'] : ''}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className={styles['menu-icon-wrap']} aria-hidden="true">
              <span className={styles['menu-bar-top']} />
              <span className={styles['menu-bar-bottom']} />
            </span>
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
                type="button"
                className={`${styles['menu-btn']} ${open ? styles['menu-btn-open'] : ''}`}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen(!open)}
              >
                <span className={styles['menu-icon-wrap']} aria-hidden="true">
                  <span className={styles['menu-bar-top']} />
                  <span className={styles['menu-bar-bottom']} />
                </span>
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* MOBILE NAV SIDEBAR DRAWER (SLIDE-IN FROM RIGHT) */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dark matte backdrop */}
            <motion.div
              key="mobile-drawer-backdrop"
              className={styles['mobile-drawer-backdrop']}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Side-drawer panel */}
            <motion.aside
              key="mobile-drawer-panel"
              className={styles['mobile-drawer-panel']}
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              aria-label="Mobile Navigation"
            >
              <div className={styles['mobile-drawer-content']}>
                {/* Navigation links list */}
                <nav className={styles['mobile-nav-links-list']}>
                  {[
                    ...navItems,
                    { label: 'Contact', href: '/contact' },
                  ].map((item, idx) => {
                    const isActive = pathname === item.href
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + 0.03 * idx, duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link
                          href={item.href}
                          className={`${styles['mobile-nav-item']} ${isActive ? styles.active : ''}`}
                          onClick={() => setOpen(false)}
                        >
                          <span className={styles['mobile-item-title']}>{item.label}</span>
                          <span className={styles['mobile-item-dot']} aria-hidden="true" />
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Bottom: Orange striped CTA Banner + Search button */}
                <div className={styles['mobile-nav-bottom']}>
                  <Link
                    href="/contact"
                    className={styles['mobile-drawer-cta']}
                    onClick={() => setOpen(false)}
                  >
                    <span className={styles['mobile-cta-text']}>Get Started</span>
                    <span className={styles['mobile-cta-arrow']}>↗</span>
                  </Link>

                  <div className={styles['mobile-search-row']}>
                    <button
                      type="button"
                      className={styles['mobile-search-icon-btn']}
                      onClick={() => {
                        setOpen(false)
                        setSearchOpen(true)
                      }}
                      aria-label="Search site (Ctrl+K)"
                      title="Search"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <SiteSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
