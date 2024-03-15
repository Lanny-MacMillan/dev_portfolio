import React from "react";
import {
  ReactIcon,
  MobileIcon,
  SoftwareIcon,
  UnityIcon2,
  Ptag,
  ClosingPtag,
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
  Container,
  VertLine,
} from "./Skills.styles.js";

const Skills = ({ skills }) => {
  // add video on hover, icon changes to color and rotates
  return (
    <>
      <SkillsContainer ref={skills}>
        <Container>
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
              <HTMLSnippet>
                {" "}
                <Ptag letterFill={mobileDev} height={25} width={25} />{" "}
                <VertLine borderColor={mobileDev} height={"75px"} />
                <ClosingPtag
                  letterFill={mobileDev}
                  height={35}
                  width={35}
                />{" "}
              </HTMLSnippet>
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
              <HTMLSnippet>
                <Ptag letterFill={mobileDev} height={25} width={25} />{" "}
                <VertLine borderColor={mobileDev} height={"60px"} />
                <ClosingPtag
                  letterFill={mobileDev}
                  height={35}
                  width={35}
                />{" "}
              </HTMLSnippet>
              <Description>
                HTML, CSS, JS, React, Express. Mobile first development mindset
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
              <HTMLSnippet>
                {" "}
                <Ptag letterFill={mobileDev} height={25} width={25} />{" "}
                <VertLine borderColor={mobileDev} />
                <ClosingPtag
                  letterFill={mobileDev}
                  height={35}
                  width={35}
                />{" "}
              </HTMLSnippet>
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
              <HTMLSnippet>
                {" "}
                <Ptag letterFill={mobileDev} height={25} width={25} />{" "}
                <VertLine borderColor={mobileDev} />
                <ClosingPtag
                  letterFill={mobileDev}
                  height={35}
                  width={35}
                />{" "}
              </HTMLSnippet>
              <Description>Unity C# developer</Description>
            </DescriptionBody>
          </Skills3>
        </Container>
      </SkillsContainer>
    </>
  );
};

export default Skills;
