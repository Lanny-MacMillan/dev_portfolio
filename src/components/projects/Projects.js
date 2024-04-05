import React from "react";
import ProjectCard from "./ProjectCard";
import {
  theAdventure,
  tetris,
  theQuickStop,
  amiiboApp,
  vacationApp,
  crappyBird,
  geoDash,
  twoDudesNightmare,
} from "../assets/constants";

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

const Projects = ({ projects, largeScreen }) => {
  const xVarNegative = largeScreen ? -150 : -75;
  const xVarPositive = largeScreen ? 150 : 75;

  return (
    <ProjectsContainer ref={projects}>
      <Header>Projects</Header>
      <Container>
        <ProjectOne
          initial={{
            opacity: 0,
            x: xVarNegative,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <ProjectCard
            largeScreen={largeScreen}
            nameText={vacationApp.nameText}
            img={vacationApp.image}
            description={vacationApp.description}
            fullDescription={vacationApp.fullDescription}
            icons={vacationApp.icons}
            iconsLarge={vacationApp.iconsLarge}
            link={vacationApp.link}
            liveLink={vacationApp.liveLink}
            colorSplash={vacationApp.colorSplash}
            colorSplashWidth={"135px"}
            status={vacationApp.status}
            devType={vacationApp.devType}
          />
        </ProjectOne>
        <ProjectTwo
          initial={{
            opacity: 0,
            x: xVarPositive,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <ProjectCard
            largeScreen={largeScreen}
            nameText={theQuickStop.nameText}
            nameTextExpanded={theQuickStop.nameTextExpanded}
            img={theQuickStop.image}
            description={theQuickStop.description}
            fullDescription={theQuickStop.fullDescription}
            icons={theQuickStop.icons}
            iconsLarge={theQuickStop.iconsLarge}
            link={theQuickStop.link}
            liveLink={theQuickStop.liveLink}
            colorSplash={theQuickStop.colorSplash}
            status={theQuickStop.status}
            colorSplashWidth={"230px"}
            margin={"none"}
            type={"wide"}
            devType={theQuickStop.devType}
          />
        </ProjectTwo>
        <ProjectThree
          initial={{
            opacity: 0,
            x: xVarNegative,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <ProjectCard
            largeScreen={largeScreen}
            nameText={theAdventure.nameText}
            nameTextExpanded={theAdventure.nameTextExpanded}
            img={theAdventure.image}
            description={theAdventure.description}
            fullDescription={theAdventure.fullDescription}
            icons={theAdventure.icons}
            iconsLarge={theAdventure.iconsLarge}
            link={theAdventure.link}
            liveLink={theAdventure.liveLink}
            colorSplash={theAdventure.colorSplash}
            colorSplashWidth={"140px"}
            type={"wide"}
            status={theAdventure.status}
            devType={theAdventure.devType}
          />
        </ProjectThree>
        <ProjectFour
          initial={{
            opacity: 0,
            x: xVarPositive,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <ProjectCard
            largeScreen={largeScreen}
            nameText={amiiboApp.nameText}
            img={amiiboApp.image}
            description={amiiboApp.description}
            icons={amiiboApp.icons}
            iconsLarge={amiiboApp.iconsLarge}
            link={amiiboApp.link}
            colorSplash={amiiboApp.colorSplash}
            colorSplashWidth={"120px"}
          />
        </ProjectFour>
        <ProjectFive
          initial={{
            opacity: 0,
            x: xVarNegative,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <ProjectCard
            largeScreen={largeScreen}
            nameText={tetris.nameText}
            nameTextExpanded={tetris.nameTextExpanded}
            img={tetris.image}
            description={tetris.description}
            fullDescription={tetris.fullDescription}
            icons={tetris.icons}
            iconsLarge={tetris.iconsLarge}
            link={tetris.link}
            liveLink={tetris.liveLink}
            colorSplash={tetris.colorSplash}
            colorSplashWidth={"120px"}
            margin={"none"}
            status={tetris.status}
            devType={tetris.devType}
          />
        </ProjectFive>
        <ProjectSix
          initial={{
            opacity: 0,
            x: xVarPositive,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <ProjectCard
            largeScreen={largeScreen}
            nameText={twoDudesNightmare.nameText}
            nameTextExpanded={twoDudesNightmare.nameTextExpanded}
            img={twoDudesNightmare.image}
            description={twoDudesNightmare.description}
            fullDescription={twoDudesNightmare.fullDescription}
            icons={twoDudesNightmare.icons}
            iconsLarge={twoDudesNightmare.iconsLarge}
            link={twoDudesNightmare.link}
            liveLink={twoDudesNightmare.liveLink}
            colorSplash={twoDudesNightmare.colorSplash}
            colorSplashWidth={"140px"}
            margin={"none"}
            status={twoDudesNightmare.status}
            devType={twoDudesNightmare.devType}
          />
        </ProjectSix>
        <ProjectSeven
          initial={{
            opacity: 0,
            x: xVarNegative,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <ProjectCard
            largeScreen={largeScreen}
            nameText={crappyBird.nameText}
            nameTextExpanded={crappyBird.nameTextExpanded}
            img={crappyBird.image}
            description={crappyBird.description}
            fullDescription={crappyBird.fullDescription}
            icons={crappyBird.icons}
            iconsLarge={crappyBird.iconsLarge}
            link={crappyBird.link}
            liveLink={crappyBird.liveLink}
            colorSplash={crappyBird.colorSplash}
            colorSplashWidth={"125px"}
            margin={"none"}
            status={crappyBird.status}
            devType={crappyBird.devType}
          />
        </ProjectSeven>
        <ProjectEight
          initial={{
            opacity: 0,
            x: xVarPositive,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <ProjectCard
            largeScreen={largeScreen}
            nameText={geoDash.nameText}
            nameTextExpanded={geoDash.nameTextExpanded}
            img={geoDash.image}
            description={geoDash.description}
            fullDescription={geoDash.fullDescription}
            icons={geoDash.icons}
            iconsLarge={geoDash.iconsLarge}
            link={geoDash.link}
            liveLink={geoDash.liveLink}
            colorSplash={geoDash.colorSplash}
            colorSplashWidth={"155px"}
            status={geoDash.status}
            devType={geoDash.devType}
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
