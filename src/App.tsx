import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Research from './pages/Research'
import OrganizingExperience from './pages/OrganizingExperience'
import ProfessionalExperience from './pages/ProfessionalExperience'

function App() {
  return (
    <div className="bg-[#0a0f1a]">
      <Header />
      <main className="flex flex-col">
        <section id="home" className="pt-20">
          <Home />
        </section>
        <section id="about" className="scroll-mt-20">
          <About />
        </section>
        <section id="work" className="scroll-mt-20">
          <ProfessionalExperience />
        </section>
        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>
        <section id="research" className="scroll-mt-20">
          <Research />
        </section>
        <section id="experience" className="scroll-mt-20">
          <OrganizingExperience />
        </section>
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
