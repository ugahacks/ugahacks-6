import React from 'react';
import './Sponsors.css';
import Button from '@material-ui/core/Button';

function Sponsors(props) {
  return (
    <section className='section sponsors-section' id="sponsors">
      <div className="sponsors-container">
        <div className="packet-text">
          <h3>Interested in sponsoring us?</h3>
          <p>By sponsoring UGAHacks, your company will have the opportunity to inspire new programmers while also reaching
          out to and recruiting the rising stars of the tech industry.</p>
          <Button variant="contained" size="large"><a href="https://www.ugahacks.com/sponsorship-packet">See Our Sponsorship Packet</a></Button>
          <br></br>
          <Button variant="contained" size="large"><a href="mailto:sponsor@ugahacks.com">Contact our sponsorship team</a></Button>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
