import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: auto;
  /* padding: 30px; */
  margin: 0;
  /* border: 1px solid teal; */
  color: #224;
  /* background: #141c3a; */
  /* border-bottom: 2px solid white; */
  /* border-top: 2px solid white; */
  background-image: linear-gradient(#141c3a, #0a0f1e);
  /* background-image: linear-gradient(#141c3a, #1a191d); */
`;
// export const SkillsContainer = styled.div`
//   display: grid;
//   height: 130vh;
//   color: white;
//   /* align-items: center;
//   justify-content: center; */

//   /* border: 1px solid red; */
//   // margin: 2em auto; // for header
//   grid-template-columns: 0.7fr 1fr 1fr 1fr 0.7fr;
//   grid-template-rows: 0.7fr 0.5fr 1fr 1fr 1fr;
//   gap: 0px 0px;
//   grid-auto-flow: row;
//   grid-template-areas:
//     ". . . . ."
//     ". header header header ."
//     ". skills0 skills1 skills2 ."
//     ". skills3 skills3 skills3 ."
//     ". . . . .";
//   /* For browsers that do not support gradients */
//   background-color: #000;
//   background-image: linear-gradient(#000, #1a191d);

//   @media only screen and (min-width: 320px) and (max-width: 520px) {
//     height: auto;
//     grid-template-columns: 1fr;
//     grid-template-rows: 0.1fr 0.3fr 1fr 1fr 1fr 1fr 0.3fr;
//     grid-template-areas:
//       ". "
//       "header"
//       "skills0"
//       "skills1"
//       "skills2"
//       "skills3"
//       ".";
//   }

//   @media only screen and (min-width: 520px) and (max-width: 992px) {
//     height: auto;
//     padding: 0 20px 0 20px;
//     grid-template-columns: 1fr;
//     grid-template-rows: 0.7fr 0.5fr 1fr 1fr 1fr 1fr 0.7fr;
//     grid-template-areas:
//       ". "
//       "header"
//       "skills0"
//       "skills1"
//       "skills2"
//       "skills3"
//       ".";
//   }

//   @media only screen and (min-width: 993px) and (max-width: 1200px) {
//     height: 130vh;
//     padding: 0 20px 0 20px;

//     grid-template-columns: 1fr 1fr;
//     grid-template-rows: 0.7fr 0.5fr 1fr 1fr 0.7fr;
//     grid-template-areas:
//       ". . "
//       "header header"
//       "skills0 skills1"
//       "skills2 skills3"
//       ". .";
//   }
// `;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  font-weight: 800;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  padding-bottom: 30px;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 3.5em;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const Skills0 = styled.div`
  grid-area: skills0;
  padding: 60px;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  border: 2px solid white;
  border-right: none;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    margin: 0 20px 0 20px;
    border-right: 2px solid white;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    margin: 0 10px 0 10px;
    border-right: 2px solid white;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const SkillsHeader = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 28px;
  font-weight: 900;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 25%;
  // border: 1px solid red;
`;

export const ColorAccent = styled.div`
  position: absolute;
  margin-bottom: 18px;
  z-index: -1;
  width: ${(props) => (props.width ? props.width : "125px")};
  background: ${(props) => (props.background ? props.background : "red")};
  height: 10px;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const Title = styled.div`
  display: flex;
  z-index: 5;
  width: 100%;
  align-items: center;
  padding-left: 10px;
`;

export const DescriptionBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 30px;
  /* border: 2px solid yellow; */
`;

export const Description = styled.div`
  /* padding: 10px; */
  margin-bottom: 12px;
  /* border: 1px solid blue; */
`;

export const HTMLSnippet = styled.div`
  /* padding: 15px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  color: white;
  // width: 10%;
  /* border: 2px solid yellow; */
`;

export const VertLine = styled.div`
  color: ${(props) => (props.color ? props.color : "white")};
  border: 1px dashed #00ddff;
  border-color: ${(props) => (props.borderColor ? props.borderColor : "white")};
  height: ${(props) => (props.height ? props.height : "50px")};
`;
export const Skills1 = styled.div`
  grid-area: skills1;
  padding: 60px;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  border: 2px solid white;
  // outline-style: solid none;
  // background-color: green;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    margin: 0 20px 0 20px;
    border-top: none;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    margin: 0 10px 0 10px;
    border-top: none;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const Skills2 = styled.div`
  grid-area: skills2;
  padding: 60px;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  border: 2px solid white;
  border-left: none;
  // background-color: purple;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    margin: 0 20px 0 20px;
    border-left: 2px solid white;
    border-top: none;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    margin: 0 10px 0 10px;
    border-left: 2px solid white;
    border-top: none;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    border-left: 2px solid white;
    border-right: none;
    border-top: none;
  }
`;

export const Skills3 = styled.div`
  grid-area: skills3;
  padding: 60px;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  border: 2px solid white;
  border-top: none;
  // background-color: navy;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    margin: 0 20px 0 20px;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    margin: 0 10px 0 10px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const Container = styled.div`
  max-width: 1500px;
  display: grid;
  height: 120vh;
  color: white;
  /* border: 3px solid white; */

  grid-template-columns: 0.7fr 1fr 1fr 1fr 0.7fr;
  grid-template-rows: 0.2fr 0.5fr 1fr 1fr 0.5fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . . . ."
    ". header header header ."
    ". skills0 skills1 skills2 ."
    ". skills3 skills3 skills3 ."
    ". . . . .";
  /* For browsers that do not support gradients */
  /* background: linear-gradient(#000, #1a191d); */

  @media only screen and (min-width: 320px) and (max-width: 520px) {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.5fr 1fr 1fr 1fr 1fr 0.3fr;
    grid-template-areas:
      ". "
      "header"
      "skills0"
      "skills1"
      "skills2"
      "skills3"
      ".";
  }

  @media only screen and (min-width: 520px) and (max-width: 992px) {
    height: auto;
    padding: 0 20px 0 20px;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.5fr 1fr 1fr 1fr 1fr 0.7fr;
    grid-template-areas:
      ". "
      "header"
      "skills0"
      "skills1"
      "skills2"
      "skills3"
      ".";
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    height: 130vh;
    padding: 0 20px 0 20px;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 0.5fr 1fr 1fr 0.7fr;
    grid-template-areas:
      ". . "
      "header header"
      "skills0 skills1"
      "skills2 skills3"
      ". .";
  }
`;
