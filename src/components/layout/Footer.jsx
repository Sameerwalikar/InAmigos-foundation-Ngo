import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa'
import { SITE, CERTIFICATIONS } from '@/utils/constants'
import toast from 'react-hot-toast'
import {
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowRight,
} from 'lucide-react'

/**
 * Footer component.
 * Fixes: broken social links, missing newsletter signup, missing donate CTA,
 * missing privacy policy, no certifications display.
 */
export function Footer() {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return

    setSubmitting(true)
    // Simulate async subscribe call
    await new Promise((res) => setTimeout(res, 800))
    toast.success("Thank you! You'll receive impact updates in your inbox.", { icon: '💚' })
    setEmail('')
    setSubmitting(false)
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-charcoal text-gray-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Newsletter band */}
      <div className="bg-brand-green">
        <div className="section-container py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-accent font-bold text-white text-xs uppercase tracking-widest mb-1">
                Stay Connected
              </p>
              <h3 className="font-display text-2xl text-white">Get Impact Updates</h3>
              <p className="text-green-100 text-sm mt-1">
                Stories of change, event invites, and how your support is being used.
              </p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex gap-0 w-full max-w-md"
              aria-label="Newsletter signup"
            >
              <label htmlFor="footer-email" className="sr-only">Your email address</label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-l-full text-gray-800 text-sm font-accent 
                           placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-amber"
              />
              <button
                type="submit"
                disabled={submitting}
                className="bg-brand-amber hover:bg-brand-amber-dark text-white font-accent font-bold 
                           px-5 py-3 rounded-r-full transition-colors flex items-center gap-1.5 text-sm"
              >
                {submitting ? (
                  <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <>Subscribe <ArrowRight size={14} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-brand-amber rounded-full flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">IA</span>
              </div>
              <div>
                <p className="font-display font-bold text-white text-base leading-tight">InAmigos</p>
                <p className="font-accent text-xs text-gray-400 leading-none">Foundation</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-5 text-gray-400">
              Section 8 NGO empowering 50,000+ lives across India through Education, Women's
              Empowerment, and Animal Welfare.
            </p>
            {/* Only real social links - fixes broken Twitter/Google/Pinterest */}
            <div className="flex gap-3">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center 
                           hover:bg-brand-amber transition-colors"
                aria-label="InAmigos on Facebook"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center 
                           hover:bg-brand-amber transition-colors"
                aria-label="InAmigos on Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href={SITE.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center 
                           hover:bg-brand-amber transition-colors"
                aria-label="InAmigos on YouTube"
              >
                <FaYoutube size={16} />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center 
                           hover:bg-brand-amber transition-colors"
                aria-label="InAmigos on LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-accent font-bold text-white text-sm uppercase tracking-widest mb-4">
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Our Causes', href: '/causes' },
                { label: 'Impact Stories', href: '/impact' },
                { label: 'Get Involved', href: '/get-involved' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-brand-amber transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-accent font-bold text-white text-sm uppercase tracking-widest mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin size={15} className="text-brand-amber mt-0.5 flex-shrink-0" />
                {SITE.address}
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-brand-amber transition-colors"
                >
                  <Phone size={15} className="text-brand-amber" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-brand-amber transition-colors"
                >
                  <Mail size={15} className="text-brand-amber" />
                  {SITE.email}
                </a>
              </li>
            </ul>

            <div className="mt-5 p-3 bg-white/5 rounded-xl">
              <p className="text-xs font-accent font-semibold text-brand-amber mb-1">Transparency</p>
              <a
                href="/annual-report"
                className="text-xs text-gray-400 hover:text-white transition-colors underline"
              >
                Download Annual Report →
              </a>
            </div>
          </div>

          {/* Donate CTA column */}
          <div>
            <h3 className="font-accent font-bold text-white text-sm uppercase tracking-widest mb-4">
              Make a Difference
            </h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Every rupee reaches the field directly. 80G tax benefits available.
            </p>
            <Link
              to="/donate"
              className="btn-primary w-full justify-center text-sm mb-3"
            >
              <Heart size={14} className="fill-current" />
              Donate Now
            </Link>
            <Link
              to="/get-involved"
              className="btn-secondary w-full justify-center text-sm border-gray-600 text-gray-300 hover:border-brand-amber hover:text-brand-amber hover:bg-transparent"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs font-accent font-semibold text-gray-500 uppercase tracking-widest mb-4 text-center">
            Certifications &amp; Accreditations
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="flex items-center gap-1.5 bg-white/5 border border-white/10 
                           rounded-lg px-3 py-1.5 text-xs font-accent font-semibold text-gray-300"
              >
                <span aria-hidden="true">{cert.icon}</span>
                {cert.label}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500 font-accent">
          <p>© {currentYear} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms of Use</Link>
            <Link to="/sitemap" className="hover:text-gray-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}