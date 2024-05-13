import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  max-height: auto;
  /* background: linear-gradient(#c4cbca, #1f2c5b); */
  background: linear-gradient(#141c3a, #0a0f1e);
  color: white;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    min-height: 110vh;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 1193px) and (max-width: 3500px) {
    justify-content: center;
    align-items: center;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 98vh;
  margin: 0 6em 0 6em;
  letter-spacing: 1px;
  font-weight: 800;
  font-family: 'DM Sans', sans-serif;
  max-width: 1500px;
  /* max-width: 1270px; */

  h1 {
    margin: 0;
    font-size: 3em;
  }
  h2 {
    color: #4fecec;
  }
  p {
    font-size: 1.2emm;
  }
  h3 {
    width: 60vw;
    letter-spacing: 1px;
  }
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    margin: 0 1em 0 1em;
    h1 {
      margin: 0;
      font-size: 2em;
    }
    p {
      font-size: 0.8emm;
    }
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 1500px) {
    height: auto;
  }
`;

export const Image = styled.img`
  // this image container is 1270 x 425px  on laptop
  display: block;
  /* max-width: 95%; */
  width: auto;
  z-index: 10;
  height: 50vh;
  /* transition: all 0.4s ease-in-out; */
  overflow: hidden;
  object-fit: cover;
  /* object-fit: contain; */
  border: 3px solid white;
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    /* object-fit: contain; */
  }
`;
export const Header = styled.h1`
  margin: 0;
  font-size: 2em;
`;

export const SubHeader = styled.h2`
  color: #4fecec;
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    font-size: 1em;
  }
`;

export const Link = styled.a`
  font-size: 1em;
  font-family: 'DM Sans', sans-serif;
  font-weight: 800;
  color: #4fecec;
  background: none !important;
  border: none;
  padding: 0 !important;
  text-decoration: none;
  cursor: pointer;
`;

export const LowerDiv = styled.a`
  display: flex;
  flex-direction: row;
  margin: 2em 0 0 0;
  height: 15vh;
  width: 100%;
  align-items: center;
  @media only screen and (min-width: 320px) and (max-width: 1000px) {
    flex-direction: column;
    margin: 1em 0 0 0;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 1193px) and (max-width: 3500px) {
    justify-content: center;
    align-items: center;
  }
`;

export const BlueSpan = styled.span`
  color: #4fecec;
`;

export const WhiteSpan = styled.span`
  color: #ffffff;
`;

export const LeftDiv = styled.a`
  display: flex;
  width: auto;
  font-size: 1.2em;
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    font-size: 1em;
  }
  @media only screen and (min-width: 601px) and (max-width: 800px) {
    font-size: 1em;
  }
`;

export const RightDiv = styled.a`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    align-items: flex-start;
  }
`;
