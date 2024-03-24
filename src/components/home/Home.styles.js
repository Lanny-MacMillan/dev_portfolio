import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 25;
  /* margin-bottom: 2em auto; // for header */
  justify-content: space-between;
  width: 100%;
  height: 3em;
  background-color: #c4cbca;

  /* background-color: #141c3a; */

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
  font-weight: 800;
  margin-left: 2em;
  font-family: "DM Sans", sans-serif;
  color: #141c3a;

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
  font-weight: 800;
  font-family: "DM Sans", sans-serif;

  /* color: white; */
  color: #141c3a;

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
  position: relative;
  z-index: 80;
  display: flex;
  width: auto;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
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
  padding: 20px;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding: 5px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    padding: 5px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const PageRefIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  font-weight: 800;
  font-family: "DM Sans", sans-serif;
  /* color: white; */
  color: #141c3a;
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
  font-weight: 800;
  font-family: "DM Sans", sans-serif;

  /* color: white; */
  color: #141c3a;

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
  flex-direction: column;
  width: 100%;
  height: 100vh;
  /* background: #000; */
  background: linear-gradient(#c4cbca, #141c3a);

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    height: 100vh;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    height: 100vh;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    height: 100vh;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* border: 1px solid red; */
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    justify-content: space-between;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const ImageMobile = styled.img`
  /* overflow: hidden; */
  /* object-fit: contain; */
  /* object-fit: cover; */
  object-fit: fill;

  width: 100vw;
  height: 100%;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 16px;
    object-fit: cover;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    object-fit: cover;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    object-fit: cover;
  }
`;
export const HeroHeader = styled.div`
  align-self: center;
  text-align: center;
  width: 100%;
  /* border: 5px solid #4fecec; */
  padding-top: 15px;
  border-radius: 15px;
  color: #141c3a;
  font-weight: 800;
  font-family: "DM Sans", sans-serif;
  font-size: 1em;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 0.7em;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
export const UpperRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 50%;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
export const LowerDiv = styled.div`
  align-self: center;
  // alignItems: "flex-end",
  width: 80%;
  max-width: 1600px;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
