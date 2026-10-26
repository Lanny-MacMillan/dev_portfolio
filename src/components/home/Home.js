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
                  <br />
                  {largeScreen
                    ? "A product engineer working across web, integrations, cloud and data. I build features in React, TypeScript and Node, then stay with them after launch: tracing tricky analytics failures to their root cause, cleaning up data safely, rolling changes out behind feature flags, and writing the docs the next person needs. I've been the engineering contact that support and fulfillment teams call when something breaks. Outside of work, I build indie games and side projects that catch my interest."
                    : 'A product engineer working across web, integrations, cloud and data. I build features in React, TypeScript and Node, then stay with them after launch: finding root causes, cleaning up data safely, shipping behind feature flags and writing the docs the next person needs. Outside of work, I build indie games and side projects.'}
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
