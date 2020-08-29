import React, { useContext } from 'react';
import { IoMdSunny } from 'react-icons/io';
import { IoMdMoon } from 'react-icons/io';

import { AppContext } from '../../AppProvider';

import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const { toggleTheme, themeMode } = useContext(AppContext);
  const handleThemeChange = () => {
    toggleTheme();
  };
  return (
    <div className="ThemeSwitcher">
      {themeMode === 'darkTheme' ? (
        <IoMdSunny
          onClick={handleThemeChange}
          style={{ color: 'white' }}
          className="ThemeSwitcher-icon"
        />
      ) : (
        <IoMdMoon
          onClick={handleThemeChange}
          style={{ color: 'black' }}
          className="ThemeSwitcher-icon"
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
