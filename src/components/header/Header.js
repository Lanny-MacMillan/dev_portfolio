import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, LinksDiv } from "./Header.styles.js";

const Header = () => {
  const pages = ["Home", "About", "Apps", "Work", "Contact"];
  const divRef = useRef();

  const scrollToElement = () => {
    const { current } = divRef;
    if (current !== null) {
      current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(scrollToElement, []);

  return (
    <HeaderContainer>
      {pages.map((page) => (
        <LinksDiv key={page}>
          <h2 textAlign="center">
            <div style={{ color: "white" }} ref={divRef}>
              {page}
            </div>
          </h2>
        </LinksDiv>
      ))}
    </HeaderContainer>
  );
};

export default Header;
