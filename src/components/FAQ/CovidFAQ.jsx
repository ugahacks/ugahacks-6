import React, { useState } from "react";
import "./FAQ.css";
import { motion } from "framer-motion";
import Question from "./Questions";
import {collapseVariants} from "./CommonVariants";
import covidByte from "./images/covidbyte-01.svg"


function CovidFAQ(props) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section class="section covid-faq-section">
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
              <button className="show-more" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Show Less' : 'Show More'}
              </button>
          </div>
          <img className="covid-byte" src={covidByte}/>
        </div>

      </section>
    </>

  );
}

export default CovidFAQ;
