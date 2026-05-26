interface TagProps {
  children: React.ReactNode
  variant?: 'default' | 'accent'
}

export default function Tag({ children, variant = 'default' }: TagProps) {
  if (variant === 'accent') {
    return (
      <span
        className="inline-block px-3 py-1 rounded-full text-xs font-medium font-dm-sans"
        style={{
          backgroundColor: 'var(--color-accent)',
          color: '#ffffff',
          opacity: 0.9,
        }}
      >
        {children}
      </span>
    )
  }

  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-xs font-medium border font-dm-sans"
      style={{
        backgroundColor: 'var(--color-bg-tertiary)',
        color: 'var(--color-text-secondary)',
        borderColor: 'var(--color-border)',
      }}
    >
      {children}
    </span>
  )
}
