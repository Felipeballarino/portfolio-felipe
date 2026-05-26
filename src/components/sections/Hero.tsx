'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
}

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16">
      <div className="max-w-6xl mx-auto w-full">
        {/* Availability chip */}
        <motion.div
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border font-medium"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-text-secondary)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: '#22c55e' }}
            />
            {t('chip')}
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-syne font-black leading-none mb-6"
          style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
        >
          <span style={{ color: 'var(--color-text)' }}>{t('heading_1')} </span>
          <br />
          <span style={{ color: 'var(--color-accent-2)' }}>{t('heading_2')}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={0.35}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {t('subtitle')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap gap-4 mb-16"
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-semibold text-base transition-all duration-200 font-syne"
            style={{
              background:
                'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-2) 100%)',
              color: '#ffffff',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.opacity = '0.85'
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.opacity = '1'
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
            }}
          >
            {t('cta_primary')}
          </a>
          <a
            href="#experience"
            className="px-6 py-3 rounded-xl font-semibold text-base border transition-all duration-200 font-syne"
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--color-accent)'
              el.style.color = 'var(--color-accent)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--color-border)'
              el.style.color = 'var(--color-text)'
            }}
          >
            {t('cta_secondary')}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={0.65}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap gap-6"
        >
          {[
            { value: t('stat_1_value'), label: t('stat_1_label') },
            { value: t('stat_2_value'), label: t('stat_2_label') },
            { value: t('stat_3_value'), label: t('stat_3_label') },
          ].map((stat, i) => (
            <div
              key={i}
              className="pl-4 border-l-2"
              style={{ borderColor: 'var(--color-accent)' }}
            >
              <div
                className="font-syne font-black text-2xl"
                style={{ color: 'var(--color-text)' }}
              >
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        custom={0.9}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
          {t('scroll_hint')}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-[1px] h-10"
          style={{ backgroundColor: 'var(--color-text-muted)' }}
        />
      </motion.div>
    </section>
  )
}
