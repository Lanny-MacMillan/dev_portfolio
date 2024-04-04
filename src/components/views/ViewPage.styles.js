import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  /* background: linear-gradient(#c4cbca, #1f2c5b); */

  background: linear-gradient(#141c3a, #0a0f1e);
  color: white;
  h1 {
    margin: 0;
  }
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  z-index: 10;
  height: ${(props) => (props.height ? props.height : "60%")};
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  object-fit: cover;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const Link = styled.a`
  font-size: 1em;
  font-family: "DM Sans", sans-serif;
  font-weight: 800;
  color: #4fecec;
  background: none !important;
  border: none;
  padding: 0 !important;
  text-decoration: none;
  cursor: pointer;
  @media only screen and (min-width: 320px) and (max-width: 600px) {
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
