import React, { useEffect, useState } from "react";
import "./Splash.css";
import sixLogo from "./images/sixlogo-01.svg";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';

const CustomButton = withStyles({
  root: {
    backgroundColor: '#fafafa',
    paddingLeft: '55px',
    paddingRight: '55px',
    marginTop: '25px',
    fontSize: '1.3em',
    fontWeight: 600,
    fontFamily: 'Poppins',
    borderRadius: '50px'
  }
})(Button);

function Countdown(props) {

  const calculateTimeLeft = () => {

    //CHANGE DATE UNTIL REGISTRATION HERE:
    const difference = +new Date("10/30/2020") - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <li><span>{timeLeft[interval]}</span>{interval}</li>
    );
  });

  // Replace button link to schedule post-registration
  return (
    <div className="countdown-registration">
      {timerComponents.length ? timerComponents : <CustomButton variant="contained" size="large" href="https://my.ugahacks.com/">Register Now</CustomButton>}
      {timerComponents.length ? <h1> until registration</h1> : <h1></h1>}
      {timerComponents.length ? <CustomButton variant="contained" size="medium" href="https://ugeorgia.ca1.qualtrics.com/jfe/form/SV_8x05NF3a2OkoMeh">Interest Form</CustomButton> : <p></p>}
    </div>
  );


}


function Splash(props) {
  return (
    <>
      <section className="splash" id="splash">
        <div className="headercontainer">
          <img className="logo" src={sixLogo} alt="UGAHacks 6 Logo"/>
          <div className="subheader">
            <h2 id="tagline"><b>BOOT UP YOUR DREAMS.<span className="eventline"> BUILD THE FUTURE.</span></b></h2>
            <h2 id="eventdate">February 5-7, 2021 @ MLC</h2>
          </div>
          <Countdown/>
        </div>
      </section>
    </>

  );
}

export default Splash;
