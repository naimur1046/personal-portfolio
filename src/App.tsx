import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Research from './pages/Research'
import OrganizingExperience from './pages/OrganizingExperience'

function App() {

  return (
    <div >
  <Header />
  <main className='flex flex-col' >
    <section id="home" className="flex items-center justify-center  border-gray-300">
      <Home />
    </section>
    <section id="about" className="flex items-center justify-center " >
      <About />
    </section>
    <section id="projects" >
      <Projects />
    </section>
    <section id="research">
      <Research />
    </section>
    <section id="experience">
      <OrganizingExperience/>
    </section>
    <section id="contact">
      <Contact />
    </section>
    
  </main>
</div>

  )
}

export default App
