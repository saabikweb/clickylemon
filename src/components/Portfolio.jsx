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
    { id: 1, category: 'Sport', image: './assets/1.png' },
    { id: 2, category: 'Sport', image: './assets/works/2.png' },
    { id: 3, category: 'Sport', image: './assets/works/3.png' },
    { id: 4, category: 'Sport', image: './assets/works/4.png' },
    { id: 5, category: 'Mixed', image: './assets/works/5.png' },
    { id: 6, category: 'Celebrities', image: './assets/works/6.png' },
    { id: 7, category: 'Sport', image: './assets/works/7.png' },
    { id: 8, category: 'Sport', image: '/assets/8.png' },
    { id: 9, category: 'Sport', image: '/assets/9.png' },
    { id: 10, category: 'Sport', image: '/assets/10.png' },
    { id: 11, category: 'Sport', image: '/assets/11.png' },
    { id: 12, category: 'Sport', image: '/assets/12.png'},
    { id: 13, category: 'Sport', image: '/assets/13.png'},
    { id: 14, category: 'Sport', image: '/assets/14.png'},
    { id: 15, category: 'Sport', image: '/assets/15.png'},
    { id: 16, category: 'Sport', image: '/assets/16.png'}
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
