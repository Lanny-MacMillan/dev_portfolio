import React from 'react';
import {
  ReactIcon,
  SoftwareIcon,
  CloudIcon,
  IntegrationsIcon,
  DatabaseIcon,
  UnityIcon2,
  Ptag,
  ClosingPtag,
} from '../assets/icons.js';
import {
  softwareDev,
  frontendDev,
  mobileDev,
  gameDev,
  integrationsDev,
  dataDev,
} from '../assets/constants.js';
import {
  SkillsContainer,
  Header,
  SkillsGrid,
  SkillCard,
  SkillsHeader,
  ColorAccent,
  Icon,
  Title,
  DescriptionBody,
  Description,
  HTMLSnippet,
  Container,
  VertLine,
} from './Skills.styles.js';

const Skills = ({ skills, largeScreen }) => {
  const cards = [
    {
      key: 'frontend',
      icon: <ReactIcon height={60} width={60} />,
      accent: frontendDev,
      accentWidth: '4.5em',
      title: ['Frontend', 'Development'],
      description:
        'React, TypeScript, JavaScript, HTML and CSS. Responsive design, tested with Jest and React Testing Library.',
    },
    {
      key: 'backend',
      icon: <SoftwareIcon height={60} width={60} />,
      accent: softwareDev,
      accentWidth: '4em',
      title: ['Backend', '& APIs'],
      description: 'Node.js and Express REST APIs, authentication, and MySQL.',
    },
    {
      key: 'cloud',
      icon: <CloudIcon height={60} width={60} />,
      accent: mobileDev,
      accentWidth: '2.85em',
      title: ['Cloud', '& DevOps'],
      description:
        'AWS, GCP and Infrastructure as Code, with CI/CD and GitHub workflows.',
    },
    {
      key: 'integrations',
      icon: <IntegrationsIcon height={60} width={60} />,
      accent: integrationsDev,
      accentWidth: '6.05em',
      title: ['Integrations', '& Analytics'],
      description:
        'Duda, LaunchDarkly, Tray.io, Pendo, Tealium, Lucky Orange, Google Analytics and Search Console.',
    },
    {
      key: 'data',
      icon: <DatabaseIcon height={60} width={60} />,
      accent: dataDev,
      accentWidth: '2.5em',
      title: ['Data', 'Migration'],
      description:
        'Data migration and cleanup, validation, and safe bulk updates with rollback.',
    },
    {
      key: 'game',
      icon: <UnityIcon2 height={60} width={60} />,
      accent: gameDev,
      accentWidth: '3em',
      title: ['Game', 'Development'],
      description: largeScreen
        ? 'RPG systems, state-machine enemy behavior, save and load, and sprite animation.'
        : 'Using C# and OOP to adeptly design and create 2D games',
    },
  ];

  return (
    <Container>
      <SkillsContainer>
        <Header ref={skills}>My Skills</Header>
        <SkillsGrid>
          {cards.map((card) => (
            <SkillCard key={card.key}>
              <SkillsHeader>
                <Icon>{card.icon} </Icon>
                <Title>
                  <ColorAccent $background={card.accent} width={card.accentWidth} />
                  {card.title[0]} <br />
                  {card.title[1]}{' '}
                </Title>
              </SkillsHeader>
              <DescriptionBody>
                <HTMLSnippet>
                  {' '}
                  <Ptag letterFill={mobileDev} height={25} width={25} />{' '}
                  <VertLine $borderColor={mobileDev} />
                  <ClosingPtag letterFill={mobileDev} height={35} width={35} />{' '}
                </HTMLSnippet>
                <Description>{card.description}</Description>
              </DescriptionBody>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
