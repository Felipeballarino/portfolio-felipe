'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const switchLocale = () => {
    const newLocale = locale === 'es' ? 'en' : 'es'
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/') || `/${newLocale}`)
  }

  const navLinks = [
    { href: '#about', label: t('about') },
    { href: '#experience', label: t('experience') },
    { href: '#projects', label: t('projects') },
    { href: '#stack', label: t('stack') },
    { href: '#contact', label: t('contact') },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md border-b'
          : ''
      }`}
      style={{
        backgroundColor: scrolled ? 'var(--color-bg)' : 'transparent',
        borderColor: scrolled ? 'var(--color-border)' : 'transparent',
        opacity: scrolled ? 0.95 : 1,
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href={`/${locale}`} className="font-syne font-bold text-xl" style={{ color: 'var(--color-text)' }}>
          fb<span style={{ color: 'var(--color-accent)' }}>.</span>
        </a>

        {/* Nav links — hidden on mobile */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:opacity-100"
                style={{ color: 'var(--color-text-secondary)' }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--color-text)')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--color-text-secondary)')
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Locale toggle */}
          <button
            onClick={switchLocale}
            className="px-3 py-1 rounded-md text-sm font-medium font-syne border transition-all duration-200"
            style={{
              color: 'var(--color-text-secondary)',
              borderColor: 'var(--color-border)',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.borderColor = 'var(--color-accent)'
              el.style.color = 'var(--color-accent)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.borderColor = 'var(--color-border)'
              el.style.color = 'var(--color-text-secondary)'
            }}
          >
            {locale === 'es' ? 'EN' : 'ES'}
          </button>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 rounded-md flex items-center justify-center border transition-all duration-200"
              style={{
                color: 'var(--color-text-secondary)',
                borderColor: 'var(--color-border)',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--color-accent)'
                el.style.color = 'var(--color-accent)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--color-border)'
                el.style.color = 'var(--color-text-secondary)'
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          )}
        </div>
      </nav>
    </motion.header>
  )
}
