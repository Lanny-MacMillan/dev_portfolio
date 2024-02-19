import React from "react";
import { ProjectsContainer } from "./Projects.styles";
const Projects = ({ projects }) => {
  return (
    <ProjectsContainer ref={projects}>
      <ul>
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
          <h3>Franks Nightmare</h3>
          <p>A 2d platformer</p>
          <p>C#, Unity, Aesprite</p>
          <p>Unity_Game_Two_Dudes in github</p>
        </li>
      </ul>
    </ProjectsContainer>
  );
};

export default Projects;
