// import { Route, Routes } from "react-router";
import React, { useRef, useEffect } from "react";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import {
  HeaderContainer,
  LinksDiv,
} from "./components/header/Header.styles.js";

import "./App.css";

function App() {
  const pages = ["Home", "About", "Apps", "Work", "Contact"];
  const contact = useRef();

  return (
    <>
      {/* <Header /> */}
      <HeaderContainer>
        {pages.map((page) => (
          <LinksDiv key={page}>
            <h2 textAlign="center">
              <button
                onClick={() => {
                  console.log(page);
                  contact.current.scrollIntoView({ behavior: "smooth" });
                }}
                style={{ color: "white" }}
              >
                {page}
              </button>
            </h2>
          </LinksDiv>
        ))}
      </HeaderContainer>
      <Home />
      <About />
      <Contact contact={contact} />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes> */}
    </>
  );
}

export default App;
