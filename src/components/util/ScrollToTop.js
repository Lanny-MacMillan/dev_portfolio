import React from "react";

const ScrollToTop = () => {
  const style = {
    position: "fixed",
    bottom: 50,
    right: 50,
    zIndex: "100",
    height: "75px",
    width: "50px",
  };

  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      style={style}
    >
      Up
    </button>
  );
};

export default ScrollToTop;
