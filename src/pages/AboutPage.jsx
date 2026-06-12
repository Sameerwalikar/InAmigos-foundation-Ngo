import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Heart, ArrowRight } from 'lucide-react'
import { TrustBand } from '@/components/sections/TrustBand'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { TEAM_MEMBERS, CERTIFICATIONS, SITE } from '@/utils/constants'
import { FadeInSection } from '@/components/ui/FadeInSection'

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us — InAmigos Foundation</title>
        <meta name="description" content="Learn about InAmigos Foundation — founded in 2020 by Govind Shukla, Section 8 NGO, 80G & 12A certified, working across Chhattisgarh." />
      </Helmet>

      {/* Page hero */}
      <section className="bg-brand-green py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #F59E0B 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="section-container relative text-center">
          <FadeInSection>
            <p className="section-eyebrow text-brand-amber-light mb-3">Our Story</p>
            <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
              Born from empathy,<br />
              <span className="text-brand-amber-light italic">built through action</span>
            </h1>
            <p className="text-green-100 text-lg max-w-2xl mx-auto">
              InAmigos Foundation was established on {SITE.established} with a simple belief:
              every human being deserves dignity, opportunity, and care.
            </p>
          </FadeInSection>
        </div>
      </section>

      <TrustBand />

      {/* Mission section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <FadeInSection direction="left">
              <p className="section-eyebrow mb-3">Mission & Vision</p>
              <h2 className="section-title mb-6">
                Our <span className="text-brand-green italic">purpose</span> in plain words
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-brand-charcoal">Mission:</strong> To create a compassionate,
                  equitable society by empowering children, women, animals, and communities through
                  sustainable programmes that address root causes of inequality.
                </p>
                <p>
                  <strong className="text-brand-charcoal">Vision:</strong> An India where every child
                  gets quality education, every woman achieves economic independence, and every living
                  being is treated with dignity.
                </p>
                <p>
                  <strong className="text-brand-charcoal">Approach:</strong> We work at all levels —
                  with children, parents, teachers, communities, and government — to shift both
                  behaviour and policy.
                </p>
              </div>
              <Link to="/causes" className="btn-primary inline-flex mt-8">
                <Heart size={15} className="fill-current" />
                See Our Work
              </Link>
            </FadeInSection>

            <FadeInSection direction="right">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&auto=format&fit=crop&q=80"
                alt="InAmigos Foundation team working with children"
                className="rounded-3xl shadow-card-hover w-full h-96 object-cover"
                loading="lazy"
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-brand-cream">
        <div className="section-container">
          <FadeInSection className="text-center mb-12">
            <p className="section-eyebrow mb-2">Founding Story</p>
            <h2 className="section-title">Meet the Founder</h2>
          </FadeInSection>
          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card flex flex-col sm:flex-row gap-8 items-start">
                <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 text-white font-display font-bold text-2xl">
                  GS
                </div>
                <div>
                  <h3 className="font-display text-2xl text-brand-charcoal mb-1">Govind Shukla</h3>
                  <p className="text-brand-amber font-accent font-bold text-sm mb-4">Founder &amp; CEO</p>
                  <p className="text-gray-600 leading-relaxed">
                    A social entrepreneur with deep roots in Chhattisgarh, Govind founded InAmigos
                    Foundation after witnessing firsthand the disparities in education and welfare
                    affecting rural communities. His vision was never to build a charity — but to build
                    an ecosystem where change is systemic and sustainable. Under his leadership,
                    InAmigos has grown from a local initiative to a NITI Aayog–registered NGO with
                    CSR partnerships across India.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <FadeInSection className="text-center mb-12">
            <p className="section-eyebrow mb-2">The Team</p>
            <h2 className="section-title">People behind the purpose</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((member, i) => (
              <FadeInSection key={member.id} delay={i * 80}>
                <div className="card p-6 text-center">
                  <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-display font-bold text-lg">
                    {member.avatar}
                  </div>
                  <h3 className="font-display text-lg text-brand-charcoal mb-0.5">{member.name}</h3>
                  <p className="text-brand-amber font-accent font-bold text-xs mb-3">{member.role}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </>
  )
}