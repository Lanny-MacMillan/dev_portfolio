import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, LinksDiv } from "./Header.styles.js";

const Header = () => {
  const pages = ["Home", "About", "Apps", "Work", "Contact"];

  return (
    <HeaderContainer>
      {pages.map((page) => (
        <LinksDiv key={page}>
          <h2 textAlign="center">
            <Link style={{ color: "white" }} to={`/${page}`}>
              {page}
            </Link>
          </h2>
        </LinksDiv>
      ))}
    </HeaderContainer>
  );
};

export default Header;
