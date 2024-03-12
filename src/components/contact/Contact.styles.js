import styled from "styled-components";
// import { Input } from '@lanny-macmillan/thequickstop'

export const ContactContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background: #1a191d;
  /* padding-bottom: 30px; */
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    height: 100vh;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const ContactDiv = styled.div`
  // grid-area: contact;
  /* display: flex;
  flex-direction: column; */
  margin-top: 50px;
  width: 100%;
  height: 100%;
`;

export const PaddedDiv = styled.div`
  margin: 0 2em 0 2em;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    margin: 0 1em 0 1em;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const ShowDiv1 = styled.div`
  margin-left: 20%;
  background-color: rgba(255, 255, 255);
  // display: block;
  position: relative;
  z-index: 100;
  width: 30%;
  height: 70%;
  // padding: 10px;
  border-radius: 3px 3px 3px 3px;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  /* box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
  inset -5px -5px 15px rgba(255, 255, 255, 0.1),
  5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1); */

  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    /* margin: 0px 0px 0px 30px; */
    width: auto;
    height: 45%;
    bottom: 10%;
    position: relative;
    right: 10%;
    z-index: 10;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    width: 70%;
    height: 55%;
    bottom: 10%;
    position: relative;
    right: 10%;
    z-index: 10;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const ShowDiv2 = styled.div`
  margin-left: 8%;
  background-color: #f0f0f0;
  /* background-color: rgba(255, 255, 255, 1); */
  display: block;
  width: 30%;
  height: 70%;
  padding: 10px;
  border-radius: 3px 3px 3px 3px;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  bottom: 60%;
  position: relative;
  left: 40%;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    /* margin: 0 20px 0 20px; */
    width: 83%;
    height: 60%;
    bottom: 11.5%;
    position: relative;
    left: 6%;
    z-index: 100;
    margin-left: 0%;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    width: 70%;
    height: 55%;
    bottom: 20%;
    position: relative;
    left: 10%;
    z-index: 100;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  transition: all 0.4s ease-in-out;
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4.5em;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  padding-bottom: 40px;
  color: white;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    font-size: 3.5em;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  /* padding-bottom: 30px; */
  color: black;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    text-align: center;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const CardSubHeader = styled.div`
  // grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  padding-bottom: 30px;
  color: black;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    text-align: center;
    padding-bottom: 25px;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const CardForm = styled.div`
  display: flex;
  flex-direction: column;
  /* position: relative; */
  height: auto;
  z-index: 99;
  color: black;
  height: 125px;
  @media only screen and (min-width: 320px) and (max-width: 600px) {
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
// export const StyledInput = styled(Input)`
//   // max-height: 35px
//   // margin-top: 12px;
//   // padding-bottom: 8px
// `;
export const CardFooter = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  padding-bottom: 30px;
  color: black;
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    /* height: 175px; */
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
export const IconsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
