import React from 'react';
import './PortfolioItem.css';

const PortfolioItem = () => {
  return (
    <div className="PortfolioItem">
      <div className="PortfolioItem-image" />
      <div className="PortfolioItem-yellowRectangle">
        <h3 className="PortfolioItem-projectType">Website</h3>
      </div>
      <h3 className="PortfolioItem-projectName">Site internet Serin.</h3>
    </div>
  );
};

export default PortfolioItem;
