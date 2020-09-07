import React, { useState } from 'react';
import './Nav.css';
import { motion } from "framer-motion";
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

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

  const [invertStyle, setInvertStyle] = useState(false);
  // const [goDark, setGoDark] = useState(false);

  const MINIMUM_SCROLL = 0;
  const TIMEOUT_DELAY = 400;

  /* Needs to be re-tooled for all views in our SPA. */
  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const scrollTop = currentScrollTop;

    function in_splash(scroll) {
      return scroll >= 0 && scroll <= 500;
    }

    function in_schedule(scroll) {
      return scroll >= 1500 && scroll <= 2500; // 1500 <= scroll <= 2500;
    }

    function in_sponser(scroll) {
      return scroll >= 4500 && scroll <= 5500; // 4500 <= scroll <= 5500;
    }

    var timeToInvert = in_splash(scrollTop) || in_schedule(scrollTop) || in_sponser(scrollTop);

    console.log(scrollTop, invertStyle);
    // console.log(timeToInvert);
    /* Regular setters. */
    setInvertStyle(timeToInvert);
    // setGoDark(isScrolledDown && isMinimumScrolled);

    /* Delayed setter. */
    /*
    setTimeout(() => {
      setGoDark(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
    */

  });
  
  /* These will be used to set dynamic classNames */
  const invertedStyle = invertStyle ? 'dotstyle-fillin-inverted' : 'dotstyle-fillin'; 

  /* Stand-ins 'lightStyle' and 'darkStyle' will reference styles in Nav.css */
  return (
    <nav>
      <div className={`dotstyle ${invertedStyle}`}>
        <div>
          
          <div>
            <CustomizedTooltip title="Home" placement="right" arrow>
              <a href="#splash" className="current">Home</a>
            </CustomizedTooltip>
          </div>

          <div>
            <CustomizedTooltip title="About" placement="right" arrow>
              <a href="#about">About</a>
            </CustomizedTooltip>
          </div>

          <div>
            <CustomizedTooltip title="Schedule" placement="right" arrow>
              <a href="#schedule">Schedule</a>
            </CustomizedTooltip>
          </div>

          <div>
            <CustomizedTooltip title="FAQ" placement="right" arrow>
              <a href="#faq">FAQ</a>
            </CustomizedTooltip>
          </div>

          <div>
            <CustomizedTooltip title="Covid FAQ" placement="right" arrow>
              <a href="#covidfaq">Covid FAQ</a>
            </CustomizedTooltip>
          </div>

          <div>
            <CustomizedTooltip title="Sponsors" placement="right" arrow>
              <a href="#sponsors">Sponsors</a>
            </CustomizedTooltip>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Nav;
