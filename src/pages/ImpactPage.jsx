import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ImpactNumbers } from '@/components/sections/ImpactNumbers'
import { ImpactStoriesSection } from '@/components/sections/ImpactStoriesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { CAUSES } from '@/utils/constants'
import { ProgressBar } from '@/components/ui/ProgressBar'

export function ImpactPage() {
  return (
    <>
      <Helmet>
        <title>Our Impact — InAmigos Foundation</title>
        <meta name="description" content="See InAmigos Foundation's measurable impact: 50,000+ lives, 120+ villages, annual fund utilisation transparency." />
      </Helmet>

      <section className="bg-brand-green py-16">
        <div className="section-container text-center">
          <FadeInSection>
            <p className="section-eyebrow text-brand-amber-light mb-3">Transparency First</p>
            <h1 className="font-display text-4xl md:text-5xl text-white mb-3">Our Impact</h1>
            <p className="text-green-100 text-lg max-w-2xl mx-auto">
              Numbers you can verify. Stories you can believe. Governance you can trust.
            </p>
          </FadeInSection>
        </div>
      </section>

      <ImpactNumbers />

      {/* Fund Utilisation */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <FadeInSection className="text-center mb-10">
            <p className="section-eyebrow mb-2">Fund Utilisation</p>
            <h2 className="section-title">Where your money goes</h2>
            <p className="section-subtitle mx-auto mt-3">
              Every rupee is accounted for. Here's how donations are distributed across programmes.
            </p>
          </FadeInSection>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { label: 'BachpanSala — Education',        pct: 32, color: '#1B6B3A' },
              { label: 'Udaan — Women\'s Empowerment',   pct: 24, color: '#7C3AED' },
              { label: 'Sewa — Community Service',       pct: 20, color: '#DC2626' },
              { label: 'Prakriti — Environment',         pct: 14, color: '#059669' },
              { label: 'Jeev — Animal Welfare',          pct: 6,  color: '#D97706' },
              { label: 'Operations & Admin',             pct: 4,  color: '#6B7280' },
            ].map((item, i) => (
              <FadeInSection key={item.label} delay={i * 60}>
                <div>
                  <div className="flex justify-between mb-1.5 text-sm font-accent font-semibold">
                    <span className="text-brand-charcoal">{item.label}</span>
                    <span style={{ color: item.color }}>{item.pct}%</span>
                  </div>
                  <div className="progress-track">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                    />
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={500} className="text-center mt-8">
            <a
              href="/annual-report"
              className="btn-secondary inline-flex"
            >
              Download Annual Report
            </a>
          </FadeInSection>
        </div>
      </section>

      {/* Campaign Progress */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <FadeInSection className="text-center mb-10">
            <p className="section-eyebrow mb-2">Campaign Progress</p>
            <h2 className="section-title">Real-time fundraising</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAUSES.map((cause, i) => (
              <FadeInSection key={cause.id} delay={i * 60}>
                <div className="bg-white rounded-2xl p-5 shadow-card">
                  <h3 className="font-display text-lg text-brand-charcoal mb-1">{cause.name}</h3>
                  <p className="text-xs text-brand-warm-gray font-accent mb-3">{cause.category}</p>
                  <ProgressBar raised={cause.raisedAmount} goal={cause.goalAmount} />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <ImpactStoriesSection />
      <TestimonialsSection />
    </>
  )
}