import React from 'react';
// import logo from './logo.svg';
import { hotjar } from 'react-hotjar';
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

import ReactFullPage from '@fullpage/react-fullpage';
import { isMobile } from 'react-device-detect';


/* LAG is definitely caused by the <FAQ/> component alone.
function App() {
  return(
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
  );
}
*/

function App() {
  hotjar.initialize(1566634,6);
  if (!isMobile) {
    return(
      <div className="App">
        <ReactFullPage
          debug
          navigation = {true}
          navigationPosition = {'left'}
          navigationTooltips = {['Splash', 'About', 'Schedule', 'FAQ', 'COVID FAQ', 'Sponsors']}
          licenseKey = {'OPEN-SOURCE-GPLV3-LICENSE'}
          // menu = {'#navbar'}
          scrollingSpeed = {1000}
          normalScrollElements = {'.faq-question-wrapper'} // :)
          // anchors={['splash', 'about', 'schedule', 'faq', 'covidfaq', 'sponsors']}

          render={comp => (
              <ReactFullPage.Wrapper>
                <Splash/>
                <About/>
                <Schedule/>
                <FAQ/>
                <CovidFAQ/>
                <Sponsors/>
                <Footer/>
              </ReactFullPage.Wrapper>
          )}
        />
      </div>
    );
  } else {
    return(
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
    );
  }
}

export default App;

/* 
if (!isMobile) {
    return (
      <>
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
      </>
    );
  } else {
    return(
      <>
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
      </>
    );  
  }
*/
