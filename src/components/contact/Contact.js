import React from "react";
import { ContactContainer } from "./Contact.styles.js";

const Contact = ({ contact }) => {
  return (
    <ContactContainer ref={contact}>
      <h1>ContactPage</h1>
    </ContactContainer>
  );
};

export default Contact;
