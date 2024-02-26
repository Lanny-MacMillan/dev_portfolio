import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background: #1a191d;
`;

export const ContactDiv = styled.div`
  // grid-area: contact;
  // display: flex;
  // flex-direction: row;
  margin-top: 50px;
  width: 100%;
  height: 100%;
`;

export const PaddedDiv = styled.div`
  margin: 0 2em 0 3em;
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
  // box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
  //   inset -5px -5px 15px rgba(255, 255, 255, 0.1),
  //   5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);

  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`;

export const ShowDiv2 = styled.div`
  margin-left: 8%;
  background-color: rgba(255, 255, 255, 0.6);
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
  font-size: 5em;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  padding-bottom: 30px;
  color: white;
`;
export const CardHeader = styled.div`
  // grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  padding-bottom: 30px;
  color: black;
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
`;
export const CardForm = styled.div`
  // grid-area: header;
  display: flex;
  // justify-content: center;
  // align-items: center;
  // font-size: 1em;
  // font-family: "DM Sans", sans-serif;
  // font-optical-sizing: auto;
  // font-weight: 800;
  // font-style: normal;
  // padding-bottom: 30px;
  color: black;
`;
