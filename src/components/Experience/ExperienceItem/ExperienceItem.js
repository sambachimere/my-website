import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import './ExperienceItem.css';

const ExperienceItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Experience-item" onClick={handleOpen}>
      <div className="Experience-item-block">
        <h3 className="Experience-item-title">
          {props.jobTitle}{' '}
          <span className="Experience-item-yellowWord">{props.firm}</span>
        </h3>
        {isOpen ? (
          <IoIosArrowDown className="Experience-item-arrow" />
        ) : (
          <IoIosArrowForward className="Experience-item-arrow" />
        )}
      </div>
      {isOpen ? (
        <div className="Experience-item-details">
          <ul className="Experience-item-list">
            <li>Lorem ipsum dolor sit amet, consectetur adip</li>
            <li>Lorem ipsum dolor sit amet, consectetur adip</li>
            <li>Lorem ipsum dolor sit amet, consectetur adip</li>
            <li>Lorem ipsum dolor sit amet, consectetur adip</li>
          </ul>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default ExperienceItem;
