import React from 'react';
import ProjectCard from './ProjectCard';
import OtherProjectsCard from './OtherProjectsCard';
import {
  nextHoliday,
  planEatRepeat,
  thryvInc,
  theQuickStop,
  macsArcade,
  terminalQuest,
  theAdventure,
  sseNotifications,
} from '../assets/constants';

import {
  ProjectsContainer,
  Container,
  ProjectItem,
  Header,
} from './Projects.styles';

// Cards in display order, left to right, top to bottom. span is the number of
// the three grid columns a card covers; type picks the card/image variant.
const cards = [
  { project: sseNotifications, span: 1, splash: '175px' },
  { project: nextHoliday, span: 2, splash: '125px' },
  { project: thryvInc, span: 2, splash: '65px' },
  { project: theQuickStop, span: 1, splash: '220px' },
  { project: terminalQuest, span: 1, splash: '145px' },
  { project: planEatRepeat, span: 2, splash: '165px' },
  { project: theAdventure, span: 2, splash: '148px' },
  { project: macsArcade, span: 1, splash: '195px' },
];

const Projects = ({ projects, largeScreen }) => {
  const xVarNegative = largeScreen ? -150 : -55;
  const xVarPositive = largeScreen ? 150 : 55;

  // Cards slide in from the side they start on; the full-width card rises
  const slideIn = (x) => ({
    initial: { opacity: 0, x },
    whileInView: { opacity: 1, x: 0, transition: { duration: 1 } },
    viewport: { once: true },
  });

  // Each row holds three columns (grid columns 2 to 4). A card starts where
  // the previous cards in its row end, so it starts on the left edge when the
  // columns used before it divide evenly into rows
  let used = 0;
  const placed = cards.map((card) => {
    const offset = used % 3;
    used += card.span;
    return {
      ...card,
      col: 2 + offset,
      x: offset === 0 ? xVarNegative : xVarPositive,
    };
  });

  return (
    <ProjectsContainer ref={projects}>
      <Header>Projects</Header>
      <Container>
        {placed.map(({ project, span, splash, type, col, x }) => (
          <ProjectItem
            key={project.nameText}
            $col={col}
            $span={span}
            {...slideIn(x)}
          >
            <ProjectCard
              largeScreen={largeScreen}
              project={project}
              type={type}
              colorSplashWidth={splash}
            />
          </ProjectItem>
        ))}
        <ProjectItem
          $span={3}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          viewport={{ once: true }}
        >
          <OtherProjectsCard />
        </ProjectItem>
      </Container>
    </ProjectsContainer>
  );
};

export default Projects;
