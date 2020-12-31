import React from 'react'
import logo from '../../assets/shared/logo.svg'
import IllustrationChart from '../common/illustration-chart/IllustrationChart'

import './Header.css'

const Header = () => {
  return (
    <div className="header">

      <div className="logo-container">
        <img src={logo} alt="officelite logo" className="logo" />
      </div>

      <div className="header__container">

        <div className="header__content">

          <h1 className="header__content-heading">
            A simple solution to complex tasks is coming soon
           </h1>
          <p className="header__content-paragraph">
            Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new
            collaboration platform built with an intuitive interface to improve productivity.
          </p>
          <button className="header__content-btn">Get Started</button>

        </div>
        <IllustrationChart />
      </div>
    </div>
  );
}

export default Header;