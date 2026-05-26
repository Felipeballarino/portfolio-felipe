'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import SectionLabel from '@/components/ui/SectionLabel'
import Tag from '@/components/ui/Tag'
import SkillBar from '@/components/ui/SkillBar'
import { skills } from '@/data/portfolio'

const aboutTags = [
  'React.js', 'Next.js', 'TypeScript', 'Node.js',
  'FastAPI', 'PostgreSQL', 'Claude API', 'WebSockets',
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
}

export default function About() {
  const t = useTranslations('about')
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          custom={0}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <SectionLabel>{t('label')}</SectionLabel>
          <h2
            className="font-syne font-bold text-3xl md:text-4xl mb-12 max-w-2xl"
            style={{ color: 'var(--color-text)' }}
          >
            {t('title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: text */}
          <div className="space-y-5">
            {[t('p1'), t('p2'), t('p3')].map((paragraph, i) => (
              <motion.p
                key={i}
                custom={0.1 + i * 0.1}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeUp}
                className="text-base leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Tags */}
            <motion.div
              custom={0.45}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              className="flex flex-wrap gap-2 pt-2"
            >
              {aboutTags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </motion.div>
          </div>

          {/* Right: skill card */}
          <motion.div
            custom={0.2}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="rounded-2xl border p-6 space-y-5"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <h3
              className="font-syne font-semibold text-lg mb-4"
              style={{ color: 'var(--color-text)' }}
            >
              {t('skills_title')}
            </h3>
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
