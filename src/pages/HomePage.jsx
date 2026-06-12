import React from 'react'
import { Helmet } from 'react-helmet-async'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBand } from '@/components/sections/TrustBand'
import { ImpactNumbers } from '@/components/sections/ImpactNumbers'
import { AboutSection } from '@/components/sections/AboutSection'
import { CausesSection } from '@/components/sections/CausesSection'
import { DonationSection } from '@/components/sections/DonationSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ImpactStoriesSection } from '@/components/sections/ImpactStoriesSection'
import { GetInvolvedSection } from '@/components/sections/GetInvolvedSection'

/**
 * Home page — orchestrates all sections in the correct NGO conversion funnel order:
 * Awareness (Hero) → Trust (TrustBand) → Impact Numbers → About → Causes →
 * Donation → Testimonials → Stories → Get Involved
 */
export function HomePage() {
  return (
    <>
      <Helmet>
        <title>InAmigos Foundation — Empowering Lives Across India</title>
        <meta
          name="description"
          content="InAmigos Foundation is a Section 8 NGO empowering 50,000+ lives through Education, Women's Empowerment & Animal Welfare. 80G certified, NITI Aayog registered."
        />
      </Helmet>

      <HeroSection />
      <TrustBand />
      <ImpactNumbers />
      <AboutSection />
      <CausesSection preview />
      <DonationSection />
      <TestimonialsSection />
      <ImpactStoriesSection />
      <GetInvolvedSection />
    </>
  )
}