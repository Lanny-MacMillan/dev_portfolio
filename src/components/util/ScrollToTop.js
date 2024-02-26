import React from "react";
import Arrow from "../assets/anim/upArrowAnim.gif";
import { Image } from "../../projects/Projects.styles";
const ScrollToTop = () => {
  const style = {
    position: "fixed",
    bottom: 50,
    right: 50,
    zIndex: "100",
    height: "75px",
    width: "50px",
    opacity: ".9",
  };
  const imgStyle = {
    // width: 100%;
    // display: "block",
    // maxWidth: "100%",
    // z-index: 10;
    // margin: ${(props) => (props.margin ? props.margin : "auto")};
    // height: ${(props) => (props.height ? props.height : "60%")};
    // border-radius: 15px 15px 0px 0px;
    // transition: all 0.4s ease-in-out;
    // border: 1px solid blue;
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
      src={Arrow}
    />
    // </button>
  );
};

export default ScrollToTop;
