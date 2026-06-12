import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import { IMPACT_STORIES } from '@/utils/constants'
import { FadeInSection } from '@/components/ui/FadeInSection'

/**
 * Impact Stories section — builds emotional connection with real outcomes.
 * Addresses the UX principle: Awareness → Empathy → Trust → Action.
 */
export function ImpactStoriesSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="stories-title">
      <div className="section-container">
        <FadeInSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="section-eyebrow mb-2">Impact Stories</p>
            <h2 id="stories-title" className="section-title">
              Real lives, real change
            </h2>
          </div>
          <Link to="/impact" className="btn-ghost whitespace-nowrap self-start sm:self-auto">
            All Stories <ArrowRight size={15} className="inline" />
          </Link>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {IMPACT_STORIES.map((story, i) => (
            <FadeInSection key={story.id} delay={i * 80}>
              <article className="card group h-full flex flex-col">
                <div className="overflow-hidden h-48 bg-gray-100 flex-shrink-0">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-green/10 text-brand-green text-xs font-accent font-bold px-2.5 py-1 rounded-full">
                      {story.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400 font-accent">
                      <Clock size={11} aria-hidden="true" />
                      {story.readTime} read
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-brand-charcoal mb-2 leading-snug group-hover:text-brand-green transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{story.preview}</p>
                  <Link
                    to={`/impact/${story.id}`}
                    className="text-brand-green font-accent font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                    aria-label={`Read full story: ${story.title}`}
                  >
                    Read story <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}