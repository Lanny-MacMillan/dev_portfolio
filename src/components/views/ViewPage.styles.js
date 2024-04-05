import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  max-height: auto;
  /* background: linear-gradient(#c4cbca, #1f2c5b); */
  background: linear-gradient(#141c3a, #0a0f1e);
  color: white;
  display: flex;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  margin: 2em 0 0 6em;
  letter-spacing: 1px;
  font-weight: 800;
  font-family: "DM Sans", sans-serif;
  /* border: 1px solid red; */
  h1 {
    margin: 0;
    font-size: 3em;
    /* border: 1px solid orange; */
  }
  h2 {
    color: #4fecec;
  }
  span {
    color: #4fecec;
  }
  p {
    font-size: 1.2emm;
  }
  h3 {
    width: 60vw;
    letter-spacing: 1px;
    /* border: 1px solid white; */
  }
`;

export const Image = styled.img`
  display: block;
  /* max-width: 80%; */
  width: 90%;
  z-index: 10;
  height: 50vh;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  object-fit: cover;
  border: 3px solid white;

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

export const LowerDiv = styled.a`
  display: flex;
  flex-direction: row;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const LeftDiv = styled.a`
  display: flex;
`;

export const RightDiv = styled.a`
  display: flex;
  width: 100%;
  // border: "1px solid red",
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    align-items: flex-start;
  }
`;

export const Button = styled.button`
  font-size: 1em;
  font-family: "DM Sans", sans-serif;
  font-weight: 800;
  color: #4fecec;
  background: none !important;
  border: none;
  padding: 0 !important;
  text-decoration: none;
  cursor: pointer;
`;
