import React from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  InnerContainer,
  Image,
  Link,
  LowerDiv,
  LeftDiv,
  RightDiv,
} from "./ViewPage.styles";
import Main from "../Main";

const ViewPage = () => {
  const location = useLocation();

  if (location.state === null) {
    return <Main />;
  }

  const {
    nameText,
    nameTextExpanded,
    img,
    fullDescription,
    // description,
    liveLink,
    link,
    devTypeOneofTwo,
    devTypeTwoofTwo,
    status,
    // colorSplash,
  } = location.state;

  const inDevelopment = status === "In_Development";
  const projectAvailable = liveLink != null;

  const ProjectLink = () => {
    return projectAvailable ? (
      <Link href={liveLink} target="_blank" rel="noopener noreferrer">
        Open_Project
      </Link>
    ) : (
      <p>
        Link
        <span>_</span>
        Unavailable
        <span>.</span>
      </p>
    );
  };
  const ProjectDetails = () => {
    return inDevelopment ? (
      <p>
        In
        <span>_</span>
        Development
        <span>.</span>
      </p>
    ) : (
      <ProjectLink />
    );
  };
  return (
    <Container>
      <InnerContainer>
        <p>
          {devTypeOneofTwo}
          <span>_</span>
          {devTypeTwoofTwo}
          <span>.</span>
        </p>
        <h1>{nameText}</h1>
        <h2>{nameTextExpanded}</h2>
        <Image src={img} />
        <LowerDiv>
          <LeftDiv>
            <p>
              {fullDescription} <span>.</span>
            </p>
          </LeftDiv>
          <RightDiv>
            <Link href={link} target="_blank" rel="noopener noreferrer">
              Source_Code
            </Link>
            <br />
            <ProjectDetails />
          </RightDiv>
        </LowerDiv>
      </InnerContainer>
    </Container>
  );
};

export default ViewPage;
