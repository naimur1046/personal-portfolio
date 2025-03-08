import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {

  return (
    <div className="min-h-screen bg-gray-100">
    <Header />
    <main className="max-w-6xl mx-auto px-6 py-10">
      <Home />
      <About />
      <Contact/>
    </main>
  </div>
  )
}

export default App
