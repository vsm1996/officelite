import React from 'react'

import './FooterCard.css'

const FooterCard = ({ card, homepage }) => {
  return (<div className={homepage ? "footer-card card-type-homepage" : "footer-card card-type-signup"}>
    <p className={homepage ? "footer-card__time" : "footer-card__time"}>{card.time}</p>
    <p className="footer-card__metric">{card.metric}</p>
  </div>);
}

export default FooterCard;