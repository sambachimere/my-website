import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import HomeHero from './components/HomeHero/HomeHero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <HomeHero />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <div className="SocialNetworks-second">
        <div className="SocialNetworks-icons-second">
          <FaLinkedinIn className="SocialNetworks-icon-second" />
          <FaGithub className="SocialNetworks-icon-second" />
        </div>
      </div>
    </div>
  );
};

export default App;
