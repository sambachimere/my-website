import React, { useState, useEffect, useRef } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [aboutIsActive, setAboutIsActive] = useState(false);
  const [experienceIsActive, setExperienceIsActive] = useState(false);
  const [portfolioIsActive, setPortfolioIsActive] = useState(false);
  const [contactIsActive, setContactIsActive] = useState(false);

  const aboutRef = useRef();
  console.log(aboutRef);
  const experienceRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const showAbout = window.scrollY > 602 && window.scrollY < 1574;
      const showExperience = window.scrollY > 1574 && window.scrollY < 2011;
      const showPortfolio = window.scrollY > 2011 && window.scrollY < 2513;
      const showContact = window.scrollY > 2513;
      console.log(window.scrollY);
      if (aboutRef.current !== showAbout) {
        setAboutIsActive(showAbout);
      } else {
        setAboutIsActive(false);
      }
      if (experienceRef.current !== showExperience) {
        setExperienceIsActive(showExperience);
      } else {
        setExperienceIsActive(false);
      }
      if (portfolioRef.current !== showPortfolio) {
        setPortfolioIsActive(showPortfolio);
      } else {
        setPortfolioIsActive(false);
      }
      if (contactRef.current !== showContact) {
        setContactIsActive(showContact);
      } else {
        setContactIsActive(false);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAboutActivation = () => {
    setExperienceIsActive(false);
    setPortfolioIsActive(false);
    setContactIsActive(false);
    setAboutIsActive(true);
  };
  const handleExperienceActivation = () => {
    setAboutIsActive(false);
    setPortfolioIsActive(false);
    setContactIsActive(false);
    setExperienceIsActive(true);
  };
  const handlePortfolioActivation = () => {
    setAboutIsActive(false);
    setExperienceIsActive(false);
    setContactIsActive(false);
    setPortfolioIsActive(true);
  };
  const handleContactActivation = () => {
    setAboutIsActive(false);
    setExperienceIsActive(false);
    setPortfolioIsActive(false);
    setContactIsActive(true);
  };
  return (
    <div className="Sidebar">
      <div className="Sidebar-nav">
        <a
          href="#about"
          onClick={handleAboutActivation}
          style={{ color: aboutIsActive ? '#fff' : '#E1AE00' }}
        >
          <h3
            className={
              aboutIsActive ? 'Sidebar-nav-item active' : 'Sidebar-nav-item'
            }
          >
            About<span className="Sidebar-period">.</span>
          </h3>
        </a>
        <a
          href="#experience"
          onClick={handleExperienceActivation}
          style={{ color: experienceIsActive ? '#fff' : '#E1AE00' }}
        >
          <h3
            className={
              experienceIsActive
                ? 'Sidebar-nav-item active'
                : 'Sidebar-nav-item'
            }
          >
            Experience<span className="Sidebar-period">.</span>
          </h3>
        </a>
        <a
          href="#portfolio"
          onClick={handlePortfolioActivation}
          style={{ color: portfolioIsActive ? '#fff' : '#E1AE00' }}
        >
          <h3
            className={
              portfolioIsActive ? 'Sidebar-nav-item active' : 'Sidebar-nav-item'
            }
          >
            Portfolio<span className="Sidebar-period">.</span>
          </h3>
        </a>
        <a
          href="#contact"
          onClick={handleContactActivation}
          style={{ color: contactIsActive ? '#fff' : '#E1AE00' }}
        >
          <h3
            className={
              contactIsActive ? 'Sidebar-nav-item active' : 'Sidebar-nav-item'
            }
          >
            Contact<span className="Sidebar-period">.</span>
          </h3>
        </a>
        <a
          href="https://drive.google.com/file/d/1mYNFBc-QHRLX0fk11U56TK_nUTXFaqbb/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="Sidebar-resume">
            <h3 className="Sidebar-resume-text">Resume</h3>
          </div>
        </a>
      </div>
      <div className="SocialNetworks">
        <div className="SocialNetworks-icons">
          <a
            href="https://www.linkedin.com/in/samba-diaw-098039102/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="SocialNetworks-icon" />
          </a>
          <a
            href="https://github.com/sambachimere"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="SocialNetworks-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
