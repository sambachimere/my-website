import React from 'react';
import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import HomeHero from './components/HomeHero/HomeHero';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <HomeHero />
    </div>
  );
};

export default App;
