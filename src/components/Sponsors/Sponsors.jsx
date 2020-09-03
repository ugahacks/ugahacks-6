import React from 'react';
import './Sponsors.css';

function Sponsors(props) {
  return (
    <>
      <section className='section sponsors-section'>
        <div className="sponsors-container">
          <h1>Sponsors</h1>
          <div className="packet-text">
            <h3>Interested in sponsoring us?</h3>
            <p>By sponsoring UGAHacks, your company will have the opportunity to inspire new programmers while also reaching
            out to and recruiting the rising stars of the tech industry. Please look over the <a href="https://www.ugahacks.com/sponsorship-packet">Sponsorship Packet </a>
            and <a href="mailto:sponsor@ugahacks.com">reach out to our sponsorship team for more information.</a></p>
          </div>
        </div>
      </section>
    </>

  );
}

export default Sponsors;
