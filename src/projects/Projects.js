import React from "react";
import theAdventureImg from "../components/assets/img/theAdventure.png";
import {
  UnityIcon,
  CSharpIcon,
  ReactIconColor,
  TypescriptIcon,
  JavascriptIcon,
} from "../components/assets/icons";

import ProjectCard from "./ProjectCard";
import {
  ProjectsContainer,
  Container,
  ProjectOne,
  ProjectTwo,
  ProjectThree,
  ProjectFour,
  ProjectFive,
  ProjectSix,
  ProjectSeven,
  ProjectEight,
  Header,
} from "./Projects.styles";

const Projects = ({ projects }) => {
  //
  const theAdventure = {
    nameText: "TheAdventure",
    image: theAdventureImg,
    description:
      "An sidescrolling RPG platformer. Can you discover whats destroying the land, unite the magi and bring a stop to it?",
    link: "link to project",
    icons: [
      <UnityIcon
        width={60}
        height={60}
        logoFill={"white"}
        backgroundFill={"#262626"}
      />,
      <CSharpIcon width={60} height={60} logoFill={"white"} />,
    ],
  };

  const tetris = {
    nameText: "Tetric React",
    image: theAdventureImg,
    description: "A clone of the original Tetris, done with React.",
    link: "link to project",
    icons: [<ReactIconColor width={40} height={40} />],
  };

  const theQuickStop = {
    nameText: "The Quickstop - Component Library",
    image: theAdventureImg,
    description:
      "A personal component library for all my building needs. Brings speed and ease to reusable components like modals, tooltips, buttons etc.",
    link: "link to project",
    icons: [
      <ReactIconColor width={40} height={40} />,
      <TypescriptIcon width={40} height={40} />,
      <JavascriptIcon width={40} height={40} />,
      // Storybook Icon here
    ],
  };

  const amiiboApp = {
    nameText: "Amiibo App",
    image: theAdventureImg,
    description:
      "A Full Stack Nintendo Amiibos App for collectors. You can add Amiibos from your personal collection and gain information about them inclucing game functionality.",
    link: "link to project",
    icons: [
      <JavascriptIcon width={40} height={40} />,
      // MongoDB Icon
      // Express Icon
      // Node JS Icon
      // EJS
    ],
  };

  const vacationApp = {
    nameText: "Vacation App",
    image: theAdventureImg,
    description:
      "Vacation is a full stack application that helps users while vaationing. ",
    link: "link to project",
    icons: [
      <ReactIconColor width={40} height={40} />,
      <JavascriptIcon width={40} height={40} />,
      // Python3 Icon
      // Django Icon
      // PostregSQL Icon
      // NodeJS Icon
    ],
  };

  const crappyBird = {
    nameText: "Crappy Bird",
    image: theAdventureImg,
    description: "A clone of the popular flappy bird",
    link: "link to project",
    icons: [
      <UnityIcon
        width={40}
        height={40}
        logoFill={"white"}
        backgroundFill={"#262626"}
      />,
      <CSharpIcon width={40} height={40} logoFill={"white"} />,
    ],
  };

  const geoDash = {
    nameText: "Geometry Dash",
    image: theAdventureImg,
    description:
      "Working on a a version of geometry dash that will have v.1, v.2 and a new v.3 with all new rules and gameModes",
    link: "",
    icons: [
      <UnityIcon
        width={40}
        height={40}
        logoFill={"white"}
        backgroundFill={"#262626"}
      />,
      <CSharpIcon width={40} height={40} logoFill={"white"} />,
    ],
  };

  const twoDudesNightmare = {
    nameText: "Two Dudes Nightmare",
    image: theAdventureImg,
    description:
      "An sidescrolling RPG platformer. Can you discover whats destroying the land, unite the magi and bring a stop to it?",
    link: "",
    icons: [
      <UnityIcon
        width={40}
        height={40}
        logoFill={"white"}
        backgroundFill={"#262626"}
      />,
      <CSharpIcon width={40} height={40} logoFill={"white"} />,
      // Aesprite Icon
    ],
  };

  return (
    <ProjectsContainer ref={projects}>
      <Header>My Projects</Header>
      <Container>
        <ProjectOne>
          <ProjectCard
            nameText={vacationApp.nameText}
            img={vacationApp.image}
            description={vacationApp.description}
            icons={vacationApp.icons}
            link={vacationApp.link}
          />
        </ProjectOne>
        <ProjectTwo>
          <ProjectCard
            nameText={theQuickStop.nameText}
            img={theQuickStop.image}
            description={theQuickStop.description}
            icons={theQuickStop.icons}
            link={theQuickStop.link}
          />
        </ProjectTwo>
        <ProjectThree>
          {" "}
          <ProjectCard
            nameText={theAdventure.nameText}
            img={theAdventure.image}
            description={theAdventure.description}
            icons={theAdventure.icons}
            link={theAdventure.link}
            height={"100%"}
            imgHeight={"800px"}
          />
        </ProjectThree>
        <ProjectFour>
          {" "}
          <ProjectCard
            nameText={amiiboApp.nameText}
            img={amiiboApp.image}
            description={amiiboApp.description}
            icons={amiiboApp.icons}
            link={amiiboApp.link}
          />
        </ProjectFour>
        <ProjectFive>
          {" "}
          <ProjectCard
            nameText={tetris.nameText}
            img={tetris.image}
            description={tetris.description}
            icons={tetris.icons}
            link={tetris.link}
          />
        </ProjectFive>
        <ProjectSix>
          {" "}
          <ProjectCard
            nameText={twoDudesNightmare.nameText}
            img={twoDudesNightmare.image}
            description={twoDudesNightmare.description}
            icons={twoDudesNightmare.icons}
            link={twoDudesNightmare.link}
          />
        </ProjectSix>
        <ProjectSeven>
          {" "}
          <ProjectCard
            nameText={crappyBird.nameText}
            img={crappyBird.image}
            description={crappyBird.description}
            icons={crappyBird.icons}
            link={crappyBird.link}
          />
        </ProjectSeven>
        <ProjectEight>
          {" "}
          <ProjectCard
            nameText={geoDash.nameText}
            img={geoDash.image}
            description={geoDash.description}
            icons={geoDash.icons}
            link={geoDash.link}
          />
        </ProjectEight>
      </Container>
      {/* Card Two - Nuemorphism UI Design */}
      {/* <ProjectCard2>
        <Box>
          <Content>
            <ContentH2>Tetris</ContentH2>
            <ContentH3>React JS</ContentH3>
            <ContentP>
              A clone of the original Tetris, done with React.
            </ContentP>

            <ContentA href="#">Read More</ContentA>
            <SkillsDiv>
              <ReactIconColor />
              <JavascriptIcon logoFill={"black"} backgroundFill={"yellow"} />
            </SkillsDiv>
          </Content>
        </Box>
      </ProjectCard2> */}
      {/* Card Three - Nuemorphism UI Design */}
    </ProjectsContainer>
  );
};

export default Projects;
