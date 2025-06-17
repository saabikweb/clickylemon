import React from 'react'
import './Pricing.css'

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      subtitle: '1 Thumbnail Design',
      price: '$35',
      popular: false,
      features: [
        '1 thumbnail',
        '2 Revisions',
        '24h Delivery',
        '2 Versions',
        'Source file PSD',
        '3/5h Delivery'
      ]
    },
    {
      name: 'Creator',
      subtitle: '10 Thumbnails Designs',
      price: '$295',
      popular: true,
      features: [
        '10 thumbnail',
        '2 Revisions',
        '24h Delivery',
        '2 Versions',
        'Source file PSD',
        '3/5h Delivery'
      ]
    },
    {
      name: 'Beast',
      subtitle: '20 Thumbnails Designs',
      price: '$499',
      popular: false,
      features: [
        '20 thumbnail',
        '2 Revisions',
        '24h Delivery',
        '2 Versions',
        'Source file PSD',
        '3/5h Delivery'
      ]
    }
  ]

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2 className="section-title">The right price for you, whoever you are</h2>
          <p className="section-subtitle">
            Creator or faceless channel, we tailor pricing to your needs.
          </p>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.name} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Popular</div>}
              
              <div className="pricing-header-card">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-subtitle">{plan.subtitle}</p>
                <div className="plan-price">{plan.price}</div>
              </div>
              
              <div className="pricing-features">
                {plan.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-check">✓</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="pricing-cta">
                <a href="#contact" className="btn btn-primary pricing-btn">
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="enterprise-section">
          <div className="enterprise-card">
            <h3 className="enterprise-title">ENTERPRISE</h3>
            <p className="enterprise-description">
              Custom thumbnail packs tailored for agencies and faceless channels—designed to meet your high-volume needs.
            </p>
            <a href="#contact" className="btn btn-secondary">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
