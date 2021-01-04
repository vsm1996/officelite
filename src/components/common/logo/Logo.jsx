import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/shared/logo.svg'

import './Logo.css'

const Logo = () => {
  return (
    <div className="logo__container">
      <Link to='/'>
        <img src={logo} alt="officelite logo" className="logo" />
      </Link>
    </div>
  );
}

export default Logo;