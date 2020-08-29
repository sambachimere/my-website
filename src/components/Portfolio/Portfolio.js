import React from 'react';

import './Portfolio.css';
import Carousel from '../Carousel/Carousel';
import Serin from '../../assets/images/serin.png';
import SelectAcademie from '../../assets/images/select-academie.png';
import Toysly from '../../assets/images/toysly.png';
import Natours from '../../assets/images/natours.png';
import CrwnShop from '../../assets/images/crwn-shop.png';

const Portfolio = () => {
  const imgs = [Serin, SelectAcademie, Toysly, Natours, CrwnShop];

  return (
    <div className="Portfolio" id="portfolio">
      <h1 className="Portfolio-block-title">Portfolio</h1>
      <Carousel imgUrls={imgs} />
      <div className="Portfolio-container"></div>
    </div>
  );
};

export default Portfolio;
