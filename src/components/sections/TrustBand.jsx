import React from 'react'
import { CheckCircle } from 'lucide-react'
import { CERTIFICATIONS } from '@/utils/constants'
import { FadeInSection } from '@/components/ui/FadeInSection'

/**
 * Trust Band — prominently surfaces certifications immediately below the hero.
 * Fixes: trust signals buried in 250-word text paragraph (Issue #3).
 * Visual badges increase donor confidence for first-time visitors.
 */
export function TrustBand() {
  return (
    <section
      className="bg-brand-cream border-y border-brand-green/10 py-8"
      aria-label="Certifications and accreditations"
    >
      <div className="section-container">
        <FadeInSection>
          <p className="text-center text-xs font-accent font-bold text-brand-warm-gray uppercase tracking-widest mb-5">
            Certified · Transparent · Government Recognised
          </p>
        </FadeInSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CERTIFICATIONS.map((cert, i) => (
            <FadeInSection key={cert.id} delay={i * 60}>
              <div
                className="cert-badge flex-col text-center py-4 h-full justify-center cursor-default 
                           hover:bg-brand-green/10 hover:border-brand-green/40 transition-colors duration-200"
                title={cert.desc}
              >
                <span className="text-2xl mb-1.5 block" aria-hidden="true">{cert.icon}</span>
                <span className="text-xs font-bold leading-tight block text-brand-green">{cert.label}</span>
                <span className="text-[10px] text-brand-warm-gray font-normal mt-0.5 block leading-snug">
                  {cert.desc}
                </span>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={400}>
          <p className="text-center mt-5 text-xs text-brand-warm-gray font-accent">
            <CheckCircle size={12} className="inline mr-1 text-brand-green" aria-hidden="true" />
            80G certified — your donations qualify for tax deductions under the Income Tax Act.
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}