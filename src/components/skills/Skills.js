import React from "react";
import {
  ReactIcon,
  MobileIcon,
  SoftwareIcon,
  UnityIcon2,
} from "../assets/icons.js";
import {
  softwareDev,
  frontendDev,
  mobileDev,
  gameDev,
} from "../assets/constants.js";
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
  // add video on hover, icon changes to color and rotates
  return (
    <>
      <SkillsContainer ref={skills}>
        <Header>My Skills</Header>
        <Skills0>
          <SkillsHeader>
            <Icon>
              <SoftwareIcon height={60} width={60} />{" "}
            </Icon>
            <Title>
              <ColorAccent background={softwareDev} />
              Software <br />
              Development{" "}
            </Title>
          </SkillsHeader>
          <DescriptionBody>
            <HTMLSnippet></HTMLSnippet>
            <Description>
              Software Dev, functional and OOP programming, Javascript, C#,
              Typescript, Python
            </Description>
          </DescriptionBody>
        </Skills0>
        <Skills1>
          <SkillsHeader>
            <Icon>
              <ReactIcon height={60} width={60} />{" "}
            </Icon>
            <Title>
              <ColorAccent background={frontendDev} width={"126px"} />
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
              <MobileIcon height={60} width={60} />{" "}
            </Icon>
            <Title>
              <ColorAccent background={mobileDev} width={"95px"} />
              Mobile <br />
              Development{" "}
            </Title>
          </SkillsHeader>
          <DescriptionBody>
            <HTMLSnippet></HTMLSnippet>
            <Description>React Native, Flutter?, iOS, Android</Description>
          </DescriptionBody>
        </Skills2>
        <Skills3>
          <SkillsHeader>
            <Icon>
              <UnityIcon2 height={60} width={60} />{" "}
            </Icon>
            <Title>
              <ColorAccent background={gameDev} width={"85px"} />
              Game <br />
              Development{" "}
            </Title>
          </SkillsHeader>
          <DescriptionBody>
            <HTMLSnippet></HTMLSnippet>
            <Description>Unity C# developer</Description>
          </DescriptionBody>
        </Skills3>
      </SkillsContainer>
    </>
  );
};

export default Skills;
