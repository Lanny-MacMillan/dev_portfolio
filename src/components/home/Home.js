import React from "react";
import {
  BodyContainer,
  IconContainer,
  HeroHeader,
  UpperRow,
  LowerDiv,
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
            <h1>Web Developer, Game Developer and Designer</h1>
            <h1>I like to code fun things from games to interactive sites</h1>
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
