import React from 'react';
import './Splash.css';
import sixLogo from './images/sixlogo-01.svg'

function Splash(props) {
  return (
    <>
      <section className='splash'>
        <img className='logo' src={sixLogo}/>
      </section>
    </>

  );
}

export default Splash;
