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
  BlueSpan,
  WhiteSpan,
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
        Open<WhiteSpan>_</WhiteSpan>Project<WhiteSpan>.</WhiteSpan>
      </Link>
    ) : (
      <p>
        Link
        <BlueSpan>_</BlueSpan>
        Unavailable
        <BlueSpan>.</BlueSpan>
      </p>
    );
  };
  const ProjectDetails = () => {
    return inDevelopment ? (
      <p>
        In
        <BlueSpan>_</BlueSpan>
        Development
        <BlueSpan>.</BlueSpan>
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
          <BlueSpan>_</BlueSpan>
          {devTypeTwoofTwo}
          <BlueSpan>.</BlueSpan>
        </p>
        <h1>{nameText}</h1>
        <h2>{nameTextExpanded}</h2>
        <Image src={img} />
        <LowerDiv>
          <LeftDiv>
            <p>
              {fullDescription} <BlueSpan>.</BlueSpan>
            </p>
          </LeftDiv>
          <RightDiv>
            <div>
              <Link href={link} target="_blank" rel="noopener noreferrer">
                Source
                <WhiteSpan>_</WhiteSpan>Code
              </Link>
              <WhiteSpan>.</WhiteSpan>
              <br />
              <ProjectDetails />
            </div>
          </RightDiv>
        </LowerDiv>
      </InnerContainer>
    </Container>
  );
};

export default ViewPage;
