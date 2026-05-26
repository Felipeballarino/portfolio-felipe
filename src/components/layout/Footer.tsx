'use client'

import { useLocale } from 'next-intl'

export default function Footer() {
  const locale = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t py-8 px-6"
      style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href={`/${locale}`} className="font-syne font-bold text-lg" style={{ color: 'var(--color-text)' }}>
          fb<span style={{ color: 'var(--color-accent)' }}>.</span>
        </a>
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          © {year} Felipe Ballarino. 
        </p>
      </div>
    </footer>
  )
}
