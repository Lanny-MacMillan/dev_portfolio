import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 25;
  /* margin-bottom: 2em auto; // for header */
  justify-content: space-between;
  width: 100%;
  height: 3em;
  background-color: black;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    justify-content: space-between;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const OurHerosName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 24px;
  color: white;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const ShortText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.8em;
  color: white;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    display: none;
  }

  @media only screen and (min-width: 993px) {
    display: none;
  }
`;
export const HeaderLinksDiv = styled.div`
  display: flex;
  width: 50%;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: auto;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
export const LinksContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding: 5px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const PageRefIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: white;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const Links = styled.div`
  display: flex;
  font-size: 18px;
  color: white;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;

export const ImageMobile = styled.img`
  /* overflow: hidden; */
  /* object-fit: contain; */
  object-fit: cover;
  /* object-fit: fill; */
  width: 100vw;
  height: 100vh;
`;

// .homeTextBen {
//   font-family: 'Anton', cursive;
//   margin-top: 45px;
//   color: white;
//   font-size: 85px;
//   animation: Ben 2s step-end both;
// }
// @keyframes Ben
// {
//   from { color: white }
//   to { color: Black }

//   from { text-shadow: none }
//   to   { text-shadow:
//     rgb(13, 247, 36) 0px 54px 55px,
//     rgb(13, 247, 36) 0px -12px 30px,
//     rgb(13, 247, 36) 0px 4px 6px,
//     rgb(13, 247, 36) 0px 12px 13px,
//     rgb(13, 247, 36) 0px -3px 5px;
//   }
// }
// .homeTextZach {
//   font-family: 'Anton', cursive;  margin-top: 45px;
//   color: white;
//   font-size: 85px;
//   animation: Zach 4s step-end both;
// }
// @keyframes Zach
// {
//   from { color: white }
//   to { color: Black }

//   from { text-shadow: none }
//   to   { text-shadow:
//     rgb(13, 247, 36) 0px 54px 55px,
//     rgb(13, 247, 36) 0px -12px 30px,
//     rgb(13, 247, 36) 0px 4px 6px,
//     rgb(13, 247, 36) 0px 12px 13px,
//     rgb(13, 247, 36) 0px -3px 5px;
//   }
// }
// .homeTextLanny {
//   padding-left: 1em;
//   padding-right: 1em;
//   font-family: 'Anton', cursive;  margin-top: 45px;
//   color: white;
//   font-size: 85px;
//   animation: Lanny 6s step-end both;
// }
// @keyframes Lanny
// {
//   from { color: white }
//   to { color: Black }

//   from { text-shadow: none }
//   to   { text-shadow:
//     rgb(13, 247, 36) 0px 54px 55px,
//     rgb(13, 247, 36) 0px -12px 30px,
//     rgb(13, 247, 36) 0px 4px 6px,
//     rgb(13, 247, 36) 0px 12px 13px,
//     rgb(13, 247, 36) 0px -3px 5px;
//   }
// }
// .homeTextLeeman {
//   padding-left: 1em;
//   padding-right: 1em;
//   font-family: 'Anton', cursive;  margin-top: 45px;
//   color: white;
//   font-size: 85px;
//   animation: Leeman 8s step-end both;
// }
// @keyframes Leeman
// {
//   from { color: white }
//   to { color: Black }

//   from { text-shadow: none }
//   to   { text-shadow:
//     rgb(13, 247, 36) 0px 54px 55px,
//     rgb(13, 247, 36) 0px -12px 30px,
//     rgb(13, 247, 36) 0px 4px 6px,
//     rgb(13, 247, 36) 0px 12px 13px,
//     rgb(13, 247, 36) 0px -3px 5px;
//   }
// }
