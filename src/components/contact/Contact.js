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
} from "./Contact.styles.js";

const Contact = ({ contact }) => {
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

  const iframeStyle = {
    border: "none",
    width: "100%",
    height: "100%",
    loading: "lazy",
    borderRadius: "5px 5px 0 0",
  };

  const googleURL = `https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=Boston,Ma`;

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
    // some call to send email to me
  };

  const Iframe = () => (
    <iframe title="google" style={iframeStyle} src={`${googleURL}`} />
  );

  const renderiFrame = useMemo(() => Iframe(), []);

  const renderCalendly = (
    <div
    // style={{
    //   // minWidth: "320px",
    //   height: "650px",
    //   border: "1px solid red",
    //   overflow: "clip",
    // }}
    >
      <InlineWidget url="https://calendly.com/lanny-macmillan-dev/30min?hide_gdpr_banner=1&background_color=000000&text_color=ffffff" />
    </div>
  );

  const renderCalendlyPopupModal = (
    <div>
      <button
        style={{
          padding: "15px",
          borderRadius: "10px",
          border: "none",
        }}
        onClick={() => setIsOpen(true)}
      >
        <CalendlyIcon />
      </button>
      <PopupModal
        url="https://calendly.com/lanny-macmillan-dev/30min?hide_gdpr_banner=1&background_color=000000&text_color=ffffff"
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById("root")}
      />
    </div>
  );

  const renderDivs = (
    <>
      <ShowDiv1>{renderiFrame}</ShowDiv1>
      <ShowDiv2>
        <PaddedDiv>
          <CardHeader>Lets create something amazing!</CardHeader>
          <CardSubHeader>
            Have an idea for an App, need a website or just want to create
            something fun?! Click on the Calendly Link to setup a time to meet
            on Zoom and discuss your needs. I would love to hear from you.
          </CardSubHeader>
          <CardForm>
            <input
              name="subject"
              value={inputs.subject}
              onChange={(e) => onChange(e, setSubjectValid, 1)}
              type="text"
              variant="default"
              placeholder="Subject"
              isValid={subjectValid}
              labelType="floating"
              errorMessage="Please enter a Subject"
            />
            <input
              name="name"
              value={inputs.name}
              onChange={(e) => onChange(e, setNameValid, 1)}
              type="text"
              variant="default"
              placeholder="Name"
              isValid={nameValid}
              labelType="floating"
              errorMessage="Please enter a Name"
            />
            <input
              name="email"
              value={inputs.email}
              onChange={(e) => onChange(e, setEmailValid, 1)}
              type="text"
              variant="default"
              placeholder="Email"
              isValid={emailValid}
              labelType="floating"
              errorMessage="Please enter a Email"
            />
            <textarea
              style={{ height: "50px" }}
              name="message"
              value={inputs.message}
              onChange={(e) => onChange(e, setMessageValid, 1)}
              type="text"
              variant="default"
              placeholder="Message"
              isValid={messageValid}
              labelType="floating"
              errorMessage="Please enter a Message"
            />
            <button onSubmit={onSubmit} disabled={!valid}>
              Submit
            </button>
          </CardForm>
          {renderCalendlyPopupModal}
          <CardFooter>
            <p>
              ...
              <span>or </span>find me here
            </p>
            <img alt="Arrow" src={curlyArrow} />
            <IconsDiv>
              <a
                href="https://www.linkedin.com/in/lanny-macmillan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon height={40} width={40} />
              </a>
              <a
                href="mailto:lanny.macmillan.dev@gmail.com"
                rel="noopener noreferrer"
              >
                <GmailIcon height={40} width={40} />
              </a>
              <a
                href="https://github.com/Lanny-MacMillan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon height={40} width={40} fill={"white"} />
              </a>
            </IconsDiv>
          </CardFooter>
        </PaddedDiv>
      </ShowDiv2>
    </>
  );

  return (
    <>
      <ContactContainer ref={contact}>
        {/* <Container>
          <Header>Contact</Header>
          <ContactDiv></ContactDiv>
        </Container> */}
        <StartProject>
          <ConnectHeader>Start A Project</ConnectHeader>
          <ConnectBody>
            Interested in working together? We should queue up a time to chat.
            <br />
            Coffee is on me
          </ConnectBody>
          <CalendlyLink>{renderCalendlyPopupModal}</CalendlyLink>
        </StartProject>
        <Footer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              margin: "150px 0 30px 0",
            }}
          >
            <div
              style={{
                fontSize: "1.5em",
                textAlign: "center",
              }}
            >
              Animated SVG of myself here
            </div>
            <div>
              <IconsDiv>
                <a
                  href="https://www.linkedin.com/in/lanny-macmillan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon height={40} width={40} />
                </a>
                <a
                  href="mailto:lanny.macmillan.dev@gmail.com"
                  rel="noopener noreferrer"
                >
                  <GmailIcon height={40} width={40} />
                </a>
                <a
                  href="https://github.com/Lanny-MacMillan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon height={40} width={40} />
                </a>
              </IconsDiv>
              <div style={{ fontSize: ".8em", textAlign: "center" }}>
                Created by Lanny MacMillan 2024
              </div>
            </div>
          </div>
        </Footer>
      </ContactContainer>
    </>
  );
};

export default Contact;
