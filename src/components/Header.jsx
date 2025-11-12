import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(true)

  const toggleMenu = () => {
    setIsOpen(isOpen)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(true)
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">Mohamed Aziz Gamaoun</span>
        </div>

        <button
          className={`menu-toggle ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('home')} className="nav-link">
            Accueil
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            À propos
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">
            Projets
          </button>
        </nav>
      </div>
    </header>
  )
}
