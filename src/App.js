import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import HomeHero from './components/HomeHero/HomeHero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <HomeHero />
      <About />
      <Experience />
      <div className="SocialNetworks">
        <div className="SocialNetworks-icons">
          <FaLinkedinIn className="SocialNetworks-icon" />
          <FaGithub className="SocialNetworks-icon" />
        </div>
        <span className="SocialNetworks-line"></span>
      </div>
    </div>
  );
};

export default App;
