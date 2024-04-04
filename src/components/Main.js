import React, { useRef, useEffect, useState } from "react";
import Home from "./home/Home";
import Skills from "./skills/Skills.js";
import Projects from "./projects/Projects.js";
import Work from "./work/Work.js";
import Contact from "./contact/Contact";
import ScrollToTop from "./util/ScrollToTop.js";
import CursorDrift from "./assets/Tools/CursorDrift.jsx";
import {
  HeaderContainer,
  OurHerosName,
  ShortText,
  HeaderLinksDiv,
  LinksContent,
  Links,
  PageRefIcon,
} from "./home/Home.styles.js";

function Main() {
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
      <CursorDrift />
      <Home home={pageRef[0]} largeScreen={largeScreen} />
      <Skills skills={pageRef[1]} largeScreen={largeScreen} />
      <Projects projects={pageRef[2]} largeScreen={largeScreen} />
      <Work work={pageRef[3]} largeScreen={largeScreen} />
      <Contact contact={pageRef[4]} largeScreen={largeScreen} />
    </div>
  );
}

export default Main;
