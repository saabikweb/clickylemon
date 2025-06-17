import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Increase your CTR with <br />
            <span className="highlight">Eye Catching Thumbnails</span>
          </h1>
          <p className="hero-subtitle">
            Thumbnails That Make Small Channels Big and Big Channels Unstoppable!
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary hero-btn">
              🍋 Get Custom Thumbnail
            </a>
          </div>
          <div className="hero-visual">
            <div className="floating-thumbnail">
              <img src="./assets/hero-thumb-1.png" alt="Sample Thumbnail" />
            </div>
            <div className="floating-thumbnail delay-1">
              <img src="./assets/hero-thumb-2.png" alt="Sample Thumbnail" />
            </div>
            <div className="floating-thumbnail delay-2">
              <img src="./assets/hero-thumb-3.png" alt="Sample Thumbnail" />
            </div>
            <div className="floating-thumbnail delay-3">
              <img src="./assets/hero-thumb-4.png" alt="Sample Thumbnail" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
