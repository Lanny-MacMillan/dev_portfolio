import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ShowCursor from '../assets/Tools/ShowCursor';
import {
  Container,
  GamePlayImage,
  GamePlayImageTwo,
  InnerContainer,
  ShowImageContainer,
  ShowImageColumn,
  ShowImage,
  LinkList,
  LinkLabel,
  LinkAction,
  LinkArrow,
  StatusText,
  LowerDiv,
  LeftDiv,
  RightDiv,
  BlueSpan,
  WhiteSpan,
  Header,
  SubHeader,
} from './ViewPage.styles';
import Main from '../Main';

const ViewPage = () => {
  const location = useLocation();

  if (location.state === null) {
    return <Main />;
  }

  const {
    nameText,
    nameTextExpanded,
    img,
    gameplayImage,
    gameplayImageTwo,
    fullDescription,
    liveLink,
    link,
    devTypeOneofTwo,
    devTypeTwoofTwo,
    status,
    // colorSplash,
  } = location.state;

  const inDevelopment = status === 'In_Development';
  const projectAvailable = liveLink != null;
  const repoAvailable = link != null;

  // Each row says what it is (Code / Live). Links get an arrow; states that
  // are not links (private repo, in development) are muted so they do not
  // read like broken links. A missing live link is hidden, not "unavailable".
  const repoValue = repoAvailable ? (
    <LinkAction href={link} target="_blank" rel="noopener noreferrer">
      <span>
        View<WhiteSpan>_</WhiteSpan>on<WhiteSpan>_</WhiteSpan>GitHub
      </span>
      <LinkArrow aria-hidden="true">{'\u2197'}</LinkArrow>
    </LinkAction>
  ) : (
    <StatusText>
      Private<BlueSpan>_</BlueSpan>Repo<BlueSpan>.</BlueSpan>
    </StatusText>
  );

  let liveValue = null;
  if (inDevelopment) {
    liveValue = (
      <StatusText>
        In<BlueSpan>_</BlueSpan>Development<BlueSpan>.</BlueSpan>
      </StatusText>
    );
  } else if (projectAvailable) {
    liveValue = (
      <LinkAction href={liveLink} target="_blank" rel="noopener noreferrer">
        <span>
          Open<WhiteSpan>_</WhiteSpan>Project
        </span>
        <LinkArrow aria-hidden="true">{'\u2197'}</LinkArrow>
      </LinkAction>
    );
  }

  return (
    <Container>
      <ShowCursor />
      <AnimatePresence>
        <InnerContainer>
          <motion.div
            style={{ marginTop: '1em' }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
          >
            {devTypeOneofTwo}
            <BlueSpan>_</BlueSpan>
            {devTypeTwoofTwo}
            <BlueSpan>.</BlueSpan>
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 1, delay: 1 }}
          >
            <Header>{nameText}</Header>
            <SubHeader>{nameTextExpanded}</SubHeader>
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 1, delay: 2 }}
          >
            <ShowImageContainer>
              <ShowImage src={img} />{' '}
              <ShowImageColumn>
                <GamePlayImage src={gameplayImage} />
                <GamePlayImageTwo src={gameplayImageTwo} />
              </ShowImageColumn>
            </ShowImageContainer>
          </motion.div>

          <LowerDiv>
            <LeftDiv>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ ease: 'easeInOut', duration: 1, delay: 3 }}
              >
                {fullDescription} <BlueSpan>.</BlueSpan>
              </motion.div>
            </LeftDiv>
            <RightDiv>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ ease: 'easeInOut', duration: 1, delay: 3.5 }}
              >
                <LinkList>
                  <LinkLabel>Code</LinkLabel>
                  {repoValue}
                  {liveValue && (
                    <>
                      <LinkLabel>Live</LinkLabel>
                      {liveValue}
                    </>
                  )}
                </LinkList>
              </motion.div>
            </RightDiv>
          </LowerDiv>
        </InnerContainer>
      </AnimatePresence>
    </Container>
  );
};

export default ViewPage;
