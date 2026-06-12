import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CausesSection } from '@/components/sections/CausesSection'
import { DonationSection } from '@/components/sections/DonationSection'
import { TrustBand } from '@/components/sections/TrustBand'
import { FadeInSection } from '@/components/ui/FadeInSection'

export function CausesPage() {
  return (
    <>
      <Helmet>
        <title>Our Causes — InAmigos Foundation</title>
        <meta name="description" content="Explore InAmigos Foundation's five key initiatives: BachpanSala (education), Udaan (women's empowerment), Jeev (animal welfare), Sewa (community service), and Prakriti (environment)." />
      </Helmet>

      <section className="bg-brand-green py-16">
        <div className="section-container text-center">
          <FadeInSection>
            <p className="section-eyebrow text-brand-amber-light mb-3">What We Do</p>
            <h1 className="font-display text-4xl md:text-5xl text-white mb-4">
              Five roots of change
            </h1>
            <p className="text-green-100 text-lg max-w-2xl mx-auto">
              Each initiative targets a specific root cause of inequality. Together, they create a
              system where children, women, animals, and communities all thrive.
            </p>
          </FadeInSection>
        </div>
      </section>

      <TrustBand />
      <CausesSection preview={false} />
      <DonationSection />
    </>
  )
}