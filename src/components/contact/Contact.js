/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo } from "react";
import { LinkedInIcon, GmailIcon, GitHubIcon } from "../assets/icons.js";
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
  StyledInput,
  CardFooter,
  IconsDiv,
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

  return (
    <>
      <ContactContainer ref={contact}>
        <Header>Contact</Header>
        <ContactDiv>
          <ShowDiv1>{renderiFrame}</ShowDiv1>
          <ShowDiv2>
            <PaddedDiv>
              <CardHeader>Lets create something amazing!</CardHeader>
              <CardSubHeader>
                Have an idea for an App, need a website or just want to create
                something fun?! I would love to hear from you.
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
                {/* <Input 
                  name='subject'
                  value={inputs.subject}
                  onChange={(e) => onChange(e, setSubjectValid, 1)}
                  type='text'
                  variant='default' 
                  placeholder='Subject' 
                  isValid={subjectValid} 
                  withLabel
                  labelType='floating'
                  errorMessage="Please enter a Subject"
                />
                <Input 
                  name='name'
                  value={inputs.name}
                  onChange={(e) => onChange(e, setNameValid, 1)}
                  type='text'
                  variant='default' 
                  placeholder='Name' 
                  isValid={nameValid} 
                  withLabel
                  labelType='floating'
                  errorMessage="Please enter a Name"
                  />
                <StyledInput 
                  name='email'
                  value={inputs.email}
                  onChange={(e) => onChange(e, setEmailValid, 1)}
                  type='text'
                  variant='default' 
                  placeholder='Email' 
                  isValid={emailValid} 
                  withLabel
                  labelType='floating'
                  errorMessage="Please enter a Email"
                />
                <StyledInput 
                  name='message'
                  value={inputs.message}
                  onChange={(e) => onChange(e, setMessageValid, 1)}
                  type='text'
                  variant='default' 
                  placeholder='Message' 
                  isValid={messageValid} 
                  withLabel
                  labelType='floating'
                  errorMessage="Please enter a Message"
                />
                <Button
                  onSubmit={onSubmit}
                  variant='primary'
                  disabled={!inputs.name || !inputs.email || !inputs.subject || !inputs.message || isSubmitting}>
                  Connect
                </Button> */}
              </CardForm>
              <CardFooter>
                <p>...or find me here</p>
                <IconsDiv>
                  <a
                    href="https://www.linkedin.com/in/lanny-macmillan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon height={40} width={40} />
                  </a>

                  <a
                    href="https://github.com/Lanny-MacMillan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon height={40} width={40} />
                  </a>

                  <a
                    href="mailto:lanny.macmillan.dev@gmail.com"
                    rel="noopener noreferrer"
                  >
                    <GmailIcon height={40} width={40} />
                  </a>
                </IconsDiv>
              </CardFooter>
            </PaddedDiv>
          </ShowDiv2>
        </ContactDiv>
      </ContactContainer>
    </>
  );
};

export default Contact;
