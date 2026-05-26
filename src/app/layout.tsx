import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Felipe Ballarino — Frontend Developer',
  description:
    'Portfolio de Felipe Ballarino. Frontend Developer especializado en React & Next.js, microfrontends, IA y proyectos SaaS.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      suppressHydrationWarning
      className={`${syne.variable} ${dmSans.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
