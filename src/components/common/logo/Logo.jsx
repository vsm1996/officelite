import React from 'react'
import logo from '../../../assets/shared/logo.svg'

import './Logo.css'

const Logo = () => {
  return (
    <div className="logo__container">
      <img src={logo} alt="" className="logo" />
    </div>
  );
}

export default Logo;