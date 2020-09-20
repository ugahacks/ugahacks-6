import React, { useState } from "react";
import "./FAQ.css";
import { motion } from "framer-motion";
import {collapseVariants, hoverVariants} from "./CommonVariants";
import screw from "./images/screw-01.svg";

const screwVariants = {
  open: { rotate: 45 },
  closed: { rotate: 0 },
};

function Question(props) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        variants={hoverVariants}
        whileHover="hover"
      >{props.question}
      <motion.img
        className="screw"
        src={screw} width="15"
        height="15"
        variants={screwVariants}
        animate={isOpen ? "open": "closed"}
        />
      </motion.button>
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
