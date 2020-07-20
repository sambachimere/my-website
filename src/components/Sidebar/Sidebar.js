import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar-nav">
        <h3 className="Sidebar-nav-item">
          About<span className="Sidebar-period">.</span>
        </h3>
        <h3 className="Sidebar-nav-item">
          Experience<span className="Sidebar-period">.</span>
        </h3>
        <h3 className="Sidebar-nav-item">
          Portfolio<span className="Sidebar-period">.</span>
        </h3>
        <h3 className="Sidebar-nav-item">
          Contact<span className="Sidebar-period">.</span>
        </h3>
        <div className="Sidebar-resume">
          <h3 className="Sidebar-resume-text">Resume</h3>
        </div>
      </div>
      <div className="SocialNetworks">
        <div className="SocialNetworks-icons">
          <FaLinkedinIn className="SocialNetworks-icon" />
          <FaGithub className="SocialNetworks-icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
