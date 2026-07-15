import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Perfil from './components/Perfil.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <div className="grid-bg" />
      <div className="glow" />
      <Navbar />
      <main id="top">
        <Hero />
        <Perfil />
        <Projects />
        <Skills />
        <Experience />
        <Education />
      </main>
      <Contact />
    </>
  )
}
