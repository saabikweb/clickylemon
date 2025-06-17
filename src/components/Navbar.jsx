import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <div className="logo">
              <div className="lemon-icon">🍋</div>
              <span className="brand-text">
                <span className="brand-name">Clicky</span>
                <span className="brand-accent">Lemon</span>
              </span>
            </div>
            <span className="tagline">YouTube Thumbnail Designer</span>
          </div>
          
          <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <a href="#portfolio" onClick={() => scrollToSection('portfolio')}>
              Portfolio
            </a>
            <a href="#process" onClick={() => scrollToSection('process')}>
              Process
            </a>
            <a href="#pricing" onClick={() => scrollToSection('pricing')}>
              Pricing
            </a>
            <a href="#reviews" onClick={() => scrollToSection('reviews')}>
              Reviews
            </a>
            <a href="#faq" onClick={() => scrollToSection('faq')}>
              FAQ
            </a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className="nav-cta">
              Get Started
            </a>
          </div>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
