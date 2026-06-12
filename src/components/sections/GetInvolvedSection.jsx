import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Users, Briefcase, ArrowRight } from 'lucide-react'
import { FadeInSection } from '@/components/ui/FadeInSection'

const WAYS = [
  {
    icon: Heart,
    title: 'Donate',
    desc: 'Give what you can. 80G tax exemption. Every rupee reaches the field with full transparency.',
    cta: 'Donate Now',
    href: '/donate',
    color: 'text-brand-amber',
    bg: 'bg-brand-amber/10',
  },
  {
    icon: Users,
    title: 'Volunteer',
    desc: 'Give your time and skills. Weekend programs, field work, or remote support — every bit counts.',
    cta: 'Join as Volunteer',
    href: '/get-involved',
    color: 'text-brand-green',
    bg: 'bg-brand-green/10',
  },
  {
    icon: Briefcase,
    title: 'CSR Partnership',
    desc: "Partner with us for your company's CSR mandate. We are CSR-1 registered and deliver measurable impact reports.",
    cta: 'Partner With Us',
    href: '/contact',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
]

export function GetInvolvedSection() {
  return (
    <section className="section-padding bg-gray-50" aria-labelledby="involved-title">
      <div className="section-container">
        <FadeInSection className="text-center mb-12">
          <p className="section-eyebrow mb-2">Get Involved</p>
          <h2 id="involved-title" className="section-title">
            Three ways to be part of the story
          </h2>
          <p className="section-subtitle mx-auto mt-3">
            Whether you give money, time, or expertise — every form of support creates ripples that
            reach lives we might never otherwise touch.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WAYS.map((way, i) => {
            const Icon = way.icon
            return (
              <FadeInSection key={way.title} delay={i * 100}>
                <div className="card p-7 h-full flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                  <div className={`w-12 h-12 ${way.bg} rounded-2xl flex items-center justify-center mb-5`}>
                    <Icon size={22} className={way.color} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl text-brand-charcoal mb-2">{way.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{way.desc}</p>
                  <Link
                    to={way.href}
                    className="btn-secondary text-sm inline-flex self-start"
                  >
                    {way.cta}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeInSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}