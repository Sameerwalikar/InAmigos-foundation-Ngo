import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/utils/constants'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { cn } from '@/utils/helpers'

/**
 * Testimonials carousel — builds social proof and emotional connection.
 * Trust Architecture principle: every claim verifiable, with real beneficiary voices.
 */
export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setCurrent((i) => (i + 1) % TESTIMONIALS.length)

  const testimonial = TESTIMONIALS[current]

  return (
    <section
      className="section-padding bg-brand-green"
      aria-labelledby="testimonials-title"
    >
      <div className="section-container">
        <FadeInSection className="text-center mb-12">
          <p className="section-eyebrow text-brand-amber-light">Real Voices</p>
          <h2 id="testimonials-title" className="font-display text-3xl md:text-4xl text-white mt-2">
            Stories of transformation
          </h2>
        </FadeInSection>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-card-hover">
            {/* Quote icon */}
            <Quote
              size={40}
              className="text-brand-amber/30 mb-5"
              aria-hidden="true"
            />

            {/* Quote text */}
            <blockquote>
              <p className="font-display text-xl md:text-2xl text-brand-charcoal leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              <footer className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-white font-accent font-bold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <cite className="font-accent font-bold text-brand-charcoal not-italic">
                    {testimonial.name}
                  </cite>
                  <p className="text-sm text-brand-warm-gray">{testimonial.role}</p>
                  <p className="text-xs text-gray-400 font-accent">{testimonial.location}</p>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center 
                         justify-center text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2" role="tablist">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimonial by ${t.name}`}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    'rounded-full transition-all duration-200',
                    i === current
                      ? 'w-7 h-2.5 bg-brand-amber'
                      : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center 
                         justify-center text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}