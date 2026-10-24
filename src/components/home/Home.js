import React from 'react';
import {
  BodyContainer,
  IconContainer,
  HeroHeader,
  UpperRow,
  UpperInnerDiv,
  LowerDiv,
  ChatDiv,
  TalkText,
  ChatArrow,
  CenteredDiv,
  BorderBlinkDiv,
} from './Home.styles.js';
import BorderBlink from '../assets/anim/borderBlink/BorderBlink.js';
import DevDesktop from '../assets/anim/devDesktop/DevDesktop.js';

const Home = ({ home, largeScreen }) => {
  const width = largeScreen ? '500px' : '225px';

  return (
    <BodyContainer>
      <IconContainer ref={home}>
        <UpperRow>
          <UpperInnerDiv>
            <BorderBlinkDiv width={width}>
              <BorderBlink />
            </BorderBlinkDiv>
            <HeroHeader>
              <ChatDiv>
                <ChatArrow />
                <TalkText>
                  I'm Lanny,
                  <br />A full-stack developer who designs, builds and ships
                  production software, from React and Next.js front ends to Node
                  services, databases and AWS infrastructure. I'm comfortable owning
                  a feature end to end, including integrations, deployment and the
                  details that keep it running. Outside of work, I build indie games
                  and side projects that catch my interest.
                </TalkText>
              </ChatDiv>
            </HeroHeader>
          </UpperInnerDiv>
        </UpperRow>
        <LowerDiv>
          <CenteredDiv>
            <DevDesktop />
          </CenteredDiv>
        </LowerDiv>
      </IconContainer>
    </BodyContainer>
  );
};

export default Home;
