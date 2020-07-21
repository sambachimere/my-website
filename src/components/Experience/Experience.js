import React from 'react';

import './Experience.css';
import ExperienceItem from './ExperienceItem/ExperienceItem';

const Experience = () => {
  return (
    <div className="Experience" id="experience">
      <h1 className="Experience-title">Experience</h1>
      <div className="Experience-block">
        <ExperienceItem jobTitle="Full Stack Web Developer" firm="Freelance" />
        <ExperienceItem jobTitle="Full Stack Web Developer" firm="Freelance" />
        <ExperienceItem jobTitle="Full Stack Web Developer" firm="Freelance" />
        <ExperienceItem jobTitle="Full Stack Web Developer" firm="Freelance" />
      </div>
    </div>
  );
};

export default Experience;
