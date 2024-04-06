import React from "react";
import { useLocation } from "react-router-dom";
import ShowCursor from "../assets/Tools/ShowCursor";
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
  Header,
  SubHeader,
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
    liveLink,
    link,
    devTypeOneofTwo,
    devTypeTwoofTwo,
    status,
    // colorSplash,
  } = location.state;

  const inDevelopment = status === "In_Development";
  const projectAvailable = liveLink != null;
  const repoAvailable = link != null;

  const projectLink = projectAvailable ? (
    <p>
      <Link href={liveLink} target="_blank" rel="noopener noreferrer">
        Open<WhiteSpan>_</WhiteSpan>Project<WhiteSpan>.</WhiteSpan>
      </Link>
    </p>
  ) : (
    <p>
      Link
      <BlueSpan>_</BlueSpan>
      Unavailable
      <BlueSpan>.</BlueSpan>
    </p>
  );

  const projectDetails = inDevelopment ? (
    <p>
      In
      <BlueSpan>_</BlueSpan>
      Development
      <BlueSpan>.</BlueSpan>
    </p>
  ) : (
    projectLink
  );

  const repoDetails = repoAvailable ? (
    <p>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        Source
        <WhiteSpan>_</WhiteSpan>Code
      </Link>
      <WhiteSpan>.</WhiteSpan>
    </p>
  ) : (
    <p>
      Private
      <BlueSpan>_</BlueSpan>
      Repo
      <BlueSpan>.</BlueSpan>
    </p>
  );

  return (
    <Container>
      <ShowCursor />
      <InnerContainer>
        <p>
          {devTypeOneofTwo}
          <BlueSpan>_</BlueSpan>
          {devTypeTwoofTwo}
          <BlueSpan>.</BlueSpan>
        </p>
        <Header>{nameText}</Header>
        <SubHeader>{nameTextExpanded}</SubHeader>
        <Image src={img} />
        <LowerDiv>
          <LeftDiv>
            <p>
              {fullDescription} <BlueSpan>.</BlueSpan>
            </p>
          </LeftDiv>
          <RightDiv>
            <div>
              {repoDetails}
              {projectDetails}
            </div>
          </RightDiv>
        </LowerDiv>
      </InnerContainer>
    </Container>
  );
};

export default ViewPage;
