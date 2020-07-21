import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import './About.css';

const About = () => {
  return (
    <div className="About" id="about">
      <div className="About-block">
        <h1 className="About-block-title">About</h1>
        <p className="About-block-text">
          After a Master in Management from Neoma Business School, knowing so
          little about anything, I got foot in the door of IT as a Consultant
          because it was so unknown that it felt enthralling.
        </p>
        <p className="About-block-text">
          I became passionate about SaaS products after a global CRM
          (Salesforce) deployment program in Health Industry.
        </p>
        <p className="About-block-text">
          So I joined MonDocteur.fr, and later Doctolib to work on amazing
          products helping and empowering people as an Onboarding Manager, Saas
          Integrator and Trainer.
        </p>
        <p className="About-block-text">Here is what I learned so far:</p>
        <div className="About-block-competencies">
          <div className="About-block-competency-left">
            <span className="About-block-competency">
              <IoIosArrowForward className="About-block-competency-arrow" />
              <p className="About-block-competency-text">Ruby On Rails</p>
            </span>
            <span className="About-block-competency">
              <IoIosArrowForward className="About-block-competency-arrow" />
              <p className="About-block-competency-text">Javascript (ES6)</p>
            </span>
            <span className="About-block-competency">
              <IoIosArrowForward className="About-block-competency-arrow" />
              <p className="About-block-competency-text">React</p>
            </span>
            <span className="About-block-competency">
              <IoIosArrowForward className="About-block-competency-arrow" />
              <p className="About-block-competency-text">PostgreSQL</p>
            </span>
          </div>
          <div className="About-block-competency-right">
            <span className="About-block-competency">
              <IoIosArrowForward className="About-block-competency-arrow" />
              <p className="About-block-competency-text">HTML & (S)CSS</p>
            </span>
            <span className="About-block-competency">
              <IoIosArrowForward className="About-block-competency-arrow" />
              <p className="About-block-competency-text">Bootstrap</p>
            </span>
            <span className="About-block-competency">
              <IoIosArrowForward className="About-block-competency-arrow" />
              <p className="About-block-competency-text">Github</p>
            </span>
            <span className="About-block-competency">
              <IoIosArrowForward className="About-block-competency-arrow" />
              <p className="About-block-competency-text">Wordpress</p>
            </span>
          </div>
        </div>
      </div>
      <div className="About-image">
        <div className="About-image-wrapper">
          <div className="About-image-block" />
          <div className="About-image-yellowForm"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
