import React from "react";
import { BodyContainer } from "./Home.styles.js";

const Home = ({ home }) => {
  return (
    <BodyContainer ref={home}>
      <h1>HomePage</h1>
    </BodyContainer>
  );
};

export default Home;
