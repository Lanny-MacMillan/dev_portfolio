import React from "react";
import {
  ContactContainer,
  ContactDiv,
  ShowDiv1,
  ShowDiv2,
  ShowDiv3,
} from "./Contact.styles.js";

const Contact = ({ contact }) => {
  return (
    <>
      <ContactContainer ref={contact}>
        <h1>ContactPage</h1>
        <ContactDiv>Contact info</ContactDiv>
        <ShowDiv1>Testimonial 1</ShowDiv1>
        <ShowDiv2>Testimonial 2</ShowDiv2>
        <ShowDiv3>Testimonial 3</ShowDiv3>
      </ContactContainer>
    </>
  );
};

export default Contact;
