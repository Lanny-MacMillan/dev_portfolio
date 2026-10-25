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
              <JobTitle>Product Web Developer II</JobTitle>
              <Smalltext>Sept 2022 - current</Smalltext>
              <ul>
                <li>
                  Owned a production data remediation of roughly 49K records end to
                  end: wrote the audit, rewrite, verify and rollback tooling in
                  Node.js, defined the decision rules, and reported progress to
                  stakeholders. About 77% of rows verified correct and about 22% of
                  obsolete rows removed, with nothing outstanding at close.
                </li>
                <li>
                  Built safety into every production write: dry-run by default,
                  environment-gated changes, per-row snapshots, append-only ledgers
                  and rollback scripts.
                </li>
                <li>
                  Engineering escalation point for support and fulfillment across US,
                  AU and NZ accounts. Traced recurring analytics and tagging failures
                  to root causes and fixed them instead of patching symptoms,
                  including a batch repair across hundreds of accounts.
                </li>
                <li>
                  Shipped features for the SEO/AEO product across React and Node:
                  purchase and upsell flows, an AI search visibility dashboard,
                  monthly reports, scoped auth and a Google Search Console
                  integration, with its dev, staging and prod GCP environments
                  provisioned as code in Terraform.
                </li>
                <li>
                  Introduced LaunchDarkly across five repos and redesigned the
                  user-plus-company targeting model, replacing Redux conditionals
                  with feature flags.
                </li>
                <li>
                  Built subscription reactivation for cancelled accounts with a
                  rate-limited API and a hardened payment form.
                </li>
                <li>
                  Authored 400+ pull requests and reviewed 200+ for teammates. Wrote
                  runbooks and full-stack flow docs, and expanded Jest and React
                  Testing Library coverage.
                </li>
              </ul>
            </Info>
          </Card>
          <Card>
            <Info>
              <Title>Two Dudes Games</Title>
              <JobTitle>Indie Game Developer</JobTitle>
              <Smalltext>December 2023 - current</Smalltext>
              <ul>
                <li>
                  Designing and building 2D games with Unity and C#, using
                  object-oriented design to keep gameplay systems performant and easy
                  to extend.
                </li>
              </ul>
            </Info>
          </Card>
          <Card>
            <Info>
              <Title>Commercial Electrical Solutions</Title>
              <JobTitle>Project Manager</JobTitle>
              <Smalltext>March 2018 - March 2022</Smalltext>
              <ul>
                <li>
                  Led teams and schedules on projects in the million dollar range,
                  delivering on time and under budget.
                </li>
                <li>Contributed to the design and creation of many projects.</li>
                <li>Exceeded 2021 profit margin targets by 40%.</li>
              </ul>
            </Info>
          </Card>
          <Card>
            <Info>
              <Title>MacMillan Electric</Title>
              <JobTitle>Owner</JobTitle>
              <Smalltext>January 2016 - March 2018</Smalltext>
              <ul>
                <li>
                  Owned and ran an electrical contracting business, covering daily
                  operations across multiple projects, until its buyout in 2018.
                </li>
                <li>
                  Completed subcontract electrical work for a partner company
                  alongside my own projects.
                </li>
                <li>Grew gross profit 60% each year in business.</li>
              </ul>
            </Info>
          </Card>
          <Card>
            <Info>
              <Title>Commercial Electrical Solutions</Title>
              <JobTitle>Project Foreman</JobTitle>
              <Smalltext>February 2011 - January 2016</Smalltext>
              <ul>
                <li>
                  Led install crews on small projects, following engineered plans
                  from start to finish.
                </li>
                <li>
                  Kept daily communication with clients to maintain the relationship,
                  and brought projects in on time and under budget.
                </li>
                <li>
                  Mentored and taught apprentice electricians throughout my
                  electrical career.
                </li>
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
