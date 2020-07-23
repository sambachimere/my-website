import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import './Experience.css';
import ExperienceItem from './ExperienceItem/ExperienceItem';

const Experience = () => {
  const activities = [
    {
      jobTitle: 'Full Stack Web Developer',
      firm: 'Freelance',
      timeLine: 'September 2019 - present',
      missions: [
        <span className="Experience-item-wrapper-inner">
          <IoIosArrowForward className="Experience-item-wrapper-arrow" />
          <li>Website creation for : Serin Informatique, Select Academie</li>
        </span>,
        <span className="Experience-item-wrapper-inner">
          <IoIosArrowForward className="Experience-item-wrapper-arrow" />
          <li>Web apps : Toysly, Natours, CrownShop</li>
        </span>,
        <span className="Experience-item-wrapper-inner">
          <IoIosArrowForward className="Experience-item-wrapper-arrow" />
          <li>Mobile apps : X, Y, Z</li>
        </span>,
      ],
    },
    {
      jobTitle: 'Business Developer',
      firm: 'Freelance',
      timeLine: 'November 2018 - present',
      missions: [
        <span className="Experience-item-wrapper-inner">
          <IoIosArrowForward className="Experience-item-wrapper-arrow" />
          <li>
            Prospecting for various french Start-up :{' '}
            <a href="https://hey-co.fr/">Hey-Co, </a>{' '}
            <a href="https://avocalix.com/">Avocalix, </a>{' '}
            <a href="https://e-savetime.fr/">Savetime, </a>{' '}
            <a href="https://hey-co.fr/">Adspower</a> ...
          </li>
        </span>,
        <span className="Experience-item-wrapper-inner">
          <IoIosArrowForward className="Experience-item-wrapper-arrow" />
          <li>Booking demo meeting</li>
        </span>,
        <span className="Experience-item-wrapper-inner">
          <IoIosArrowForward className="Experience-item-wrapper-arrow" />
          <li>Leading demo meeting</li>
        </span>,
        <span className="Experience-item-wrapper-inner">
          <IoIosArrowForward className="Experience-item-wrapper-arrow" />
          <li>Customer Relation Management</li>
        </span>,
      ],
    },
    {
      jobTitle: 'Teaching assistant',
      firm: '@Humind School',
      website: 'https://www.humindschool.com/',
      timeLine: 'February 2020 - present',
      missions: [
        <span className="Experience-item-wrapper-inner">
          <IoIosArrowForward className="Experience-item-wrapper-arrow" />
          <li>Improving the content with the Lead Instructor and the CEO</li>
        </span>,
        <span className="Experience-item-wrapper-inner">
          <IoIosArrowForward className="Experience-item-wrapper-arrow" />
          <li>Assisting the Lead Instructor during the theoretical courses</li>
        </span>,
        <span className="Experience-item-wrapper-inner">
          <IoIosArrowForward className="Experience-item-wrapper-arrow" />
          <li>
            Guiding the students during the practical exercices (cold calling,
            cold emailing)
          </li>
        </span>,
      ],
    },
  ];

  return (
    <div className="Experience" id="experience">
      <h1 className="Experience-title">Experience</h1>
      <div className="Experience-block">
        {activities.map((activity) => (
          <ExperienceItem
            jobTitle={activity.jobTitle}
            firm={activity.firm}
            timeLine={activity.timeLine}
            missions={activity.missions}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
