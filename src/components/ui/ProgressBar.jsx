import React from 'react'
import { cn } from '@/utils/helpers'
import { useIntersectionAnimation } from '@/hooks/useIntersectionAnimation'

/**
 * Accessible donation progress bar.
 * Animates width on scroll-into-view.
 */
export function ProgressBar({ raised, goal, className }) {
  const { ref, isVisible } = useIntersectionAnimation({ threshold: 0.3 })
  const percentage = Math.min(Math.round((raised / goal) * 100), 100)

  return (
    <div ref={ref} className={cn('space-y-1.5', className)}>
      <div className="flex justify-between text-xs font-accent font-semibold text-gray-500">
        <span>₹{raised.toLocaleString('en-IN')} raised</span>
        <span>{percentage}%</span>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${percentage}% of goal raised`}
      >
        <div
          className="progress-fill"
          style={{ width: isVisible ? `${percentage}%` : '0%' }}
        />
      </div>
      <p className="text-xs text-gray-400 font-accent">Goal: ₹{goal.toLocaleString('en-IN')}</p>
    </div>
  )
}