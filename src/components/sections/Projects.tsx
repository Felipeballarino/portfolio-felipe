'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import SectionLabel from '@/components/ui/SectionLabel'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data/portfolio'

export default function Projects() {
  const t = useTranslations('projects')
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const descriptions = (t.raw('items') as Array<{ description: string }>).map(
    (item) => item.description
  )

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>{t('label')}</SectionLabel>
          <h2
            className="font-syne font-bold text-3xl md:text-4xl mb-12"
            style={{ color: 'var(--color-text)' }}
          >
            {t('title')}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            >
              <ProjectCard
                project={project}
                description={descriptions[i] ?? ''}
                visitLabel={t('visit')}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
