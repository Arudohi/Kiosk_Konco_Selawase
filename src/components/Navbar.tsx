import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

interface NavbarProps {
  isDark: boolean
  toggleDark: () => void
}

export default function Navbar({ isDark, toggleDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 100)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Katalog', href: '#katalog' },
    { label: 'Hubungi', href: '#hubungi' },
  ]

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg-card)]/80 backdrop-blur-xl shadow-kbks-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            className="flex items-center gap-2.5 group"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[var(--accent)] transition-transform duration-300 group-hover:scale-110"
            >
              <path
                d="M12 2C10 4 8 6 8 8C8 10 10 11 12 11C14 11 16 10 16 8C16 6 14 4 12 2Z"
                fill="currentColor"
                opacity="0.3"
              />
              <path
                d="M12 11C7 11 3 14 2 18C2 19 3 20 4 20H20C21 20 22 19 22 18C21 14 17 11 12 11Z"
                fill="currentColor"
              />
              <circle cx="10" cy="7" r="1" fill="var(--bg-primary)" />
              <circle cx="14" cy="7" r="1" fill="var(--bg-primary)" />
              <path
                d="M11 9C11 9 11.5 9.5 12 9.5C12.5 9.5 13 9 13 9"
                stroke="var(--bg-primary)"
                strokeWidth="0.8"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-heading font-semibold text-[1.25rem] text-[var(--text-primary)] hidden sm:inline">
              Kios Burung Konco Selawase
            </span>
            <span className="font-heading font-semibold text-[1.25rem] text-[var(--text-primary)] sm:hidden">
              KB Konco Selawase
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="nav-link font-body text-[0.9375rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 pb-1"
              >
                {link.label}
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDark}
              className="relative w-[48px] h-[26px] rounded-full bg-[var(--accent-light)] cursor-pointer transition-colors duration-500"
              aria-label="Toggle dark mode"
            >
              <div
                className="absolute top-[2px] left-[2px] w-[22px] h-[22px] rounded-full bg-[var(--accent)] shadow-md transition-transform duration-300 flex items-center justify-center"
                style={{
                  transform: isDark ? 'translateX(22px)' : 'translateX(0)',
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                <Sun
                  size={13}
                  className={`absolute text-white transition-all duration-300 ${
                    isDark
                      ? 'opacity-0 rotate-90'
                      : 'opacity-100 rotate-0'
                  }`}
                />
                <Moon
                  size={13}
                  className={`absolute text-white transition-all duration-300 ${
                    isDark
                      ? 'opacity-100 rotate-0'
                      : 'opacity-0 -rotate-90'
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[var(--text-primary)]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[var(--bg-card)]/95 backdrop-blur-xl border-t border-[var(--border)] px-4 py-4 space-y-1 rounded-b-2xl shadow-kbks-md">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left px-4 py-3 font-body text-[0.9375rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-light)]/50 rounded-xl transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <div className="flex items-center justify-between px-4 py-3">
            <span className="font-body text-sm text-[var(--text-muted)]">
              {isDark ? 'Mode Gelap' : 'Mode Terang'}
            </span>
            <button
              onClick={toggleDark}
              className="relative w-[48px] h-[26px] rounded-full bg-[var(--accent-light)] cursor-pointer transition-colors duration-500"
              aria-label="Toggle dark mode"
            >
              <div
                className="absolute top-[2px] left-[2px] w-[22px] h-[22px] rounded-full bg-[var(--accent)] shadow-md transition-transform duration-300 flex items-center justify-center"
                style={{
                  transform: isDark ? 'translateX(22px)' : 'translateX(0)',
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                <Sun
                  size={13}
                  className={`absolute text-white transition-all duration-300 ${
                    isDark ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`}
                />
                <Moon
                  size={13}
                  className={`absolute text-white transition-all duration-300 ${
                    isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
