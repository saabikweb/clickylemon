import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Ready to Boost Your CTR?</h2>
          <p className="section-subtitle">
            Let's create thumbnails that turn viewers into subscribers
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Ready to take your YouTube channel to the next level? Contact us today!</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <span className="method-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>mohammedshaabik@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <span className="method-icon">⚡</span>
                <div>
                  <h4>Fast Response</h4>
                  <p>We reply within 24 hours</p>
                </div>
              </div>
              
              <div className="contact-method">
                <span className="method-icon">🎯</span>
                <div>
                  <h4>Custom Solutions</h4>
                  <p>Tailored to your channel needs</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://www.instagram.com/clicky.lemon" className="social-link">
                  <span>📷</span> Instagram
                </a>
                <a href="#" className="social-link">
                  <span>🎵</span> TikTok
                </a>
                <a href="#" className="social-link">
                  <span>🐦</span> Twitter
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                {isSubmitted ? 'Message Sent! ✓' : 'Send Message'}
              </button>
              
              {isSubmitted && (
                <div className="success-message">
                  Thanks for reaching out! We'll get back to you within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
