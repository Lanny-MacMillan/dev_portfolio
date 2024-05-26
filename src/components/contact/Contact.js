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
  SmallText,
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

  const iconSize = largeScreen ? '50px' : '40px';

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
        url="https://calendly.com/lanny-macmillan-dev/30min?hide_gdpr_banner=1&background_color=000000&text_color=ffffff"
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
          <ConnectHeader>Starting A Project?</ConnectHeader>
          <ConnectBody>
            Interested in working together? We should set up a time to chat.
            <br />
            Coffee is on me
          </ConnectBody>
          <CalendlyLink>{renderCalendlyPopupModal}</CalendlyLink>
        </StartProject>
        <Footer>
          <FooterCenter>
            <Blinking />
            <InfoDiv>
              <IconsDiv>
                <motion.a
                  whileHover={{
                    scale: 1.4,
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  whileTap={{ scale: 1.5 }}
                  href="https://www.linkedin.com/in/lanny-macmillan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon height={iconSize} width={iconSize} />
                </motion.a>
                <motion.a
                  whileHover={{
                    scale: 1.4,
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  whileTap={{ scale: 1.5 }}
                  href="mailto:lanny.macmillan.dev@gmail.com"
                  rel="noopener noreferrer"
                >
                  <GmailIcon height={iconSize} width={iconSize} />
                </motion.a>
                <motion.a
                  whileHover={{
                    scale: 1.4,
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  whileTap={{ scale: 1.5 }}
                  href="https://github.com/Lanny-MacMillan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon height={iconSize} width={iconSize} />
                </motion.a>
              </IconsDiv>
              <SmallText>Created by Lanny MacMillan 2024</SmallText>
            </InfoDiv>
          </FooterCenter>
        </Footer>
      </ContactContainer>
    </>
  );
};

export default Contact;
