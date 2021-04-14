import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <div className="SocialNetworks-second">
        <div className="SocialNetworks-icons-second">
          <a
            href="https://www.linkedin.com/in/samba-diaw-098039102/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="SocialNetworks-icon-second" />
          </a>
          <a
            href="https://github.com/sambachimere"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="SocialNetworks-icon-second" />
          </a>
          <a
            href="mailto:sambachimerediaw@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail className="SocialNetworks-icon-second" size={32}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
