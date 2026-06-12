import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart } from 'lucide-react'
import { CAUSES } from '@/utils/constants'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { cn } from '@/utils/helpers'

const ALL_CATEGORIES = ['All', ...new Set(CAUSES.map((c) => c.category))]

/**
 * Causes section with filter tabs and donation progress bars.
 * Fixes: blank causes section (Issue #4), pattern from GiveIndia.org.
 * Each card: photo → title → impact → progress → CTA.
 */
export function CausesSection({ preview = false }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? CAUSES
      : CAUSES.filter((c) => c.category === activeCategory)

  const displayed = preview ? filtered.slice(0, 3) : filtered

  return (
    <section className="section-padding bg-white" aria-labelledby="causes-title">
      <div className="section-container">
        <FadeInSection className="text-center mb-10">
          <p className="section-eyebrow">Our Causes</p>
          <h2 id="causes-title" className="section-title mt-2">
            Five ways to create change
          </h2>
          <p className="section-subtitle mx-auto mt-3">
            Each initiative targets a root cause of inequality. Your support drives measurable impact
            on the ground.
          </p>
        </FadeInSection>

        {/* Category filter tabs */}
        <FadeInSection className="flex flex-wrap justify-center gap-2 mb-10">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-accent font-semibold transition-all duration-200',
                activeCategory === cat
                  ? 'bg-brand-green text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-brand-green/10 hover:text-brand-green'
              )}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </FadeInSection>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((cause, i) => (
            <FadeInSection key={cause.id} delay={i * 80}>
              <CauseCard cause={cause} />
            </FadeInSection>
          ))}
        </div>

        {preview && (
          <FadeInSection className="text-center mt-12">
            <Link to="/causes" className="btn-secondary inline-flex">
              View All Our Causes
              <ArrowRight size={16} />
            </Link>
          </FadeInSection>
        )}
      </div>
    </section>
  )
}

function CauseCard({ cause }) {
  const [imgError, setImgError] = useState(false)

  return (
    <article className="card group flex flex-col h-full">
      {/* Image */}
      <div className="relative overflow-hidden h-52 bg-gray-100 flex-shrink-0">
        {!imgError ? (
          <img
            src={cause.image}
            alt={`${cause.name} — ${cause.tagline}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: cause.color + '20' }}
            aria-hidden="true"
          >
            <span className="text-5xl">🌱</span>
          </div>
        )}
        {/* Category pill */}
        <span
          className="absolute top-3 left-3 text-white text-xs font-accent font-bold px-3 py-1.5 rounded-full"
          style={{ backgroundColor: cause.color }}
        >
          {cause.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-xl text-brand-charcoal mb-1">{cause.name}</h3>
        <p className="font-accent font-semibold text-sm text-brand-warm-gray mb-2 italic">
          {cause.tagline}
        </p>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{cause.description}</p>

        {/* Impact number */}
        <div className="flex items-center gap-1.5 mb-4">
          <Heart size={13} className="text-brand-amber" aria-hidden="true" />
          <span className="text-sm font-accent font-semibold text-brand-green">
            {cause.beneficiaries.toLocaleString('en-IN')}+ lives impacted
          </span>
        </div>

        {/* Progress bar */}
        <ProgressBar raised={cause.raisedAmount} goal={cause.goalAmount} className="mb-5" />

        {/* CTA */}
        <Link
          to={`/causes/${cause.id}`}
          className="btn-primary w-full justify-center text-sm"
          aria-label={`${cause.ctaText} — ${cause.name} programme`}
        >
          <Heart size={14} className="fill-current" />
          {cause.ctaText}
        </Link>
      </div>
    </article>
  )
}