import React, { useState } from "react";
import "./FAQ.css";
import { motion } from "framer-motion";
import Question from "./Questions";

const questionVariants = {
  open: { height: "auto",},
  closed: {
    height: 0,
    transition: {
      duration: .2,
    }
  },
}


function FAQ(props) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="section faq-section">
        <div className="faq-container">

            <h1>FAQ</h1>

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
              variants={questionVariants}
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

      </section>
    </>

  );
}

export default FAQ;
