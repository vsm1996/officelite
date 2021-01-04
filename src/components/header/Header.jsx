import React from 'react'
import IllustrationChart from '../common/illustration-chart/IllustrationChart'
import Logo from '../common/logo/Logo'

import './Header.css'

const Header = ({ headerContent }) => {
  return (
    <div className="header">

      <div className={headerContent.homepage ? "" : 'logo-container'}>
        <Logo />
      </div>

      <div className="header__container">

        <div className="header__content">

          <h1 className="header__content-heading">
            {headerContent.heading}
          </h1>
          <p className="header__content-paragraph">
            {headerContent.paragraph}
          </p>
          {headerContent.homepage ? (<button className="header__content-btn">Get Started</button>) : null}

        </div>
        {headerContent.homepage ? (<IllustrationChart />) : null}
      </div>
    </div>
  );
}

export default Header;