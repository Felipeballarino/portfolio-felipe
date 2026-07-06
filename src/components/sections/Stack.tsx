'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import SectionLabel from '@/components/ui/SectionLabel'
import { stackItems } from '@/data/portfolio'
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { BsTypescript } from "react-icons/bs";
import { BsClaude } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiWebpack } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";

const stackIcons: Record<string, React.ReactNode> = {
  "React": <FaReact size={20} />,
  "Next.js": <SiNextdotjs size={20} />,
  'TypeScript': <BsTypescript size={20} />,
  'Claude API': <BsClaude size={20} />,
  'JavaScript': <IoLogoJavascript size={20} />,
  'Tailwind': <RiTailwindCssFill size={20} />,
  'Node.js': <FaNodeJs size={20} />,
  'FastAPI': <SiFastapi size={20} />,
  'PostgreSQL': <BiLogoPostgresql size={20} />,
  'Webpack MF': <SiWebpack size={20} />,
  'Supabase': <RiSupabaseFill size={20} />,
  'Vercel': <IoLogoVercel size={20} />,
}

export default function Stack() {
  const t = useTranslations('stack')
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })  

  return (
    <section id="stack" ref={ref} className="py-24 px-6">
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

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {stackItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
            >
              <div
                className="group relative rounded-xl border p-4 flex flex-col items-center gap-3 cursor-default transition-all duration-200"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: item.featured ? 'var(--color-accent)' : 'var(--color-border)',
                  boxShadow: item.featured
                    ? '0 0 0 1px var(--color-accent), 0 0 20px -5px var(--color-accent)'
                    : 'none',
                }}
                onMouseEnter={(e) => {
                  if (!item.featured) {
                    const el = e.currentTarget
                    el.style.borderColor = 'var(--color-border-2)'
                    el.style.boxShadow =
                      '0 0 20px -5px var(--color-accent-3)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!item.featured) {
                    const el = e.currentTarget
                    el.style.borderColor = 'var(--color-border)'
                    el.style.boxShadow = 'none'
                  }
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm font-mono shrink-0"
                  style={{ backgroundColor: item.bg, color: item.color }}
                >
                  {stackIcons[item.name]}
                </div>

                {/* Name */}
                <span
                  className="text-xs font-medium text-center leading-tight font-dm-sans"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {item.name}
                </span>

                {/* Featured badge */}
                {item.featured && (
                  <div
                    className="absolute -top-2 -right-2 w-4 h-4 rounded-full"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
