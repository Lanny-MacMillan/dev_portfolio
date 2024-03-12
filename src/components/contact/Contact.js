/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Img from "../assets/img/portImg.jpg";
import { LinkedInIcon, GmailIcon, GitHubIcon } from "../assets/icons.js";
// import { Input, Button } from '@lanny-macmillan/thequickstop'
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
  const googleURL = `https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=`;

  const onChange = (e, setIsStateValidFunction, minCharCount) => {
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

  return (
    <>
      <ContactContainer ref={contact}>
        <Header>Contact</Header>
        <ContactDiv>
          <ShowDiv1>
            {/*============= GOOGLE MAPS API =============*/}
            <iframe
              title="google"
              className="map"
              width="100%"
              height="100%"
              loading="lazy"
              src={`${googleURL} + Boston, Ma`}
            ></iframe>
            {/*============= GOOGLE MAPS API =============*/}
            {/* <Image src={Img} /> */}
          </ShowDiv1>
          <ShowDiv2>
            <PaddedDiv>
              <CardHeader>Lets create something amazing!</CardHeader>
              <CardSubHeader>
                Have an idea for an App, need a website or just want to create
                something fun?! I would love to hear from you.
              </CardSubHeader>
              <CardForm>
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
                <p>find me here</p>
                <IconsDiv>
                  <a
                    href="https://www.linkedin.com/in/lanny-macmillan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </a>

                  <a
                    href="https://github.com/Lanny-MacMillan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </a>

                  <a
                    href="mailto:lanny.macmillan.dev@gmail.com"
                    rel="noopener noreferrer"
                  >
                    <GmailIcon />
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
