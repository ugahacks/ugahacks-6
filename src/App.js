import React from 'react';
// import logo from './logo.svg';
import { hotjar } from 'react-hotjar';
import './App.css';
import Nav from './components/Nav/Nav.jsx'
import Splash from './components/Splash/Splash.jsx';
import HallOfFame from './components/HallOfFame/HallOfFame.jsx';
import About from './components/About/About.jsx';
import FAQ from './components/FAQ/FAQ.jsx';
// import CovidFAQ from './components/FAQ/CovidFAQ.jsx';
import Tracks from './components/Tracks/Tracks.jsx';
import Schedule from './components/Schedule/Schedule.jsx';
import Sponsors from './components/Sponsors/Sponsors.jsx';
import Footer from './components/Footer/Footer.jsx';

import ReactFullPage from '@fullpage/react-fullpage';
import { useMediaQuery } from 'react-responsive'

import { Switch, Route, Redirect } from 'react-router-dom';
import pre_event_packet_pdf from './media/pre_event_packet.pdf'


function SPA() {

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1281 });
    return isDesktop ? children : null;
  }

  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 50, maxWidth: 1280 })
    return isTablet ? children : null
  }

  return(
    <div>
      <Desktop>
        <ReactFullPage
          debug
          navigation = {true}
          navigationPosition = {'left'}
          navigationTooltips = {['', 'Hall of Fame', 'About', 'Schedule', 'FAQ', 'Tracks', 'Sponsors']}
          licenseKey = {'OPEN-SOURCE-GPLV3-LICENSE'}
          // menu = {'#navbar'}
          scrollingSpeed = {1000}
          normalScrollElements = {'.faq-question-wrapper'} // :)
          // anchors={['splash', 'about', 'schedule', 'faq', 'covidfaq', 'sponsors']}

          render={comp => (
              <ReactFullPage.Wrapper>
                <Splash/>
                <HallOfFame/>
                <About/>
                <Schedule/>
                <FAQ/>
                <Tracks/>
                <Sponsors/>
                <Footer/>
              </ReactFullPage.Wrapper>
          )}
        />
      </Desktop>

      <Tablet>
        <Nav/>
        <Splash/>
        <HallOfFame/>
        <About/>
        <Schedule/>
        <FAQ/>
        <Tracks/>
        <Sponsors/>
        <Footer/>
      </Tablet>
    </div>
  );
}

function EventPacket() {
  // this is cheeky as heck
  window.open(pre_event_packet_pdf, '_blank');
  return (
    <Redirect to='/' />
  );
}

const EventSite = () => (
  <Switch>
    <Route exact path='/' component={SPA}></Route>
    <Route exact path='/guide'>
      {EventPacket}
    </Route>
  </Switch>
);

function App() {
  hotjar.initialize(1566634,6);

  return(
    <div className="App">
      <EventSite />
    </div>
  );
}

export default App;
