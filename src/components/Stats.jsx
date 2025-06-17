import React from 'react'
import './Stats.css'
import { FaRegSmileBeam, FaShippingFast, FaUsers, FaLemon } from 'react-icons/fa'

const Stats = () => {
  const stats = [
    { number: '100%', label: 'Satisfaction', icon: <FaRegSmileBeam color="#FFD700" /> },
    { number: '3h', label: 'Fast delivery', icon: <FaShippingFast color="#FFD700" /> },
    { number: '+90', label: 'Client trust us', icon: <FaUsers color="#FFD700" /> },
    { number: '+500', label: 'Assets', icon: <FaLemon color="#FFD700" /> }
  ]

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
