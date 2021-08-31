import React from 'react';

import './../Portfolio.css';

export const Project = ({ 
  imageUrl, 
  children, 
  name, 
  description, 
  technicalSkills,
  marginBottom,
  buttonTitle,
  projectLink,
  noMarginBottom
}) => {
  return (
    <div 
      className="Portfolio-project-block" 
      style={{ marginBottom: noMarginBottom ? 0 : 100 }}
    >
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
        <p className="Portfolio-project-text">{description}</p>
        <p className="Portfolio-project-text">
          <span style={{ color: "#e1ae00", fontWeight: "normal" }}>
            Technical skills used : {" "}
          </span>
          {technicalSkills}
        </p>
        
        <div 
          className="Portfolio-project-button" 
          // style={{ marginBottom: marginBottom ? "100px" : "0px" }}
        >
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <p className="Portfolio-project-button-text">{buttonTitle}</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export const ProjectReverse = ({ 
  children, 
  imageUrl, 
  name, 
  description,
  technicalSkills, 
  marginBottom,
  buttonTitle,
  projectLink,
}) => {
  return (
    <div className="Portfolio-project-block Portfolio-project-block-2">
      <div 
        className="Portfolio-project-description-block-2"
        style={{ marginRight: '55px' }}
      >
        <div className="Portfolio-project-title-block">
          { children }
          <div className="Portfolio-project-inner">
            <h3 className="Portfolio-project-title">{name}</h3>
          </div>
        </div>
        <p className="Portfolio-project-text">{description}</p>
        <p className="Portfolio-project-text">
          <span style={{ color: "#e1ae00", fontWeight: "normal" }}>
            Technical skills used : {" "}
          </span>
          {technicalSkills}
        </p>
        
        <div className="Portfolio-project-button">
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <p className="Portfolio-project-button-text">{buttonTitle}</p>
          </a>
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