// import { Route, Routes } from "react-router";
import React, { useRef } from "react";

import Home from "./components/home/Home";
import Skills from "./components/skills/Skills.js";
import Projects from "./projects/Projects.js";
import Work from "./work/Work.js";
import Contact from "./components/contact/Contact";
import ScrollToTop from "./components/util/ScrollToTop.js";

import {
  HeaderContainer,
  OurHerosName,
  ShortText,
  HeaderLinksDiv,
  LinksContent,
  Links,
  PageRefIcon,
} from "./components/home/Home.styles.js";

function App() {
  const pages = [
    "// home",
    "// skills",
    "// projects",
    "// work",
    "// contact",
  ];

  const pageRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const scrollToRef = (ref) => {
    pageRef[ref].current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "100vw",
        overflow: "hidden",
      }}
    >
      <HeaderContainer>
        <OurHerosName>Lanny_MacMillan</OurHerosName>
        <ShortText>LM</ShortText>
        <HeaderLinksDiv>
          {pages.map((page, pageRef) => (
            <LinksContent key={page} onClick={() => scrollToRef(pageRef)}>
              <PageRefIcon>0{pageRef}</PageRefIcon>
              <Links>{page}</Links>
            </LinksContent>
          ))}
        </HeaderLinksDiv>
      </HeaderContainer>
      <ScrollToTop />
      <Home home={pageRef[0]} />
      <Skills skills={pageRef[1]} />
      <Projects projects={pageRef[2]} />
      <Work work={pageRef[3]} />
      <Contact contact={pageRef[4]} />
    </div>
  );
}

export default App;
