import React from 'react';

import './Portfolio.css';
import Serin from '../../assets/images/serin.png';
import SelectAcademie from '../../assets/images/select-academie.png';
import PortfolioItem from './PortfolioItem/PortfolioItem';

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <h1 className="Portfolio-block-title">Portfolio</h1>
      <div className="Portfolio-container">
        <PortfolioItem
          image={Serin}
          projectType="Website"
          projectName="Site internet Serin."
        />
        <PortfolioItem
          image={SelectAcademie}
          projectType="Website"
          projectName="Site internet Select Academie."
        />
        <PortfolioItem
          image={SelectAcademie}
          projectType="Website"
          projectName="Site internet Select Academie."
        />
      </div>
      <div className="Portfolio-dots">
        <span className="Portfolio-dot"></span>
        <span className="Portfolio-dot"></span>
        <span className="Portfolio-dot"></span>
      </div>
    </div>
  );
};

export default Portfolio;
