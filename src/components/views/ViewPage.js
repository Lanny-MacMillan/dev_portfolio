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
    devType,
    // status,
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
        {/* <h3>{description}</h3> */}
        <LowerDiv>
          <LeftDiv>
            <h3>{fullDescription}</h3>
          </LeftDiv>
          <RightDiv>
            {" "}
            <Link href={link}>Source Code</Link>
            <br />
            <Link href={liveLink}>Open Project</Link>
          </RightDiv>
        </LowerDiv>
      </InnerContainer>
    </Container>
  );
};

export default ViewPage;
