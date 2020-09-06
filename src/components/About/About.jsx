import React from 'react';
import './About.css';
import laptop from './images/laptop.svg';
import charger from './images/charger.svg';
import phone from './images/phone.svg';
import sleepingBag from './images/sleepingbag.svg';
import { motion } from "framer-motion";

const toolVariants = {
  hover: {
    scale: 1.1,
  }
}

function Tool(props) {
  return (
    <div className="tool">
      <motion.img
        src={props.image}
        alt={props.alt}
        variants={toolVariants}
        whileHover="hover"

      />
      <h3>{props.tool}</h3>
    </div>
  );
}

function About(props) {
  return (
    <>
      <section className="about" id="about">
        <div className="section-text about-text">
          <h2>What is UGAHacks?</h2>
          <p>UGAHacks is an annual hackathon organized by fellow students at the University of Georgia in Athens, Georgia. Hackathons are all about groups of dedicated people coming together to create something amazing in a epic 36-hour programming
            sleepover.</p>
          <p>Even though submitting a project is the main objective, that's not all there is. We'll have mentors, free food, video game competitions, workshops and more. There's even a workshop at the event for anyone that still needs to find some
            teammates!</p>
          <p>So come and join us to build the future!</p>
          <h2>The tools you'll need:</h2>
          <div className="tool-rack">
            <Tool image={laptop} tool="Laptop" alt="Laptop"/>
            <Tool image={phone} tool="Phone" alt="A Phone"/>
            <Tool image={sleepingBag} tool="Sleeping Bag" alt="Sleeping Bag"/>
            <Tool image={charger} tool="Chargers" alt="Chargers"/>

          </div>
        </div>


      </section>
    </>

  );
}

export default About;
