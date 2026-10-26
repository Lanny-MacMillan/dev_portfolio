import React, { useState } from 'react';

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
  ToggleButton,
  Role,
} from './Work.styles.js';

const PREVIEW_COUNT = 2;

// On phones only the first couple of bullets show, with a toggle for the rest.
const Bullets = ({ collapsed, children }) => {
  const [expanded, setExpanded] = useState(false);
  const items = React.Children.toArray(children);
  const hidden = items.length - PREVIEW_COUNT;

  if (!collapsed || hidden <= 0) {
    return <ul>{items}</ul>;
  }

  return (
    <>
      <ul>{expanded ? items : items.slice(0, PREVIEW_COUNT)}</ul>
      <ToggleButton
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((open) => !open)}
      >
        {expanded ? 'Show less' : `Show ${hidden} more`}
      </ToggleButton>
    </>
  );
};

const Work = ({ work, largeScreen }) => {
  const Timeline = () => {
    return (
      <TimeLine>
        <Header>Experience</Header>
        <Outer>
          <Card>
            <Info>
              <Title>Thryv Inc.</Title>
              <Role>
                <JobTitle>Product Web Developer II</JobTitle>
                <Smalltext>Dec 2024 - current</Smalltext>
                <Bullets collapsed={!largeScreen}>
                  <li>
                    Shipped features for a customer-facing product across React and
                    Node: purchase and upsell flows, an AI search visibility
                    dashboard, monthly reports, scoped auth and a Google Search
                    Console integration, with its dev, staging and prod GCP
                    environments provisioned as code in Terraform.
                  </li>
                  {/* Original, more specific bullet (restore if the agreement allows):
                  <li>
                    Shipped features for the SEO/AEO product across React and Node:
                    purchase and upsell flows, an AI search visibility dashboard,
                    monthly reports, scoped auth and a Google Search Console
                    integration, with its dev, staging and prod GCP environments
                    provisioned as code in Terraform.
                  </li>
                  */}
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
                    Engineering escalation point for support and fulfillment across
                    US, AU and NZ accounts. Traced recurring analytics and tagging
                    failures to root causes and fixed them instead of patching
                    symptoms, including a batch repair across hundreds of accounts.
                  </li>
                  <li>
                    Extended feature flagging from its first two repos to five.
                  </li>
                  <li>
                    Authored 400+ pull requests and reviewed 200+ for teammates.
                    Wrote runbooks and full-stack flow docs.
                  </li>
                  <li>
                    Helped build unit test coverage across the app from zero to full,
                    using Jest and React Testing Library.
                  </li>
                </Bullets>
              </Role>
              <Role>
                <JobTitle>Product Web Developer I</JobTitle>
                <Smalltext>Sept 2022 - Dec 2024</Smalltext>
                <Bullets collapsed={!largeScreen}>
                  <li>
                    Helped build and launch Marketing Center, then maintained the
                    product and managed its analytics.
                  </li>
                  <li>
                    Kept shipping customer-facing features and add-ons across React
                    and Node, from onboarding and plan-based access to reporting.
                  </li>
                  <li>
                    Introduced LaunchDarkly feature flags in two repos and redesigned
                    the user-plus-company targeting model, replacing Redux
                    conditionals with flags.
                  </li>
                </Bullets>
              </Role>
            </Info>
          </Card>
          <Card>
            <Info>
              <Title>Two Dudes Games</Title>
              <JobTitle>Indie Game Developer</JobTitle>
              <Smalltext>December 2023 - current</Smalltext>
              <Bullets collapsed={!largeScreen}>
                <li>
                  Designing and building 2D games with Unity and C#, using
                  object-oriented design to keep gameplay systems performant and easy
                  to extend.
                </li>
                <li>
                  Hands-on with core RPG systems in Unity: inventory and equipment,
                  material-based crafting, stat and damage models with elemental
                  effects, and prerequisite-gated skill trees.
                </li>
                <li>
                  Experience with state-machine enemy and boss behavior, and with
                  JSON save and load so progress persists between sessions.
                </li>
                <li>
                  Animate sprites and wire up animator controllers for characters,
                  enemies and bosses.
                </li>
              </Bullets>
            </Info>
          </Card>
          <Card>
            <Info>
              <Title>Commercial Electrical Solutions</Title>
              <JobTitle>Project Manager</JobTitle>
              <Smalltext>March 2018 - March 2022</Smalltext>
              <Bullets collapsed={!largeScreen}>
                <li>
                  Led teams and schedules on projects in the million dollar range,
                  managing scope, budget and client expectations to deliver on time
                  and under budget.
                </li>
                <li>
                  Consistently delivered more than the targets set for the team,
                  including exceeding 2021 profit margin targets by 40%.
                </li>
                <li>
                  Built up and led a service division covering on-call service calls,
                  overflow work and support for other crews, and grew its workload
                  year over year.
                </li>
                <li>
                  Contributed to the design and delivery of many projects, working
                  with clients and crews from planning through completion.
                </li>
              </Bullets>
            </Info>
          </Card>
          <Card>
            <Info>
              <Title>MacMillan Electric</Title>
              <JobTitle>Owner</JobTitle>
              <Smalltext>January 2016 - March 2018</Smalltext>
              <Bullets collapsed={!largeScreen}>
                <li>
                  Owned and ran an electrical contracting business, covering daily
                  operations across multiple projects, until its buyout in 2018.
                </li>
                <li>Grew gross profit 60% each year in business.</li>
                <li>
                  Completed subcontract electrical work for a partner company
                  alongside my own projects.
                </li>
              </Bullets>
            </Info>
          </Card>
          <Card>
            <Info>
              <Title>Commercial Electrical Solutions</Title>
              <JobTitle>Project Foreman</JobTitle>
              <Smalltext>February 2011 - January 2016</Smalltext>
              <Bullets collapsed={!largeScreen}>
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
              </Bullets>
            </Info>
            <JobTitle>Continued in Resume...</JobTitle>
          </Card>
        </Outer>
      </TimeLine>
    );
  };

  return (
    <>
      <ExperienceContainer ref={work}>{Timeline()}</ExperienceContainer>
    </>
  );
};

export default Work;
