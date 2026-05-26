'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { SkillItem } from '@/data/portfolio'

interface SkillBarProps {
  skill: SkillItem
  index: number
}

export default function SkillBar({ skill, index }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
          {skill.name}
        </span>
        <span className="text-sm font-mono" style={{ color: 'var(--color-accent)' }}>
          {skill.percent}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ backgroundColor: 'var(--color-border)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background:
              'linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent-2) 100%)',
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.percent}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
