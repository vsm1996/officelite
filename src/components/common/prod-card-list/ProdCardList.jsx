import React from 'react'
import ProductCard from '../product-card/ProductCard'

import './ProdCardList.css'

const ProdCardList = () => {
  const cards = [
    {
      tier: 'Basic',
      price: 0,
      tierFeature: 'Up to 5 users for free',
      bonus1: 'Basic documentation cancellation',
      storage: '2 GB storage',
      bonus2: 'Great security and support'
    },
    {
      tier: 'Pro',
      price: 9.99,
      tierFeature: 'Per user, billed monthly',
      bonus1: 'All essential integrations',
      storage: '50 GB storage',
      bonus2: 'More control and insights'
    },
    {
      tier: 'Ultimate',
      price: 19.99,
      tierFeature: 'Per user, billed monthly',
      bonus1: 'Robust work management',
      storage: '100 GB storage',
      bonus2: 'VIP support'
    },
  ]

  return (
    <div className="card-list">
      {cards.map((card, index) => <ProductCard key={index} index={index} card={card} />)}
    </div>);
}

export default ProdCardList;