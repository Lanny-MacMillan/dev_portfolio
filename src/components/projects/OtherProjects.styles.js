import styled from 'styled-components';
import { cardShell, clickable } from './Projects.styles';

// Underline bar behind a title, matching the colour splash on project cards
const splash = (color) =>
  `linear-gradient(transparent 62%, ${color || 'red'} 62%, ${
    color || 'red'
  } 88%, transparent 88%)`;

/* Banner shown at the bottom of the main projects grid */

export const Banner = styled.div`
  ${cardShell}
  ${clickable}
  background: rgba(0, 0, 0, 0.5);
`;

export const BannerImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 2400 / 760;
  object-fit: cover;
  transition: all 0.4s ease-in-out;
  transform: ${(props) => (props.$zoom ? 'scale(1.03)' : 'none')};
`;

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 30px;
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-weight: 800;

  @media only screen and (max-width: 992px) {
    padding: 15px 20px;
  }
`;

export const Cta = styled.span`
  font-size: 1em;
  color: #4fecec;
`;

/* The Other Projects page */

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  color: white;
  background: linear-gradient(#141c3a, #0a0f1e);
  font-family: 'DM Sans', sans-serif;
`;

export const TopBar = styled.div`
  width: 100%;
  max-width: 1500px;
`;

export const BackLink = styled.button`
  font-family: 'DM Sans', sans-serif;
  font-size: 1em;
  font-weight: 800;
  color: #4fecec;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const PageHeader = styled.h1`
  margin: 0;
  padding-bottom: 10px;
  font-size: 4.5em;
  font-weight: 800;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 3.5em;
  }
`;

export const PageSub = styled.p`
  margin: 0 0 40px;
  text-align: center;
  font-weight: 800;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 40px 40px;
  width: 100%;
  max-width: 1500px;
  padding: 0 5%;

  @media only screen and (max-width: 768px) {
    padding: 0;
    gap: 30px 30px;
  }
`;

export const Tile = styled.article`
  ${cardShell}
  background: rgba(0, 0, 0, 0.5);
`;

export const TileMain = styled.div`
  ${clickable}
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TileImage = styled.img`
  display: block;
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: all 0.4s ease-in-out;
  transform: ${(props) => (props.$zoom ? 'scale(1.05)' : 'none')};
`;

export const ImageFrame = styled.div`
  overflow: hidden;
`;

export const TileBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  padding: 15px 20px 5px;
`;

export const TileTitle = styled.div`
  font-size: 1.2em;
  font-weight: 800;

  span {
    background: ${(props) => splash(props.$color)};
  }
`;

export const TileDescription = styled.div`
  flex: 1;
  font-size: 0.8em;
`;

export const Status = styled.div`
  font-size: 0.8em;
  color: ${(props) => (props.$live ? '#4fecec' : 'silver')};
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const TileLinks = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 20px 15px;
`;

export const TileLink = styled.a`
  font-size: 1em;
  font-weight: 800;
  color: #4fecec;
  text-decoration: none;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`;
