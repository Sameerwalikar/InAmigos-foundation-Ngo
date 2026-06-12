import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  Heart,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from 'lucide-react'
import { cn } from '@/utils/helpers'

const SLIDES = [
  {
    id: 'hero-main',
    headline: 'Empowering 50,000+ lives',
    subheadline: 'across India',
    body:
      "Through Education, Women's Empowerment & Animal Welfare — one child, one family, one community at a time.",
    cta: { label: 'See Our Impact', href: '/impact' },
    secondaryCta: { label: 'Donate Now', href: '/donate' },
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&auto=format&fit=crop&q=80',
    accent: 'Education',
    stat: '12,000+ children in school',
  },
  {
    id: 'bachpan-sala',
    headline: 'Every child deserves',
    subheadline: 'a joyful education',
    body:
      'BachpanSala creates free, structured learning spaces in 120+ villages. No fee. No barriers. Just futures.',
    cta: { label: 'Support Education', href: '/causes/bachpan-sala' },
    secondaryCta: { label: 'Learn More', href: '/causes' },
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400&auto=format&fit=crop&q=80',
    accent: 'BachpanSala',
    stat: '12,000 children impacted',
  },
  {
    id: 'udaan',
    headline: 'Women rising,',
    subheadline: 'communities thriving',
    body:
      'Udaan provides vocational training and microfinance to 8,500+ women across Chhattisgarh. Independence is earned here.',
    cta: { label: 'Empower Women', href: '/causes/udaan' },
    secondaryCta: { label: 'Learn More', href: '/causes' },
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&auto=format&fit=crop&q=80',
    accent: 'Udaan',
    stat: '8,500 women empowered',
  },
]
/**
 * Hero carousel with auto-play, pause on hover, full keyboard navigation.
 * Fixes: no mission statement, no slide CTAs, no accessibility, 5-second benchmark.
 */
export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent((i) => (i + 1) % SLIDES.length), [])
  const prev = useCallback(() => setCurrent((i) => (i - 1 + SLIDES.length) % SLIDES.length), [])

  // Auto-advance every 5s, respects pause state
  useEffect(() => {
    if (paused) return
    const timer = setTimeout(next, 5000)
    return () => clearTimeout(timer)
  }, [current, paused, next])

  const slide = SLIDES[current]

  return (
    <section
      className="relative min-h-[88vh] flex items-center overflow-hidden bg-brand-charcoal"
      aria-label="Hero — InAmigos Foundation highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        {SLIDES.map((s, i) => (
          <img
            key={s.id}
            src={s.image}
            alt=""
            aria-hidden="true"
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-opacity duration-700',
              i === current ? 'opacity-100' : 'opacity-0'
            )}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
        {/* Green-tinted gradient overlay — brand identity */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/90 via-brand-green-dark/70 to-transparent" />
      </div>

      {/* Yellow diagonal accent — inspired by CRY.org's energy */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none hidden lg:block"
        style={{
          background: 'linear-gradient(135deg, transparent 60%, rgba(245,158,11,0.15) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative section-container py-20 lg:py-28">
        <div className="max-w-2xl">
          {/* Eyebrow — project tag */}
          <div
            key={`eyebrow-${current}`}
            className="inline-flex items-center gap-2 bg-brand-amber/20 border border-brand-amber/30 
                       rounded-full px-4 py-1.5 mb-6 animate-fade-in"
          >
            <span className="w-2 h-2 bg-brand-amber rounded-full" aria-hidden="true" />
            <span className="text-brand-amber font-accent font-semibold text-xs uppercase tracking-wider">
              {slide.accent}
            </span>
          </div>

          {/* Main headline */}
          <h1
            key={`title-${current}`}
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-4 animate-fade-up"
          >
            {slide.headline}
            <br />
            <span className="text-brand-amber-light italic">{slide.subheadline}</span>
          </h1>

          {/* Body text */}
          <p
            key={`body-${current}`}
            className="text-gray-200 text-lg md:text-xl leading-relaxed mb-3 animate-fade-up max-w-xl"
            dangerouslySetInnerHTML={{ __html: slide.body }}
          />

          {/* Impact stat */}
          <p className="text-brand-amber font-accent font-bold text-sm mb-8">
            ✦ {slide.stat}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/donate"
              className="btn-primary text-base shadow-cta"
              aria-label="Donate to InAmigos Foundation"
            >
              <Heart size={16} className="fill-current" />
              Donate Now
            </Link>
            <Link
              to={slide.cta.href}
              className="inline-flex items-center gap-2 text-white border-2 border-white/40 
                         font-accent font-bold px-7 py-3.5 rounded-full transition-all duration-200 
                         hover:border-white hover:bg-white/10 text-base"
            >
              {slide.cta.label}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Slide dots + controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {/* Prev */}
        <button
          onClick={prev}
          className="w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center 
                     transition-colors text-white"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Dots */}
        <div className="flex gap-2" role="tablist" aria-label="Hero slides">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === current}
              aria-label={`Slide ${i + 1}: ${s.accent}`}
              onClick={() => setCurrent(i)}
              className={cn(
                'transition-all duration-300 rounded-full',
                i === current
                  ? 'w-8 h-2.5 bg-brand-amber'
                  : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
              )}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center 
                     transition-colors text-white"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>

        {/* Pause / Play - accessibility requirement */}
        <button
          onClick={() => setPaused((p) => !p)}
          className="w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center 
                     transition-colors text-white ml-1"
          aria-label={paused ? 'Resume auto-play' : 'Pause auto-play'}
          aria-pressed={paused}
        >
          {paused ? <Play size={14} /> : <Pause size={14} />}
        </button>
      </div>

      {/* Progress bar for current slide */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
        <div
          className={cn(
            'h-full bg-brand-amber transition-all ease-linear',
            !paused && 'duration-[5000ms]'
          )}
          style={{ width: paused ? undefined : '100%', transition: paused ? 'none' : undefined }}
          key={`progress-${current}-${paused}`}
        />
      </div>
    </section>
  )
}