import React from 'react';

import './Portfolio.css';
import Serin from '../../assets/images/serin.png';
import SelectAcademie from '../../assets/images/select-academie.png';
import PortfolioItem from './PortfolioItem/PortfolioItem';

const Portfolio = () => {
  return (
    <div className="Portfolio" id="portfolio">
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
        <a href="#project1">
          <span />
        </a>
        <a href="#project2">
          <span />
        </a>
        <a href="#project3">
          <span />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
