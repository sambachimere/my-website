import React from 'react';

import './Portfolio.css';
import Serin from '../../assets/images/serin.png';
import SelectAcademie from '../../assets/images/select-academie.png';
import PortfolioItem from './PortfolioItem/PortfolioItem';

const Portfolio = () => {
  const projects = [
    {
      id: '1',
      projectImage: Serin,
      projectType: 'Website',
      projectName: 'Site internet Serin.',
    },
    {
      id: '2',
      projectImage: SelectAcademie,
      projectType: 'Website',
      projectName: 'Site internet Select Academie.',
    },
    {
      id: '3',
      projectImage: SelectAcademie,
      projectType: 'Website',
      projectName: 'Site internet Select Academie.',
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
