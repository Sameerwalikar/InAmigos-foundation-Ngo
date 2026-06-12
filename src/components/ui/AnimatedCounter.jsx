import React, { useEffect, useState } from 'react'
import { useIntersectionAnimation } from '@/hooks/useIntersectionAnimation'

/**
 * Counts up from 0 to `value` when the element enters the viewport.
 * Respects prefers-reduced-motion.
 */
export function AnimatedCounter({ value, suffix = '', duration = 2000 }) {
  const { ref, isVisible } = useIntersectionAnimation({ threshold: 0.3 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    // Respect reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setCount(value)
      return
    }

    const startTime = performance.now()
    const step = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [isVisible, value, duration])

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      {count.toLocaleString('en-IN')}{suffix}
    </span>
  )
}