import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-tertiary': 'var(--color-bg-tertiary)',
        surface: 'var(--color-surface)',
        'border-color': 'var(--color-border)',
        'border-color-2': 'var(--color-border-2)',
        'text-primary': 'var(--color-text)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        accent: 'var(--color-accent)',
        'accent-2': 'var(--color-accent-2)',
        'accent-3': 'var(--color-accent-3)',
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        'blob-1': 'blob1 20s ease-in-out infinite',
        'blob-2': 'blob2 25s ease-in-out infinite',
      },
      keyframes: {
        blob1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(80px, -60px) scale(1.1)' },
          '66%': { transform: 'translate(-40px, 40px) scale(0.95)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-80px, 60px) scale(1.05)' },
          '66%': { transform: 'translate(60px, -30px) scale(0.9)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
