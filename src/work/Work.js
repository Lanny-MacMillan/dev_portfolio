import React from "react";
import {
  ReactIconColor,
  JavascriptIcon,
  TypescriptIcon,
} from "../components/assets/icons";
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
        <Header>My Experience</Header>

        <ExperienceDiv>
          <ProjectCard>
            <strong>Thryv Inc</strong>
            <p>
              <strong>Web Developer</strong>
              <br />A personal component library for all my building needs.
              Brings speed and ease with reusable components like modals,
              tooltips,buttons etc.
            </p>
            {/* <div style={{ display: "flex", justifyContent: "center" }}>
              <ReactIconColor />
              <TypescriptIcon />
              <JavascriptIcon logoFill={"black"} backgroundFill={"yellow"} />
            </div> */}

            <CardFooter>Sept 2021 - current</CardFooter>
          </ProjectCard>
        </ExperienceDiv>
      </ExperienceContainer>
    </>
  );
};

export default Work;
