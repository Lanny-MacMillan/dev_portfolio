import React from "react";
import { AboutContainer } from "./About.styles.js";

const About = ({ about }) => {
  return <AboutContainer ref={about}></AboutContainer>;
};

export default About;
