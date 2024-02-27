import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {
  ProjectCardContainer,
  Footer,
  Image,
  Description,
  Name,
  Stack,
  ColorAccent,
} from "./Projects.styles";

const ProjectCard = ({
  nameText,
  img,
  description,
  icons,
  link,
  height,
  imgHeight,
  margin,
  padding,
  colorSplash,
  colorSplashWidth,
  colorSplashPosition,
}) => {
  const [hoverState, setHoverState] = useState(false);

  const hoverStyle = {
    transform: "scale(1.05)",
    transformOrigin: "50% 50%",
  };

  return (
    <>
      <ProjectCardContainer
        height={height}
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
      >
        <Image
          style={hoverState ? hoverStyle : null}
          src={img}
          height={imgHeight}
          margin={margin}
        />
        <Footer height={height}>
          {/* color splash to match skills page */}
          <Name padding={padding}>
            <strong>{nameText}</strong>
          </Name>
          <ColorAccent
            background={colorSplash}
            width={colorSplashWidth}
            bottom={colorSplashPosition}
          />

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
                <span>{link}</span>
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
                <div style={{display: 'flex', flexDirection: 'row'}}>{icons}</div>
              </Transition>
            )}
          </Stack>
        </Footer>
      </ProjectCardContainer>
    </>
  );
};

export default ProjectCard;
