import AboutSection from "./components/AboutSection"
import Contacto from "./components/Contacto"
import { HeroSection } from "./components/HeroSection"
import { Navbar } from "./components/Navbar"
import Project from "./components/Projects"
import StackSection from "./components/StackSection"

function App() {

  return (
    <main className="min-h-screen font-sans">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <Project/>
      <StackSection/>
      <Contacto/>
      
    </main>
  )
}

export default App
