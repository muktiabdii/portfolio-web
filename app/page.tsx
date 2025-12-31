import Hero from '../components/main/Hero'
import Introduction from '../components/main/Introduction'
import Projects from '../components/main/Projects'
import Skills from '../components/main/Skills'
import Testimonials from '../components/main/Testimonials'
import TechStackSection from '../components/main/TechStack'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div data-aos="fade-up">
        <Hero />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <Introduction />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <Projects />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <Skills />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <Testimonials />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <TechStackSection />
      </div>
    </main>
  )
}
