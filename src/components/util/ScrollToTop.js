import React from "react";
import UpArrowMain from "../assets/img/upArrowMain.png";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const style = {
    position: "fixed",
    bottom: 30,
    right: 30,
    zIndex: "105",
    height: "75px",
    width: "50px",
    opacity: ".9",
  };

  return (
    <motion.img
      whileHover={{
        scale: 1.5,
      }}
      transition={{ type: "spring", stiffness: 300 }}
      whileTap={{ scale: 2.5 }}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      style={style}
      alt="Arrow"
      src={UpArrowMain}
    />
  );
};

export default ScrollToTop;
