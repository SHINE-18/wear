'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { usePathname } from 'next/navigation'

// Persistent module-level flag to identify user navigation vs initial page load
let hasNavigatedOnce = false

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const isNavigating = hasNavigatedOnce && !isHomePage
  const [animating, setAnimating] = useState(isNavigating)

  useEffect(() => {
    // Reset scroll to top immediately on page change
    window.scrollTo(0, 0)
    if (typeof window !== 'undefined' && typeof window.lenis?.scrollTo === 'function') {
      window.lenis.scrollTo(0, { immediate: true })
    }

    if (!hasNavigatedOnce) {
      hasNavigatedOnce = true
    }

    if (pathname === '/') {
      setAnimating(false)
    } else {
      setAnimating(true)
    }
  }, [pathname])

  // On initial visit OR on the homepage ('/'), render cleanly without white backing sheet or slide transition
  if (!isNavigating || isHomePage) {
    return <>{children}</>
  }

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* 1. SOLID WHITE BACKING SHEET — eliminates any raw gaps or dark void during transit */}
      {animating && (
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            background: '#FFFFFF',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
      )}

      {/* 2. INCOMING PAGE SHEET — glides smoothly down over the white backing from top to bottom */}
      <motion.div
        key={pathname}
        initial={{ y: '-100vh' }}
        animate={{
          y: 0,
          transitionEnd: {
            transform: 'none',
          },
        }}
        onAnimationComplete={() => {
          setAnimating(false)
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          width: '100%',
          minHeight: '100vh',
          position: 'relative',
          zIndex: 1,
          background: animating ? '#FFFFFF' : 'transparent',
          boxShadow: animating ? '0 24px 60px rgba(15, 23, 42, 0.18)' : 'none',
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
