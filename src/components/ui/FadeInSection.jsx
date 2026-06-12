import React from 'react'
import { cn } from '@/utils/helpers'
import { useIntersectionAnimation } from '@/hooks/useIntersectionAnimation'

/**
 * Wraps children with a scroll-triggered fade-up reveal animation.
 * Stagger multiple instances using the `delay` prop (ms).
 */
export function FadeInSection({ children, className, delay = 0, direction = 'up' }) {
  const { ref, isVisible } = useIntersectionAnimation({ threshold: 0.1 })

  const directionStyles = {
    up:    { transform: 'translateY(28px)' },
    left:  { transform: 'translateX(-28px)' },
    right: { transform: 'translateX(28px)' },
    none:  { transform: 'none' },
  }

  return (
    <div
      ref={ref}
      className={cn('transition-all', className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : directionStyles[direction].transform,
        transitionDuration: '600ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}