import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { otherProjects } from '../assets/constants';
import otherProjectsCover from '../assets/img/otherProjectsCover.png';
import { Banner, BannerImage, BannerText, Cta } from './OtherProjects.styles';

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
      <BannerImage src={otherProjectsCover} alt="" $zoom={hoverState} />
      <BannerText>
        <Cta>{hoverState ? 'View_All' : `${otherProjects.length}_Projects`}</Cta>
      </BannerText>
    </Banner>
  );
};

export default OtherProjectsCard;
