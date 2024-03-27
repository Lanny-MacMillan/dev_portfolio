/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo } from "react";
import {
  LinkedInIcon,
  GmailIcon,
  GitHubIcon,
  CalendlyIcon,
} from "../assets/icons.js";
import { mobileDev } from "../assets/constants.js";
import { SelfIconLarge } from "../assets/icons.js";
import Blinking from "../assets/anim/blinking/Blinking.js";
import { InlineWidget, PopupModal } from "react-calendly";
import curlyArrow from "../assets/img/curlyArrow.png";
// import { Input, Button } from '@lanny-macmillan/thequickstop'
import {
  ContactContainer,
  ContactDiv,
  ShowDiv1,
  ShowDiv2,
  PaddedDiv,
  Header,
  CardHeader,
  CardSubHeader,
  CardForm,
  Footer,
  CardFooter,
  IconsDiv,
  Container,
  StartProject,
  CalendlyLink,
  ConnectHeader,
  ConnectBody,
  ButtonContainer,
  StyledButton,
  IconDiv,
  SmallText,
} from "./Contact.styles.js";

const Contact = ({ contact, largeScreen }) => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [subjectValid, setSubjectValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [valid, setValid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const onChange = (e, setIsStateValidFunction, minCharCount) => {
    e.preventDefault();
    const onlyWhiteSpace = /^\s*$/.test(e.target.value);

    if (e.target.value.length >= minCharCount && !onlyWhiteSpace) {
      setIsStateValidFunction(true);
    } else {
      setIsStateValidFunction(false);
    }

    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    setIsSubmitting(true);
    // some call to send email
  };
  const iconSize = largeScreen ? "50px" : "40px";

  const renderCalendlyPopupModal = (
    <>
      <ButtonContainer>
        <StyledButton
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <CalendlyIcon
            letterFill={hover ? "white" : null}
            logoFillBG={hover ? "white" : null}
          />
        </StyledButton>
      </ButtonContainer>
      <PopupModal
        url="https://calendly.com/lanny-macmillan-dev/30min?hide_gdpr_banner=1&background_color=000000&text_color=ffffff"
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById("root")}
      />
    </>
  );

  return (
    <>
      <ContactContainer ref={contact}>
        <StartProject>
          <ConnectHeader>Starting A Project?</ConnectHeader>
          <ConnectBody>
            Interested in working together? We should set up a time to chat.
            <br />
            Coffee is on me
          </ConnectBody>
          <CalendlyLink>{renderCalendlyPopupModal}</CalendlyLink>
        </StartProject>
        <Footer>
          <IconDiv>
            <Blinking />
            <div>
              <IconsDiv>
                <a
                  href="https://www.linkedin.com/in/lanny-macmillan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon height={iconSize} width={iconSize} />
                </a>
                <a
                  href="mailto:lanny.macmillan.dev@gmail.com"
                  rel="noopener noreferrer"
                >
                  <GmailIcon height={iconSize} width={iconSize} />
                </a>
                <a
                  href="https://github.com/Lanny-MacMillan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon height={iconSize} width={iconSize} />
                </a>
              </IconsDiv>
              <SmallText>Created by Lanny MacMillan 2024</SmallText>
            </div>
          </IconDiv>
        </Footer>
      </ContactContainer>
    </>
  );
};

export default Contact;
