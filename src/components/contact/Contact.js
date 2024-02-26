import React from "react";
import amiiboAppImg from "../assets/img/amiibo.png";

import {
  ContactContainer,
  ContactDiv,
  ShowDiv1,
  ShowDiv2,
  Image,
} from "./Contact.styles.js";

const Contact = ({ contact }) => {
  return (
    <>
      <ContactContainer ref={contact}>
        <h1>ContactPage</h1>
        <ContactDiv>
          <ShowDiv1>
            {" "}
            <Image src={amiiboAppImg} />
          </ShowDiv1>
          <ShowDiv2>Contact me section</ShowDiv2>
        </ContactDiv>
      </ContactContainer>
    </>
  );
};

export default Contact;
