import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import HomeHero from './components/HomeHero/HomeHero';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <HomeHero />
      <div className="SocialNetworks">
        <div>
          <FaLinkedinIn />
          <FaGithub />
        </div>
        <span className="SocialNetworks-line"></span>
      </div>
    </div>
  );
};

export default App;
