import React from 'react'
import { Users, MapPin, Heart, Target } from 'lucide-react'
import { IMPACT_STATS } from '@/utils/constants'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { FadeInSection } from '@/components/ui/FadeInSection'

const ICON_MAP = { Users, MapPin, Heart, Target }

/**
 * Impact numbers section with scroll-triggered count-up animation.
 * Addresses the need to surface key metrics above the fold per UX report.
 */
export function ImpactNumbers() {
  return (
    <section
      className="bg-brand-green section-padding"
      aria-label="InAmigos Foundation impact statistics"
    >
      <div className="section-container">
        <FadeInSection className="text-center mb-10">
          <p className="section-eyebrow text-brand-amber-light">Our Reach</p>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-2">
            Numbers that tell a real story
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {IMPACT_STATS.map((stat, i) => {
            const Icon = ICON_MAP[stat.icon]
            return (
              <FadeInSection key={stat.id} delay={i * 100}>
                <div className="text-center group">
                  <div
                    className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center 
                               mx-auto mb-4 group-hover:bg-brand-amber/20 transition-colors duration-300"
                  >
                    {Icon && <Icon size={26} className="text-brand-amber-light" aria-hidden="true" />}
                  </div>
                  <p className="font-display text-4xl md:text-5xl font-bold text-white mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="font-accent text-sm text-green-200 font-semibold">{stat.label}</p>
                </div>
              </FadeInSection>
            )
          })}
        </div>

        <FadeInSection delay={500} className="text-center mt-10">
          <p className="text-green-200 text-sm font-accent">
            Since September 2020 · Chhattisgarh, India
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}