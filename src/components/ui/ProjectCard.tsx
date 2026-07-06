'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Tag from './Tag'
import type { Project } from '@/data/portfolio'

interface ProjectCardProps {
  project: Project
  description: string
  visitLabel: string
  statusLabel: string
}

export default function ProjectCard({
  project,
  description,
  visitLabel,
  statusLabel,
}: ProjectCardProps) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group rounded-2xl border overflow-hidden flex flex-col transition-all duration-300"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-accent)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-border)'
      }}
    >
      {/* Thumbnail */}
      <div
        className="relative h-48 overflow-hidden"
        style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
      >
        {!imgError ? (
          <Image
            src={project.thumbnailUrl}
            alt={project.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl">{project.fallbackEmoji}</span>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center gap-2">
          <span
            className="px-2 py-1 rounded-md text-xs font-medium backdrop-blur-sm truncate"
            style={{
              backgroundColor: 'rgba(0,0,0,0.6)',
              color: '#ffffff',
            }}
          >
            {project.context}
          </span>
          <span
            className="px-2 py-1 rounded-md text-xs font-medium backdrop-blur-sm shrink-0"
            style={{
              backgroundColor:
                project.status === 'completed' ? 'rgba(34,197,94,0.85)' : 'rgba(250,204,21,0.9)',
              color: project.status === 'completed' ? '#ffffff' : '#1a1a1a',
            }}
          >
            {statusLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="font-syne font-semibold text-lg" style={{ color: 'var(--color-text)' }}>
          {project.name}
        </h3>

        <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-text-secondary)' }}>
          {description}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        {/* Link */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-sm font-medium transition-colors duration-200 inline-flex items-center gap-1"
          style={{ color: 'var(--color-accent)' }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = 'var(--color-accent-2)')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = 'var(--color-accent)')
          }
        >
          {visitLabel}
        </a>
      </div>
    </motion.article>
  )
}
