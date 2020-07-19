import React from 'react';
import './PortfolioItem.css';

const PortfolioItem = (props) => {
  return (
    <div className="PortfolioItem">
      <div
        className="PortfolioItem-image"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      />
      <div className="PortfolioItem-yellowRectangle">
        <h3 className="PortfolioItem-projectType">{props.projectType}</h3>
      </div>
      <h3 className="PortfolioItem-projectName">{props.projectName}</h3>
    </div>
  );
};

export default PortfolioItem;
