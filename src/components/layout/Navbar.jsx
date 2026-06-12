import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Heart, Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/utils/helpers'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { NAV_LINKS, SITE } from '@/utils/constants'
import { Button } from '@/components/ui/Button'

/**
 * Sticky navigation bar.
 * Fixes: missing Donate CTA, no hamburger menu, poor trust signalling.
 * Features: scroll-aware shadow, mobile drawer, accessible keyboard nav.
 */
export function Navbar() {
  const { isScrolled } = useScrollPosition(60)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const toggleMobile = () => setMobileOpen((prev) => !prev)
  const closeMobile  = () => setMobileOpen(false)

  return (
    <>
      {/* Top info bar */}
      <div className="bg-brand-green text-white text-xs font-accent hidden md:block">
        <div className="section-container flex justify-between items-center py-1.5">
          <span>📞 {SITE.phone} &nbsp;|&nbsp; ✉️ {SITE.email}</span>
          <span className="flex gap-4 items-center">
            <span>🏛️ Section 8 NGO &nbsp;·&nbsp; 80G &amp; 12A Certified &nbsp;·&nbsp; NITI Aayog Registered</span>
          </span>
        </div>
      </div>

      <header
        className={cn(
          'sticky top-0 z-50 bg-white transition-all duration-300',
          isScrolled && 'nav-scrolled'
        )}
        role="banner"
      >
        <nav
          className="section-container flex items-center justify-between h-16 md:h-18"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 focus-visible:outline-brand-green rounded-lg"
            onClick={closeMobile}
            aria-label="InAmigos Foundation — Home"
          >
            <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-display font-bold text-sm leading-none">IA</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-bold text-brand-green text-base leading-tight">InAmigos</p>
              <p className="font-accent text-xs text-brand-warm-gray leading-none">Foundation</p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  end={link.href === '/'}
                  className={({ isActive }) =>
                    cn(
                      'px-3.5 py-2 rounded-lg text-sm font-accent font-semibold transition-colors duration-150',
                      isActive
                        ? 'text-brand-green bg-brand-green/8'
                        : 'text-gray-600 hover:text-brand-green hover:bg-brand-green/5'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/volunteer" className="btn-ghost text-sm">
              Volunteer
            </Link>
            <Link
              to="/donate"
              className="btn-primary text-sm animate-pulse-gentle"
              aria-label="Donate to InAmigos Foundation"
            >
              <Heart size={15} className="fill-current" />
              Donate Now
            </Link>
          </div>

          {/* Mobile: Donate + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link to="/donate" className="btn-primary text-sm py-2 px-4">
              <Heart size={14} className="fill-current" />
              Donate
            </Link>
            <button
              onClick={toggleMobile}
              className="p-2 rounded-lg text-gray-600 hover:text-brand-green hover:bg-brand-green/5 transition-colors"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <div
          id="mobile-nav"
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100',
            mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          )}
          aria-hidden={!mobileOpen}
        >
          <ul className="section-container py-4 space-y-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  end={link.href === '/'}
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    cn(
                      'block px-4 py-3 rounded-xl text-base font-accent font-semibold transition-colors',
                      isActive
                        ? 'text-brand-green bg-brand-green/8'
                        : 'text-gray-700 hover:text-brand-green hover:bg-brand-green/5'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-100">
              <Link
                to="/volunteer"
                onClick={closeMobile}
                className="block px-4 py-3 rounded-xl text-base font-accent font-semibold text-brand-green hover:bg-brand-green/5"
              >
                Volunteer with Us
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}