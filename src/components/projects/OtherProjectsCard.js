import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { otherProjects } from '../assets/constants';
import {
  Banner,
  Mosaic,
  MosaicTile,
  MosaicImage,
  BannerText,
  BannerTitle,
  BannerBody,
  Cta,
} from './OtherProjects.styles';

const OtherProjectsCard = () => {
  const [hoverState, setHoverState] = useState(false);
  const navigate = useNavigate();

  const openPage = () => navigate('/OtherProjects');

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openPage();
    }
  };

  return (
    <Banner
      role="link"
      tabIndex={0}
      aria-label="View other projects and games"
      onClick={openPage}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      onFocus={() => setHoverState(true)}
      onBlur={() => setHoverState(false)}
    >
      <Mosaic>
        {otherProjects.map((project) => (
          <MosaicTile key={project.nameText}>
            <MosaicImage src={project.image} alt="" $zoom={hoverState} />
          </MosaicTile>
        ))}
      </Mosaic>
      <BannerText>
        <BannerTitle $color="#4fecec">
          <span>Other Projects</span>
        </BannerTitle>
        <BannerBody>
          More of my launched apps and games, from AI tools to a Tetris clone, all in
          one place.
        </BannerBody>
        <Cta>{hoverState ? 'View_All' : `${otherProjects.length}_Projects`}</Cta>
      </BannerText>
    </Banner>
  );
};

export default OtherProjectsCard;
