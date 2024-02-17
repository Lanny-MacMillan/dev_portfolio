// import { Route, Routes } from "react-router";
import React, { useRef } from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { HeaderContainer, LinksDiv } from "./components/home/Home.styles.js";

function App() {
  const pages = ["// home", "// about", "// apps", "// work", "// contact"];
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
        {pages.map((page, pageRef) => (
          <LinksDiv key={page}>
            <h2 textAlign="center">
              <div
                onClick={() => scrollToRef(pageRef)}
                style={{ color: "white" }}
              >
                {page}
              </div>
            </h2>
          </LinksDiv>
        ))}
      </HeaderContainer>
      <Home home={pageRef[0]} />
      <About about={pageRef[1]} />
      {/* <Apps apps={pageRef[2]} />
      <Work work={pageRef[3]} /> */}
      <Contact contact={pageRef[4]} />
    </>
  );
}

export default App;
