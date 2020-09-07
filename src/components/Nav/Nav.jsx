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
  const [goLight, setGoLight] = useState(false);
  const [goDark, setGoDark] = useState(false);

  const MINIMUM_SCROLL = 0;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setGoLight(currentScrollTop > 2);

    setTimeout(() => {
      setGoDark(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });
  
  /* These will be used to set dynamic classNames */
  const lightStyle = goLight ? 'light' : ''; 
  const darkStyle = goDark ? 'dark' : '';

  return (
    <nav>
      <div className={`dotstyle dotstyle-fillin ${lightStyle} ${darkStyle}`}>
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
