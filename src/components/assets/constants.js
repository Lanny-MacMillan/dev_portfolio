import theAdventureCover from './img/theAdventureCover.png';
import theAdventurePanelTop from './img/theAdventurePanelTop.png';
import theAdventurePanelBottom from './img/theAdventurePanelBottom.png';

import tetrisCover from './img/tetrisCover.png';
import tetrisPanelTop from './img/tetrisPanelTop.png';
import tetrisPanelBottom from './img/tetrisPanelBottom.png';

import thryvCover from './img/thryvCover.png';
import thryvAlt1 from './img/thryvAlt1.png';
import thryvAlt2 from './img/thryvAlt2.png';

// import vacationImg from './img/vacation.png';
// import geoDashImg from './img/geoDash.png';

import planEatRepeatCover from './img/planEatRepeatCover.png';
import planEatRepeatPanelTop from './img/planEatRepeatPanelTop.png';
import planEatRepeatPanelBottom from './img/planEatRepeatPanelBottom.png';

import crappyBirdCover from './img/crappyBirdCover.png';
import crappyBirdPanelTop from './img/crappyBirdPanelTop.png';
import crappyBirdPanelBottom from './img/crappyBirdPanelBottom.png';

import nightmareCover from './img/nightmareCover.png';
import nightmarePanelTop from './img/nightmarePanelTop.png';
import nightmarePanelBottom from './img/nightmarePanelBottom.png';

import quickstopCover from './img/quickstopCover.png';
import quickstopPanelTop from './img/quickstopPanelTop.png';
import quickstopPanelBottom from './img/quickstopPanelBottom.png';

import sseCover from './img/sseCover.png';
import sseTop from './img/sseTop.png';
import sseBottom from './img/sseBottom.png';
import nextHolidayImg from './img/nextHoliday.png';
import nextHolidayGameplay from './img/nextHolidayGameplay.png';
import nextHolidayGameplayAlt from './img/nextHolidayGameplayAlt.png';
import macsClassicArcadeCover from './img/macsClassicArcadeCover.png';
import arcadeScatterTop from './img/arcadeScatterTop.png';
import arcadeScatterBottom from './img/arcadeScatterBottom.png';
import terminalQuestCover from './img/terminalQuestCover.png';
import terminalQuestPanelTop from './img/terminalQuestPanelTop.png';
import terminalQuestPanelBottom from './img/terminalQuestPanelBottom.png';

import aiToolboxCover from './img/aiToolboxCover.png';
import aiToolboxPanelTop from './img/aiToolboxPanelTop.png';
import aiToolboxPanelBottom from './img/aiToolboxPanelBottom.png';

import {
  UnityIcon,
  CSharpIcon,
  ReactIconColor,
  TypescriptIcon,
  JavascriptIcon,
  StorybookIcon,
  ExpressIcon,
  // PostregSQLIcon,
  NodeJSIcon,
  // PythonIcon,
  // DjangoIcon,
  NextJSIcon,
} from './icons';

export const softwareDev = 'red';

export const frontendDev = 'purple';

export const gameDev = '#0703d0';

export const mobileDev = '#00DDFF';

export const verdigras = '#3CBBB1';

export const silver = '#C4CBCA';

export const night = '#0A0F0D';

export const russionViolet = '#2A1E5C';

export const crayolaRed = '#EE4266';

export const brightPurple = '#7510f7';

export const teal = '#5be9b9';

export const darkPurple = '#141c3a';

export const theAdventure = {
  nameText: 'The Adventure',
  nameTextExpanded: 'Unite with the Magi. Save Discordia.',
  colorSplash: gameDev,
  image: theAdventureCover,
  imagePosition: 'center 10%',
  gameplayImage: theAdventurePanelTop,
  gameplayImageTwo: theAdventurePanelBottom,
  description:
    'A sidescrolling RPG platformer. Can you discover whats destroying the land, unite with the magi and bring a stop to it?',
  mobileDescription:
    'This side scrolling adventure platformer was created using the unity Engine and C#.',

  fullDescription:
    'This game was created using the unity Engine and C#. In this game we tackle a more robust inventory system, player levels, talent tree, crafting and equipment. In this side scrolling RPG you will face against an evil unseen in thousands of years, you will have to discover whats destroying the land, unite with the magi and bring a stop to it',
  link: 'https://github.com/Lanny-MacMillan/TheAdventure_Two_Dudes',
  liveLink: null,
  devTypeOneofTwo: 'Game',
  devTypeTwoofTwo: 'Development',
  status: 'In_Development',
  icons: [
    <UnityIcon
      width={30}
      height={30}
      logoFill={'#FFFFFF'}
      backgroundFill={'#262626'}
    />,
    <CSharpIcon width={30} height={30} logoFill={'#FFFFFF'} />,
  ],
  iconsLarge: [
    <UnityIcon
      width={40}
      height={40}
      logoFill={'#FFFFFF'}
      backgroundFill={'#262626'}
    />,
    <CSharpIcon width={40} height={40} logoFill={'#FFFFFF'} />,
  ],
};

export const tetris = {
  nameText: 'Tetris React',
  nameTextExpanded: 'Stack the blocks. Clear the lines.',
  colorSplash: frontendDev,
  image: tetrisCover,
  imagePosition: 'center 10%',
  gameplayImage: tetrisPanelTop,
  gameplayImageTwo: tetrisPanelBottom,
  description: 'A clone of the original Tetris, done with React.',
  mobileDescription:
    'This is a React created Tetris game, just like the original on Nintendo.',

  fullDescription:
    'This was created using React, with no state management like redux or backend. The player input is handled by an autofocused input field thats been removed from view. Creating the tetronimoes by class and shape then handling the board using CssGrid, React hooks and timed intervals to control the location, rotation, and drop rate while playing',
  link: 'https://github.com/Lanny-MacMillan/tetrisClone',
  liveLink: 'https://main.d3oia37e3kivkm.amplifyapp.com/',
  devTypeOneofTwo: 'Web',
  devTypeTwoofTwo: 'Development',
  status: 'Live',
  icons: [<ReactIconColor width={30} height={30} />],
  iconsLarge: [<ReactIconColor width={40} height={40} />],
};

export const theQuickStop = {
  nameText: 'The Quickstop Library',
  nameTextExpanded: 'Download. Import. Build.',
  colorSplash: softwareDev,
  image: quickstopCover,
  imagePosition: 'center 10%',
  gameplayImage: quickstopPanelTop,
  gameplayImageTwo: quickstopPanelBottom,
  description:
    'A personal component library for all my building needs. Brings speed and ease with reusable components.',
  mobileDescription: 'A personal component library with reusable components',

  fullDescription:
    'A Typescript Library of pre-made, tested and documented UI components that can be easily reused across the user interface of a product. Components include elements like buttons, forms, cards, tooltips, modals and more. The Quickstop library uses Tailwind, a utility-first css framework that uses classes for styling, and can take additional classes to override or add custom styling to components',
  link: 'https://github.com/Lanny-MacMillan/TheQuickStop',
  liveLink: null,
  devTypeOneofTwo: 'Web',
  devTypeTwoofTwo: 'Development',
  status: 'Live',
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

export const thryvInc = {
  nameText: 'Thryv',
  nameTextExpanded: 'Do-it-all small business software.',
  colorSplash: softwareDev,
  image: thryvCover,
  imagePosition: 'center 10%',
  gameplayImage: thryvAlt1,
  gameplayImageTwo: thryvAlt2,
  description:
    'A comprehensive platform for customer relationship management, marketing automation, and business management solutions.',
  mobileDescription: 'A comprehensive all-in-one business management platform.',

  fullDescription:
    'Thryv Inc. is a software company that provides businesses with customer relationship management (CRM) tools, marketing automation, and business management solutions. Thryvs platform is designed to help businesses streamline their operations, improve customer engagement, and grow their business. With a range of services including online presence management, customer communication tools, appointment scheduling, payment processing, and more.',
  link: null,
  liveLink: 'https://www.thryv.com/',
  devTypeOneofTwo: 'Software',
  devTypeTwoofTwo: 'Development',
  status: 'Live',
  icons: [
    <ReactIconColor width={30} height={30} />,
    <JavascriptIcon width={30} height={30} />,
    <ExpressIcon width={30} height={30} />,
    <NodeJSIcon width={30} height={30} />,
  ],
  iconsLarge: [
    <ReactIconColor width={40} height={40} />,
    <JavascriptIcon width={40} height={40} />,
    <ExpressIcon width={40} height={40} />,
    <NodeJSIcon width={40} height={40} />,
  ],
};

// export const vacationApp = {
//   nameText: 'Vacation App',
//   colorSplash: frontendDev,
//   image: vacationImg,
//   gameplayImage: vacationImg,
//   gameplayImageTwo: vacationImg,
//   description: 'Full stack application that helps users while vacationing. ',
//   mobileDescription: 'Mobie info goes here.',
//
//   fullDescription:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//   link: 'https://github.com/Lanny-MacMillan/capstone_frontend',
//   liveLink: null,
//   devTypeOneofTwo: 'Web',
//   devTypeTwoofTwo: 'Development',
//   status: 'Live',
//   icons: [
//     <ReactIconColor width={30} height={30} />,
//     <JavascriptIcon width={30} height={30} />,
//     <PostregSQLIcon width={28} height={28} />,
//     <PythonIcon width={30} height={30} />,
//     <DjangoIcon width={30} height={30} />,
//   ],
//   iconsLarge: [
//     <ReactIconColor width={40} height={40} />,
//     <JavascriptIcon width={40} height={40} />,
//     <PostregSQLIcon width={38} height={38} />,
//     <PythonIcon width={40} height={40} />,
//     <DjangoIcon width={40} height={40} />,
//   ],
// };

export const crappyBird = {
  nameText: 'Crappy Bird',
  nameTextExpanded: 'Flap through the pipes. Beat your high score.',
  colorSplash: gameDev,
  image: crappyBirdCover,
  imagePosition: 'center 10%',
  gameplayImage: crappyBirdPanelTop,
  gameplayImageTwo: crappyBirdPanelBottom,
  description: 'A clone of the popular flappy bird',
  mobileDescription:
    'This game was created using the unity Engine and C#. A remake of the original Flappy Bird game.',

  fullDescription:
    'This game was created using the unity Engine and C#. This was my first game created in Unity. The clouds and pipes are instantiated randomly within rulesets, just outside of the camera to allow a more random level expirience with each play. I would still like to add wings to the bird and some hazards to the level as you progress',
  link: 'https://github.com/Lanny-MacMillan/flappyBirdClone',
  liveLink: 'https://lannymacmillan.itch.io/crappy-bird',
  devTypeOneofTwo: 'Game',
  devTypeTwoofTwo: 'Development',
  status: 'Live',
  icons: [
    <UnityIcon
      width={30}
      height={30}
      logoFill={'#FFFFFF'}
      backgroundFill={'#262626'}
    />,
    <CSharpIcon width={30} height={30} logoFill={'#FFFFFF'} />,
  ],
  iconsLarge: [
    <UnityIcon
      width={40}
      height={40}
      logoFill={'#FFFFFF'}
      backgroundFill={'#262626'}
    />,
    <CSharpIcon width={40} height={40} logoFill={'#FFFFFF'} />,
  ],
};

// export const geoDash = {
//   nameText: 'Geometry Dash',
//   nameTextExpanded: 'A learning project.',
//   colorSplash: gameDev,
//   image: geoDashImg,
//   gameplayImage: geoDashImg,
//   gameplayImageTwo: geoDashImg,
//   description: 'Geo Dash with some twists',
//   mobileDescription: 'This game was created using the unity Engine and C#.',
//
//   fullDescription:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//   link: 'https://github.com/Lanny-MacMillan/GeometryDash',
//   liveLink: null,
//   devTypeOneofTwo: 'Game',
//   devTypeTwoofTwo: 'Development',
//   status: 'In_Development',
//   icons: [
//     <UnityIcon
//       width={30}
//       height={30}
//       logoFill={'#FFFFFF'}
//       backgroundFill={'#262626'}
//     />,
//     <CSharpIcon width={30} height={30} logoFill={'#FFFFFF'} />,
//   ],
//
//   iconsLarge: [
//     <UnityIcon
//       width={40}
//       height={40}
//       logoFill={'#FFFFFF'}
//       backgroundFill={'#262626'}
//     />,
//     <CSharpIcon width={40} height={40} logoFill={'#FFFFFF'} />,
//   ],
// };

export const twoDudesNightmare = {
  nameText: '2D Nightmare',
  nameTextExpanded: 'Survive the night. Fight what waits inside.',
  colorSplash: gameDev,
  image: nightmareCover,
  imagePosition: 'center 10%',
  gameplayImage: nightmarePanelTop,
  gameplayImageTwo: nightmarePanelBottom,
  description: 'A sidescrolling platformer created in Unity ',
  mobileDescription: 'This game was created using the unity Engine and C#.',

  fullDescription:
    'This game was created using the unity Engine and C#. In this game we find Two Dudes who come across a remote cabin in the woods. With the only bridge down, and no where to go, these two dudes must find another way out of the woods and back to safety. But theres more in these woods than just trees. Survive the evil and escape the woods',
  link: 'https://github.com/Lanny-MacMillan/Unity_Game_Two_Dudes',
  liveLink: null,
  devTypeOneofTwo: 'Game',
  devTypeTwoofTwo: 'Development',
  status: 'In_Development',
  icons: [
    <UnityIcon
      width={30}
      height={30}
      logoFill={'#FFFFFF'}
      backgroundFill={'#262626'}
    />,
    <CSharpIcon width={30} height={30} logoFill={'#FFFFFF'} />,
  ],
  iconsLarge: [
    <UnityIcon
      width={40}
      height={40}
      logoFill={'#FFFFFF'}
      backgroundFill={'#262626'}
    />,
    <CSharpIcon width={40} height={40} logoFill={'#FFFFFF'} />,
  ],
};

export const aiToolbox = {
  nameText: 'Ai Toolbox',
  nameTextExpanded: 'Ai Powered Solutions. In one place',
  colorSplash: frontendDev,
  image: aiToolboxCover,
  imagePosition: 'center 10%',
  gameplayImage: aiToolboxPanelTop,
  gameplayImageTwo: aiToolboxPanelBottom,
  description: 'Ai powered solutions to transform your approach',
  mobileDescription:
    'This was created using NextJS and Typescript, my first step into Server-Side-Rendering.',
  fullDescription:
    'This was created using NextJS and Typescript, and is my first step into Server-Side-Rendering with NextJS. This app takes 4 of the OpenAi models: GPT-4 (chat), Dalle-3 (image generator), Vision (image analysis), and TTS-1 (text-to-speech) and allows the user to transform the way they approach everyday tasks',
  link: 'https://github.com/Lanny-MacMillan/AI_Chatbot',
  liveLink: 'https://main.dcsm9y97xh6b6.amplifyapp.com/',
  devTypeOneofTwo: 'Web',
  devTypeTwoofTwo: 'Development',
  status: 'Live',
  icons: [
    <NextJSIcon width={30} height={30} />,
    <TypescriptIcon width={30} height={30} />,
  ],
  iconsLarge: [
    <NextJSIcon width={40} height={40} />,
    <TypescriptIcon width={40} height={40} />,
  ],
};
export const planEatRepeat = {
  nameText: 'Plan.Eat.Repeat.',
  nameTextExpanded: 'All your meal options. In one place',
  colorSplash: softwareDev,
  image: planEatRepeatCover,
  imagePosition: 'center 10%',
  gameplayImage: planEatRepeatPanelTop,
  gameplayImageTwo: planEatRepeatPanelBottom,
  description:
    'Transform your familys dining experience with effortless meal planning, collaboration, and organization. Easily invite loved ones, assign meals, and track progress—all in one place. With Plan.Eat.Repeat., you’re in control of every step of your mealtime journey.',
  mobileDescription:
    'Transform your dining experience with effortless meal planning, collaboration, and organization.',

  link: 'https://github.com/qodebros/plan-eat-repeat-frontend',
  fullDescription:
    'This app is a fun and interactive meal planning and preparation platform designed for friends and family, bringing everything you need into one convenient place. Built with a modern tech stack, we used React for a dynamic user interface, Node.js and Express for a robust backend, and Auth0 for secure authentication. The app is containerized with Docker for scalable deployment, and integrated with analytics tools to track and enhance user engagement. We also applied a thoughtfully chosen theme to ensure a visually appealing and user-friendly experience. Whether you are planning meals, sharing recipes, or prepping together, our app makes it easy and enjoyable!',
  liveLink: null,
  devTypeOneofTwo: 'Web',
  devTypeTwoofTwo: 'Development',
  status: 'In_Development',
  icons: [
    <ReactIconColor width={30} height={30} />,
    <JavascriptIcon width={30} height={30} />,
    <ExpressIcon width={30} height={30} />,
    <NodeJSIcon width={30} height={30} />,
  ],
  iconsLarge: [
    <ReactIconColor width={40} height={40} />,
    <JavascriptIcon width={40} height={40} />,
    <ExpressIcon width={40} height={40} />,
    <NodeJSIcon width={40} height={40} />,
  ],
};

export const nextHoliday = {
  nameText: 'Next Holiday',
  nameTextExpanded: 'Plan every holiday. Together.',
  colorSplash: frontendDev,
  image: nextHolidayImg,
  // keeps the title in view when the card crops this image
  imagePosition: 'center 10%',
  gameplayImage: nextHolidayGameplay,
  gameplayImageTwo: nextHolidayGameplayAlt,
  description:
    'Full-stack holiday planning for families: shared households, 15+ holiday types, gifts, budgets and tasks. It has light and dark modes, professional and gamified themes, and Free and Plus plans. Built with Next.js, TypeScript, MySQL and Prisma, with real-time SSE notifications from a standalone microservice',
  mobileDescription:
    'Plan holidays together with shared accounts, task tracking, and real-time notifications.',
  fullDescription:
    'Next Holiday is a production-ready, full-stack holiday planning platform built with Next.js, TypeScript, MySQL and Prisma. A multi-tenant architecture lets families and households share accounts, invite members and plan more than 15 holiday types together, from gifts and budgets to tasks and cards. Real-time notifications are delivered by a separate Server-Sent Events microservice running on its own EC2 instance, so a notification failure never affects the core app. The app is deployed on AWS Amplify',
  link: 'https://github.com/Lanny-MacMillan/next-holiday',
  liveLink: 'https://main.dqx5l2fwtu6o8.amplifyapp.com/',
  devTypeOneofTwo: 'Web',
  devTypeTwoofTwo: 'Development',
  status: 'Live',
  icons: [
    <NextJSIcon width={30} height={30} />,
    <TypescriptIcon width={30} height={30} />,
  ],
  iconsLarge: [
    <NextJSIcon width={40} height={40} />,
    <TypescriptIcon width={40} height={40} />,
  ],
};

export const sseNotifications = {
  nameText: 'SSE Notifications',
  nameTextExpanded: 'Real-time notifications. As a microservice.',
  colorSplash: softwareDev,
  image: sseCover,
  imagePosition: 'center 10%',
  gameplayImage: sseTop,
  gameplayImageTwo: sseBottom,
  description:
    'A Server-Sent Events microservice on AWS EC2 that powers real-time notifications for Next Holiday.',
  mobileDescription:
    'A Server-Sent Events microservice that powers real-time notifications.',
  fullDescription:
    'A production-ready Server-Sent Events (SSE) microservice that powers real-time notifications for Next Holiday. AWS Amplify’s serverless environment cannot hold persistent connections, so this service runs independently on AWS EC2 under PM2 process management. Built with Node.js, TypeScript, Express and Prisma, it keeps persistent SSE connections open to every connected client and stores notification history in the database. The link below opens the service’s live uptime status page',
  link: 'https://github.com/Lanny-MacMillan/sse-notifications',
  liveLink: 'https://stats.uptimerobot.com/0oI7RkPCwj/804370224',
  devTypeOneofTwo: 'Software',
  devTypeTwoofTwo: 'Development',
  status: 'Live',
  icons: [
    <NodeJSIcon width={30} height={30} />,
    <ExpressIcon width={30} height={30} />,
    <TypescriptIcon width={30} height={30} />,
  ],
  iconsLarge: [
    <NodeJSIcon width={40} height={40} />,
    <ExpressIcon width={40} height={40} />,
    <TypescriptIcon width={40} height={40} />,
  ],
};

export const macsArcade = {
  nameText: 'Macs Classic Arcade',
  nameTextExpanded: 'Classic games. Zero clutter.',
  colorSplash: gameDev,
  image: macsClassicArcadeCover,
  gameplayImage: arcadeScatterTop,
  gameplayImageTwo: arcadeScatterBottom,
  description:
    'A retro-inspired browser arcade with 40+ classic games, from Snake and Pong to Chess and Minesweeper, built in vanilla JavaScript.',
  mobileDescription:
    'A retro browser arcade with 40+ classic games built in vanilla JavaScript.',
  fullDescription:
    'A growing collection of 40+ browser-based classics, from Snake, Asteroids and Frogger to 2048, Sudoku, Chess and Connect Four. Built with vanilla ES6 JavaScript and pure CSS with no frameworks, each game runs in its own iframe so games stay completely isolated and new ones can be added without touching existing code. Hosted on AWS Amplify',
  link: 'https://github.com/Lanny-MacMillan/Macs-Classic-Arcade',
  liveLink: 'https://main.dc22m4dsemgj1.amplifyapp.com/',
  devTypeOneofTwo: 'Game',
  devTypeTwoofTwo: 'Development',
  status: 'Live',
  icons: [<JavascriptIcon width={30} height={30} />],
  iconsLarge: [<JavascriptIcon width={40} height={40} />],
};

export const terminalQuest = {
  nameText: 'Terminal Quest',
  nameTextExpanded: 'Learn the command line. One quest at a time.',
  colorSplash: gameDev,
  image: terminalQuestCover,
  gameplayImage: terminalQuestPanelTop,
  gameplayImageTwo: terminalQuestPanelBottom,
  description:
    'A browser-based adventure that teaches real terminal commands through story-driven levels and a simulated file system.',
  mobileDescription:
    'Learn real terminal commands by playing through a story-driven adventure.',
  fullDescription:
    'An interactive browser-based adventure that teaches shell commands through storytelling. Powered by xterm.js, it runs a fully simulated virtual file system in the browser, so there is nothing to install and nothing at risk. Choose a macOS/Linux or Windows environment and work through three levels, Forest, Cabin and Tower, solving puzzles with real commands like ls, cd, cat and mv',
  link: 'https://github.com/Lanny-MacMillan/Terminal-Quest',
  liveLink: 'https://main.d3nweulr2i0197.amplifyapp.com/',
  devTypeOneofTwo: 'Game',
  devTypeTwoofTwo: 'Development',
  status: 'Live',
  icons: [<JavascriptIcon width={30} height={30} />],
  iconsLarge: [<JavascriptIcon width={40} height={40} />],
};

// Launched projects that no longer get a card on the main page; they are
// listed on the Other Projects page instead
export const otherProjects = [aiToolbox, tetris, twoDudesNightmare, crappyBird];
