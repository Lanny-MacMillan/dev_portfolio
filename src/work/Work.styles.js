import styled from "styled-components";

export const ExperienceContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 0.7fr 1fr 1fr 0.7fr;
  grid-template-rows: 0.5fr 0.5fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . ."
    ". header header ."
    ". experienceDiv experienceDiv ."
    ". experienceDiv experienceDiv ."
    ". . . .";
  background-color: green;
`;

export const Header = styled.div`
  grid-area: header;
  background-color: grey;
`;

export const ExperienceDiv = styled.div`
  grid-area: experienceDiv;
  background-color: blue;
`;
