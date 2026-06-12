import { useState, useEffect } from 'react'
import { debounce } from '@/utils/helpers'

export function useScrollPosition(threshold = 80) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handler = debounce(() => setScrollY(window.scrollY), 20)

    window.addEventListener('scroll', handler, { passive: true })

    return () => window.removeEventListener('scroll', handler)
  }, [])

  return {
    scrollY,
    isScrolled: scrollY > threshold,
  }
}