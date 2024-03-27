import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  color: white;
  /* padding: 30px; */
  margin: 0;
  background: #c4cbca;
  background-image: linear-gradient(#2f4289, #c4cbca);

  /* height: 80vh; */
  overflow: hidden;
`;

export const Container = styled.div`
  /* height: auto; */
  /* height: 10vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  color: white;
  background: #1a191d;
  font-family: "DM Sans", sans-serif;
  min-width: 100%;
  /* border: 3px solid purple; */

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    height: 100vh;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }
  @media only screen and (min-width: 993px) and (max-width: 1499px) {
  }

  @media only screen and (min-width: 1500px) {
    min-width: 1500px;
  }
`;

// export const Container = styled.div`
//   /* max-width: 1500px; */

//   @media only screen and (min-width: 320px) and (max-width: 768px) {
//   }

//   @media only screen and (min-width: 769px) and (max-width: 992px) {
//   }

//   @media only screen and (min-width: 1400px) {
//     /* padding: 150px; */
//     /* max-width: 1500px; */
//   }
// `;
export const ContactDiv = styled.div`
  // grid-area: contact;
  /* display: flex;
  flex-direction: column; */
  margin-top: 50px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* border: 1px solid red; */
`;

export const PaddedDiv = styled.div`
  margin: 0 2em 0 2em;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    margin: 0 1em 0 1em;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const ShowDiv1 = styled.div`
  margin-left: 20%;
  background-color: rgba(255, 255, 255);
  // display: block;
  position: relative;
  z-index: 100;
  width: 30%;
  height: 70%;
  border-radius: 5px 5px 5px 5px;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    /* margin: 0px 0px 0px 30px; */
    width: auto;
    height: 45%;
    bottom: 10%;
    position: relative;
    right: 10%;
    z-index: 1;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    width: 70%;
    height: 55%;
    bottom: 10%;
    position: relative;
    right: 10%;
    z-index: 10;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const ShowDiv2 = styled.div`
  margin-left: 8%;
  color: white;
  /* background-color: rgba(150, 150, 150, 1); */
  background-image: linear-gradient(rgba(120, 120, 120, 1), #000);

  display: block;
  width: 30%;
  height: 70%;
  padding: 10px;
  border-radius: 5px 5px 5px 5px;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);

  bottom: 60%;
  position: relative;
  left: 40%;
  z-index: 100;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    /* margin: 0 20px 0 20px; */
    width: 83%;
    height: 60%;
    bottom: 11.5%;
    position: relative;
    left: 6%;
    margin-left: 0%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    width: 70%;
    height: 55%;
    bottom: 20%;
    position: relative;
    left: 10%;
    z-index: 100;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  transition: all 0.4s ease-in-out;
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  font-size: 4.5em;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  padding-top: 40px;
  color: white;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    font-size: 3.5em;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.3em;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  padding-bottom: 30px;
  text-align: center;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    padding-bottom: 10px;
    font-size: 1.1em;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const CardSubHeader = styled.div`
  // grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  padding-bottom: 30px;
  text-align: center;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    padding: 10px 0 20px 0;
    align-self: center;
    font-size: 0.8em;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    padding: 10px 0 20px 0;
    align-self: center;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const CardForm = styled.div`
  display: flex;
  flex-direction: column;
  display: none;

  height: auto;
  z-index: 99;
  height: 125px;
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    display: none;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
// export const StyledInput = styled(Input)`
//   // max-height: 35px
//   // margin-top: 12px;
//   // padding-bottom: 8px
// `;
export const CardFooter = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  padding-bottom: 30px;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    font-size: 0.8em;
    padding-bottom: 0px;

    span {
      /* display: none; */
    }
    p {
      /* cursive font here */
    }
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const IconsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  /* align-items: flex-end; */

  @media only screen and (min-width: 320px) and (max-width: 600px) {
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 80vh;
  background-color: #68717d;
  /* background: #109494; */

  /* background: #699298; */
  border-top: 2px solid white;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
export const StartProject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  height: 20vh;
  width: 90vw;
  /* background: #2a1e5c; */
  background: #141c3a;
  /* background-color: rgba(90, 90, 90); */
  border-radius: 8px;
  position: relative;
  top: 85px;
  border: 2px solid white;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  max-width: 1400px;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    height: 30vh;
    flex-direction: column;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const CalendlyLink = styled.div`
  align-self: center;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const ConnectHeader = styled.div`
  align-self: center;
  font-size: 2em;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const ConnectBody = styled.div`
  align-self: center;
  font-size: 1em;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  text-align: center;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    padding: 10px;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
export const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid red; */
  margin: 150px 0 30px 0;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    margin: 150px 0 100px 0;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
export const ButtonContainer = styled.div`
  /* display: flex; */
`;

export const StyledButton = styled.button`
  display: flex;
  width: fit-content;
  padding: 15px 30px 15px 30px;
  border-radius: 40px;
  border: 3px solid #3664ae;
  color: white;
  background: white;
  align-items: center;
  font-size: 1em;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  &:hover {
    background-color: #53ddec;
    border: 3px solid white;
  }
`;
