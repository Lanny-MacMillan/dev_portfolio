import React, { Children, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { otherProjects } from '../assets/constants';
import { projectPath, toViewState } from '../util/projectNav';
import {
  Page,
  TopBar,
  BackLink,
  PageHeader,
  PageSub,
  Grid,
  Tile,
  TileMain,
  ImageFrame,
  TileImage,
  TileBody,
  // TileTitle,
  TileDescription,
  // Status,
  Tech,
  // TileLinks,
  // TileLink,
} from './OtherProjects.styles';

const ProjectTile = ({ project }) => {
  const [hoverState, setHoverState] = useState(false);
  const navigate = useNavigate();

  const openProject = () =>
    navigate(projectPath(project), { state: toViewState(project) });

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openProject();
    }
  };

  return (
    <Tile>
      <TileMain
        role="link"
        tabIndex={0}
        aria-label={`View ${project.nameText}`}
        onClick={openProject}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
        onFocus={() => setHoverState(true)}
        onBlur={() => setHoverState(false)}
      >
        <ImageFrame>
          <TileImage src={project.image} alt="" $zoom={hoverState} />
        </ImageFrame>
        <TileBody>
          {/* <TileTitle $color={project.colorSplash}>
            <span>{project.nameText}</span>
          </TileTitle>
          */}
          <TileDescription>{project.description}</TileDescription>
          {/* <Status $live={project.status === 'Live'}>
            {project.devTypeOneofTwo}_{project.devTypeTwoofTwo} / {project.status}
          </Status>
          */}
          <Tech>{Children.toArray(project.icons)}</Tech>
        </TileBody>
      </TileMain>
      {/*
      <TileLinks>
        {project.liveLink && (
          <TileLink
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open_Project
          </TileLink>
        )}
        {project.link && (
          <TileLink href={project.link} target="_blank" rel="noopener noreferrer">
            Source_Code
          </TileLink>
        )}
      </TileLinks>
      */}
    </Tile>
  );
};

const OtherProjects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fall back to the home page when the page was opened directly
  const goBack = () =>
    window.history.state && window.history.state.idx > 0
      ? navigate(-1)
      : navigate('/');

  return (
    <Page>
      <TopBar>
        <BackLink onClick={goBack}>&lt;_Back</BackLink>
      </TopBar>
      <PageHeader>Other Projects</PageHeader>
      <PageSub>More launched apps and games.</PageSub>
      <Grid>
        {otherProjects.map((project) => (
          <ProjectTile key={project.nameText} project={project} />
        ))}
      </Grid>
    </Page>
  );
};

export default OtherProjects;
