import React from "react";
import img from "../assets/img/mountainImg.jpg";
import { BodyContainer, ImageMobile } from "./Home.styles.js";

const Home = ({ home }) => {
  return (
    <BodyContainer ref={home}>
      <ImageMobile src={img} />
      {/* <h1 className="homeTextBen">Ben &</h1>
      <h1 className="homeTextZach">Zach &</h1>
      <h1 className="homeTextLanny">Lanny &</h1>
      <h1 className="homeTextLeeman">Leeman</h1> */}
    </BodyContainer>
  );
};

export default Home;
