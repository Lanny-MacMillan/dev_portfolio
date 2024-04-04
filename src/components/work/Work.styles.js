import styled from "styled-components";
import { gameDev } from "../assets/constants.js";

export const ExperienceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: auto;
  padding: 30px;
  margin: 0;
  /* background-image: linear-gradient(#141c3a, #2f4289); */
  background-image: linear-gradient(#0a0f1e, #2f4289);

  /* border: 1px solid teal; */
  color: #224;
  /* background: #1a191d; */
`;
export const Container = styled.div`
  max-width: 1500px;
  height: 100vh;
  display: grid;
  position: relative;
  font-weight: 300;
  min-width: 100%;
  -webkit-font-smoothing: antialiased;
  grid-template-columns: 0.3fr 1fr 1fr 0.3fr;
  grid-template-rows: 0.2fr 0.5fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . ."
    ". header header ."
    ". experienceDiv experienceDiv ."
    ". experienceDiv experienceDiv ."
    ". . . .";

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    height: 100vh;
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
    height: 100vh;
    grid-template-columns: 0.1fr 1fr 1fr 0.1fr;
    grid-template-rows: 0.1fr 0.5fr 1fr 1fr 1fr;
    gap: 0px 0px;
  }

  @media only screen and (min-width: 1500px) {
    min-width: 1500px;
  }
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
  height: 400px;
`;

export const ProjectCard = styled.div`
  /* max-width: 300px; */
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid white;

  font-size: 1em;
  padding: 2em 3em 2em 4em;
  border-radius: 10px;
  /* background-color: rgba(255, 255, 255, 0.35); */
  /* box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25); */
  /* box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1); */
  backdrop-filter: blur(15px);
  color: white;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    min-height: 125px;
    font-size: 0.9em;
    padding: 15px 10px 10px 20px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    min-height: 125px;
    font-size: 0.9em;
    padding: 15px 10px 10px 20px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const CardHeader = styled.div`
  color: white;
  /* color: ${gameDev}; */
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 0.65em;
  color: white;
  /* color: #446; */

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 0.65em;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 0.75em;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// ========================================================================================

export const TimeLine = styled.div`
  margin: 30px auto;
  padding: 20px;
`;

export const Outer = styled.div`
  border-left: 4px solid white;
  font-family: "DM Sans", sans-serif;
  margin: 50px 0 50px 0;
`;

export const Card = styled.div`
  position: relative;
  margin: 0 0 20px 20px;
  padding: 10px;
  color: white;
  max-width: 1200px;

  @media only screen and (min-width: 993px) and (max-width: 1400px) {
    max-width: 900px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.div`
  color: #4fecec;
  position: relative;
  font-weight: 800;
  &:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: #141c3a;
    border-radius: 999px;
    left: -40px;
    border: 3px solid #4fecec;
  }
`;

export const JobTitle = styled.div`
  color: #4fecec;
`;

export const Smalltext = styled.div`
  font-size: 0.85em;
  color: white;
`;
