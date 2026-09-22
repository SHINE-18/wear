'use client'

import { useEffect, useRef, useState } from 'react'

interface EncryptedRevealProps {
  text: string
  speed?: number
  characters?: string
  className?: string
  as?: 'em' | 'span' | 'strong' | 'p' | 'div'
  revealDelay?: number
}

const GLYPHS = '0123456789ABCDEF!@#$%&*<>_[]/\\{}=+~^'

// Deterministic initial scramble so SSR output matches initial client hydration exactly
function getDeterministicScramble(original: string, glyphs: string): string {
  return original
    .split('')
    .map((char, i) => (char === ' ' ? ' ' : glyphs[(i * 7 + 13) % glyphs.length]))
    .join('')
}

export function EncryptedReveal({
  text,
  speed = 25, // ms per frame
  characters = GLYPHS,
  className = '',
  as: Component = 'em',
  revealDelay = 580, // starts right after preceding words stagger in
}: EncryptedRevealProps) {
  // Initialize with real text so SSR output and initial paint always display the true string
  const [displayText, setDisplayText] = useState(text)
  const [isScrambling, setIsScrambling] = useState(false)
  const isMountedRef = useRef(true)

  useEffect(() => {
    isMountedRef.current = true

    // Respect user's motion preference: if reduced, do not scramble
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(text)
      setIsScrambling(false)
      return
    }

    let lastFrameTime = 0
    let iteration = -2
    let rafId: number | null = null
    let delayTimeoutId: NodeJS.Timeout | null = null

    // Hard safeguard timeout: unconditionally resolves to true string even if RAF pauses
    const safetyTimeoutId = setTimeout(() => {
      if (isMountedRef.current) {
        setDisplayText(text)
        setIsScrambling(false)
      }
    }, revealDelay + 850)

    const step = (timestamp: number) => {
      if (!isMountedRef.current) return

      if (timestamp - lastFrameTime >= speed) {
        lastFrameTime = timestamp

        const nextStr = text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration) {
              return text[index]
            }
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join('')

        setDisplayText(nextStr)

        if (iteration >= text.length) {
          setIsScrambling(false)
          setDisplayText(text)
          return
        }

        iteration += 0.75
      }

      rafId = requestAnimationFrame(step)
    }

    delayTimeoutId = setTimeout(() => {
      if (!isMountedRef.current) return
      setIsScrambling(true)
      rafId = requestAnimationFrame((ts) => {
        lastFrameTime = ts
        step(ts)
      })
    }, revealDelay)

    return () => {
      isMountedRef.current = false
      if (delayTimeoutId) clearTimeout(delayTimeoutId)
      if (safetyTimeoutId) clearTimeout(safetyTimeoutId)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [text, speed, characters, revealDelay])

  return (
    <Component
      className={`encrypted-reveal-text ${isScrambling ? 'scrambling' : ''} ${className}`}
      aria-label={text}
    >
      {displayText}
    </Component>
  )
}
