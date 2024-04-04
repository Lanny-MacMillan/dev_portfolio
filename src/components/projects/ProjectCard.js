import React, { useState } from "react";
import { Transition } from "@headlessui/react";
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
  Title,
  Stack,
  ColorAccent,
  ColorAccentWide,
  ColorAccentLarge,
  Icons,
  StyledLink,
} from "./Projects.styles";

const ProjectCard = ({
  nameText,
  img,
  description,
  icons,
  iconsLarge,
  link,
  height,
  imgHeight,
  margin,
  padding,
  colorSplash,
  colorSplashWidth,
  colorSplashPosition,
  type,
  largeScreen,
}) => {
  const [hoverState, setHoverState] = useState(false);

  const hoverStyle = {
    transform: "scale(1.05)",
    transformOrigin: "50% 50%",
  };

  const renderProjectCard = !type && (
    <ProjectCardContainer
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <Image
        style={hoverState ? hoverStyle : null}
        src={img}
        height={imgHeight}
        margin={margin}
      />
      <Footer>
        <Title>
          <ColorAccent background={colorSplash} width={colorSplashWidth} />
          {nameText}
        </Title>

        <Description>{description}</Description>
        <Stack>
          {hoverState ? (
            <Transition
              show={hoverState}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <StyledLink href={link} target="_blank" rel="noopener noreferrer">
                View project code
              </StyledLink>
            </Transition>
          ) : (
            <Transition
              show={!hoverState}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Icons>{largeScreen ? iconsLarge : icons}</Icons>
            </Transition>
          )}
        </Stack>
      </Footer>
    </ProjectCardContainer>
  );

  const renderProjectCardLarge = type === "large" && (
    <ProjectCardContainerLarge
      height={height}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <ImageLarge
        style={hoverState ? hoverStyle : null}
        src={img}
        height={imgHeight}
        margin={margin}
      />

      <FooterLarge>
        <Title padding={padding}>
          <ColorAccentLarge
            background={colorSplash}
            width={colorSplashWidth}
            bottom={colorSplashPosition}
          />
          {nameText}
        </Title>

        <Description>{description}</Description>
        <Stack>
          {hoverState ? (
            <Transition
              show={hoverState}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <StyledLink href={link} target="_blank" rel="noopener noreferrer">
                View Project
              </StyledLink>
            </Transition>
          ) : (
            <Transition
              show={!hoverState}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Icons>{largeScreen ? iconsLarge : icons}</Icons>
            </Transition>
          )}
        </Stack>
      </FooterLarge>
    </ProjectCardContainerLarge>
  );

  const renderProjectCardWide = type === "wide" && (
    <ProjectCardContainerWide
      height={height}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <ImageWide
        style={hoverState ? hoverStyle : null}
        src={img}
        height={imgHeight}
        margin={margin}
      />
      <FooterWide>
        <Title padding={padding}>
          <ColorAccentWide
            background={colorSplash}
            width={colorSplashWidth}
            bottom={colorSplashPosition}
          />
          {nameText}
        </Title>

        <Description>{description}</Description>
        <Stack>
          {hoverState ? (
            <Transition
              show={hoverState}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <StyledLink href={link} target="_blank" rel="noopener noreferrer">
                View Project
              </StyledLink>
            </Transition>
          ) : (
            <Transition
              show={!hoverState}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Icons>{largeScreen ? iconsLarge : icons}</Icons>
            </Transition>
          )}
        </Stack>
      </FooterWide>
    </ProjectCardContainerWide>
  );

  return (
    <>
      {renderProjectCard}
      {renderProjectCardLarge}
      {renderProjectCardWide}
    </>
  );
};

export default ProjectCard;
