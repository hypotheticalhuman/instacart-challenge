import React from 'react'
import './Positions.css'

const positions = [
  {
    title: 'Shopper',
    subtitle: 'Part-time employee',
    description: 'Shop for grocery orders in local stores.',
    bullets: [
      'Shopping only',
      'No vehicle required',
      'Flexible schedule',
      'Work up to 29 hrs/wk'
    ]
  },
  {
    title: 'Cashier',
    subtitle: 'Part-time employee',
    description: 'Work the cash register to check out orders.',
    bullets: [
      'Check-out only',
      'No vehicle required',
      'Flexible schedule',
      'Work up to 29 hrs/wk'
    ]
  },
  {
    title: 'Driver',
    subtitle: 'Independent contractor',
    description: 'Deliver groceries from local stores to customers.',
    bullets: [
      'Delivery only',
      'Vehicle required',
      'Flexible schedule',
      'Work unlimited hours'
    ]
  },
  {
    title: 'Driver + Shopper',
    subtitle: 'Independent contractor',
    description: 'Shop for groceries and deliver them to customers.',
    bullets: [
      'Delivery and shopping',
      'Vehicle required',
      'Flexible schedule',
      'Work unlimited hours'
    ]
  }
]

const Positions = () => (
  <div>
    <h2>Positions at Instacart</h2>
    <div className='positions'>
      {
        positions.map((position, i) => (
          <div className='block position-block' key={i}>
            <h4 className='green' style={{ margin: 0 }}>
              {position.title}
            </h4>
            <h6 className='orange' style={{ margin: 0 }}>
              {position.subtitle.toUpperCase()}
            </h6>
            <p style={{ margin: '8px 0 16px' }}>
              {position.description}
            </p>
            <ul style={{ marginBottom: 0, fontSize: 16 }}>
              {position.bullets.map((bullet, i) =>
                <li key={i}>{bullet}</li>
              )}
            </ul>
          </div>
        ))
      }
    </div>
  </div>
)

export default Positions
