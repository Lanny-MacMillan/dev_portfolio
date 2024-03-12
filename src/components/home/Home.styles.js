import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 25;
  /* margin-bottom: 2em auto; // for header */
  justify-content: space-between;
  width: 100%;
  height: 3em;
  background-color: black;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    justify-content: space-between;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const OurHerosName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 24px;
  color: white;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const ShortText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.8em;
  color: white;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    display: none;
  }

  @media only screen and (min-width: 993px) {
    display: none;
  }
`;
export const HeaderLinksDiv = styled.div`
  display: flex;
  width: 50%;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: auto;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
export const LinksContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding: 5px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const PageRefIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: white;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const Links = styled.div`
  display: flex;
  font-size: 18px;
  color: white;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: cyan;
`;
