import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 0.6fr 0.5fr 0.7fr;
  grid-template-rows: 0.6fr 0.8fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . ."
    "showDiv1 showDiv3 contact"
    "showDiv2 showDiv3 contact";
  background-color: purple;
`;

export const ContactDiv = styled.div`
  grid-area: contact;
  background-color: black;
`;
export const ShowDiv1 = styled.div`
  grid-area: showDiv1;
  background-color: lightblue;
`;
export const ShowDiv2 = styled.div`
  grid-area: showDiv2;
  background-color: blue;
`;
export const ShowDiv3 = styled.div`
  grid-area: showDiv3;
  background-color: teal;
`;
