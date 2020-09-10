import React, { useState } from 'react';
import './Nav.css';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { isBrowser } from "react-device-detect";
import useDocumentScrollThrottled from './useDocumentScrollThrottled';

/* MATERIAL UI STYLING */
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
/* MATERIAL UI STYLING */

function Nav(props) {

  /* Hooks and States. */
  const [invertStyle, setInvertStyle] = useState(true);
  const [invertToolTipStyle, setInvertToolTipStyle] = useState(true);
  const [current, setCurrent] = useState({0: 1, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0});


  useDocumentScrollThrottled(callbackData => {
    // eslint-disable-next-line
    const { previousScrollTop, currentScrollTop } = callbackData;
    const scrollTop = currentScrollTop;
    var halfHeight = window.innerHeight / 2;


    /* Browser only section discipline. */
    function in_splash(scroll) { // 0 <= s <= 500
      return scroll >= 0 * halfHeight && scroll < 1 * halfHeight;
    }

    function in_about(scroll) { // 500 <= s <= 1500;
      return scroll >= 1 * halfHeight && scroll < 3 * halfHeight;
    }

    function in_schedule(scroll) { // 1500 <= scroll <= 2500;
      return scroll >= 3 * halfHeight && scroll < 5 * halfHeight; 
    }

    function in_faq(scroll) { // 2500 <= scroll <= 3500
      return scroll >= 5 * halfHeight && scroll < 7 * halfHeight; 
    }

    function in_covid(scroll) { // 3500 <= s <= 4500
      return scroll >= 7 * halfHeight && scroll < 9 * halfHeight;
    }

    function in_sponser(scroll) {  // 4500 <= scroll <= 5500;
      return scroll >= 9 * halfHeight && scroll < 11 * halfHeight;
    }
    /* End */


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

    
    /* DELAYED SETTER
    setTimeout(() => {
      setGoDark(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
    */

  });
  
  /* These will be used to set dynamic classNames */
  const style = invertStyle ? 'dotstyle-fillin-inverted' : 'dotstyle-fillin';
  const invertToolTip = invertToolTipStyle;

  return (
      <nav>
        <div className={`dotstyle ${style}`}>
          <div>
            
            <div>
              {invertToolTip
                ? <InvertedTooltip   title="Home" placement={isBrowser ? "right" : "bottom"} arrow><a href="#splash" className={current[0] ? 'current' : ''}>Home</a></InvertedTooltip>
                : <CustomizedTooltip title="Home" placement={isBrowser ? "right" : "bottom"} arrow><a href="#splash" className={current[0] ? 'current' : ''}>Home</a></CustomizedTooltip>
              }
            </div>

            <div>
              {invertToolTip
                ? <InvertedTooltip   title="About" placement={isBrowser ? "right" : "bottom"} arrow><a href="#about" className={current[1] ? 'current' : ''}>About</a></InvertedTooltip>
                : <CustomizedTooltip title="About" placement={isBrowser ? "right" : "bottom"} arrow><a href="#about" className={current[1] ? 'current' : ''}>About</a></CustomizedTooltip>
              }
            </div>

            <div>
              {invertToolTip
                ? <InvertedTooltip   title="Schedule" placement={isBrowser ? "right" : "bottom"} arrow><a href="#schedule" className={current[2] ? 'current' : ''}>Schedule</a></InvertedTooltip>
                : <CustomizedTooltip title="Schedule" placement={isBrowser ? "right" : "bottom"} arrow><a href="#schedule" className={current[2] ? 'current' : ''}>Schedule</a></CustomizedTooltip>
              }
            </div>

            <div>
              {invertToolTip
                ? <InvertedTooltip   title="FAQ" placement={isBrowser ? "right" : "bottom"} arrow><a href="#faq" className={current[3] ? 'current' : ''}>FAQ</a></InvertedTooltip>
                : <CustomizedTooltip title="FAQ" placement={isBrowser ? "right" : "bottom"} arrow><a href="#faq" className={current[3] ? 'current' : ''}>FAQ</a></CustomizedTooltip>
              }
            </div>

            <div>
              {invertToolTip
                ? <InvertedTooltip   title="Covid FAQ" placement={isBrowser ? "right" : "bottom"} arrow><a href="#covidfaq" className={current[4] ? 'current' : ''}>Covid FAQ</a></InvertedTooltip>
                : <CustomizedTooltip title="Covid FAQ" placement={isBrowser ? "right" : "bottom"} arrow><a href="#covidfaq" className={current[4] ? 'current' : ''}>Covid FAQ</a></CustomizedTooltip>
              }
            </div>

            <div>
              {invertToolTip
                ? <InvertedTooltip   title="Sponsors" placement={isBrowser ? "right" : "bottom"} arrow><a href="#sponsors" className={current[5] ? 'current' : ''}>Sponsors</a></InvertedTooltip>
                : <CustomizedTooltip title="Sponsors" placement={isBrowser ? "right" : "bottom"} arrow><a href="#sponsors" className={current[5] ? 'current' : ''}>Sponsors</a></CustomizedTooltip>
              }
            </div>

          </div>
        </div>
      </nav>
  );
}

export default Nav;
