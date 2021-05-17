import React from 'react';

import './Portfolio.css';

// import Carousel from '../Carousel/Carousel';
// import Serin from '../../assets/images/serin.png';
// import Toysly from '../../assets/images/toysly.png';
// import Natours from '../../assets/images/natours.png';
// import Forkify from '../../assets/images/forkify.png';
import CrwnShop from '../../assets/images/crwn-shop.png';

import { ReactComponent as CRWNLogo } from './../../assets/logos/crown-logo.svg';

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
          <a href="https://crwn-s.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <p className="Portfolio-project-button-text">{buttonTitle}</p>
          </a>
        </div>
      </div>
    </div>
  )
}

// const Project2 = ({ 
//   children, 
//   imageUrl, 
//   name, 
//   description, 
//   marginBottom,
//   buttonTitle 
// }) => {
//   return (
//     <div className="Portfolio-project-block Portfolio-project-block-2">
//       <div 
//         className="Portfolio-project-description-block-2"
//         style={{ marginRight: '30px' }}
//       >
//         <div className="Portfolio-project-title-block">
//           { children }
//           <div className="Portfolio-project-inner">
//             <h3 className="Portfolio-project-title">{name}</h3>
//           </div>
//         </div>
//         <p className="Portfolio-project-description">{description}</p>
        
//         <div className="Portfolio-project-button">
//           <p className="Portfolio-project-button-text">{buttonTitle}</p>
//         </div>
//       </div>

//       <div 
//         className="Portfolio-project-image-block"
//         style={{ marginBottom: marginBottom ? "100px" : "0px" }}
//       >
//         <img 
//           className="Portfolio-project-image" 
//           src={imageUrl} 
//           alt=""
//         />
//       </div>
//     </div>
//   )
// }

const Portfolio = () => {
  return (
    <div className="Portfolio" id="portfolio">
      <h1 className="Portfolio-block-title">Portfolio</h1>
      <Project1 
        imageUrl={CrwnShop}
        name="CRWN Shop" 
        description="An e-commerce web application."
        marginBottom={true}
        buttonTitle="LIVE APP"
      >
        <CRWNLogo className="Logo"/>
      </Project1>
    </div>
  )
}

export default Portfolio;
