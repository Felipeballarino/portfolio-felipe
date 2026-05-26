'use client'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div className="absolute inset-0 grid-bg" />

      {/* Blob 1 */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full animate-blob-1"
        style={{
          background:
            'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.15,
        }}
      />

      {/* Blob 2 */}
      <div
        className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full animate-blob-2"
        style={{
          background:
            'radial-gradient(circle, var(--color-accent-2) 0%, transparent 70%)',
          filter: 'blur(120px)',
          opacity: 0.12,
        }}
      />
    </div>
  )
}
