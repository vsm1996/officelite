import React from 'react'
import Header from '../../components/header/Header'
import ProdCardList from '../../components/common/prod-card-list/ProdCardList'
import Footer from '../../components/footer/Footer'

import './HomePage.css'

const HomePage = () => {
  const headerContent = {
    heading: 'A simple solution to complex tasks is coming soon',
    paragraph: 'Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity.',
    homepage: true
  }
  return (
    <div className="homepage">
      <div className="homepage__container">
        <Header headerContent={headerContent} />
        <ProdCardList />
      </div>
      <Footer homepage={headerContent.homepage} />
    </div>);
}

export default HomePage;