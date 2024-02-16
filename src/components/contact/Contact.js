import React from "react";
import { ContactContainer } from "./Contact.styles.js";

const Contact = ({ contact }) => {
  return <ContactContainer ref={contact}></ContactContainer>;
};

export default Contact;
