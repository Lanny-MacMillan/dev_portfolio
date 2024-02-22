import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import theAdventure from "../components/assets/img/theAdventure.png";
import {
  UnityIcon,
  CSharpIcon,
  ReactIconColor,
  JavascriptIcon,
  TypescriptIcon,
} from "../components/assets/img/icons";
import {
  ProjectsContainer,
  ProjectCard,
  CardFooter,
  ProjectCard2,
  Box,
  Content,
  ContentH2,
  ContentH3,
  ContentP,
  ContentA,
  ProjectCard3,
  Footer,
  Image,
  Description,
  Name,
  Stack,
  SkillsDiv,
} from "./Projects.styles";
const Projects = ({ projects }) => {
  const [hoverState, setHoverState] = useState(false);

  const hoverStyle = {
    transform: "scale(1.05)",
    transformOrigin: "50% 50%",
  };
  // const hoverStyleStack = {
  //   // transition: "all .5s ease-in-out",
  //   // // transform: "rotateX(0deg)",
  //   // // transform: "rotateX(45deg)",
  //   display: "none",
  //   // transform: "rotateX(90deg)",
  // };
  // const noHoverStyleStack = {
  //   // transition: "all .5s ease-in-out",
  //   // transform: "rotateX(90deg)",
  //   // transform: "rotateX(45deg)",
  //   // transform: "rotateX(0deg)",
  // };

  return (
    <ProjectsContainer ref={projects}>
      {/* Card One - GlassMorphism UI Design */}
      <ProjectCard>
        <strong>The Quickstop - Component Library</strong>
        <p>
          <br />A personal component library for all my building needs. Brings
          speed and ease with reusable components like modals, tooltips,buttons
          etc.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ReactIconColor />
          <TypescriptIcon />
          <JavascriptIcon logoFill={"black"} backgroundFill={"yellow"} />
        </div>

        <CardFooter>Created By Lanny_MacMillan 2023</CardFooter>
      </ProjectCard>
      {/* Card Two - Nuemorphism UI Design */}
      <ProjectCard2>
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
      </ProjectCard2>
      {/* Card Three - Nuemorphism UI Design */}
      <ProjectCard3
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
      >
        <Image style={hoverState ? hoverStyle : null} src={theAdventure} />
        <Footer>
          <Name>The Adventure</Name>
          <Description>
            An sidescrolling RPG platformer. Can you discover whats destroying
            the land, unite the magi and bring a stop to it?
          </Description>
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
                <span>Link to Project Code</span>
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
                <span>
                  <UnityIcon
                    width={40}
                    height={40}
                    logoFill={"white"}
                    backgroundFill={"#262626"}
                  />
                  <CSharpIcon width={40} height={40} logoFill={"white"} />
                </span>
              </Transition>
            )}
          </Stack>
        </Footer>
      </ProjectCard3>
      {/* <ul>
        <h1>ProjectPage</h1>
        <h1>Apps</h1>
        <li>
          <h3>The Quickstop - Component Library</h3>
          <p>
            A personal componnet library for all my building needs. Brings speed
            and ease to reusable components like modals, tooltips,buttons etc.
          </p>
          <p>React, Typescript, Javascript, Storybook</p>
          <p>TheQuickStop in github</p>
        </li>
        <li>
          <h3>Amiibo App</h3>
          <p>
            A Full Stack Nintendo Amiibos App for collectors. You can add
            Amiibos from your personal collection and enter specific information
            about them inclucing, Name, Series, comparable games and game
            functionality. There is also a page for all things Nintendo News
            with videos on functionality, common questions and live Nintendo
            news!
          </p>
          <p>MongoDB, Express, Node.js, Javascript, EJS</p>
          <p>Project2 in github FE</p>
        </li>
        <li>
          <h3>A Vacation App</h3>
          <p>
            Vacation is a full stack application that helps users while
            vaationing. You set your vacation events and the app will display
            them, show you the cost, the date, a description of the event and
            notes for the day of the event. Even a google maps API to help the
            user find their way around. There is also a translator feature for
            trips abroad and a local news page that will display news based on
            your event location.
          </p>
          <p>React, Django, PostgreSQL, Python3, Node.js, Javascript</p>
          <p>capstone_frontend in github FE</p>
        </li>
        <li>
          <h3>React - Tetris</h3>
          <p>A clone of the original Tetris, done with React.</p>
          <p>React, Javascript</p>
          <p>tetrisClone in github</p>
        </li>
        <li>
          <h3>Css Jump</h3>
          <p>
            A simple but endless CSS jumper game thats similar to Google
            Dinosaur
          </p>
          <p>React, Javascript</p>
          <p>tetrisClone in github</p>
        </li>
        <h1>Games</h1>
        <li>
          <h3>Crappy Bird</h3>
          <p>A clone of flappy bird</p>
          <p>C#, Unity, Aesprite</p>
          <p>flappyBirdClone in github</p>
        </li>
        <li>
          <h3>The Adventure</h3>
          <p>
            An Adventure is an RPG Platformer where you take on the quest to
            figure out why the darkness is engulfing the land. Travel with the
            magi and learn about the land and what challenges face you ahead.
            Gather experience to unlock abilities in the talent tree, craft
            items and equipment to help you on your Adventure and face off
            against the evil thats consuming the land
          </p>
          <p>C#, Unity</p>
          <p>TheAdventure_Two_Dudes in github</p>
        </li>
        <li>
          <h3>Geometry Dash</h3>
          <p>
            Working on a a version of geometry dash that will have v.1, v.2 and
            a new v.3 with all new rules and gameModes
          </p>
          <p>C#, Unity</p>
          <p>GeometryDash in github</p>
        </li>
        <li>
          <h3>Two Dudes Nightmare</h3>
          <p>A 2d platformer</p>
          <p>C#, Unity, Aesprite</p>
          <p>Unity_Game_Two_Dudes in github</p>
        </li>
      </ul> */}
    </ProjectsContainer>
  );
};

export default Projects;
