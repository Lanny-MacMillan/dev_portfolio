import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

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
  Button,
} from "./Projects.styles";

const ProjectCard = ({
  nameText,
  nameTextExpanded,
  img,
  link,
  liveLink,
  devType,
  description,
  fullDescription,
  icons,
  iconsLarge,
  height,
  imgHeight,
  margin,
  padding,
  colorSplash,
  colorSplashWidth,
  colorSplashPosition,
  type,
  largeScreen,
  status,
}) => {
  const [hoverState, setHoverState] = useState(false);

  const navigate = useNavigate();
  const hoverStyle = {
    transform: "scale(1.05)",
    transformOrigin: "50% 50%",
  };

  const formattedName = nameText.replace(/\s/g, "");

  const data = {
    nameText,
    nameTextExpanded,
    img,
    description,
    fullDescription,
    link,
    liveLink,
    colorSplash,
    devType,
    status,
  };
  console.log("devType", devType);
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
              <Button
                onClick={() => {
                  navigate(`/${formattedName}`, { state: data });
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Show_Project
              </Button>
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
              <Button
                onClick={() => {
                  navigate(`/${formattedName}`, { state: data });
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Show_Project
              </Button>
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
              <Button>Show_Project</Button>
              {/* <Icons>{largeScreen ? iconsLarge : icons}</Icons> */}
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
              <Button
                onClick={() => {
                  navigate(`/${formattedName}`, { state: data });
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Show_Project
              </Button>
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
