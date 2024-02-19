import React from "react";
import { ExperienceContainer, Header, ExperienceDiv } from "./Work.styles";

const Work = ({ work }) => {
  return (
    <>
      <ExperienceContainer ref={work}>
        <Header>Professional XP</Header>
        <ExperienceDiv>Accordian XP Listing</ExperienceDiv>
      </ExperienceContainer>
    </>
  );
};

export default Work;
