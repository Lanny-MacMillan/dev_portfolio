import React, { useState } from 'react';
import { LinkedInIcon, GmailIcon, GitHubIcon } from '../assets/icons.js';
import Blinking from '../assets/anim/blinking/Blinking.js';
import { PopupModal } from 'react-calendly';
import {
  ContactContainer,
  ContactInner,
  AvatarWrap,
  StatusPill,
  StatusDot,
  StatusPlace,
  ContactHeading,
  ContactPitch,
  ActionRow,
  PrimaryAction,
  SecondaryAction,
  AddressRow,
  EmailText,
  CopyButton,
  SocialRow,
  SocialLink,
  Copyright,
} from './Contact.styles.js';

const EMAIL = 'lanny.macmillan.dev@gmail.com';

const Contact = ({ contact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      setCopied(false);
    }
  };

  return (
    <ContactContainer ref={contact}>
      <ContactInner>
        <AvatarWrap>
          <Blinking />
        </AvatarWrap>
        <StatusPill>
          <StatusDot aria-hidden="true" />
          <span>
            Open to new opportunities
            <StatusPlace>Boston / Providence area</StatusPlace>
          </span>
        </StatusPill>
        <ContactHeading>Let's talk</ContactHeading>
        <ContactPitch>
          Hiring, or building something? Email me or grab a time on my calendar.
        </ContactPitch>
        <ActionRow>
          <PrimaryAction
            whileHover={{ scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 300 }}
            whileTap={{ scale: 0.97 }}
            href={`mailto:${EMAIL}`}
          >
            <GmailIcon height="24px" width="24px" />
            Email me
          </PrimaryAction>
          <SecondaryAction
            whileHover={{ scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 300 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(true)}
          >
            Book a call
          </SecondaryAction>
        </ActionRow>
        <AddressRow>
          <EmailText>{EMAIL}</EmailText>
          <CopyButton type="button" onClick={copyEmail} aria-live="polite">
            {copied ? 'Copied' : 'Copy'}
          </CopyButton>
        </AddressRow>
        <SocialRow>
          <SocialLink
            whileHover={{ scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 300 }}
            href="https://www.linkedin.com/in/lanny-macmillan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon height="28px" width="28px" />
            LinkedIn
          </SocialLink>
          <SocialLink
            whileHover={{ scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 300 }}
            href="https://github.com/Lanny-MacMillan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon height="28px" width="28px" logoFill="#fff" />
            GitHub
          </SocialLink>
        </SocialRow>
        <Copyright>&copy; 2026 Lanny MacMillan &middot; Built with React</Copyright>
      </ContactInner>
      <PopupModal
        url="https://calendly.com/lannymacmillan/30min?hide_gdpr_banner=1&background_color=000000&text_color=ffffff"
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById('root')}
      />
    </ContactContainer>
  );
};

export default Contact;
