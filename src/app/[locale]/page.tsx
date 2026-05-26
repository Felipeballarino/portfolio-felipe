import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Stack from '@/components/sections/Stack'
import Contact from '@/components/sections/Contact'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: 'var(--color-bg)' }}>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </main>
  )
}
