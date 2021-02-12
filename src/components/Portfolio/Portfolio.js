import React from 'react';

import './Portfolio.css';

// import Carousel from '../Carousel/Carousel';
// import Serin from '../../assets/images/serin.png';
// import SelectAcademie from '../../assets/images/select-academie.png';
// import Toysly from '../../assets/images/toysly.png';
import CrwnShop from '../../assets/images/crwn-shop.png';
import Natours from '../../assets/images/natours.png';
import Forkify from '../../assets/images/forkify.png';

import { ReactComponent as CRWNLogo } from './../../assets/images/crown-logo.svg';
import NatoursLogo from './../../assets/images/natours-logo.png';
import ForkifyLogo from './../../assets/images/forkify-logo.png';

const Project1 = ({ 
  imageUrl, 
  children, 
  name, 
  description, 
  marginBottom,
  buttonTitle 
}) => {
  return (
    <div className="Portfolio-project-block">
      <div className="Portfolio-project-image-block">
        <img 
          className="Portfolio-project-image" 
          src={imageUrl} 
          alt=""
        />
      </div>
      <div 
        className="Portfolio-project-description-block-1"
      >
        <div className="Portfolio-project-title-block">
          { children }
          <div className="Portfolio-project-inner">
            <h3 className="Portfolio-project-title">{name}</h3>
          </div>
        </div>
        <p className="Portfolio-project-description">{description}</p>
        
        <div 
          className="Portfolio-project-button" 
          style={{ marginBottom: marginBottom ? "100px" : "0px" }}
        >
          <p className="Portfolio-project-button-text">{buttonTitle}</p>
        </div>
      </div>
    </div>
  )
}

const Project2 = ({ 
  children, 
  imageUrl, 
  name, 
  description, 
  marginBottom,
  buttonTitle 
}) => {
  return (
    <div className="Portfolio-project-block Portfolio-project-block-2">
      <div 
        className="Portfolio-project-description-block-2"
        style={{ marginRight: '30px' }}
      >
        <div className="Portfolio-project-title-block">
          { children }
          <div className="Portfolio-project-inner">
            <h3 className="Portfolio-project-title">{name}</h3>
          </div>
        </div>
        <p className="Portfolio-project-description">{description}</p>
        
        <div className="Portfolio-project-button">
          <p className="Portfolio-project-button-text">{buttonTitle}</p>
        </div>
      </div>

      <div 
        className="Portfolio-project-image-block"
        style={{ marginBottom: marginBottom ? "100px" : "0px" }}
      >
        <img 
          className="Portfolio-project-image" 
          src={imageUrl} 
          alt=""
        />
      </div>
    </div>
  )
}

const Portfolio = () => {
  return (
    <div className="Portfolio" id="portfolio">
      <h1 className="Portfolio-block-title">Portfolio</h1>
      <Project1 
        imageUrl={CrwnShop}
        name="CRWN Shop" 
        description="An e-commerce web application."
        marginBottom={true}
        buttonTitle="VOIR LE SITE"
      >
        <CRWNLogo className="Logo"/>
      </Project1>

      <Project2 
        imageUrl={Natours}
        name="Natours" 
        description="Lorem Ipsum"
        marginBottom={true}
        buttonTitle="VOIR LE SITE"
      >
        <img 
          src={ NatoursLogo } 
          style={{ width: '72px' }} 
          className="Logo"
          alt="" 
        />
      </Project2>

      <div className="Project-Natours">
        <Project1
          imageUrl={Natours}
          name="Natours" 
          description="Lorem Ipsum"
          marginBottom={true}
          buttonTitle="VOIR LE SITE"
        >
          <CRWNLogo className="Logo"/>
        </Project1>
      </div>

      <Project1 
        imageUrl={Forkify}
        name="Forkify" 
        description="Lorem Ipsum"
        buttonTitle="VOIR LE SITE"
      >
        <img 
          src={ ForkifyLogo } 
          style={{ width: '50px' }} 
          className="Logo"
          alt=""
        />
      </Project1>
    </div>
  )
}

export default Portfolio;
