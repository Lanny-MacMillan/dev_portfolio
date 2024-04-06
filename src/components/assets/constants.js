import theAdventureImg from "./img/theAdventure.png";
import tetrisReact from "./img/tetrisReact.png";
import amiiboAppImg from "./img/amiibo.png";
import vacationImg from "./img/vacation.png";
import geoDashImg from "./img/geoDash.png";
import crappyBirdImg from "./img/crappyBird.png";
import nightmareImg from "./img/nightmare.png";
import storybookImg from "./img/storybook.png";
import {
  UnityIcon,
  CSharpIcon,
  ReactIconColor,
  TypescriptIcon,
  JavascriptIcon,
  StorybookIcon,
  MongoDBIcon,
  ExpressIcon,
  PostregSQLIcon,
  NodeJSIcon,
  PythonIcon,
  DjangoIcon,
} from "./icons";

export const softwareDev = "red";

export const frontendDev = "purple";

export const gameDev = "#0703d0";

export const mobileDev = "#00DDFF";

export const verdigras = "#3CBBB1";

export const silver = "#C4CBCA";

export const night = "#0A0F0D";

export const russionViolet = "#2A1E5C";

export const crayolaRed = "#EE4266";

export const brightPurple = "#7510f7";

export const teal = "#5be9b9";

export const darkPurple = "#141c3a";

export const theAdventure = {
  nameText: "The Adventure",
  nameTextExpanded: "Unite with the Magi. Save Discordia.",
  colorSplash: gameDev,
  image: theAdventureImg,
  description:
    "A sidescrolling RPG platformer. Can you discover whats destroying the land, unite with the magi and bring a stop to it?",
  fullDescription:
    "This game was created using the unity Engine and C#. In this game we tackle a more robust inventory system, player levels, talent tree, crafting and equipment. In this side scrolling RPG you will face against an evil unseen in thousands of years, you will have to discover whats destroying the land, unite with the magi and bring a stop to it",
  link: "https://github.com/Lanny-MacMillan/TheAdventure_Two_Dudes",
  liveLink: null,
  devTypeOneofTwo: "Game",
  devTypeTwoofTwo: "Development",
  status: "In_Development",
  icons: [
    <UnityIcon
      width={30}
      height={30}
      logoFill={"#FFFFFF"}
      backgroundFill={"#262626"}
    />,
    <CSharpIcon width={30} height={30} logoFill={"#FFFFFF"} />,
  ],
  iconsLarge: [
    <UnityIcon
      width={40}
      height={40}
      logoFill={"#FFFFFF"}
      backgroundFill={"#262626"}
    />,
    <CSharpIcon width={40} height={40} logoFill={"#FFFFFF"} />,
  ],
};

export const tetris = {
  nameText: "Tetris React",
  nameTextExpanded: "It's Tetris. In React.",
  image: tetrisReact,
  description: "A clone of the original Tetris, done with React.",
  fullDescription:
    "This was created using React, with no state management like redux or backend. The player input is handled by an autofocused input field thats been removed from view. Creating the tetronimoes by class and shape then handling the board using CssGrid, React hooks and timed intervals to control the location, rotation, and drop rate while playing",
  link: "https://github.com/Lanny-MacMillan/tetrisClone",
  liveLink: "https://main.d2hd3lchmxht8m.amplifyapp.com/",
  devTypeOneofTwo: "Web",
  devTypeTwoofTwo: "Development",
  status: "Live",
  icons: [<ReactIconColor width={30} height={30} />],
  iconsLarge: [<ReactIconColor width={40} height={40} />],
};

export const theQuickStop = {
  nameText: "The Quickstop Library",
  nameTextExpanded: "Download. Import. Build.",
  colorSplash: softwareDev,
  image: storybookImg,
  description:
    "A personal component library for all my building needs. Brings speed and ease with reusable components.",
  fullDescription:
    "A Typescript Library of pre-made, tested and documented UI components that can be easily reused across the user interface of a product. Components include elements like buttons, forms, cards, tooltips, modals and more. The Quickstop library uses Tailwind, a utility-first css framework that uses classes for styling, and can take additional classes to override or add custom styling to components",
  link: null,
  liveLink: null,
  devTypeOneofTwo: "Web",
  devTypeTwoofTwo: "Development",
  status: "Live",
  icons: [
    <ReactIconColor width={30} height={30} />,
    <TypescriptIcon width={30} height={30} />,
    <JavascriptIcon width={30} height={30} />,
    <StorybookIcon width={25} height={25} />,
  ],
  iconsLarge: [
    <ReactIconColor width={40} height={40} />,
    <TypescriptIcon width={40} height={40} />,
    <JavascriptIcon width={40} height={40} />,
    <StorybookIcon width={35} height={35} />,
  ],
};

export const amiiboApp = {
  nameText: "Amiibo App",
  colorSplash: frontendDev,
  image: amiiboAppImg,
  description: "A Full Stack Nintendo Amiibos App for collectors.",
  fullDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  link: "https://github.com/Lanny-MacMillan/Project2",
  liveLink: null,
  devTypeOneofTwo: "Web",
  devTypeTwoofTwo: "Development",
  status: "Live",
  icons: [
    <ExpressIcon width={30} height={30} />,
    <JavascriptIcon width={30} height={30} />,
    <MongoDBIcon width={30} height={30} />,
    <NodeJSIcon width={30} height={30} />,
  ],
  iconsLarge: [
    <ExpressIcon width={40} height={40} />,
    <JavascriptIcon width={40} height={40} />,
    <MongoDBIcon width={40} height={40} />,
    <NodeJSIcon width={40} height={40} />,
  ],
};

export const vacationApp = {
  nameText: "Vacation App",
  colorSplash: frontendDev,
  image: vacationImg,
  description: "Full stack application that helps users while vacationing. ",
  fullDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  link: "https://github.com/Lanny-MacMillan/capstone_frontend",
  liveLink: null,
  devTypeOneofTwo: "Web",
  devTypeTwoofTwo: "Development",
  status: "Live",
  icons: [
    <ReactIconColor width={30} height={30} />,
    <JavascriptIcon width={30} height={30} />,
    <PostregSQLIcon width={28} height={28} />,
    <PythonIcon width={30} height={30} />,
    <DjangoIcon width={30} height={30} />,
  ],
  iconsLarge: [
    <ReactIconColor width={40} height={40} />,
    <JavascriptIcon width={40} height={40} />,
    <PostregSQLIcon width={38} height={38} />,
    <PythonIcon width={40} height={40} />,
    <DjangoIcon width={40} height={40} />,
  ],
};

export const crappyBird = {
  nameText: "Crappy Bird",
  nameTextExpanded: "Flap. Drop. Avoid Pipes.",
  colorSplash: gameDev,
  image: crappyBirdImg,
  description: "A clone of the popular flappy bird",
  fullDescription:
    "This game was created using the unity Engine and C#. This was my first game created in Unity. The clouds and pipes are instantiated randomly within rulesets, just outside of the camera to allow a more random level expirience with each play. I would still like to add wings to the bird and some hazards to the level as you progress",
  link: "https://github.com/Lanny-MacMillan/flappyBirdClone",
  liveLink: "https://lannymacmillan.itch.io/crappy-bird",
  devTypeOneofTwo: "Game",
  devTypeTwoofTwo: "Development",
  status: "Live",
  icons: [
    <UnityIcon
      width={30}
      height={30}
      logoFill={"#FFFFFF"}
      backgroundFill={"#262626"}
    />,
    <CSharpIcon width={30} height={30} logoFill={"#FFFFFF"} />,
  ],
  iconsLarge: [
    <UnityIcon
      width={40}
      height={40}
      logoFill={"#FFFFFF"}
      backgroundFill={"#262626"}
    />,
    <CSharpIcon width={40} height={40} logoFill={"#FFFFFF"} />,
  ],
};

export const geoDash = {
  nameText: "Geometry Dash",
  nameTextExpanded: "A learning project.",
  colorSplash: gameDev,
  image: geoDashImg,
  description: "Geo Dash with some twists",
  fullDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  link: "https://github.com/Lanny-MacMillan/GeometryDash",
  liveLink: null,
  devTypeOneofTwo: "Game",
  devTypeTwoofTwo: "Development",
  status: "In_Development",
  icons: [
    <UnityIcon
      width={30}
      height={30}
      logoFill={"#FFFFFF"}
      backgroundFill={"#262626"}
    />,
    <CSharpIcon width={30} height={30} logoFill={"#FFFFFF"} />,
  ],

  iconsLarge: [
    <UnityIcon
      width={40}
      height={40}
      logoFill={"#FFFFFF"}
      backgroundFill={"#262626"}
    />,
    <CSharpIcon width={40} height={40} logoFill={"#FFFFFF"} />,
  ],
};

export const twoDudesNightmare = {
  nameText: "2D Nightmare",
  nameTextExpanded: "Survive the evil. Escape the woods.",
  colorSplash: gameDev,
  image: nightmareImg,
  description: "A sidescrolling platformer created in Unity ",
  fullDescription:
    "This game was created using the unity Engine and C#. In this game we find Two Dudes who come across a remote cabin in the woods. With the only bridge down, and no where to go, these two dudes must find another way out of the woods and back to safety. But theres more in these woods than just trees. Survive the evil and escape the woods",
  link: "https://github.com/Lanny-MacMillan/Unity_Game_Two_Dudes",
  liveLink: null,
  devTypeOneofTwo: "Game",
  devTypeTwoofTwo: "Development",
  status: "In_Development",
  icons: [
    <UnityIcon
      width={30}
      height={30}
      logoFill={"#FFFFFF"}
      backgroundFill={"#262626"}
    />,
    <CSharpIcon width={30} height={30} logoFill={"#FFFFFF"} />,
    // Aesprite Icon
  ],
  iconsLarge: [
    <UnityIcon
      width={40}
      height={40}
      logoFill={"#FFFFFF"}
      backgroundFill={"#262626"}
    />,
    <CSharpIcon width={40} height={40} logoFill={"#FFFFFF"} />,
    // Aesprite Icon
  ],
};
