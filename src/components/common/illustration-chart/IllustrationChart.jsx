import React from 'react'
import chart from '../../../assets/home/illustration-charts.svg'

import './IllustrationChart.css'

const IllustrationChart = () => {
  return (
    <div className="illu-chart__container">
      <img src={chart} alt="illustration chart" className="illu-chart" />
    </div>
  );
}

export default IllustrationChart;