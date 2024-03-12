import React from "react";
import Arrow from "../assets/anim/upArrowAnim.gif";
// import { Image } from "../../projects/Projects.styles";
const ScrollToTop = () => {
  const style = {
    position: "fixed",
    bottom: 50,
    right: 50,
    zIndex: "105",
    height: "75px",
    width: "50px",
    opacity: ".9",
  };

  return (
    // <button
    //   onClick={() => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    //   }}
    //   style={style}
    // >
    <img
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      style={style}
      alt="Arrow"
      src={Arrow}
    />
    // </button>
  );
};

export default ScrollToTop;
