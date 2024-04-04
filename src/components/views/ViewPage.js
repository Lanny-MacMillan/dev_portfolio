import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "./ViewPage.styles";
import { Image, Link } from "./ViewPage.styles";

const ViewPage = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <Container>
      <h1>{data.nameText}</h1>
      <Image src={data.img} />
      <h3>{data.fullDescription}</h3>
      <h3>{data.description}</h3>
      <Link href={data.link}>Source Code</Link>
      <br />
      <Link href={data.liveLink}>Play Game</Link>
      <p>{data.devType}</p>
      <p>{data.status}</p>
      <p>{data.colorSplash}</p>
    </Container>
  );
};

export default ViewPage;
