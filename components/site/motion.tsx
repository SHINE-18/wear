'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useInView, useMotionValue, useScroll, useSpring, useTransform, type Variants } from 'motion/react'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })
  return <motion.div className="scroll-progress" style={{ scaleX }} />
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export function FadeUp({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUpVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({ children, className = '', gap = 0.08 }: { children: ReactNode; className?: string; gap?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUpVariants}>
      {children}
    </motion.div>
  )
}

export function ParallaxImage({ src, alt, className = '', strength = 60 }: { src: string; alt: string; className?: string; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength])
  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden', position: 'relative' }}>
      <motion.img src={src} alt={alt} style={{ y, width: '100%', height: 'calc(100% + 120px)', objectFit: 'cover', position: 'absolute', top: -60, left: 0 }} />
    </div>
  )
}

export function Counter({ to, suffix = '', duration = 1.4 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px' })
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start: number | null = null
    let raf = 0
    const step = (t: number) => {
      if (start === null) start = t
      const progress = Math.min((t - start) / (duration * 1000), 1)
      setValue(Math.floor(progress * to))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])
  return <span ref={ref}>{value}{suffix}</span>
}

export function Magnetic({ children, className = '', strength = 0.35 }: { children: ReactNode; className?: string; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 18 })
  const springY = useSpring(y, { stiffness: 200, damping: 18 })
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return
        x.set((e.clientX - rect.left - rect.width / 2) * strength)
        y.set((e.clientY - rect.top - rect.height / 2) * strength)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}

export function Marquee({
  label = 'CORE SECTORS',
  items,
  speed = 28,
  className = '',
}: {
  label?: string
  items: (string | { name: string; spec?: string })[]
  speed?: number
  className?: string
}) {
  const itemNames = items.map((it) => (typeof it === 'string' ? it : it.name))
  const repeated = [...itemNames, ...itemNames, ...itemNames, ...itemNames]

  return (
    <div className={`marquee-bar-wrapper ${className}`}>
      <div className="marquee-bar-container">
        {label && (
          <div className="marquee-label-badge">
            <span>{label}</span>
          </div>
        )}
        <div className="marquee-viewport">
          <motion.div
            className="marquee-pills-track"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
          >
            {repeated.map((name, i) => (
              <span key={i} className="marquee-tech-pill">
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
