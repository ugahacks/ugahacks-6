import React, { useState } from "react";
import "./FAQ.css";
import { motion } from "framer-motion";
import Button from '@material-ui/core/Button';
import Question from "./Questions";
import {collapseVariants} from "./CommonVariants"


function FAQ(props) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="section faq-section" id="faq">
        <div className="faq-container">

            <h1 className="title-text">FAQ</h1>

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
            <Button id="show-more" className="show-more-yellow" variant="contained" size="large" onClick={() => setIsOpen(!isOpen)}><a>{isOpen ? 'Show Less' : 'Show More'}</a></Button>
          
        </div>

      </section>
    </>

  );
}

export default FAQ;

/*
            <button className="show-more" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? 'Show Less' : 'Show More'}
            </button>*/
