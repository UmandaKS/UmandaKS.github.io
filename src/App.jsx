import { useCallback, useState } from 'react'
import About from './components/About'
import BackToTop from './components/BackToTop'
import BackgroundFX from './components/BackgroundFX'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Learning from './components/Learning'
import Navbar from './components/Navbar'
import ProjectModal from './components/ProjectModal'
import Projects from './components/Projects'
import Research from './components/Research'
import Skills from './components/Skills'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [selectedProject, setSelectedProject] = useState(null)

  useScrollReveal()

  const closeProject = useCallback(() => setSelectedProject(null), [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <BackgroundFX />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects onOpenProject={setSelectedProject} />
        <Research />
        <Certificates />
        <Learning />
        <Gallery />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <ProjectModal project={selectedProject} onClose={closeProject} />
    </>
  )
}
