import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar-nav">
        <a href="#about">
          <h3 className="Sidebar-nav-item">
            About<span className="Sidebar-period">.</span>
          </h3>
        </a>
        <a href="#experience">
          <h3 className="Sidebar-nav-item">
            Experience<span className="Sidebar-period">.</span>
          </h3>
        </a>
        <a href="#portfolio">
          <h3 className="Sidebar-nav-item">
            Portfolio<span className="Sidebar-period">.</span>
          </h3>
        </a>
        <a href="#contact">
          <h3 className="Sidebar-nav-item">
            Contact<span className="Sidebar-period">.</span>
          </h3>
        </a>
        <div className="Sidebar-resume">
          <h3 className="Sidebar-resume-text">Resume</h3>
        </div>
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
