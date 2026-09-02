'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * AdaptiveScrollbar dynamically detects the active viewport section
 * on the home page or hides the vertical scrollbar completely on subpages
 * like /about, /applications, /contact, /materials, and /custom-parts.
 * 
 * Throttled to ~10fps (100ms) to avoid layout thrash from elementsFromPoint().
 */
export function AdaptiveScrollbar() {
  const pathname = usePathname()

  useEffect(() => {
    // Hide vertical scrollbar completely on subpages
    if (pathname !== '/') {
      document.documentElement.setAttribute('data-scrollbar-hidden', 'true')
      document.documentElement.removeAttribute('data-scrollbar-theme')
      return
    }

    // On home page, enable adaptive scrollbar
    document.documentElement.removeAttribute('data-scrollbar-hidden')

    const updateScrollbarTheme = () => {
      const testX = Math.min(window.innerWidth - 60, window.innerWidth / 2)
      const testY = window.innerHeight * 0.45

      const elementsAtPoint = document.elementsFromPoint
        ? document.elementsFromPoint(testX, testY)
        : []

      let isLight = false

      for (const el of elementsAtPoint) {
        const section = el.closest('section, header, footer, [data-theme], .cinematic-hero-container, .hero-art-expanding, .about-pillar-card, .stack-card')
        if (section) {
          const classList = section.classList
          if (
            classList.contains('section-light') ||
            classList.contains('section-slate') ||
            classList.contains('section-slate-steel') ||
            classList.contains('industries-stack-section') ||
            classList.contains('industry-section-light') ||
            classList.contains('industry-section-slate') ||
            classList.contains('custom-pillars-section') ||
            classList.contains('custom-spec-checklist') ||
            section.id === 'about-us' ||
            section.id === 'industries' ||
            section.getAttribute('data-theme') === 'light'
          ) {
            isLight = true
            break
          }
          if (
            classList.contains('section-dark') ||
            classList.contains('section-carbon') ||
            classList.contains('footer-main-dark') ||
            classList.contains('footer-dark') ||
            classList.contains('hero-art-expanding') ||
            section.getAttribute('data-theme') === 'dark'
          ) {
            isLight = false
            break
          }
        }
      }

      const targetTheme = isLight ? 'light' : 'dark'
      const currentTheme = document.documentElement.getAttribute('data-scrollbar-theme')

      if (currentTheme !== targetTheme) {
        document.documentElement.setAttribute('data-scrollbar-theme', targetTheme)
      }
    }

    // Throttle to ~10fps (100ms) instead of every frame to avoid layout thrashing
    let lastRun = 0
    const THROTTLE_MS = 100

    const onScroll = () => {
      const now = performance.now()
      if (now - lastRun < THROTTLE_MS) return
      lastRun = now
      requestAnimationFrame(updateScrollbarTheme)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateScrollbarTheme, { passive: true })
    updateScrollbarTheme()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateScrollbarTheme)
    }
  }, [pathname])

  return null
}
