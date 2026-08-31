'use client'

import { useEffect, useRef } from 'react'

interface AnimatedNoiseProps {
  opacity?: number
  className?: string
  blendMode?: 'overlay' | 'screen' | 'color-dodge' | 'soft-light'
}

export function AnimatedNoise({
  opacity = 0.18,
  className = '',
  blendMode = 'overlay',
}: AnimatedNoiseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const w = 140
    const h = 140
    canvas.width = w
    canvas.height = h

    let animationFrameId: number
    let lastTime = 0
    const fps = 20
    const interval = 1000 / fps

    const imgData = ctx.createImageData(w, h)
    const buffer32 = new Uint32Array(imgData.data.buffer)

    const render = (time: number) => {
      if (time - lastTime >= interval) {
        lastTime = time
        const len = buffer32.length
        for (let i = 0; i < len; i++) {
          const val = (Math.random() * 255) | 0
          // ABGR 32-bit packed
          buffer32[i] = (255 << 24) | (val << 16) | (val << 8) | val
        }
        ctx.putImageData(imgData, 0, 0)
      }
      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`animated-noise-canvas ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity,
        mixBlendMode: blendMode,
        imageRendering: 'pixelated',
        zIndex: 2,
      }}
      aria-hidden="true"
    />
  )
}
