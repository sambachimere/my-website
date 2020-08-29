import React from 'react';
import './HomeHero.css';

const HomeHero = () => {
  return (
    <div className="HomeHero">
      <h3 className="HomeHero-hello">Hello, I am</h3>
      <h1 className="HomeHero-myName">Samba Diaw,</h1>
      <h1 className="HomeHero-iAm">Full Stack Web Developer.</h1>
      <p className="HomeHero-quickPres">Former SaaS integrator from Project Management to End-user Training and Change Management, I know what makes great products, valuable to both users and businesses.</p>
      <div className="HomeHero-callToActions">
        <div className="HomeHero-contact"><h3 className="HomeHero-contact-text">Resume</h3></div>
        <div className="HomeHero-myWork"><h3 className="HomeHero-myWork-text">See how I can help!</h3></div>
      </div>
    </div>
  )
}

export default HomeHero;
