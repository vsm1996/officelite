import React from 'react'
import Header from '../../components/header/Header'
import ProdCardList from '../../components/common/prod-card-list/ProdCardList'
import Footer from '../../components/footer/Footer'

import './HomePage.css'

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__container">
        <Header />
        <ProdCardList />
      </div>
      <Footer />
    </div>);
}

export default HomePage;