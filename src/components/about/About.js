import React from "react";
import { AboutContainer } from "./About.styles.js";

const About = ({ about }) => {
  return (
    <AboutContainer ref={about}>
      <h1>AboutPage</h1>
    </AboutContainer>
  );
};

export default About;
