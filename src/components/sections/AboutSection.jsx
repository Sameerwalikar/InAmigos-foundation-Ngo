import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, MapPin, Building, Award } from 'lucide-react'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { SITE } from '@/utils/constants'

const INITIATIVES = [
  { icon: '📚', name: 'BachpanSala', desc: 'Free education for underprivileged children' },
  { icon: '👩', name: 'Udaan',       desc: 'Vocational training for rural women' },
  { icon: '🐾', name: 'Jeev',        desc: 'Animal rescue & welfare' },
  { icon: '🤝', name: 'Sewa',        desc: 'Health camps & community service' },
  { icon: '🌿', name: 'Prakriti',    desc: 'Environmental conservation' },
  { icon: '🏫', name: 'Skilling',    desc: 'Youth skills & livelihood training' },
]

const PILLARS = [
  { icon: Building, label: 'Founded',    value: 'Sep 23, 2020' },
  { icon: Users,    label: 'Founder',    value: SITE.founder },
  { icon: MapPin,   label: 'Base',       value: 'Raipur, CG' },
  { icon: Award,    label: 'Registered', value: 'Section 8 NGO' },
]

/**
 * About section — completely restructured per UX report recommendation.
 * Replaces 250-word text wall with:
 * 1. 2-line mission statement
 * 2. 3-column initiative grid
 * 3. Founder story card
 * 4. CTA
 */
export function AboutSection() {
  return (
    <section className="section-padding bg-hero-pattern" aria-labelledby="about-title">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <FadeInSection direction="left">
              <p className="section-eyebrow mb-3">Who We Are</p>
              <h2 id="about-title" className="section-title mb-5">
                A foundation built on{' '}
                <span className="text-brand-green italic font-display">compassion</span>{' '}
                and{' '}
                <span className="text-brand-amber font-display">action</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                InAmigos Foundation was established on{' '}
                <strong className="text-brand-charcoal">{SITE.established}</strong> by{' '}
                <strong className="text-brand-charcoal">{SITE.founder}</strong>. We are a Section 8
                registered non-profit organisation licensed by the Central Government, based in
                Chhattisgarh — working to ensure every child, woman, and animal receives dignity and
                opportunity.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We are NITI Aayog registered, CSR-1 compliant, and hold ISO 9001:2015 certification —
                meaning every rupee you give is governed by international quality standards.
              </p>
            </FadeInSection>

            {/* Quick facts */}
            <FadeInSection direction="left" delay={100}>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {PILLARS.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 bg-white rounded-xl p-3.5 shadow-card"
                  >
                    <div className="w-9 h-9 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={17} className="text-brand-green" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] font-accent text-gray-400 uppercase tracking-wide">{label}</p>
                      <p className="text-sm font-accent font-bold text-brand-charcoal leading-tight">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection direction="left" delay={200}>
              <Link to="/about" className="btn-secondary inline-flex">
                Our Full Story
                <ArrowRight size={16} />
              </Link>
            </FadeInSection>
          </div>

          {/* Right: Initiatives grid */}
          <div>
            <FadeInSection direction="right">
              <p className="font-accent font-bold text-sm text-brand-warm-gray uppercase tracking-widest mb-5">
                Our 6 Key Initiatives
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {INITIATIVES.map((item, i) => (
                  <FadeInSection key={item.name} delay={i * 60}>
                    <div
                      className="bg-white rounded-2xl p-4 shadow-card hover:shadow-card-hover 
                                 hover:-translate-y-0.5 transition-all duration-200 text-center group"
                    >
                      <span
                        className="text-3xl block mb-2 group-hover:scale-110 transition-transform duration-200"
                        aria-hidden="true"
                      >
                        {item.icon}
                      </span>
                      <p className="font-accent font-bold text-brand-green text-sm mb-1">{item.name}</p>
                      <p className="text-xs text-gray-500 leading-snug">{item.desc}</p>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </FadeInSection>

            {/* Image collage */}
            <FadeInSection direction="right" delay={300} className="mt-6">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&auto=format&fit=crop&q=75"
                  alt="InAmigos Foundation team and volunteers working with children in Chhattisgarh"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-accent font-semibold text-sm">
                    Our team on the ground in Chhattisgarh
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  )
}