import React, { useState } from "react";
import "./FAQ.css";
import { motion } from "framer-motion"

const questionVariants = {
  open: { height: "auto",},
  closed: {
    height: 0,
    transition: {
      duration: .2,
    }
  },
}

function Question(props) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}


      >{props.question}</button>
      <motion.div
        className="faq-answer"
        variants={questionVariants}
        animate={isOpen ? "open" : "closed"}

      >
        <p>{props.answer}</p>
      </motion.div>
    </>

  );
}

export default Question;
