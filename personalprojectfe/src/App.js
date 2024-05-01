import React, { useState } from 'react';
import Header from './components/MainFrame/Header';
import TechnicalSkills from './components/MainFrame/TechnicalSkills';
import WorkHistory from './components/MainFrame/WorkHistory';
import Projects from './components/MainFrame/Projects';
import Education from './components/MainFrame/Education';
import References from './components/MainFrame/References';
import NavigationBar from './components/MainFrame/Navbar';
import './App.css'; 

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Header />
      <TechnicalSkills />
      <WorkHistory />
      <Projects />
      <Education />
      <References />
    </div>
  );
}

export default App;
