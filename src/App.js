// import { Route, Routes } from "react-router";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills.js";
import Projects from "./projects/Projects.js";
import Work from "./work/Work.js";
import Contact from "./components/contact/Contact";
import ScrollToTop from "./components/util/ScrollToTop.js";
import Cursor from "./components/assets/Tools/Cursor.jsx";
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
  const [largeScreen, setLargeScreen] = useState(false);

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

  // const style = {
  //   position: "fixed",
  //   top: "0",
  //   left: "0",
  //   border: "3px solid #4fecec",
  //   width: "1em",
  //   height: "1em",
  //   borderRadius: "100%",
  //   zIndex: "10000",
  //   userSelect: "none",
  //   pointerEvents: "none",
  // };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) {
        setLargeScreen(true);
      } else {
        setLargeScreen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <Cursor />

      <Home home={pageRef[0]} largeScreen={largeScreen} />
      <Skills skills={pageRef[1]} largeScreen={largeScreen} />
      <Projects projects={pageRef[2]} largeScreen={largeScreen} />
      <Work work={pageRef[3]} largeScreen={largeScreen} />
      <Contact contact={pageRef[4]} />
    </div>
  );
}

export default App;
