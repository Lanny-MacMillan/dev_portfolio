/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo } from 'react';
import {
  LinkedInIcon,
  GmailIcon,
  GitHubIcon,
  CalendlyIcon,
} from '../assets/icons.js';
import { motion } from 'framer-motion';
import { mobileDev } from '../assets/constants.js';
import Blinking from '../assets/anim/blinking/Blinking.js';
import { PopupModal } from 'react-calendly';
import {
  ContactContainer,
  Footer,
  IconsDiv,
  StartProject,
  CalendlyLink,
  ConnectHeader,
  ConnectBody,
  ButtonContainer,
  StyledButton,
  FooterCenter,
  InfoDiv,
  AvatarWrap,
  EmailLink,
  Facts,
  Fact,
  FactLabel,
  FactValue,
  Copyright,
  LinkRow,
  LinkPill,
} from './Contact.styles.js';

const Contact = ({ contact, largeScreen }) => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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

  const iconSize = '28px';

  const renderCalendlyPopupModal = (
    <>
      <ButtonContainer>
        <StyledButton
          whileHover={{
            scale: 1.1,
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          whileTap={{ scale: 1.3 }}
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <CalendlyIcon
            letterFill={hover ? 'white' : null}
            logoFillBG={hover ? 'white' : null}
          />
        </StyledButton>
      </ButtonContainer>
      <PopupModal
        url="https://calendly.com/lannymacmillan/30min?hide_gdpr_banner=1&background_color=000000&text_color=ffffff"
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById('root')}
      />
    </>
  );

  return (
    <>
      <ContactContainer ref={contact}>
        <StartProject>
          <ConnectHeader>Let's talk</ConnectHeader>
          <ConnectBody>
            Open to new opportunities.
            <br />
            Hiring, or building something? Email me or grab a time on my calendar.
          </ConnectBody>
          <CalendlyLink>{renderCalendlyPopupModal}</CalendlyLink>
        </StartProject>
        <Footer>
          <FooterCenter>
            <AvatarWrap>
              <Blinking />
            </AvatarWrap>
            <InfoDiv>
              <EmailLink href="mailto:lanny.macmillan.dev@gmail.com">
                lanny.macmillan.dev@gmail.com
              </EmailLink>
              <Facts>
                <Fact>
                  <FactLabel>Looking for</FactLabel>
                  <FactValue>Product &amp; software engineering</FactValue>
                </Fact>
                <Fact>
                  <FactLabel>Strengths</FactLabel>
                  <FactValue>Web, integrations, cloud, data</FactValue>
                </Fact>
                <Fact>
                  <FactLabel>Based in</FactLabel>
                  <FactValue>Boston / Providence area</FactValue>
                </Fact>
              </Facts>
              <LinkRow>
                <LinkPill
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://www.linkedin.com/in/lanny-macmillan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <LinkedInIcon height={iconSize} width={iconSize} />
                  LinkedIn
                </LinkPill>
                <LinkPill
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  whileTap={{ scale: 0.96 }}
                  href="mailto:lanny.macmillan.dev@gmail.com"
                  aria-label="Send an email"
                >
                  <GmailIcon height={iconSize} width={iconSize} />
                  Email
                </LinkPill>
                <LinkPill
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://github.com/Lanny-MacMillan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                >
                  <GitHubIcon height={iconSize} width={iconSize} />
                  GitHub
                </LinkPill>
              </LinkRow>
            </InfoDiv>
            <Copyright>&copy; 2026 Lanny MacMillan</Copyright>
          </FooterCenter>
        </Footer>
      </ContactContainer>
    </>
  );
};

export default Contact;
