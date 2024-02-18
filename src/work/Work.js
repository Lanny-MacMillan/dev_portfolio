import React from "react";
import { WorkContainer } from "./Work.styles";

const Work = ({ work }) => {
  return (
    <WorkContainer ref={work}>
      <h1>ProjectPage</h1>
    </WorkContainer>
  );
};

export default Work;
