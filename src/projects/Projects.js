import React from "react";
import { ProjectsContainer } from "./Projects.styles";
const Projects = ({ projects }) => {
  return (
    <ProjectsContainer ref={projects}>
      <h1>ProjectPage</h1>
    </ProjectsContainer>
  );
};

export default Projects;
