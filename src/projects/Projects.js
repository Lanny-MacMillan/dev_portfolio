import React from "react";
import theAdventureImg from "../components/assets/img/theAdventure.png";
import tetrisReact from "../components/assets/img/tetrisReact.png";
import amiiboAppImg from "../components/assets/img/amiibo.png";
import vacationImg from "../components/assets/img/vacation.png";
import geoDashImg from "../components/assets/img/geoDash.png";
import crappyBirdImg from "../components/assets/img/crappyBird.png";
import nightmareImg from "../components/assets/img/nightmare.png";
import storybookImg from "../components/assets/img/storybook.png";
import ProjectCard from "./ProjectCard";
import {
  frontendDev,
  gameDev,
  softwareDev,
} from "../components/assets/constants";

import {
  UnityIcon,
  CSharpIcon,
  ReactIconColor,
  TypescriptIcon,
  JavascriptIcon,
  StorybookIcon,
  MongoDBIcon,
  ExpressIcon,
  PostregSQLIcon,
  NodeJSIcon,
  PythonIcon,
  DjangoIcon,
} from "../components/assets/icons";

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
  const theAdventure = {
    nameText: "TheAdventure",
    colorSplash: gameDev,
    image: theAdventureImg,
    description:
      "An sidescrolling RPG platformer. Can you discover whats destroying the land, unite the magi and bring a stop to it?",
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

  const tetris = {
    nameText: "Tetris React",
    image: tetrisReact,
    description: "A clone of the original Tetris, done with React.",
    link: "link to project",
    icons: [<ReactIconColor width={40} height={40} />],
  };

  const theQuickStop = {
    nameText: "The Quickstop - Library",
    colorSplash: softwareDev,
    image: storybookImg,
    description:
      "A personal component library for all my building needs. Brings speed and ease to reusable components like modals, tooltips, buttons etc.",
    link: "link to project",
    icons: [
      <ReactIconColor width={40} height={40} />,
      <TypescriptIcon width={40} height={40} />,
      <JavascriptIcon width={40} height={40} />,
      <StorybookIcon width={35} height={35} />,
    ],
  };

  const amiiboApp = {
    nameText: "Amiibo App",
    colorSplash: frontendDev,
    image: amiiboAppImg,
    description: "A Full Stack Nintendo Amiibos App for collectors.",
    link: "link to project",
    icons: [
      <ExpressIcon width={40} height={40} />,
      <JavascriptIcon width={40} height={40} />,
      <MongoDBIcon width={40} height={40} />,
      <NodeJSIcon width={40} height={40} />,
    ],
  };

  const vacationApp = {
    nameText: "Vacation App",
    colorSplash: frontendDev,
    image: vacationImg,
    description: "Full stack application that helps users while vacationing. ",
    link: "link to project",
    icons: [
      <ReactIconColor width={40} height={40} />,
      <JavascriptIcon width={40} height={40} />,
      <PostregSQLIcon width={38} height={38} />,
      <PythonIcon width={40} height={40} />,
      <DjangoIcon width={40} height={40} />,
    ],
  };

  const crappyBird = {
    nameText: "Crappy Bird",
    colorSplash: gameDev,
    image: crappyBirdImg,
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
    colorSplash: gameDev,
    image: geoDashImg,
    description: "Geo Dash with some twists",
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

  const twoDudesNightmare = {
    nameText: "2D Nightmare",
    colorSplash: gameDev,
    image: nightmareImg,
    description: "A sidescrolling platformer created in Unity ",
    link: "link to project",
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
      <Header>Projects</Header>
      <Container>
        <ProjectOne>
          <ProjectCard
            nameText={vacationApp.nameText}
            // img={vacationApp.image}
            description={vacationApp.description}
            icons={vacationApp.icons}
            link={vacationApp.link}
            colorSplash={vacationApp.colorSplash}
            colorSplashWidth={"135px"}
          />
        </ProjectOne>
        <ProjectTwo>
          <ProjectCard
            nameText={theQuickStop.nameText}
            // img={theQuickStop.image}
            description={theQuickStop.description}
            icons={theQuickStop.icons}
            link={theQuickStop.link}
            colorSplash={theQuickStop.colorSplash}
            colorSplashWidth={"230px"}
            margin={"none"}
            type={"wide"}
            // height={"100%"}
          />
        </ProjectTwo>
        <ProjectThree>
          <ProjectCard
            nameText={theAdventure.nameText}
            img={theAdventure.image}
            description={theAdventure.description}
            icons={theAdventure.icons}
            link={theAdventure.link}
            colorSplash={theAdventure.colorSplash}
            colorSplashWidth={"140px"}
            // colorSplashPosition={"370px"}
            type={"large"}
          />
        </ProjectThree>
        <ProjectFour>
          <ProjectCard
            nameText={amiiboApp.nameText}
            img={amiiboApp.image}
            description={amiiboApp.description}
            icons={amiiboApp.icons}
            link={amiiboApp.link}
            colorSplash={amiiboApp.colorSplash}
            colorSplashWidth={"120px"}
          />
        </ProjectFour>
        <ProjectFive>
          <ProjectCard
            nameText={tetris.nameText}
            img={tetris.image}
            description={tetris.description}
            icons={tetris.icons}
            link={tetris.link}
            colorSplash={tetris.colorSplash}
            colorSplashWidth={"120px"}
            margin={"none"}
          />
        </ProjectFive>
        <ProjectSix>
          <ProjectCard
            nameText={twoDudesNightmare.nameText}
            img={twoDudesNightmare.image}
            description={twoDudesNightmare.description}
            icons={twoDudesNightmare.icons}
            link={twoDudesNightmare.link}
            colorSplash={twoDudesNightmare.colorSplash}
            colorSplashWidth={"140px"}
            // colorSplashPosition={"104px"}
            margin={"none"}
          />
        </ProjectSix>
        <ProjectSeven>
          <ProjectCard
            nameText={crappyBird.nameText}
            img={crappyBird.image}
            description={crappyBird.description}
            icons={crappyBird.icons}
            link={crappyBird.link}
            colorSplash={crappyBird.colorSplash}
            colorSplashWidth={"125px"}
            // colorSplashPosition={"98px"}
            margin={"none"}
          />
        </ProjectSeven>
        <ProjectEight>
          <ProjectCard
            nameText={geoDash.nameText}
            img={geoDash.image}
            description={geoDash.description}
            icons={geoDash.icons}
            link={geoDash.link}
            colorSplash={geoDash.colorSplash}
            colorSplashWidth={"155px"}
            // colorSplashPosition={"98px"}
            // padding={"20px 30px 0px 30px"}
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
