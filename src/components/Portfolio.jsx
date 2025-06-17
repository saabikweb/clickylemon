import React, { useState } from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Mixed')
  
  const categories = [
    { name: 'Mixed', icon: '🎯' },
    { name: 'Gaming', icon: '🎮' },
    { name: 'Sport', icon: '⚽' },
    { name: 'Business', icon: '💼' },
    { name: 'Finance', icon: '💰' },
    { name: 'Podcast', icon: '🎧' },
    { name: 'AI', icon: '🤖' },
    { name: 'Celebrities', icon: '⭐' }
  ]

  const thumbnails = [
    { id: 1, category: 'Mixed', image: '/assets/thumb1.jpg' },
    { id: 2, category: 'Gaming', image: '/assets/thumb2.jpg' },
    { id: 3, category: 'Business', image: '/assets/thumb3.jpg' },
    { id: 4, category: 'Mixed', image: '/assets/thumb1.jpg' },
    { id: 5, category: 'Sport', image: '/assets/thumb2.jpg' },
    { id: 6, category: 'Finance', image: '/assets/thumb3.jpg' },
    { id: 7, category: 'Podcast', image: '/assets/thumb1.jpg' },
    { id: 8, category: 'AI', image: '/assets/thumb2.jpg' },
    { id: 9, category: 'Celebrities', image: '/assets/thumb3.jpg' },
    { id: 10, category: 'Mixed', image: '/assets/thumb1.jpg' },
    { id: 11, category: 'Gaming', image: '/assets/thumb2.jpg' },
    { id: 12, category: 'Business', image: '/assets/thumb3.jpg' }
  ]

  const filteredThumbnails = activeCategory === 'Mixed' 
    ? thumbnails 
    : thumbnails.filter(thumb => thumb.category === activeCategory)

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <h2 className="section-title">Our portfolio</h2>
          <p className="section-subtitle">
            Our diverse portfolio showcases stunning designs across styles and niches.
          </p>
        </div>
        
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`category-btn ${activeCategory === category.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.name)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredThumbnails.map((thumbnail) => (
            <div key={thumbnail.id} className="thumbnail-card">
              <div className="thumbnail-image">
                <img src={thumbnail.image} alt={`${thumbnail.category} Thumbnail`} />
                <div className="thumbnail-overlay">
                  <div className="thumbnail-category">{thumbnail.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
