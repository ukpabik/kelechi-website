import './styles/App.css'
import './styles/index.css'
import Navbar from './components/Navbar.tsx'
import Home from './components/Home.tsx'
import Projects from './components/Projects.tsx'
import Experience from './components/Experience.tsx'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      
      <Footer />
    </>
  )
}

export default App
