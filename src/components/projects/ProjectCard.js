import React, { Children, useState } from 'react';
import { Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { projectPath, toViewState } from '../util/projectNav';

import {
  ProjectCardContainer,
  ProjectCardContainerWide,
  ProjectCardContainerLarge,
  Footer,
  FooterWide,
  FooterLarge,
  Image,
  ImageWide,
  ImageLarge,
  Description,
  MobileDescription,
  // Title,
  Stack,
  // ColorAccent,
  // ColorAccentWide,
  // ColorAccentLarge,
  Icons,
  Button,
} from './Projects.styles';

const VARIANTS = {
  default: {
    Card: ProjectCardContainer,
    Img: Image,
    Foot: Footer,
    // Accent: ColorAccent,
  },
  wide: {
    Card: ProjectCardContainerWide,
    Img: ImageWide,
    Foot: FooterWide,
    // Accent: ColorAccentWide,
  },
  large: {
    Card: ProjectCardContainerLarge,
    Img: ImageLarge,
    Foot: FooterLarge,
    // Accent: ColorAccentLarge,
  },
};

const fade = {
  enter: 'transition-opacity duration-75',
  enterFrom: 'opacity-0',
  enterTo: 'opacity-100',
  leave: 'transition-opacity duration-150',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0',
};

const ProjectCard = ({
  project,
  type,
  // colorSplashWidth,
  // colorSplashPosition,
  height,
  imgHeight,
  largeScreen,
}) => {
  const [hoverState, setHoverState] = useState(false);
  const navigate = useNavigate();

  const { Card, Img, Foot } = VARIANTS[type || 'default'];
  const hoverStyle = {
    transform: 'scale(1.05)',
    transformOrigin: '50% 50%',
  };

  const openProject = () =>
    navigate(projectPath(project), { state: toViewState(project) });

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openProject();
    }
  };

  const icons = largeScreen ? project.iconsLarge : project.icons;

  return (
    <Card
      role="link"
      tabIndex={0}
      aria-label={`View ${project.nameText}`}
      height={height}
      onClick={openProject}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      onFocus={() => setHoverState(true)}
      onBlur={() => setHoverState(false)}
    >
      <Img
        style={{
          ...(hoverState ? hoverStyle : null),
          objectPosition: project.imagePosition,
        }}
        src={project.image}
        alt=""
        height={imgHeight}
      />
      <Foot>
        {/* <Title>
          <Accent
            background={project.colorSplash}
            width={colorSplashWidth}
            bottom={colorSplashPosition}
          />
          {project.nameText}
        </Title>
        */}

        <Description>{project.description}</Description>
        <MobileDescription>{project.mobileDescription}</MobileDescription>

        <Stack>
          {hoverState ? (
            <Transition show={hoverState} {...fade}>
              <Button>Show_Project</Button>
            </Transition>
          ) : (
            <Transition show={!hoverState} {...fade}>
              {type === 'large' ? (
                <Button>Show_Project</Button>
              ) : (
                <Icons>{Children.toArray(icons)}</Icons>
              )}
            </Transition>
          )}
        </Stack>
      </Foot>
    </Card>
  );
};

export default ProjectCard;
