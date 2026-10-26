import React, { useRef, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './home/Home';
import Skills from './skills/Skills.js';
import Projects from './projects/Projects.js';
import Work from './work/Work.js';
import Contact from './contact/Contact';
import ScrollToTop from './util/ScrollToTop.js';
import CursorDrift from './assets/Tools/CursorDrift.jsx';
import {
  HeaderContainer,
  OurHerosName,
  HeaderLinksDiv,
  LinksContent,
  Links,
  PageRefIcon,
  MenuButton,
  MenuBar,
  MobileMenu,
  MobileLink,
  MobileLinkNumber,
} from './home/Home.styles.js';

function Main() {
  const [largeScreen, setLargeScreen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = ['// home', '// skills', '// projects', '// work', '// contact'];

  const pageRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const scrollToRef = (ref) => {
    setMenuOpen(false);
    pageRef[ref].current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) {
        setLargeScreen(true);
      } else {
        setLargeScreen(false);
      }
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100vw',
        overflow: 'hidden',
      }}
    >
      <HeaderContainer>
        <OurHerosName>Lanny_MacMillan</OurHerosName>
        <HeaderLinksDiv>
          {pages.map((page, pageRef) => (
            <LinksContent key={page} onClick={() => scrollToRef(pageRef)}>
              <PageRefIcon>0{pageRef}</PageRefIcon>
              <Links>{page}</Links>
            </LinksContent>
          ))}
        </HeaderLinksDiv>
        <MenuButton
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuBar $open={menuOpen} $index={0} />
          <MenuBar $open={menuOpen} $index={1} />
          <MenuBar $open={menuOpen} $index={2} />
        </MenuButton>
        <AnimatePresence>
          {menuOpen && (
            <MobileMenu
              id="mobile-menu"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {pages.map((page, pageRef) => (
                <MobileLink key={page} onClick={() => scrollToRef(pageRef)}>
                  <MobileLinkNumber>0{pageRef}</MobileLinkNumber>
                  {page}
                </MobileLink>
              ))}
            </MobileMenu>
          )}
        </AnimatePresence>
      </HeaderContainer>
      <ScrollToTop />
      <CursorDrift />
      <Home home={pageRef[0]} largeScreen={largeScreen} />
      <Skills skills={pageRef[1]} largeScreen={largeScreen} />
      <Projects projects={pageRef[2]} largeScreen={largeScreen} />
      <Work work={pageRef[3]} largeScreen={largeScreen} />
      <Contact contact={pageRef[4]} largeScreen={largeScreen} />
    </div>
  );
}

export default Main;
