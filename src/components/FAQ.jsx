import React, { useState } from 'react'
import './FAQ.css'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  
  const faqs = [
    {
      question: 'What type of thumbnails do you create?',
      answer: 'We create thumbnails for all niches including gaming, business, sports, finance, podcasts, AI content, celebrity content, and more. Our designs are tailored to maximize click-through rates for your specific audience.'
    },
    {
      question: 'How long does it take to receive a thumbnail?',
      answer: 'Most orders are delivered within 24 hours. For urgent requests, we offer 3-5 hour delivery options. Complex projects may take slightly longer, but we always communicate timelines upfront.'
    },
    {
      question: 'Do you offer bulk packages for thumbnails?',
      answer: 'Yes! We have Creator (10 thumbnails) and Beast (20 thumbnails) packages that offer better value. For agencies and high-volume needs, we also provide custom enterprise solutions.'
    },
    {
      question: 'Can I request revisions for my thumbnail?',
      answer: 'Absolutely! All our packages include up to 2 free revisions. We want to ensure you\'re completely satisfied with the final result before considering the project complete.'
    },
    {
      question: 'What file formats do you provide?',
      answer: 'We provide high-resolution JPG/PNG files optimized for YouTube, plus the original PSD source files so you can make future edits if needed.'
    },
    {
      question: 'Do you work with faceless channels?',
      answer: 'Yes! We specialize in both face-to-camera content and faceless channels. We know how to create compelling thumbnails that work for any content style.'
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything You Need to Know About Our Thumbnail Design Services
          </p>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
