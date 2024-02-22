import React from "react";
import {
  SkillsContainer,
  Header,
  Skills0,
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
          Software Dev, functional and OOP programming, Javascript, C#,
          Typescript, Python - Animated screen typing
        </Skills0>
        <Skills1>
          Frontend Dev- UI - HTML css JS React, Express. Mobile first
          development mindset - React logo spins
        </Skills1>
        <Skills2>
          Mobile Development - React Native, Flutter, Android iOS?
        </Skills2>
        <Skills3>Game Development - Unity C# developer</Skills3>
      </SkillsContainer>
    </>
  );
};

export default Skills;