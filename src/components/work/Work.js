import React from 'react';
// import {
//   ReactIconColor,
//   JavascriptIcon,
//   TypescriptIcon,
//   UnityIconColor,
//   CSharpIcon,
// } from "../components/assets/icons";

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

const Work = ({ work, largeScreen }) => {
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
                <li>MC to market and global expansion.</li>
                <li>Develop features</li>
                <li>Asana</li>
                <li>Duda, Oauth, LaunchDarkly etc.</li>
              </ul>

              {/* {largeScreen ? (
                <Icon>
                  <ReactIconColor height={40} width={40} />{" "}
                  <JavascriptIcon height={40} width={40} />{" "}
                  <TypescriptIcon height={40} width={40} />{" "}
                </Icon>
              ) : (
                <Icon>
                  <ReactIconColor height={30} width={30} />{" "}
                  <JavascriptIcon height={30} width={30} />{" "}
                  <TypescriptIcon height={30} width={30} />{" "}
                </Icon>
              )} */}
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
              {/* <ul>
                <li>MC to market and global expansion.</li>
                <li>Develop features</li>
              </ul> */}
              {/* {largeScreen ? (
                <Icon>
                  <UnityIconColor height={40} width={40} />{" "}
                  <CSharpIcon height={40} width={40} />{" "}
                </Icon>
              ) : (
                <Icon>
                  <UnityIconColor height={30} width={30} />{" "}
                  <CSharpIcon height={30} width={30} />{" "}
                </Icon>
              )} */}
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
          </Card>
          {/* <Card>
            <Info>
              <Title>Title 5</Title>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </Info>
          </Card> */}
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
