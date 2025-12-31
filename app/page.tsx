import Hero from '../components/main/Hero'
import Introduction from '../components/main/Introduction'
import Projects from '../components/main/Projects'
import Skills from '../components/main/Skills'
import Testimonials from '../components/main/Testimonials'
import TechStackSection from '../components/main/TechStack'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />

      <Introduction />

      <Projects />

      <Skills />

      <Testimonials />

      <TechStackSection />
    </main>
  )
}
