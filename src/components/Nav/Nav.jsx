import React from 'react';
import { withRouter } from "react-router";
import './Nav.css';
import { motion } from "framer-motion";
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

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

export default class DynamicNav extends React.Component {
  constructor(props) {
    super(props);
    this.listener = null;
    this.state = {
      status: "+",
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    this.listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      // if (scrolled >= 120) {
      //   if (this.state.status !== "amir") {
      //     this.setState({ status: "amir" });
      //   }
      // } else {
      //   if (this.state.status !== "top") {
      //     this.setState({ status: "top" });
      //   }
      // }
      console.log(scrolled, this.state.width, this.state.height);
    });
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    return (
      <nav>
        <div className="dotstyle dotstyle-fillin">
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

}

/*
function Nav(props) {
  return (
    <>
    <nav>
      <div className="dotstyle dotstyle-fillin">
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
    </>
  );
}

export default Nav;
*/