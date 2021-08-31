import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import { AppContext } from '../../AppProvider';

import { ReactComponent as SDLogoBlack } from './../../assets/logos/sd-logo-black.svg';
import { ReactComponent as SDLogoWhite } from './../../assets/logos/sd-logo-white.svg';
import MaltLogoWhite from "../../assets/logos/malt-logo-white.png"  
import MaltLogoBlack from "../../assets/logos/malt-logo-black.png"  

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

import './Header.css'

const Header = () => {
    const { themeMode } = React.useContext(AppContext);

    return (
        <div className="Header">
            <div className="Header-inner">
                <div className="Left-block">
                    {themeMode === 'darkTheme' ? (
                        <SDLogoWhite  className="Logo" />
                    ) : (
                        <SDLogoBlack className="Logo"/>
                    )}
                    <h3 className="Title">
                        Samba Diaw, <br className="Title-Return" /> Full Stack Developer
                    </h3>
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
                        {themeMode === 'darkTheme' ? (
                            <a
                                href="https://www.malt.fr/profile/sambadiaw"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ margin: '0 15px' }}
                                className="Social-Media"
                            >
                                <img 
                                    style={{ margin: '0', height: 20 }}
                                    className="Logo" 
                                    src={MaltLogoWhite} 
                                    alt=""
                                />
                            </a>
                        ) : (
                            <a
                                href="https://www.malt.fr/profile/sambadiaw"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ margin: '0 15px' }}
                                className="Social-Media"
                            >
                                <img 
                                    style={{ margin: '0', height: 20 }}
                                    className="Logo" 
                                    src={MaltLogoBlack} 
                                    alt=""
                                />
                            </a>
                        )}
                        
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