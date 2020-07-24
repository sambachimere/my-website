import React from 'react';

import './Portfolio.css';
import Serin from '../../assets/images/serin.png';
import SelectAcademie from '../../assets/images/select-academie.png';
import Toysly from '../../assets/images/toysly.png';
import Natours from '../../assets/images/natours.png';
import CrwnShop from '../../assets/images/crwn-shop.png';
import PortfolioItem from './PortfolioItem/PortfolioItem';

const Portfolio = () => {
  const projects = [
    {
      id: '1',
      projectImage: Serin,
      projectType: 'Website',
      projectName: "Serin's website.",
    },
    {
      id: '2',
      projectImage: SelectAcademie,
      projectType: 'Website',
      projectName: "Select Academie's website.",
    },
    {
      id: '3',
      projectImage: Toysly,
      projectType: 'Web app',
      projectName: 'Natours web app.',
    },
    {
      id: '4',
      projectImage: Natours,
      projectType: 'Web app',
      projectName: 'Natours web app.',
    },
    {
      id: '5',
      projectImage: CrwnShop,
      projectType: 'Web app',
      projectName: 'CrwnShop web app.',
    },
  ];

  return (
    <div className="Portfolio" id="portfolio">
      <h1 className="Portfolio-block-title">Portfolio</h1>
      <div className="Portfolio-container">
        {projects.map((project) => (
          <PortfolioItem
            key={project.id}
            image={project.projectImage}
            projectType={project.projectType}
            projectName={project.projectName}
          />
        ))}
      </div>
      <div className="Portfolio-dots">
        <a href="#project1" className="Portfolio-dot">
          <span />
        </a>
        <a href="#project2" className="Portfolio-dot">
          <span />
        </a>
        <a href="#project3" className="Portfolio-dot">
          <span />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
