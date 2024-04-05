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
  Button,
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
    devType,
    status,
    // colorSplash,
  } = location.state;

  return (
    <Container>
      <InnerContainer>
        <p>
          {devType}
          <span>.</span>
        </p>
        <h1>{nameText}</h1>
        <h2>{nameTextExpanded}</h2>
        <Image src={img} />
        <LowerDiv>
          <LeftDiv>
            <h3>{fullDescription}</h3>
          </LeftDiv>
          <RightDiv>
            {" "}
            <Link href={link} target="_blank" rel="noopener noreferrer">
              Source_Code
            </Link>
            <br />
            {status === "In_Development" ? (
              <Button>{status}</Button>
            ) : (
              <Link href={liveLink} target="_blank" rel="noopener noreferrer">
                Open_Project
              </Link>
            )}
          </RightDiv>
        </LowerDiv>
      </InnerContainer>
    </Container>
  );
};

export default ViewPage;
