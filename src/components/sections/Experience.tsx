'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import SectionLabel from '@/components/ui/SectionLabel'

type Job = {
  title: string
  company: string
  period: string
  bullets: string[]
}

export default function Experience() {
  const t = useTranslations('experience')
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const jobs = t.raw('jobs') as Job[]

  return (
    <section id="experience" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>{t('label')}</SectionLabel>
          <h2
            className="font-syne font-bold text-3xl md:text-4xl mb-16"
            style={{ color: 'var(--color-text)' }}
          >
            {t('title')}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[11px] top-2 bottom-2 w-[2px] hidden md:block"
            style={{
              background:
                'linear-gradient(to bottom, var(--color-accent), var(--color-accent-2), transparent)',
            }}
          />

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
                className="md:pl-10 relative"
              >
                {/* Dot */}
                <div
                  className="absolute left-0 top-2 w-6 h-6 rounded-full border-2 items-center justify-center hidden md:flex"
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    borderColor: 'var(--color-accent)',
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  />
                </div>

                <div
                  className="rounded-2xl border p-6"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3
                        className="font-syne font-bold text-lg"
                        style={{ color: 'var(--color-text)' }}
                      >
                        {job.title}
                      </h3>
                      <p
                        className="text-sm font-medium"
                        style={{ color: 'var(--color-accent-2)' }}
                      >
                        {job.company}
                      </p>
                    </div>
                    <span
                      className="text-xs px-3 py-1 rounded-full border font-mono"
                      style={{
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text-muted)',
                        backgroundColor: 'var(--color-bg-tertiary)',
                      }}
                    >
                      {job.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {job.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm leading-relaxed"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        <span
                          className="mt-[6px] w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: 'var(--color-accent)' }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
