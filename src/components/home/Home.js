import React from "react";
import img from "../assets/img/mountainImg.jpg";
import { BodyContainer, ImageMobile } from "./Home.styles.js";

const Home = ({ home }) => {
  return (
    <BodyContainer ref={home}>
      <ImageMobile src={img} />
    </BodyContainer>
  );
};

export default Home;
