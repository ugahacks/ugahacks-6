import React, { useState } from "react";
import "./FAQ.css";
import { motion } from "framer-motion"
import {collapseVariants, hoverVariants} from "./CommonVariants"

function Question(props) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        variants={hoverVariants}
        whileHover="hover"
      >{props.question}</motion.button>
      <motion.div
        className="faq-answer"
        variants={collapseVariants}
        animate={isOpen ? "open" : "closed"}

      >
        <p>{props.answer}</p>
      </motion.div>
    </>

  );
}

export default Question;
