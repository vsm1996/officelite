import React from 'react'

import './FooterCard.css'

const FooterCard = ({ card }) => {
  return (<div className="footer-card">
    <p className="footer-card__time">{card.time}</p>
    <p className="footer-card__metric">{card.metric}</p>
  </div>);
}

export default FooterCard;