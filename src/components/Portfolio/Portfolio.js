import React, { useRef } from 'react';

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
      website: 'https://serin-website.webflow.io/',
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

  let stream = useRef();
  let myProjects = useRef();
  let prev = useRef();
  let next = useRef();

  const handlePrevClick = () => {
    stream.insertBefore(myProjects[myProjects.length - 1], myProjects[0]);
  };

  const handleNextClick = () => {
    stream.appendChild(myProjects[0]);
  };

  return (
    <div className="Portfolio" id="portfolio">
      <h1 className="Portfolio-block-title">Portfolio</h1>
      <div className="Portfolio-container">
        <div ref={prev} class="Portfolio-prev" onClick={handlePrevClick}></div>
        <div ref={next} class="Portfolio-next" onClick={handleNextClick}></div>
        <div ref={stream} className="Portfolio-stream">
          <div ref={myProjects} className="Portfolio-project bg-1"></div>
          <div ref={myProjects} className="Portfolio-project bg-2"></div>
          <div ref={myProjects} className="Portfolio-project bg-3"></div>
          <div ref={myProjects} className="Portfolio-project bg-4"></div>
          <div ref={myProjects} className="Portfolio-project bg-5"></div>
        </div>
      </div>
      {/* <div className="Portfolio-container">
        <div class="Portfolio-prev"></div>
        <div class="Portfolio-next"></div>
        {projects.map((project) => (
          <a
            href={project.website ? project.website : '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PortfolioItem
              key={project.id}
              image={project.projectImage}
              projectType={project.projectType}
              projectName={project.projectName}
              externalLink={project.website}
            />
          </a>
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
        </div> */}
    </div>
  );
};

export default Portfolio;
