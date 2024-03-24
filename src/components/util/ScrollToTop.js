import React from "react";
import UpArrowMain from "../assets/img/upArrowMain.png";

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
    <img
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
