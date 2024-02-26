import React from "react";
import Img from "../assets/img/portImg.jpg";
import "../../index.css";
import {
  ContactContainer,
  ContactDiv,
  ShowDiv1,
  ShowDiv2,
  PaddedDiv,
  Image,
  Header,
  CardHeader,
  CardSubHeader,
  CardForm,
} from "./Contact.styles.js";

const Contact = ({ contact }) => {
  return (
    <>
      <ContactContainer ref={contact}>
        <Header>Contact</Header>
        <ContactDiv>
          <ShowDiv1>
            <Image src={Img} />
          </ShowDiv1>
          <ShowDiv2>
            <PaddedDiv>
              <CardHeader>Lets create something amazing!</CardHeader>
              <CardSubHeader>
                Have an idea for an App, need a website or just want to create
                something fun?! I would love to hear from you.
              </CardSubHeader>
              <CardForm>{/* quickstop form here */}</CardForm>
            </PaddedDiv>
          </ShowDiv2>
        </ContactDiv>
      </ContactContainer>
    </>
  );
};

export default Contact;
