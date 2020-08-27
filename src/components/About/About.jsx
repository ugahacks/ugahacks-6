import React from 'react';
import './About.css';
import sittingByte from './images/sittingbyte.svg';

function About(props) {
  return (
    <>
      <section id='about' className=''>

        <div className="section-text about-text">
          <h2>What is UGAHacks?</h2>
          <p>UGAHacks is an annual hackathon organized by fellow students at the University of Georgia in Athens, Georgia. Hackathons are all about groups of dedicated people coming together to create something amazing in a epic 36-hour programming
            sleepover.</p>
          <p>Even though submitting a project is the main objective, that's not all there is. We'll have mentors, free food, video game competitions, workshops and more. There's even a workshop at the event for anyone that still needs to find some
            teammates!</p>
          <p>So come and join us to build the future!</p>
          <h2>The tools you'll need:</h2>
          <div className="tool-rack">
            <div className="tool">
              <img id="sittingbyte" src={sittingByte} alt="Byte (UGAHacks's mascot) winking"/>
              <h3>Laptop</h3>
            </div>
            <div className="tool">
              <img id="sittingbyte" src={sittingByte} alt="Byte (UGAHacks's mascot) winking"/>
              <h3>Phone</h3>
            </div>
            <div className="tool">
              <img id="sittingbyte" src={sittingByte} alt="Byte (UGAHacks's mascot) winking"/>
              <h3>Sleeping <br/> Bag</h3>
            </div>
            <div className="tool">
              <img id="sittingbyte" src={sittingByte} alt="Byte (UGAHacks's mascot) winking"/>
              <h3>Chargers</h3>
            </div>
          </div>
        </div>

      </section>
    </>

  );
}

export default About;
