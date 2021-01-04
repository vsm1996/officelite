import React from 'react'
import FooterCard from '../../components/common/footer-card/FooterCard';

import './SignUpPage.css'
import Header from '../../components/header/Header';
import Form from '../../components/common/form/Form';

const SignUpPage = () => {

  const headerContent = {
    heading: 'Work smarter. Save time.',
    paragraph: 'Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.',
    homepage: false
  }

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
    <div className="signup">

      <div className="signup__container">
        <div className="signup__header">
          <Header headerContent={headerContent} />
          {/* dynamically render somhehow pls */}

          <div className="signup-timer__content">
            <h3> COMING <span className="timer-span"> 4 NOV 2020 </span> </h3>
            <div className="signup__card-list">
              {cards.map((card, index) => <FooterCard key={index} card={card} homepage={headerContent.homepage} />)}
            </div>
          </div>

        </div>
        <div className="signup__form">
          <Form />
        </div>
      </div>
    </div>);
}

export default SignUpPage;