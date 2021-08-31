import React from 'react';

import './Portfolio.css';
import { Project, ProjectReverse } from './Projects/Projects';

// import Carousel from '../Carousel/Carousel';
// import Serin from '../../assets/images/serin.png';
// import Toysly from '../../assets/images/toysly.png';
// import Natours from '../../assets/images/natours.png';
// import Forkify from '../../assets/images/forkify.png';
import CrwnShop from '../../assets/images/crwn-shop.png';
import Serin from '../../assets/images/serin.png';
import Icea from '../../assets/images/icea.png';
import Natours from '../../assets/images/natours.png';
import Benga from '../../assets/images/benga.png';

import { ReactComponent as CRWNLogo } from './../../assets/logos/crown-logo.svg';
import { ReactComponent as BengaLogo } from './../../assets/logos/benga-logo.svg';
import SerinLogo from './../../assets/logos/logo-serin.png';
import IceaLogo from './../../assets/logos/logo-icea.png';
import NatoursLogo from "./../../assets/logos/logo-green-round.png"

const Portfolio = () => {
  return (
    <div className="Portfolio" id="portfolio">
      <h1 className="Portfolio-block-title">Portfolio</h1>
      <Project 
        imageUrl={CrwnShop}
        name="CRWN Shop" 
        description="CRWN Shop is an e-commerce specialized in clothing sales."
        technicalSkills="Firebase, React, Heroku."
        marginBottom={true}
        buttonTitle="LIVE APP"
        projectLink="https://crwn-s.herokuapp.com/"
      >
        <CRWNLogo className="Logo"/>
      </Project>
    
      <ProjectReverse
        imageUrl={Serin}
        name="Serin Informatique"
        description="Serin Informatique is a french informatique firm specialized in computer equipment and telephony."
        technicalSkills="Figma, Webflow."
        marginBottom={true}
        buttonTitle="WEBSITE"
        projectLink="https://serin-website.webflow.io/"
      >
        <img 
          className="Logo" 
          src={SerinLogo} 
          alt=""
        />
      </ProjectReverse>
      <div className="Project-toggle">
        <Project
          imageUrl={Serin}
          name="Serin Informatique"
          description="Serin Informatique is a french informatique firm specialized in computer equipment and telephony."
          technicalSkills="Figma, Webflow."
          marginBottom={true}
          buttonTitle="WEBSITE"
          projectLink="https://serin-website.webflow.io/"
        >
          <img 
            className="Logo" 
            src={SerinLogo} 
            alt=""
          />
        </Project>
      </div>
      <Project 
        imageUrl={Icea}
        name="I conseil expertise assurance" 
        description="I conseil expertise assurance is a french insurance broker based in Paris."
        technicalSkills="Figma, Webflow."
        marginBottom={true}
        buttonTitle="WEBSITE"
        projectLink="https://icea-website.webflow.io/"
      >
        <img 
          className="Logo" 
          src={IceaLogo} 
          alt=""
        />
      </Project>
      <ProjectReverse
        imageUrl={Natours}
        name="Natours"
        description="Natours is a web application which allows people to book excursions in nature."
        technicalSkills="MongoDB, Express, Node.js, Pug."
        marginBottom={true}
        buttonTitle="LIVE APP"
        projectLink="https://natours-samba.herokuapp.com/"
      >
        <img 
          className="Logo" 
          src={NatoursLogo} 
          alt=""
        />
      </ProjectReverse>
      <div className="Project-toggle">
        <Project
          imageUrl={Natours}
          name="Natours"
          description="Natours is a web application which allows people to book excursions in nature."
          technicalSkills="MongoDB, Express, Node.js, Pug."
          marginBottom={true}
          buttonTitle="LIVE APP"
          projectLink="https://natours-samba.herokuapp.com/"
        >
          <img 
            className="Logo" 
            src={NatoursLogo} 
            alt=""
          />
        </Project>
      </div>
      <Project 
        imageUrl={Benga}
        name="Benga" 
        description="Benga is a french startup which puts in relation students willing to work as freelance business developers on their spare time, with other startups."
        technicalSkills="Webflow."
        marginBottom={true}
        buttonTitle="WEBSITE"
        projectLink="https://hey-benga.webflow.io/"
      >
        <BengaLogo className="Logo"/>
      </Project>
      <div className="Portfolio-More-Block">
        <p className="Portfolio-project-text Portfolio-project-bottom-text" style={{ marginTop: 0 }}>
          I got more on <a href="https://github.com/sambachimere" target="_blank" rel="noopener noreferrer" style={{ color: "#e1ae00" }}>github</a> :).
        </p>
        <p className="Portfolio-project-text Portfolio-project-bottom-text" style={{ marginBottom: 0 }}>Currently working on personnal projects,</p>
        <p className="Portfolio-project-text Portfolio-project-bottom-text" style={{ margin: 0 }}>please get in touch if you are an entrepreneur who wants to learn more about them, or a tech lead who curious to audit the code.</p>
      </div>
    </div>
  )
}

export default Portfolio;
