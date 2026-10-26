import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 25;
  box-sizing: border-box;
  justify-content: space-between;
  height: 3em;
  cursor: default;
  /* Main.js blends these from the light hero to dark as the page scrolls */
  --header-bg: rgba(196, 203, 202, 0.3);
  --header-menu-bg: rgba(196, 203, 202, 0.7);
  --header-text-shadow: none;
  --header-line: rgba(20, 28, 58, 0.15);
  transition:
    --header-fg 0.2s ease,
    --header-fg-muted 0.2s ease;

  /* the glass lives on a pseudo-element so the mobile menu can blur the page
     behind it on its own instead of inheriting this one's backdrop */
  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
  }

  &::before {
    background: var(--header-bg);
    -webkit-backdrop-filter: blur(14px) saturate(190%);
    backdrop-filter: blur(14px) saturate(190%);
  }

  /* a soft shadow fades in once the page has scrolled, with no outline, so the
     header reads as part of the page at the top */
  &::after {
    opacity: var(--header-edge, 0);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
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
  font-weight: 800;
  margin-left: 2em;
  font-family: 'DM Sans', sans-serif;
  color: var(--header-fg);
  text-shadow: var(--header-text-shadow);

  @media only screen and (max-width: 768px) {
    font-size: clamp(18px, 5.6vw, 24px);
    margin-left: 20px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const HeaderLinksDiv = styled.div`
  position: relative;
  z-index: 80;
  display: flex;
  width: auto;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    display: none;
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
  padding: 20px;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding: 5px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    padding: 5px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const PageRefIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  font-weight: 800;
  font-family: 'DM Sans', sans-serif;
  /* color: white; */
  color: var(--header-fg);
  text-shadow: var(--header-text-shadow);
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
  font-weight: 800;
  font-family: 'DM Sans', sans-serif;

  /* color: white; */
  color: var(--header-fg);
  text-shadow: var(--header-text-shadow);

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
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 3em);
  background: linear-gradient(#c4cbca, #1f2c5b);
  /* background: linear-gradient(#c4cbca, #141c3a); */
  /* border-bottom: 3px solid white; */
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    /* phone browsers float a toolbar over the bottom of the page, so keep the
       desk above it and let a floor strip in the next section's color sit under it */
    --floor: 84px;
    box-sizing: border-box;
    height: auto;
    min-height: calc(100vh - 3em);
    min-height: calc(100svh - 3em);
    min-height: calc(100dvh - 3em);
    padding-bottom: var(--floor);
    background:
      linear-gradient(#141c3a, #141c3a) bottom / 100% var(--floor) no-repeat,
      linear-gradient(#c4cbca, #1f2c5b calc(100% - var(--floor)));
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    height: calc(100vh - 3em);
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    height: calc(100vh - 3em);
  }
`;
export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* border: 1px solid red; */
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex: 1;
    /* margin-top: 3em; */
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const ImageMobile = styled.img`
  /* overflow: hidden; */
  /* object-fit: contain; */
  /* object-fit: cover; */
  object-fit: fill;

  width: 100vw;
  height: 100%;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 16px;
    object-fit: cover;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    object-fit: cover;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    object-fit: cover;
  }
`;
export const HeroHeader = styled.div`
  align-self: center;
  text-align: center;
  width: 100%;
  /* border: 5px solid #4fecec; */
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 0.7em;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
export const UpperRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc((100vh - 3em) * 0.6);

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
export const UpperInnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 100px;
  max-width: 1400px;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const LowerDiv = styled.div`
  display: flex;
  align-self: center;
  align-items: flex-end;
  width: 80%;
  max-width: 1600px;
  height: calc((100vh - 3em) * 0.4);

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-top: auto;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
export const ChatDiv = styled.div`
  margin: 40px;
  display: inline-block;
  position: relative;
  /* width: 100%; */
  font-weight: 800;
  font-family: 'DM Sans', sans-serif;
  font-size: 1em;
  height: auto;
  background-color: #141c3a;
  border: 8px solid #4fecec;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: auto;
    font-size: 1.2em;
    margin: clamp(12px, 2.5vh, 40px) 40px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const TalkText = styled.div`
  padding: 0px 0px 40px 20px;
  text-align: left;
  line-height: 1.5em;
  color: white;
  font-weight: 800;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.2em;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    padding: clamp(18px, 3vh, 45px) 20px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const ChatArrow = styled.div`
  padding: 1em;
  text-align: left;
  line-height: 1.5em;
  &:before {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    left: -40px;
    right: auto;
    top: -8px;
    bottom: auto;
    border: 32px solid;
    border-color: #4fecec transparent transparent transparent;
  }
  &:after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    left: -20px;
    right: auto;
    top: 0px;
    bottom: auto;
    border: 22px solid;
    border-color: #141c3a transparent transparent transparent;
  }
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;
export const CenteredDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  /* Safari collapses an svg with only a viewBox to 0x0 as a flex item */
  svg {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1286.66 / 380;
  }
`;
export const Cursor = styled.div`
  background-color: #141c3a;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
`;

export const BorderBlinkDiv = styled.div`
  width: ${(props) => (props.width ? props.width : '500px')};
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    margin-top: clamp(0.5em, 2vh, 2.5em);
    width: clamp(120px, 17vh, 225px);
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 48px;
    height: 48px;
    margin-right: 6px;
  }
`;

export const MenuBar = styled.span`
  display: block;
  width: 24px;
  height: 3px;
  border-radius: 2px;
  background: var(--header-fg);
  transition:
    transform 0.3s ease,
    opacity 0.2s ease;

  ${(props) =>
    props.$open && props.$index === 0 && 'transform: translateY(8px) rotate(45deg);'}
  ${(props) => props.$open && props.$index === 1 && 'opacity: 0;'}
  ${(props) =>
    props.$open &&
    props.$index === 2 &&
    'transform: translateY(-8px) rotate(-45deg);'}
`;

export const MobileMenu = styled(motion.nav)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 90;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--header-menu-bg);
  -webkit-backdrop-filter: blur(14px) saturate(190%);
  backdrop-filter: blur(14px) saturate(190%);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

export const MobileLinkNumber = styled.span`
  flex: none;
  width: 2.2em;
  font-family: 'DM Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  color: var(--header-fg-muted);
`;

export const MobileLink = styled.button`
  display: flex;
  align-items: center;
  min-height: 52px;
  padding: 0 24px;
  background: none;
  border: none;
  border-top: 1px solid var(--header-line);
  text-align: left;
  font-size: 20px;
  font-weight: 800;
  font-family: 'DM Sans', sans-serif;
  color: var(--header-fg);
  text-shadow: var(--header-text-shadow);
  cursor: pointer;

  &:first-child {
    border-top: none;
  }

  &:hover,
  &:focus-visible {
    background: rgba(128, 140, 170, 0.18);
  }
`;
