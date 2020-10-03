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
  const sections = ["splash", "about", "schedule", "faq", "covidfaq", "sponsors"];
  const [invertStyle, setInvertStyle] = useState(true);
  const [invertToolTipStyle, setInvertToolTipStyle] = useState(true);
  const [current, setCurrent] = useState({0: 1, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0});
  /* End */

  useDocumentScrollThrottled(callbackData => {
    // eslint-disable-next-line
    const { previousScrollTop, currentScrollTop } = callbackData;
    const scrollTop = currentScrollTop
    var halfHeight = window.innerHeight / 2;


    function in_section(delta, curr_section, prev_section) {
      var curr_sec_height = document.getElementById(sections[curr_section]).clientHeight;
      // var prev_sec_height = prev_section < 0 ? 0 : document.getElementById(sections[prev_section]).clientHeight;

      var upperMap = sections.slice(0, curr_section + 1)
        .map((x) => document.getElementById(x).clientHeight);

      // var lowerMap = sections.slice(0, curr_section)
      //   .map((x) => document.getElementById(x).clientHeight);

      var upperHeight = upperMap.reduce((agg, x) => agg + x);
      var lowerHeight = upperHeight - curr_sec_height; //lowerMap.reduce((agg, x) => agg + x);
      var upper = delta + halfHeight <= upperHeight;
      var lower = delta + halfHeight > lowerHeight;
      return upper && lower;
    }

    var timeToInvert = in_section(scrollTop, 0, -1) ||
                        in_section(scrollTop, 2, 1) || 
                        in_section(scrollTop, 5, 4);

    /* Regular setters. */
    setInvertStyle(timeToInvert);
    setInvertToolTipStyle(timeToInvert);

    setCurrent({
      0: in_section(scrollTop, 0, -1),
      1: in_section(scrollTop, 1, 0),
      2: in_section(scrollTop, 2, 1),
      3: in_section(scrollTop, 3, 2),
      4: in_section(scrollTop, 4, 3),
      5: in_section(scrollTop, 5, 4)
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
