import React, { useState } from "react";
import "./FAQ.css";
import { motion } from "framer-motion";
import Button from '@material-ui/core/Button';
import Question from "./Questions";
import {collapseVariants} from "./CommonVariants";
import covidByte from "./images/covidbyte-01.svg"


function CovidFAQ(props) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="section covid-faq-section" id="covidfaq">
        <div className="covid-container">
          <div className="covid-faq-container">

              <h1>Covid FAQ</h1>

              <Question
                question="Where will the event be held this year?"
                answer="The event will be held at UGA's Zell B. Miller Learning Center."
              />

              <Question
                question="Where will the event be held this year?"
                answer="The event will be held at UGA's Zell B. Miller Learning Center."
              />

              <Question
                question="Where will the event be held this year?"
                answer="The event will be held at UGA's Zell B. Miller Learning Center."
              />

              <motion.div
                className="hidden-questions"
                variants={collapseVariants}
                animate={isOpen ? "open" : "closed"}
                >
                <Question
                  question="Where will the event be held this year?"
                  answer="The event will be held at UGA's Zell B. Miller Learning Center."
                />

                <Question
                  question="Where will the event be held this year?"
                  answer="The event will be held at UGA's Zell B. Miller Learning Center."
                />

                <Question
                  question="Where will the event be held this year?"
                  answer="The event will be held at UGA's Zell B. Miller Learning Center."
                />
              </motion.div>
              <Button id="show-more" className="show-more-black" variant="contained" size="large" onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Show Less' : 'Show More'}</Button>
          </div>
          <img className="covid-byte" alt="" src={covidByte}/>
        </div>

      </section>
    </>

  );
}

export default CovidFAQ;

/*
<button className="show-more" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Show Less' : 'Show More'}
              </button>

              */