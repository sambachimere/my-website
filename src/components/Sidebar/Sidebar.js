import React from 'react';
import './Sidebar.css';

const NavItem = ({ 
  href, 
  text, 
  target, 
  rel, 
  display = false,
  alignItemCenter = false
}) => {
  return (
    <div className="NavItem-block">
      <div 
        className="NavItem-inner-block"
        style={{ alignItems: alignItemCenter ? 'center' : 'flex-end' }}
      >
        <div className="Line-and-Dot">
          <div className="Vertical-line" />
          <div className="NavItem-dot" />
          { display ?
            (
              <div className="Vertical-line" />
            )
            : 
            null
          }
        </div>
        <a
          href={ href }
          target={ target }
          rel = { rel }
          onClick={() => {}}
          style={{ color: '#fff', marginBottom: -3 }}
        >
          <h3 className='Sidebar-nav-item'>
            { text }
          </h3>
        </a>
      </div>
    </div>
  )
}

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar-nav">
        <NavItem href="#about" text="About" />
        <NavItem href="#experience" text="Experience" />
        <NavItem href="#portfolio" text="Portfolio" />
        <NavItem href="#contact" text="Contact" />
        <NavItem 
          href="https://drive.google.com/file/d/1mYNFBc-QHRLX0fk11U56TK_nUTXFaqbb/view?usp=sharing"
          target="_blank" 
          rel="noopener noreferrer"
          text="Resume" 
          display={true}
          alignItemCenter={true}
        />
      </div>
      {/* 
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
    */}
    </div>
  );
};

export default Sidebar;
