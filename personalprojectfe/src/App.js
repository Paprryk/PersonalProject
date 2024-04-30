import React, { useState } from 'react';
import Header from './components/MainFrame/Header';
import Introduction from './components/MainFrame/Intro';
import TechnicalSkills from './components/MainFrame/TechnicalSkills';
import WorkHistory from './components/MainFrame/WorkHistory';
import Projects from './components/MainFrame/Projects';
import Education from './components/MainFrame/Education';
import References from './components/MainFrame/References';
import Navbar from './components/MainFrame/Navbar';
import './App.css'; // Import global CSS file for app-wide styles

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true); // Initial theme is dark

  const toggleTheme = () => {
    setDarkTheme(!darkTheme); // Toggle between dark and light theme
  }

  return (
    <div className={darkTheme ? "dark-theme" : "light-theme"}>
      <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme} />
      <Header />
      <Introduction />
      <TechnicalSkills />
      <WorkHistory />
      <Projects />
      <Education />
      <References />
    </div>
  );
}

export default App;
