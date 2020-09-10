import React, { useState } from 'react';
import './Nav.css';
// import { motion } from "framer-motion";
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import useDocumentScrollThrottled from './useDocumentScrollThrottled';


const CustomizedTooltip = withStyles({
  tooltip: {
    fontFamily: 'Poppins',
    backgroundColor: '#223c9d',
    color: 'white',
    fontSize: 14,
  },
  arrow: {
    color: '#223c9d',
  }
})(Tooltip);

const InvertedTooltip = withStyles({
  tooltip: {
    fontFamily: 'Poppins',
    backgroundColor: 'white',
    color: '#223c9d',
    fontSize: 14,
    fontWeight: 600,
  },
  arrow: {
    color: 'white',
  }
})(Tooltip);

function Nav(props) {

  const [invertStyle, setInvertStyle] = useState(true);
  const [invertToolTipStyle, setInvertToolTipStyle] = useState(true);
  const [current, setCurrent] = useState({0: 1, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0});


  // const MINIMUM_SCROLL = 0;
  // const TIMEOUT_DELAY = 400;

  /* Needs to be re-tooled for all views in our SPA. */
  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const scrollTop = currentScrollTop;
    var halfHeight = window.innerHeight / 2;
    // console.log(scrollTop);

    function in_splash(scroll) { // 0 <= s <= 500
      return scroll >= 0 * halfHeight && scroll <= 1 * halfHeight;
    }

    function in_about(scroll) { // 500 <= s <= 1500;
      return scroll >= 1 * halfHeight && scroll <= 3 * halfHeight;
    }

    function in_schedule(scroll) { // 1500 <= scroll <= 2500;
      return scroll >= 3 * halfHeight && scroll <= 5 * halfHeight; 
    }

    function in_faq(scroll) { // 2500 <= scroll <= 3500
      return scroll >= 5 * halfHeight && scroll <= 7 * halfHeight; 
    }

    function in_covid(scroll) { // 3500 <= s <= 4500
      return scroll >= 7 * halfHeight && scroll <= 9 * halfHeight;
    }

    function in_sponser(scroll) {  // 4500 <= scroll <= 5500;
      return scroll >= 9 * halfHeight && scroll <= 11 * halfHeight;
    }

    var timeToInvert = in_splash(scrollTop) || in_schedule(scrollTop) || in_sponser(scrollTop);

    /* Regular setters. */
    setInvertStyle(timeToInvert);
    setInvertToolTipStyle(timeToInvert);
    setCurrent({
      0: in_splash(scrollTop),
      1: in_about(scrollTop),
      2: in_schedule(scrollTop),
      3: in_faq(scrollTop),
      4: in_covid(scrollTop),
      5: in_sponser(scrollTop)
    });

    /* Delayed setter. */
    /*
    setTimeout(() => {
      setGoDark(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
    */

  });
  
  /* These will be used to set dynamic classNames */
  const style = invertStyle ? 'dotstyle-fillin-inverted' : 'dotstyle-fillin';
  const invertToolTip = invertToolTipStyle;
  // const current = [0,0,0,0,0,0];

  /* Stand-ins 'lightStyle' and 'darkStyle' will reference styles in Nav.css */
  return (
    <BrowserView>
      <nav>
        <div className={`dotstyle ${style}`}>
          <div>
            
            <div>
              {invertToolTip
                ? <InvertedTooltip   title="Home" placement="right" arrow><a href="#splash" className={current[0] ? 'current' : ''}></a></InvertedTooltip>
                : <CustomizedTooltip title="Home" placement="right" arrow><a href="#splash" className={current[0] ? 'current' : ''}>Home</a></CustomizedTooltip>
              }
            </div>

            <div>
              {invertToolTip
                ? <InvertedTooltip   title="About" placement="right" arrow><a href="#about" className={current[1] ? 'current' : ''}></a></InvertedTooltip>
                : <CustomizedTooltip title="About" placement="right" arrow><a href="#about" className={current[1] ? 'current' : ''}>About</a></CustomizedTooltip>
              }
            </div>

            <div>
              {invertToolTip
                ? <InvertedTooltip   title="Schedule" placement="right" arrow><a href="#schedule" className={current[2] ? 'current' : ''}></a></InvertedTooltip>
                : <CustomizedTooltip title="Schedule" placement="right" arrow><a href="#schedule" className={current[2] ? 'current' : ''}>Schedule</a></CustomizedTooltip>
              }
            </div>

            <div>
              {invertToolTip
                ? <InvertedTooltip   title="FAQ" placement="right" arrow><a href="#faq" className={current[3] ? 'current' : ''}></a></InvertedTooltip>
                : <CustomizedTooltip title="FAQ" placement="right" arrow><a href="#faq" className={current[3] ? 'current' : ''}>FAQ</a></CustomizedTooltip>
              }
            </div>

            <div>
              {invertToolTip
                ? <InvertedTooltip   title="Covid FAQ" placement="right" arrow><a href="#covidfaq" className={current[4] ? 'current' : ''}></a></InvertedTooltip>
                : <CustomizedTooltip title="Covid FAQ" placement="right" arrow><a href="#covidfaq" className={current[4] ? 'current' : ''}>Covid FAQ</a></CustomizedTooltip>
              }
            </div>

            <div>
              {invertToolTip
                ? <InvertedTooltip   title="Sponsors" placement="right" arrow><a href="#sponsors" className={current[5] ? 'current' : ''}></a></InvertedTooltip>
                : <CustomizedTooltip title="Sponsors" placement="right" arrow><a href="#sponsors" className={current[5] ? 'current' : ''}>Sponsors</a></CustomizedTooltip>
              }
            </div>

          </div>
        </div>
      </nav>
    </BrowserView>
  );
}

export default Nav;
