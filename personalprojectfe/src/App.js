import React, { useState } from 'react';
import Header from './components/MainFrame/Header';
import TechnicalSkills from './components/MainFrame/TechnicalSkills';
import Projects from './components/MainFrame/Projects';
import NavigationBar from './components/MainFrame/Navbar';
import './App.css'; 
import MyJourney from './components/MainFrame/MyJourney';
import Resources from './components/MainFrame/Resources';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Header />
      <TechnicalSkills />
      <MyJourney/>
      <Projects />
      <Resources/>
    </div>
  );
}

export default App;
