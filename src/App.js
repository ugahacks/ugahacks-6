import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav.jsx'
import Splash from './components/Splash/Splash.jsx';
// import HallOfFame from './components/HallOfFame/HallOfFame.jsx';
import About from './components/About/About.jsx';
import FAQ from './components/FAQ/FAQ.jsx';
import CovidFAQ from './components/FAQ/CovidFAQ.jsx'
import Schedule from './components/Schedule/Schedule.jsx';
import Sponsors from './components/Sponsors/Sponsors.jsx';
import Footer from './components/Footer/Footer.jsx';

import { FullPage, Slide } from 'react-full-page';
import { BrowserView, MobileView } from 'react-device-detect';


/* LAG is definitely caused by the <FAQ/> component alone. */
function App() {
  return (
    <>
    <BrowserView>
      <div className="App">
        <Nav/>
        <FullPage scrollMode="full-page">
          <Slide>
            <Splash/>
          </Slide>
          <Slide>
            <About/>
          </Slide>
          <Slide>
            <Schedule/>
          </Slide>
          <Slide>
            <FAQ/>
          </Slide>
          <Slide>
            <CovidFAQ/>
          </Slide>
          <Slide>
            <Sponsors/>
          </Slide>
          <Footer/>
        </FullPage>
      </div>
    </BrowserView>

    <MobileView>
      <div className="App">
        <Nav/>
        <Splash/>
        <About/>
        <Schedule/>
        <FAQ/>
        <CovidFAQ/>
        <Sponsors/>
        <Footer/>
      </div>
    </MobileView>
    </>
  );
}

export default App;
