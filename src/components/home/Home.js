import React from "react";
import {
  BodyContainer,
  IconContainer,
  HeroHeader,
  UpperRow,
  LowerDiv,
  ChatDiv,
  TalkText,
  ChatArrow,
} from "./Home.styles.js";
import { SelfIconLarge } from "../assets/icons.js";
import DevDesktop from "../assets/anim/devDesktop/DevDesktop.js";
const Home = ({ home }) => {
  return (
    <BodyContainer>
      <IconContainer ref={home}>
        <UpperRow>
          <SelfIconLarge height={"500px"} width={"500px"} />
          <HeroHeader>
            <ChatDiv>
              <ChatArrow />
              <TalkText>
                I'm Lanny,
                <br />I am a Web Developer, Indie Game Developer and Designer. I
                like to create and code simple, fun things with movement.
              </TalkText>
            </ChatDiv>
          </HeroHeader>
        </UpperRow>
        <LowerDiv>
          <DevDesktop />
        </LowerDiv>
      </IconContainer>
    </BodyContainer>
  );
};

export default Home;
