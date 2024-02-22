import styled from "styled-components";

export const ProjectsContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // width: 100%;
  // height: 150vh;
  font: 1em/1.618 Inter, sans-serif;

  display: flex;
  // align-items: center;
  // justify-content: center;

  min-height: 100vh;
  max-height: 150vh;
  padding: 30px;
  margin: 0;

  color: #224;
  background: url(https://source.unsplash.com/E8Ufcyxz514/2400x1823) center /
    cover no-repeat fixed;
`;
// Card One - GlassMorphism UI Design
export const ProjectCard = styled.div`
  max-width: 300px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 500px;
  height: 300px;
  padding: 35px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

  backdrop-filter: blur(15px);
`;

export const CardFooter = styled.div`
  font-size: 0.65em;
  color: #446;
`;

//  Card Two - Nuemorphism UI Design
export const ProjectCard2 = styled.div`
  position: relative;
  min-width: 320px;
  height: 440px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 0 30px 0 30px;
  transition: 0.5s;
`;

export const Box = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: #2a2b2f;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
  }
  &:hover {
    transform: translateY(-50px);
  }
`;

export const Content = styled.div`
  padding: 20px;
  text-align: center;
`;

export const ContentH2 = styled.div`
  position: absolute;
  top: -10px;
  right: 30px;
  font-size: 6rem;
  color: rgba(255, 255, 255, 0.1);
`;

export const ContentH3 = styled.div`
  font-size: 1.8rem;
  color: #fff;
  z-index: 1;
  transition: 0.5s;
  margin-bottom: 15px;
`;

export const ContentP = styled.div`
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  transition: 0.5s;
`;

export const ContentA = styled.div`
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  background: #2196f3;
  // background: #e91e63;
  // background: #23c186;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  margin-top: 20px;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
    background: #fff;
    color: #000;
  }
`;

export const SkillsDiv = styled.div`
  display: flex;
  position: absolute;
  bottom: 30px;
  width: 85%;
  align-items: center;
  align-self: center;
  justify-content: center;
`;

//  Card Three - Project UI Display
export const ProjectCard3 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 420px;
  height: 440px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 60%;
  border-radius: 15px 15px 0px 0px;
  transition: all 0.4s ease-in-out;
  // border: 1px solid blue;
`;
export const Footer = styled.div`
  width: 100%;
  height: 40%;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 0px 0px 15px 15px;
  // border: 1px solid blue;
`;
export const Name = styled.div`
  font-size: "20px";
  display: flex;
  height: 20%;
  padding: 0px 30px 0px 30px;
  color: white;
  align-items: center;
  // border: 1px solid green;
`;
export const Description = styled.div`
  font-size: "10px";
  display: flex;
  height: 55%;
  color: white;
  padding: 0px 20px 0px 30px;
  align-items: center;
  // border: 1px solid orange;
`;
export const Stack = styled.div`
  font-size: "14px";
  display: flex;
  height: 15%;
  padding: 5px;
  border-radius: 0px 0px 15px 15px;
  flex-direction: row;
  align-items: center;
  color: white;
  justify-content: center;
  transition: all 0.4s ease-in-out;
  // border: 1px solid red;
  &:hover:span {
    display: none;
  }
`;
