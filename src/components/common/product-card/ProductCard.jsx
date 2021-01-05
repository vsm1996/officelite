import React from 'react';
import { Link } from 'react-router-dom';

import './ProductCard.css'

const ProductCard = ({ index, card }) => {
  return (
    <div className={index === 1 ? 'card card2-bg' : 'card card1-bg'}>
      <span className="card__tier">
        <h2>{card.tier}</h2>
      </span>

      <span className="card__feature">
        <p className="card__price">{card.price !== 0 ? `$${card.price}` : 'Free'}</p>
        <p>{card.tierFeature}</p>
      </span>

      <span className={index === 1 ? 'card__bonus card__bonus-white' : 'card__bonus card__bonus-grey'}>
        <p>{card.bonus1}</p>
        <p>{card.storage}</p>
        <p>{card.bonus2}</p>
      </span>

      <Link to="/sign-up" className={index === 1 ? 'card-btn card-btn2' : 'card-btn card-btn1'}>Try for Free</Link>
    </div>);
}

export default ProductCard;