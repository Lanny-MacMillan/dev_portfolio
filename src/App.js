// import { Route, Routes } from "react-router";
import React, { useRef } from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./projects/Projects.js";
import Work from "./work/Work.js";
import Contact from "./components/contact/Contact";
import {
  HeaderContainer,
  OurHerosName,
  HeaderLinksDiv,
  LinksContent,
  Links,
  PageRefIcon,
} from "./components/home/Home.styles.js";

function App() {
  const pages = ["// home", "// about", "// projects", "// work", "// contact"];
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
    <>
      <HeaderContainer>
        <OurHerosName>Lanny_MacMillan</OurHerosName>
        <HeaderLinksDiv>
          {pages.map((page, pageRef) => (
            <LinksContent key={page} onClick={() => scrollToRef(pageRef)}>
              <PageRefIcon>0{pageRef}</PageRefIcon>
              <Links>{page}</Links>
            </LinksContent>
          ))}
        </HeaderLinksDiv>
      </HeaderContainer>
      <Home home={pageRef[0]} />
      <About about={pageRef[1]} />
      <Projects projects={pageRef[2]} />
      <Work work={pageRef[3]} />
      <Contact contact={pageRef[4]} />
    </>
  );
}

export default App;
