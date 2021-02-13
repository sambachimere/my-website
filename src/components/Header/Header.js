import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <div className="Header-inner">
                <div className="Left-block">
                    <div className="Logo"></div>
                    <div className="Title-block">
                        <h3 className="Title">
                            Samba Diaw, <br className="Title-Return" /> Full Stack Developer
                        </h3>
                    </div>
                </div>      

                <div className="Right-block">
                    <div className="Social-medias">
                        <a
                            href="https://www.linkedin.com/in/samba-diaw-098039102/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Social-Media"
                        >
                            <FaLinkedinIn className="SocialNetworks-icon" />
                        </a>
                        <a
                            href="https://github.com/sambachimere"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ margin: '0 15px' }}
                            className="Social-Media"
                        >
                            <FaGithub className="SocialNetworks-icon" />
                        </a>
                        <a
                            href="mailto:sambachimerediaw@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Social-Media"
                        >
                            <MdEmail className="SocialNetworks-icon" size={27}/>
                        </a>
                        <div className="Dark-mode">
                            <ThemeSwitcher />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;