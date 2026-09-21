'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import styles from '@/app/industries/industries.module.css'

export function IndustriesScrollTheme() {
  const { scrollY } = useScroll()

  // Smoothly fade background from #E4EAF2 (opacity 0) to pure white #FFFFFF (opacity 1)
  // as the user scrolls past the "What We Offer" header into the cards
  const whiteOpacity = useTransform(scrollY, [70, 260], [0, 1])

  return (
    <motion.div
      className={styles.industriesWhiteBgFade}
      style={{ opacity: whiteOpacity }}
      aria-hidden="true"
    />
  )
}
