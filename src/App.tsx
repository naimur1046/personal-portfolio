import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {

  return (
    <div >
  <Header />
  <main className='flex flex-col gap-12 md:gap-16 px-6 md:px-20 lg:px-32 ' >
    <section id="home" className="flex items-center justify-center  border-gray-300">
      <Home />
    </section>
    <section id="about" >
      <About />
    </section>
    <section id="projects" >
      <Projects />
    </section>
    <section id="experience" >
      <Experience />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </main>
</div>

  )
}

export default App
