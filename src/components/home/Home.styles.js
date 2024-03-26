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
  background: linear-gradient(#c4cbca, #1f2c5b);
  /* background: linear-gradient(#c4cbca, #141c3a); */
  /* border-bottom: 3px solid white; */
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
    /* justify-content: space-between; */
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
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 70vh;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
export const UpperInnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 100px;
  max-width: 1400px;

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
  display: flex;
  align-self: center;
  align-items: flex-end;
  width: 80%;
  max-width: 1600px;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 99%;
    /* height: 30vh; */
    /* border: 1px solid blue; */
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
export const ChatDiv = styled.div`
  margin: 40px;
  display: inline-block;
  position: relative;
  /* width: 100%; */
  font-weight: 800;
  font-family: "DM Sans", sans-serif;
  font-size: 1em;
  height: auto;
  background-color: #141c3a;
  border: 8px solid #4fecec;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: auto;
    font-size: 1em;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const TalkText = styled.div`
  padding: 0px 0px 40px 20px;
  text-align: left;
  line-height: 1.5em;
  color: white;
  font-weight: 800;
  font-family: "DM Sans", sans-serif;
  font-size: 1.2em;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding: 25px 20px 25px 20px;
    /* text-align: center; */
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const ChatArrow = styled.div`
  padding: 1em;
  text-align: left;
  line-height: 1.5em;
  &:before {
    content: " ";
    position: absolute;
    width: 0;
    height: 0;
    left: -40px;
    right: auto;
    top: -8px;
    bottom: auto;
    border: 32px solid;
    border-color: #4fecec transparent transparent transparent;
  }
  &:after {
    content: " ";
    position: absolute;
    width: 0;
    height: 0;
    left: -20px;
    right: auto;
    top: 0px;
    bottom: auto;
    border: 22px solid;
    border-color: #141c3a transparent transparent transparent;
  }
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
export const CenteredDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
