import React from 'react';
import { IoIosArrowForward, IoMdArrowDropdown } from 'react-icons/io';

import './About.css';
import { AppContext } from '../../AppProvider';

const About = () => {
  const { themeMode } = React.useContext(AppContext);

  return (
    <div>
    <div className="About" id="about">
        <div className="About-block">
          <h1 className="About-block-title">About</h1>
          <p className="About-block-text">
            Former business developer, I started building apps in
            august 2019, and since, I've never stopped.{' '}
            <a href="#contact">
              <span className="About-block-text-message">Drop me a message</span>
            </a>{' '}
            if you want us to collaborate.
          </p>
          <p className="About-block-text">Here is what I learned so far:</p>
          <div className="About-block-competencies">
            <div className="About-block-competency-left">
              <span className="About-block-competency">
                <IoIosArrowForward className="About-block-competency-arrow" />
                <p className="About-block-competency-text">HTML & (S)CSS</p>
              </span>
              <span className="About-block-competency">
                <IoIosArrowForward className="About-block-competency-arrow" />
                <p className="About-block-competency-text">Javascript (ES6)</p>
              </span>
              <span className="About-block-competency">
                <IoIosArrowForward className="About-block-competency-arrow" />
                <p className="About-block-competency-text">Ruby On Rails</p>
              </span>
              <span className="About-block-competency">
                <IoIosArrowForward className="About-block-competency-arrow" />
                <p className="About-block-competency-text">PostgreSQL</p>
              </span>
              <span className="About-block-competency">
                <IoIosArrowForward className="About-block-competency-arrow" />
                <p className="About-block-competency-text">Bootstrap</p>
              </span>
            </div>
            <div className="About-block-competency-right">
              <span className="About-block-competency">
                <IoIosArrowForward className="About-block-competency-arrow" />
                <p className="About-block-competency-text">React</p>
              </span>
              <span className="About-block-competency">
                <IoIosArrowForward className="About-block-competency-arrow" />
                <p className="About-block-competency-text">Node.js</p>
              </span>
              <span className="About-block-competency">
                <IoIosArrowForward className="About-block-competency-arrow" />
                <p className="About-block-competency-text">MongoDB</p>
              </span>
              <span className="About-block-competency">
                <IoIosArrowForward className="About-block-competency-arrow" />
                <p className="About-block-competency-text">React Native</p>
              </span>
              <span className="About-block-competency">
                <IoIosArrowForward className="About-block-competency-arrow" />
                <p className="About-block-competency-text">Webflow</p>
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
    <div className="About-callToActions">
          <a href="#contact">
            <div className="About-contact">
              <h3 className="About-contact-text">Get in touch</h3>
            </div>
          </a>
          <a href="#portfolio">
            <div className="About-myWork">
              <div className="About-myWork-inner">
                <h3 className="About-myWork-text">See how I can help!</h3>
                {themeMode === 'darkTheme' ? (
                  <IoMdArrowDropdown className="About-myWork-icon" style={{ color: "#fff" }} />
                  ) : (
                  <IoMdArrowDropdown className="About-myWork-icon" style={{ color: "#000" }} />
                )}
              </div>
            </div>
          </a>
        </div>
    </div>
  );
};

export default About;
