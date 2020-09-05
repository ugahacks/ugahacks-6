import React from 'react';
import './Splash.css';
import sixLogo from './images/sixlogo-01.svg'
import Button from '@material-ui/core/Button';

function Splash(props) {
  return (
    <>
      <section className='splash'>
        <img className='logo' src={sixLogo} alt="UGAHacks 6 Logo"/>
        <div className='headercontainer'>
        <h2>February 5-7, 2021 @ MLC</h2>
        <Button variant="contained" size="large">Register Now</Button>
        </div>
      </section>
    </>

  );
}

export default Splash;
