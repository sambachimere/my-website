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
          <a
            href={props.firm ? props.link : '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="Experience-item-yellowWord">{props.firm}</span>
          </a>
        </h3>
        {isOpen ? (
          <IoIosArrowDown className="Experience-item-arrow" />
        ) : (
          <IoIosArrowForward className="Experience-item-arrow" />
        )}
      </div>
      {isOpen ? (
        <div className="Experience-item-details">
          <h3 className="Experience-item-timeline">{props.timeLine}</h3>
          <ul className="Experience-item-wrapper">{props.missions}</ul>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default ExperienceItem;
