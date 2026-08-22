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
  speed = 30, // ms per frame
  characters = GLYPHS,
  className = '',
  as: Component = 'em',
  revealDelay = 600, // starts right after the preceding words stagger in
}: EncryptedRevealProps) {
  // Deterministic initial render prevents SSR hydration mismatch
  const [displayText, setDisplayText] = useState(() => getDeterministicScramble(text, characters))
  const [isScrambling, setIsScrambling] = useState(true)
  const isMountedRef = useRef(true)

  useEffect(() => {
    isMountedRef.current = true
    let lastFrameTime = 0
    let iteration = -3 // 3 warmup frames of full scramble
    let rafId: number | null = null
    let delayTimeoutId: NodeJS.Timeout | null = null

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

        iteration += 0.4
      }

      rafId = requestAnimationFrame(step)
    }

    delayTimeoutId = setTimeout(() => {
      if (!isMountedRef.current) return
      rafId = requestAnimationFrame((ts) => {
        lastFrameTime = ts
        step(ts)
      })
    }, revealDelay)

    return () => {
      isMountedRef.current = false
      if (delayTimeoutId) clearTimeout(delayTimeoutId)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [text, speed, characters, revealDelay])

  return (
    <Component
      className={`encrypted-reveal-text ${isScrambling ? 'scrambling' : ''} ${className}`}
      aria-label={text}
      suppressHydrationWarning
    >
      {displayText}
    </Component>
  )
}
