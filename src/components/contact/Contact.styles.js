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
export const ShowDiv1 = styled.div`
  margin-left: 20%;
  background-color: rgba(255, 255, 255);
  display: block;
  position: relative;
  z-index: 100;
  width: 30%;
  height: 70%;
  padding: 10px;
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
  max-width: 100%;
`;
