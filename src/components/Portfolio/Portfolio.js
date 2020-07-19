import React from 'react';

import './Portfolio.css';
import PortfolioItem from './PortfolioItem/PortfolioItem';

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <h1 className="Portfolio-block-title">Portfolio</h1>
      <div className="Portfolio-container">
        <PortfolioItem />
        <PortfolioItem />
      </div>
    </div>
  );
};

export default Portfolio;
