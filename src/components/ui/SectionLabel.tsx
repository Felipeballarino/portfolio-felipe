interface SectionLabelProps {
  children: React.ReactNode
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span
        className="w-6 h-[2px] rounded-full"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />
      <span
        className="text-sm font-semibold uppercase tracking-widest font-syne"
        style={{ color: 'var(--color-accent)' }}
      >
        {children}
      </span>
    </div>
  )
}
