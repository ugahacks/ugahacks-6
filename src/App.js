import React from 'react';
import logo from './logo.svg';
import './App.css';
import Splash from './components/Splash/Splash.jsx';
import HallOfFame from './components/HallOfFame/HallOfFame.jsx';
import About from './components/About/About.jsx';
import FAQ from './components/FAQ/FAQ.jsx';
import CovidFAQ from './components/FAQ/CovidFAQ.jsx'
import Schedule from './components/Schedule/Schedule.jsx';



function App() {
  return (
    <div className="App">
      <Splash/>
      <HallOfFame/>
      <About/>
      <Schedule/>
      <FAQ/>
      <CovidFAQ/>
    </div>
  );
}

export default App;
