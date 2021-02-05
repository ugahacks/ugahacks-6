import React, { useEffect, useState } from "react";
import "./Splash.css";
import sixLogo from "./images/sixlogoncr.svg";
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
    borderRadius: '50px',
    width: '320px'
  }
})(Button);

function Countdown(props) {

  const calculateTimeLeft = () => {

    //CHANGE DATE UNTIL REGISTRATION HERE:
    const difference = +new Date("10/30/2020 12:00:00") - +new Date();

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

  if (timerComponents.length) {
    return (
      <>
      <div className="subheader">
        <h2 id="eventdate">February 5-7, 2021 Online</h2>
      </div>
      <div className="countdown-registration">
        {timerComponents}
        <h1> until registration</h1>
        <CustomButton variant="contained" size="medium" href="https://ugeorgia.ca1.qualtrics.com/jfe/form/SV_8x05NF3a2OkoMeh">Interest Form</CustomButton>
      </div>
      </>
    );
  } else {
    return (
      <>
      <div className="subheader">
        <h2 id="tagline"><b>BOOT UP YOUR DREAMS.<span className="eventline"> BUILD THE FUTURE.</span></b></h2>
        <h2 id="eventdate">February 5-7, 2021 Online</h2>
      </div>
      <CustomButton variant="contained" size="large" href="https://6.ugahacks.com/static/media/pre_event_packet.99c85e96.pdf" target="_blank">Pre-event Guide</CustomButton>
      </>
    );
  }


}


function Splash(props) {
  return (
    <>
      <section className="section splash" id="splash">
      <a id="mlh-trust-badge" href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white" target="_blank" rel="noopener noreferrer"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg" alt="Major League Hacking 2021 Hackathon Season"></img></a>
        <div className="headercontainer">
          <img className="logo" src={sixLogo} alt="UGAHacks 6 Logo"/>
          <Countdown/>
        </div>
      </section>
    </>

  );
}

export default Splash;
