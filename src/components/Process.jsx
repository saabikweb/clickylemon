import React from 'react'
import './Process.css'

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Say Hello',
      description: 'You simply reach out to us via email with your request — quick, easy, friendly.',
      icon: '👋'
    },
    {
      number: '02',
      title: 'Discuss Your Project',
      description: 'We discuss your video topic, style preferences, pricing details, and delivery timeline together.',
      icon: '💬'
    },
    {
      number: '03',
      title: 'Confirm & Pay',
      description: 'Once everything\'s confirmed, you securely send the payment to officially get started.',
      icon: '💳'
    },
    {
      number: '04',
      title: 'We Start Designing',
      description: 'We design a bold, high-impact thumbnail that grabs attention and drives results fast.',
      icon: '🎨'
    },
    {
      number: '05',
      title: 'Revisions (If Needed)',
      description: 'Need small tweaks? We\'ll adjust the thumbnail quickly until you\'re fully satisfied.',
      icon: '✨'
    }
  ]

  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process-header">
          <h2 className="section-title">How We Do The Work</h2>
          <p className="section-subtitle">
            We follow a proven, transparent process that delivers measurable, reliable results — every time.
          </p>
        </div>
        
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={step.number} className="process-step">
              <div className="step-icon">
                <span className="step-emoji">{step.icon}</span>
                <span className="step-number">{step.number}</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
