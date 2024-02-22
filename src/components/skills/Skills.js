import React from "react";
import { ReactIconColor } from "../assets/icons.js";
import {
  SkillsContainer,
  Header,
  Skills0,
  SkillsHeader,
  ColorAccent,
  Icon,
  Title,
  DescriptionBody,
  Description,
  HTMLSnippet,
  Skills1,
  Skills2,
  Skills3,
} from "./Skills.styles.js";

const Skills = ({ skills }) => {
  return (
    <>
      <SkillsContainer ref={skills}>
        <Header>My Skills</Header>
        <Skills0>
          <SkillsHeader>
            <Icon>
              <ReactIconColor height={60} width={60} />{" "}
            </Icon>
            <Title>
              <ColorAccent />
              Software <br />
              Development{" "}
            </Title>
          </SkillsHeader>
          <DescriptionBody>
            <HTMLSnippet></HTMLSnippet>
            <Description>
              Software Dev, functional and OOP programming, Javascript, C#,
              Typescript, Python - Animated screen typing
            </Description>
          </DescriptionBody>
        </Skills0>
        <Skills1>
          <SkillsHeader>
            <Icon>
              <ReactIconColor height={60} width={60} />{" "}
            </Icon>
            <Title>
              <ColorAccent background={"purple"} width={"126px"} />
              Frontend <br />
              Development{" "}
            </Title>
          </SkillsHeader>
          <DescriptionBody>
            <HTMLSnippet></HTMLSnippet>
            <Description>
              HTML css JS React, Express. Mobile first development mindset
            </Description>
          </DescriptionBody>
        </Skills1>
        <Skills2>
          <SkillsHeader>
            <Icon>
              <ReactIconColor height={60} width={60} />{" "}
            </Icon>
            <Title>
              <ColorAccent background={"blue"} width={"95px"} />
              Mobile <br />
              Development{" "}
            </Title>
          </SkillsHeader>
          <DescriptionBody>
            <HTMLSnippet></HTMLSnippet>
            <Description>React Native, Flutter, Android iOS</Description>
          </DescriptionBody>
        </Skills2>
        <Skills3>Game Development - Unity C# developer</Skills3>
      </SkillsContainer>
    </>
  );
};

export default Skills;
