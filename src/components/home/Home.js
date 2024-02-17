import React from "react";
import { BodyContainer } from "./Home.styles.js";

const Home = ({ home }) => {
  return (
    <BodyContainer ref={home}>
      <p1>HomePage</p1>
    </BodyContainer>
  );
};

export default Home;
