import React from 'react'
import './Reviews.css'

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Raul Camarena',
      location: 'United States',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Great team to work with, very understanding of my needs. Have been working with FlashyThumbnail for many months now; they have done over 30+ thumbnails for me, and I\'m always very satisfied with their professionalism!'
    },
    {
      id: 2,
      name: 'Von Cook',
      location: 'United States',
      avatar: '👨‍🎨',
      rating: 5,
      text: 'Excellent designs, and FlashyThumbnail is a great team! It\'s like they have superpowers — they know exactly what they\'re doing, and you will be wowed!'
    },
    {
      id: 3,
      name: 'Omar Elattar',
      location: 'United States',
      avatar: '👨‍💻',
      rating: 5,
      text: 'I usually make a draft for my channel, and FlashyThumbnail gets things done professionally. Love the easy communication and workflow. Would definitely recommend!'
    },
    {
      id: 4,
      name: 'Gergő Mézes',
      location: 'Hungary',
      avatar: '👨‍🚀',
      rating: 5,
      text: 'Great quality YouTube thumbnails! Love the partnership, definitely recommended!'
    },
    {
      id: 5,
      name: 'Ty Chapman',
      location: 'Australia',
      avatar: '👨‍⚕️',
      rating: 5,
      text: 'Absolute best thumbnail service I\'ve found! (I\'ve tried a lot now) Great communication. FAST turnaround. Easy to work with! Would recommend to others.'
    },
    {
      id: 6,
      name: 'Olivia Vos Costa',
      location: 'United States',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Awesome thumbnails! FlashyThumbnail is easy to communicate with, and they are always willing to make adjustments to get the thumbnails exactly how you want them. Highly recommend!'
    }
  ]

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="reviews-header">
          <h2 className="section-title">Customer reviews</h2>
          <p className="section-subtitle">
            You focus on creating content; we'll focus on getting viewers to notice you.
          </p>
        </div>
        
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="review-avatar">{review.avatar}</div>
                <div className="review-info">
                  <h4 className="review-name">{review.name}</h4>
                  <p className="review-location">{review.location}</p>
                </div>
                <div className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
