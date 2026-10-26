import React from 'react';
import {
  ReactIcon,
  SoftwareIcon,
  CloudIcon,
  IntegrationsIcon,
  DatabaseIcon,
  UnityIcon2,
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
  CodeTag,
  CodeRow,
  Container,
  VertLine,
} from './Skills.styles.js';

const Skills = ({ skills, largeScreen }) => {
  const cards = [
    {
      key: 'frontend',
      open: '<p>',
      close: '</p>',
      icon: <ReactIcon height={60} width={60} />,
      accent: frontendDev,
      title: ['Frontend', 'Development'],
      description:
        'React, TypeScript, JavaScript, HTML and CSS. Responsive design, unit testing with Jest and React Testing Library.',
    },
    {
      key: 'backend',
      open: '{',
      close: '}',
      icon: <SoftwareIcon height={60} width={60} />,
      accent: softwareDev,
      title: ['Backend', '& APIs'],
      description: 'Node.js and Express REST APIs, authentication, and MySQL.',
    },
    {
      key: 'cloud',
      open: '$ deploy',
      close: '✓ done',
      icon: <CloudIcon height={60} width={60} />,
      accent: mobileDev,
      title: ['Cloud', '& DevOps'],
      description:
        'AWS, GCP and Infrastructure as Code, with CI/CD and GitHub workflows.',
    },
    {
      key: 'integrations',
      open: 'connect(',
      close: ')',
      icon: <IntegrationsIcon height={60} width={60} />,
      accent: integrationsDev,
      title: ['Integrations', '& Analytics'],
      description:
        'Duda, LaunchDarkly, Tray.io, Pendo, Tealium, Lucky Orange, Google Analytics and Search Console.',
    },
    {
      key: 'data',
      open: 'BEGIN;',
      close: 'COMMIT;',
      icon: <DatabaseIcon height={60} width={60} />,
      accent: dataDev,
      title: ['Data', 'Migration'],
      description:
        'Data migration and cleanup, validation, and safe bulk updates with rollback.',
    },
    {
      key: 'game',
      open: 'void Update() {',
      close: '}',
      icon: <UnityIcon2 height={60} width={60} />,
      accent: gameDev,
      title: ['Game', 'Development'],
      description: largeScreen
        ? 'C# and Unity: RPG systems, state-machine enemy behavior, save and load, and sprite animation.'
        : 'Using C# and OOP to adeptly design and create 2D games',
    },
  ];

  return (
    <Container>
      <SkillsContainer ref={skills}>
        <Header>My Skills</Header>
        <SkillsGrid>
          {cards.map((card) => (
            <SkillCard key={card.key}>
              <SkillsHeader>
                <Icon>{card.icon} </Icon>
                <Title>
                  <div>
                    <ColorAccent $background={card.accent}>
                      {card.title[0]}
                    </ColorAccent>
                    <br />
                    {card.title[1]}
                  </div>
                </Title>
              </SkillsHeader>
              <DescriptionBody>
                <CodeTag>{card.open}</CodeTag>
                <CodeRow>
                  <VertLine $borderColor={mobileDev} />
                  <Description>{card.description}</Description>
                </CodeRow>
                <CodeTag>{card.close}</CodeTag>
              </DescriptionBody>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
