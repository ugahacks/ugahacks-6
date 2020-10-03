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
import { useMediaQuery } from 'react-responsive'

/*
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
*/


function App() {
  hotjar.initialize(1566634,6);

  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1439 });
    return isDesktop ? children : null;
  }

  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 50, maxWidth: 1438 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  }

  return(
    <div className="App">
      <Desktop>
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
      </Desktop>

      <Tablet>
        <Nav/>
        <Splash/>
        <About/>
        <Schedule/>
        <FAQ/>
        <CovidFAQ/>
        <Sponsors/>
        <Footer/>
      </Tablet>
    </div>
  );
}

export default App;





/* OLD PRODUCTION RENDER
// LAG is definitely caused by the <FAQ/> component alone.
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