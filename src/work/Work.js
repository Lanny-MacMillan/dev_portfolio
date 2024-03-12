import React from "react";
// import {
//   ReactIconColor,
//   JavascriptIcon,
//   TypescriptIcon,
// } from "../components/assets/icons";
import {
  ExperienceContainer,
  Header,
  ExperienceDiv,
  ProjectCard,
  CardFooter,
} from "./Work.styles.js";

const Work = ({ work }) => {
  return (
    <>
      <ExperienceContainer ref={work}>
        <Header>Experience</Header>

        <ExperienceDiv>
          <ProjectCard>
            <strong>Thryv Inc</strong>
            <p>
              <strong>Web Developer</strong>
              <br />
              Develop features, fix bugs, Asana, Duda, Oauth, LaunchDarkly etc.
            </p>
            <CardFooter>Sept 2021 - current</CardFooter>
          </ProjectCard>
          <br />
          <ProjectCard>
            <strong>Two Dudes Games</strong>
            <p>
              <strong>Indie Game Developer</strong>
              <br />
              Creating indie games using Object Oriented Programming with Unity
              and C#
            </p>
            <CardFooter>Dec 2023 - current</CardFooter>
          </ProjectCard>
        </ExperienceDiv>
      </ExperienceContainer>
    </>
  );
};

export default Work;
