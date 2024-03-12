import styled from "styled-components";
import { gameDev } from "../components/assets/constants.js";

export const ExperienceContainer = styled.div`
  height: 100vh;
  display: grid;
  position: relative;
  // margin: 2em auto; // for header
  font-weight: 300;
  /* border: 1px solid green; */

  -webkit-font-smoothing: antialiased;
  grid-template-columns: 0.7fr 1fr 1fr 0.7fr;
  grid-template-rows: 0.5fr 0.5fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . ."
    ". header header ."
    ". experienceDiv experienceDiv ."
    ". experienceDiv experienceDiv ."
    ". . . .";
  background: #1a191d;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    grid-template-columns: 0.1fr 1fr 1fr 0.1fr;
    grid-template-rows: 0.1fr 0.5fr 1fr 1fr 1fr;
    gap: 0px 0px;

    grid-template-areas:
      ". . . ."
      ". header header ."
      ". experienceDiv experienceDiv ."
      ". experienceDiv experienceDiv ."
      ". . . .";
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

// export const Header = styled.div`
//   grid-area: header;
//   background-color: grey;
// `;
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
  color: white;
  padding-bottom: 30px;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 3.5em;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const ExperienceDiv = styled.div`
  grid-area: experienceDiv;
  // background-color: blue;
`;
// Card One - GlassMorphism UI Design
export const ProjectCard = styled.div`
  max-width: 300px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1em;

  max-width: 100%;
  height: 20%;
  padding: 35px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  /* box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25); */
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    min-height: 125px;
    font-size: 0.9em;
    padding: 15px 10px 10px 20px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const CardHeader = styled.div`
  color: ${gameDev};
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 0.65em;
  color: #446;
`;

export const Smalltext = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
