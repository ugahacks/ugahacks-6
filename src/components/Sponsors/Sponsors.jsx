import React from 'react';
import './Sponsors.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const CustomButton = withStyles({
  root: {
    backgroundColor: '#fafafa',
    paddingLeft: '55px',
    paddingRight: '55px',
    fontWeight: 600,
    fontFamily: 'Poppins',
    borderRadius: '50px',
    marginTop: '25px',
    maxWidth: '500px',
    width: '75vw',
    '@media (max-width:480px)': {
      width: '100%',
      fontSize: '1em',
      paddingRight: '10px',
      paddingLeft: '10px',
    }
  }
})(Button);

function Sponsors(props) {
  return (
    <section className='section sponsors-section' id="sponsors">
      <div className="sponsors-container">
        <div className="packet-text">
          <h2>Interested in sponsoring us?</h2>
          <p>By sponsoring UGAHacks, your company will have the opportunity to inspire new programmers while also reaching
          out to and recruiting the rising stars of the tech industry.</p>
          <CustomButton variant="contained" size="large" href="https://www.ugahacks.com/sponsorship-packet">See Our Sponsorship Packet</CustomButton>
          <br></br>
          <CustomButton variant="contained" size="large" href="mailto:sponsor@ugahacks.com">Contact our sponsorship team</CustomButton>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
