import { useState } from 'react'
import './App.css'
import Landing from './components/Landing'
import SkillsSection from './components/SkillsSection'
import EducationSection from './components/EducationSection'
import ExperienceCard from './components/ExperienceCard'
import Project from './components/Project'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ToggleTheme from './components/ToggleTheme'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <ToggleTheme darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <Landing />
      
      <SkillsSection darkMode={darkMode} />
      
      <EducationSection darkMode={darkMode} />
      
      <ExperienceCard darkMode={darkMode} />
      
      <Project darkMode={darkMode} />
      
      <ContactSection darkMode={darkMode} />
      
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App
