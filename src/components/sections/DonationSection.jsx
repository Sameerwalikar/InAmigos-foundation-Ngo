import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, CheckCircle } from 'lucide-react'
import { DONATION_TIERS } from '@/utils/constants'
import { formatINR } from '@/utils/helpers'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { cn } from '@/utils/helpers'

/**
 * Donation section with impact-mapped tiers.
 * Fixes Issue #2: no donate CTA, no giving tiers, no impact mapping.
 * Pattern: ₹amount = concrete outcome (inspired by CRY.org and GiveIndia).
 */
export function DonationSection() {
  const [selected, setSelected] = useState('education')
  const [customAmount, setCustomAmount] = useState('')

  const handleCustomChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '')
    setCustomAmount(val)
    if (val) setSelected(null)
  }

  const activeTier = DONATION_TIERS.find((t) => t.id === selected)
  const donationAmount = selected
    ? activeTier?.amount
    : customAmount
    ? parseInt(customAmount, 10)
    : null

  return (
    <section className="section-padding bg-brand-cream" aria-labelledby="donate-title">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Giving tiers */}
          <div>
            <FadeInSection direction="left">
              <p className="section-eyebrow mb-3">Make a Difference</p>
              <h2 id="donate-title" className="section-title mb-3">
                Choose your impact
              </h2>
              <p className="section-subtitle mb-8">
                Every rupee is mapped to a real outcome. 80G tax exemption available.
              </p>
            </FadeInSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {DONATION_TIERS.map((tier, i) => (
                <FadeInSection key={tier.id} delay={i * 60}>
                  <button
                    onClick={() => { setSelected(tier.id); setCustomAmount('') }}
                    className={cn(
                      'w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 relative',
                      selected === tier.id
                        ? 'border-brand-amber bg-white shadow-cta'
                        : 'border-gray-200 bg-white hover:border-brand-amber/50 hover:bg-white'
                    )}
                    aria-pressed={selected === tier.id}
                  >
                    {tier.popular && (
                      <span className="absolute -top-2.5 left-4 bg-brand-amber text-white text-[10px] 
                                       font-accent font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                        Most Popular
                      </span>
                    )}
                    <span className="text-2xl block mb-2" aria-hidden="true">{tier.icon}</span>
                    <p className="font-display text-2xl text-brand-green font-bold mb-1">
                      {formatINR(tier.amount)}
                    </p>
                    <p className="text-xs text-gray-500 leading-snug font-accent">{tier.impact}</p>
                    {selected === tier.id && (
                      <CheckCircle
                        size={16}
                        className="absolute top-3 right-3 text-brand-amber"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </FadeInSection>
              ))}
            </div>

            {/* Custom amount */}
            <FadeInSection delay={300}>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-accent font-bold">
                  ₹
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={handleCustomChange}
                  className={cn(
                    'w-full pl-8 pr-4 py-3.5 rounded-2xl border-2 font-accent text-base transition-colors',
                    !selected && customAmount
                      ? 'border-brand-amber bg-white'
                      : 'border-gray-200 bg-white focus:border-brand-amber'
                  )}
                  aria-label="Enter custom donation amount in rupees"
                />
              </div>
            </FadeInSection>
          </div>

          {/* Right: CTA card */}
          <FadeInSection direction="right">
            <div className="bg-white rounded-3xl p-8 shadow-card-hover text-center">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Heart size={28} className="text-brand-green fill-brand-green/30" aria-hidden="true" />
              </div>

              {donationAmount ? (
                <>
                  <p className="font-display text-4xl text-brand-green font-bold mb-2">
                    {formatINR(donationAmount)}
                  </p>
                  <p className="text-sm text-gray-500 mb-1 font-accent">
                    {activeTier?.impact || 'Your custom contribution'}
                  </p>
                  <p className="text-xs text-brand-amber font-accent font-semibold mb-6">
                    ✦ Tax deductible under 80G
                  </p>
                </>
              ) : (
                <>
                  <p className="font-display text-2xl text-brand-charcoal mb-2">
                    Select an amount above
                  </p>
                  <p className="text-sm text-gray-400 mb-6 font-accent">
                    or enter a custom amount
                  </p>
                </>
              )}

              <Link
                to={`/donate${donationAmount ? `?amount=${donationAmount}` : ''}`}
                className="btn-primary w-full justify-center text-base mb-4 shadow-cta"
              >
                <Heart size={16} className="fill-current" />
                {donationAmount ? `Donate ${formatINR(donationAmount)}` : 'Donate Now'}
              </Link>

              <div className="space-y-2 text-xs text-gray-400 font-accent">
                <p className="flex items-center justify-center gap-1.5">
                  <CheckCircle size={12} className="text-brand-green" />
                  Secure payment via Razorpay
                </p>
                <p className="flex items-center justify-center gap-1.5">
                  <CheckCircle size={12} className="text-brand-green" />
                  Instant 80G receipt emailed
                </p>
                <p className="flex items-center justify-center gap-1.5">
                  <CheckCircle size={12} className="text-brand-green" />
                  100% of funds reach the field
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}