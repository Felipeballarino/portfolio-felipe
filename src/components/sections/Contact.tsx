'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
import SectionLabel from '@/components/ui/SectionLabel'
import { contactLinks } from '@/data/portfolio'

const labelKeys: Record<string, string> = {
  gmail: 'gmail_label',
  linkedin: 'linkedin_label',
  github: 'github_label',
  whatsapp: 'whatsapp_label',
}

const contactIcons: Record<string, React.ReactNode> = {
  gmail: <BiLogoGmail size={20} />,
  linkedin: <FaLinkedinIn size={18} />,
  github: <FaGithub size={20} />,
  whatsapp: <FaWhatsapp size={20} />,
}

export default function Contact() {
  const t = useTranslations('contact')
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionLabel>{t('label')}</SectionLabel>
          <h2
            className="font-syne font-bold text-3xl md:text-4xl mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            {t('title')}
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto rounded-2xl border p-8"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                whileHover={{ y: -2 }}
                className="flex items-start gap-4 p-4 rounded-xl border transition-all duration-200"
                style={{
                  borderColor: 'var(--color-border)',
                  backgroundColor: 'var(--color-bg-tertiary)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'var(--color-accent)'
                  el.style.backgroundColor = 'var(--color-surface)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'var(--color-border)'
                  el.style.backgroundColor = 'var(--color-bg-tertiary)'
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 font-mono"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    color: 'var(--color-accent)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  {contactIcons[link.id]}
                </div>

                <div className="min-w-0">
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-1 font-syne"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {t(labelKeys[link.id] as Parameters<typeof t>[0])}
                  </p>
                  <p
                    className="text-sm truncate"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
