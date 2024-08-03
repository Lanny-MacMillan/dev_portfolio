import React from 'react';

import {
  ExperienceContainer,
  Header,
  Smalltext,
  TimeLine,
  Outer,
  Card,
  Info,
  Title,
  JobTitle,
} from './Work.styles.js';

const Work = ({ work }) => {
  const Timeline = () => {
    return (
      <TimeLine>
        <Header>Experience</Header>
        <Outer>
          <Card>
            <Info>
              <Title>Thryv Inc.</Title>
              <JobTitle>Web Developer</JobTitle>
              <Smalltext>Sept 2022 - current</Smalltext>
              <ul>
                <li>
                  Developing and Maintaining scalable, responsive web applications
                  using React.js and NodeJs
                </li>
                <li>
                  Collaborating with cross-functional teams including designers,
                  product managers, and integrations to deliver high-quality features
                  on time.
                </li>
                <li>
                  Software Developer managing Duda and LaunchDarkly to optimize
                  development processes and drive feature deployment.
                </li>
                <li>
                  Implementing automated testing using tools like Jest and React
                  Testing Library to ensure robustness.
                </li>
                <li>
                  Troubleshooting and debugging issues to maintain application
                  stability and user satisfaction.
                </li>
              </ul>
            </Info>
          </Card>
          <Card>
            <Info>
              <Title>Two Dudes Games</Title>
              <JobTitle>Indie Game Developer</JobTitle>
              <Smalltext>December 2023 - current</Smalltext>
              <p>
                Using the Unity game engine, C# and Object Oriented Programming to
                adeptly design and code captivating 2D games, ensuring optimal
                performance and engaging player experiences!
              </p>
            </Info>
          </Card>
          <Card>
            <Info>
              <Title>Commercial Electrical Solutions</Title>
              <JobTitle>Project Manager</JobTitle>
              <Smalltext>March 2018 - March 2022</Smalltext>
              <ul>
                <li>
                  Managed and facilitated the installation and completion of projects
                  in the million dollar range by leading teams, collaborating and
                  delivering an MVP on time and under budget to our end users.
                </li>
                <li>Contribution to the design and creation of many projects</li>
                <li>Managed multiple teams, team schedules, project scheduling.</li>
                <li>Exceeded 2021 expected profit margins by 40%.</li>
              </ul>
            </Info>
          </Card>
          <Card>
            <Info>
              <Title>Self Employed</Title>
              <JobTitle>Owner</JobTitle>
              <Smalltext>January 2016 - March 2018</Smalltext>
              <ul>
                <li>
                  Owned and operated business successfully until buyout in 2018
                </li>
                <li>
                  Mentored several apprentices through career brought to license
                </li>
                <li>
                  Successfully ran daily operations across multiple projects
                  exceeding end user expectations
                </li>
                <li>Increased gross profit by 60% each year in business</li>
              </ul>
            </Info>
            <JobTitle>Continued in Resume...</JobTitle>
          </Card>
        </Outer>
      </TimeLine>
    );
  };

  return (
    <>
      <ExperienceContainer ref={work}>
        <Timeline />
      </ExperienceContainer>
    </>
  );
};

export default Work;
