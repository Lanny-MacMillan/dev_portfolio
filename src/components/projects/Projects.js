import React from 'react';
import ProjectCard from './ProjectCard';
import {
  theAdventure,
  tetris,
  theQuickStop,
  thryvInc,
  crappyBird,
  geoDash,
  twoDudesNightmare,
  aiToolbox,
} from '../assets/constants';

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
} from './Projects.styles';

const Projects = ({ projects, largeScreen }) => {
  const xVarNegative = largeScreen ? -150 : -55;
  const xVarPositive = largeScreen ? 150 : 55;

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
            nameText={aiToolbox.nameText}
            nameTextExpanded={aiToolbox.nameTextExpanded}
            img={aiToolbox.image}
            gameplayImage={aiToolbox.gameplayImage}
            gameplayImageTwo={aiToolbox.gameplayImageTwo}
            description={aiToolbox.description}
            fullDescription={aiToolbox.fullDescription}
            icons={aiToolbox.icons}
            iconsLarge={aiToolbox.iconsLarge}
            link={aiToolbox.link}
            liveLink={aiToolbox.liveLink}
            colorSplash={aiToolbox.colorSplash}
            colorSplashWidth={'110px'}
            status={aiToolbox.status}
            devTypeOneofTwo={aiToolbox.devTypeOneofTwo}
            devTypeTwoofTwo={aiToolbox.devTypeTwoofTwo}
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
            gameplayImage={theQuickStop.gameplayImage}
            gameplayImageTwo={theQuickStop.gameplayImageTwo}
            description={theQuickStop.description}
            fullDescription={theQuickStop.fullDescription}
            icons={theQuickStop.icons}
            iconsLarge={theQuickStop.iconsLarge}
            link={theQuickStop.link}
            liveLink={theQuickStop.liveLink}
            colorSplash={theQuickStop.colorSplash}
            status={theQuickStop.status}
            colorSplashWidth={'230px'}
            margin={'none'}
            type={'wide'}
            devTypeOneofTwo={theQuickStop.devTypeOneofTwo}
            devTypeTwoofTwo={theQuickStop.devTypeTwoofTwo}
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
            nameText={thryvInc.nameText}
            nameTextExpanded={thryvInc.nameTextExpanded}
            img={thryvInc.image}
            gameplayImage={thryvInc.gameplayImage}
            gameplayImageTwo={thryvInc.gameplayImageTwo}
            description={thryvInc.description}
            fullDescription={thryvInc.fullDescription}
            icons={thryvInc.icons}
            iconsLarge={thryvInc.iconsLarge}
            link={thryvInc.link}
            liveLink={thryvInc.liveLink}
            colorSplash={thryvInc.colorSplash}
            colorSplashWidth={'65px'}
            margin={'none'}
            status={thryvInc.status}
            devTypeOneofTwo={thryvInc.devTypeOneofTwo}
            devTypeTwoofTwo={thryvInc.devTypeTwoofTwo}
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
            nameText={tetris.nameText}
            nameTextExpanded={tetris.nameTextExpanded}
            img={tetris.image}
            gameplayImage={tetris.gameplayImage}
            gameplayImageTwo={tetris.gameplayImageTwo}
            description={tetris.description}
            fullDescription={tetris.fullDescription}
            icons={tetris.icons}
            iconsLarge={tetris.iconsLarge}
            link={tetris.link}
            liveLink={tetris.liveLink}
            colorSplash={tetris.colorSplash}
            colorSplashWidth={'120px'}
            margin={'none'}
            status={tetris.status}
            devTypeOneofTwo={tetris.devTypeOneofTwo}
            devTypeTwoofTwo={tetris.devTypeTwoofTwo}
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
            nameText={twoDudesNightmare.nameText}
            nameTextExpanded={twoDudesNightmare.nameTextExpanded}
            img={twoDudesNightmare.image}
            gameplayImage={twoDudesNightmare.gameplayImage}
            gameplayImageTwo={twoDudesNightmare.gameplayImageTwo}
            description={twoDudesNightmare.description}
            fullDescription={twoDudesNightmare.fullDescription}
            icons={twoDudesNightmare.icons}
            iconsLarge={twoDudesNightmare.iconsLarge}
            link={twoDudesNightmare.link}
            liveLink={twoDudesNightmare.liveLink}
            colorSplash={twoDudesNightmare.colorSplash}
            colorSplashWidth={'140px'}
            margin={'none'}
            status={twoDudesNightmare.status}
            devTypeOneofTwo={twoDudesNightmare.devTypeOneofTwo}
            devTypeTwoofTwo={twoDudesNightmare.devTypeTwoofTwo}
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
            nameText={theAdventure.nameText}
            nameTextExpanded={theAdventure.nameTextExpanded}
            img={theAdventure.image}
            gameplayImage={theAdventure.gameplayImage}
            gameplayImageTwo={theAdventure.gameplayImageTwo}
            description={theAdventure.description}
            fullDescription={theAdventure.fullDescription}
            icons={theAdventure.icons}
            iconsLarge={theAdventure.iconsLarge}
            link={theAdventure.link}
            liveLink={theAdventure.liveLink}
            colorSplash={theAdventure.colorSplash}
            colorSplashWidth={'140px'}
            type={'wide'}
            status={theAdventure.status}
            devTypeOneofTwo={theAdventure.devTypeOneofTwo}
            devTypeTwoofTwo={theAdventure.devTypeTwoofTwo}
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
            gameplayImage={crappyBird.gameplayImage}
            gameplayImageTwo={crappyBird.gameplayImageTwo}
            description={crappyBird.description}
            fullDescription={crappyBird.fullDescription}
            icons={crappyBird.icons}
            iconsLarge={crappyBird.iconsLarge}
            link={crappyBird.link}
            liveLink={crappyBird.liveLink}
            colorSplash={crappyBird.colorSplash}
            colorSplashWidth={'125px'}
            margin={'none'}
            status={crappyBird.status}
            devTypeOneofTwo={crappyBird.devTypeOneofTwo}
            devTypeTwoofTwo={crappyBird.devTypeTwoofTwo}
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
            gameplayImage={geoDash.gameplayImage}
            gameplayImageTwo={geoDash.gameplayImageTwo}
            description={geoDash.description}
            fullDescription={geoDash.fullDescription}
            icons={geoDash.icons}
            iconsLarge={geoDash.iconsLarge}
            link={geoDash.link}
            liveLink={geoDash.liveLink}
            colorSplash={geoDash.colorSplash}
            colorSplashWidth={'155px'}
            status={geoDash.status}
            devTypeOneofTwo={geoDash.devTypeOneofTwo}
            devTypeTwoofTwo={geoDash.devTypeTwoofTwo}
          />
        </ProjectEight>
      </Container>
    </ProjectsContainer>
  );
};

export default Projects;
