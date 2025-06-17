import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="lemon-icon">🍋</div>
              <span className="brand-text">
                <span className="brand-name">Clicky</span>
                <span className="brand-accent">Lemon</span>
              </span>
            </div>
            <p>
              ClickyLemon specializes in creating eye-catching, high-conversion thumbnails
              designed to help content creators grow their channels.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li>Custom Designs</li>
                <li>Bulk Packages</li>
                <li>Enterprise Solutions</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#process">How We Work</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li>About Us</li>
                <li>Careers</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#contact">Contact</a></li>
                <li>Help Center</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; 2025 ClickyLemon. All rights reserved.</p>
            <p>ClickyLemon is a brand dedicated to helping YouTube creators boost their click-through rates with professional thumbnail designs.</p>
          </div>
          
          <div className="footer-social">
            <a href="#" className="footer-social-link" aria-label="Instagram">📷</a>
            <a href="#" className="footer-social-link" aria-label="TikTok">🎵</a>
            <a href="#" className="footer-social-link" aria-label="Twitter">🐦</a>
            <a href="#" className="footer-social-link" aria-label="YouTube">📺</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
