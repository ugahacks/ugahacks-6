import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav.jsx'
import Splash from './components/Splash/Splash.jsx';
import HallOfFame from './components/HallOfFame/HallOfFame.jsx';
import About from './components/About/About.jsx';
import FAQ from './components/FAQ/FAQ.jsx';
import CovidFAQ from './components/FAQ/CovidFAQ.jsx'
import Schedule from './components/Schedule/Schedule.jsx';
import Sponsors from './components/Sponsors/Sponsors.jsx';


/* LAG is definitely caused by the <FAQ/> component alone. */
function App() {
  return (
    <div className="App">
      <Nav/>
      <Splash/>
      <About/>
      <Schedule/>
      <FAQ/> 
      <CovidFAQ/>
      <Sponsors/>
    </div>
  );
}

export default App;
