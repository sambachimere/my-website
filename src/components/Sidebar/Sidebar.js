import React from 'react';

import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div>
        <h3 className="Sidebar-nav">About<span className="Sidebar-period">.</span></h3>
        <h3 className="Sidebar-nav">Experience<span className="Sidebar-period">.</span></h3>
        <h3 className="Sidebar-nav">Portfolio<span className="Sidebar-period">.</span></h3>
        <h3 className="Sidebar-nav">Contact<span className="Sidebar-period">.</span></h3>
        <div className="Sidebar-resume"><h3 className="Sidebar-resume-text">Resume</h3></div>
      </div>
    </div>
  );
};

export default Sidebar;
