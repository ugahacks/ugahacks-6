import React from "react";
import "./Sponsors.css";
import { motion } from "framer-motion";

const logoVariants = {
  hover: {
    scale: 1.1,
  }
}

function SponsorLogo(props) {

  return (
    <a href={props.link}>
      <motion.img
        className={props.tier}
        id={props.id}
        src={props.image}
        alt={props.alt}
        variants={logoVariants}
        whileHover="hover"
      />
    </a>
  );
}

export default SponsorLogo;
