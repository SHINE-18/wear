'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * AdaptiveScrollbar dynamically detects the active viewport section
 * (e.g. Dark Carbon/Charcoal vs. Daylight Slate/Light) and updates the
 * `data-scrollbar-theme` attribute on the `<html>` element for smooth,
 * real-time scrollbar contrast adaptation.
 */
export function AdaptiveScrollbar() {
  const pathname = usePathname()

  useEffect(() => {
    const updateScrollbarTheme = () => {
      // Evaluate the section currently occupying the middle-to-upper viewport
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

    let isTicking = false
    const onScroll = () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          updateScrollbarTheme()
          isTicking = false
        })
        isTicking = true
      }
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
