import React from 'react';
import { Link } from 'react-router-dom';
import FooterCard from '../common/footer-card/FooterCard';

import './Footer.css'
const Footer = ({ homepage }) => {
  const cards = [
    {
      time: "47",
      metric: 'days'
    },
    {
      time: "07",
      metric: 'hours'
    },
    {
      time: "56",
      metric: 'min'
    },
    {
      time: "14",
      metric: 'sec'
    },
  ]
  return (
    <div className="footer">
      <div className="footer__content">
        <h3> <span>COMING</span> 4 NOV 2020</h3>
        <div className="footer__content-cards">
          {cards.map((card, index) => <FooterCard key={index} card={card} homepage={homepage} />)}
        </div>
      </div>
      <Link to='/sign-up' className="footer-btn">Get Started</Link>
    </div>);
}

export default Footer;