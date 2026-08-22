'use client'

import { useEffect, useRef } from 'react'

export function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = 0
    let height = 0
    let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 }

    interface Tick {
      x: number
      y: number
      baseAngle: number
      currentAngle: number
      length: number
    }

    let ticks: Tick[] = []
    const spacingX = 28
    const spacingY = 16
    const tickLength = 4.5
    const influenceRadius = 160

    function resize() {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx?.scale(dpr, dpr)

      initTicks()
    }

    function initTicks() {
      ticks = []
      const cols = Math.floor(width / spacingX) + 2
      const rows = Math.floor(height / spacingY) + 2

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          ticks.push({
            x: c * spacingX + (spacingX / 2),
            y: r * spacingY + (spacingY / 2),
            baseAngle: 0,
            currentAngle: 0,
            length: tickLength,
          })
        }
      }
    }

    function onMouseMove(e: MouseEvent) {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      mouse.targetX = e.clientX - rect.left
      mouse.targetY = e.clientY - rect.top
    }

    function onMouseLeave() {
      mouse.targetX = -1000
      mouse.targetY = -1000
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', resize)

    resize()

    function render() {
      if (!ctx) return
      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.15
      mouse.y += (mouse.targetY - mouse.y) * 0.15

      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < ticks.length; i++) {
        const tick = ticks[i]
        const dx = mouse.x - tick.x
        const dy = mouse.y - tick.y
        const dist = Math.hypot(dx, dy)

        let targetAngle = tick.baseAngle
        let strokeColor = 'rgba(130, 145, 168, 0.38)'
        let lineW = 0.75

        if (dist < influenceRadius && mouse.x > 0 && mouse.y > 0) {
          const force = Math.pow(1 - dist / influenceRadius, 1.3)
          targetAngle = Math.atan2(dy, dx)
          
          if (force > 0.45) {
            strokeColor = `rgba(194, 62, 32, ${0.4 + force * 0.45})`
            lineW = 0.95
          } else {
            strokeColor = `rgba(17, 18, 20, ${0.3 + force * 0.35})`
            lineW = 0.85
          }
        }

        // Smooth angle rotation interpolation
        let diff = targetAngle - tick.currentAngle
        while (diff < -Math.PI) diff += Math.PI * 2
        while (diff > Math.PI) diff -= Math.PI * 2
        tick.currentAngle += diff * 0.14

        // Draw crisp micro horizontal dash tick
        ctx.save()
        ctx.translate(tick.x, tick.y)
        ctx.rotate(tick.currentAngle)
        
        ctx.beginPath()
        ctx.moveTo(-tick.length / 2, 0)
        ctx.lineTo(tick.length / 2, 0)
        ctx.strokeStyle = strokeColor
        ctx.lineWidth = lineW
        ctx.lineCap = 'round'
        ctx.stroke()
        ctx.restore()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="interactive-grid-canvas"
      aria-hidden="true"
    />
  )
}
