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
  const headerRef = useRef(null);

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
    // home sits below the header, so go to the very top
    if (ref === 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    // the header is fixed, so stop just below it
    const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
    const top =
      pageRef[ref].current.getBoundingClientRect().top +
      window.scrollY -
      headerHeight;
    const lastSection = ref === pageRef.length - 1;
    const bottom = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: lastSection ? bottom : top, behavior: 'smooth' });
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
    // fade the header from the light hero to dark as the first screen scrolls away
    const light = {
      bg: [196, 203, 202, 0.3],
      menu: [196, 203, 202, 0.7],
      line: [20, 28, 58, 0.15],
    };
    const dark = {
      bg: [10, 15, 30, 0.22],
      menu: [10, 15, 30, 0.62],
      line: [255, 255, 255, 0.15],
    };
    const mix = (from, to, t) =>
      `rgba(${from
        .map((value, i) => (value + (to[i] - value) * t).toFixed(i === 3 ? 2 : 0))
        .join(', ')})`;
    let frame = 0;
    const update = () => {
      frame = 0;
      const header = headerRef.current;
      if (!header) return;
      const range = Math.max(window.innerHeight - header.offsetHeight, 1) * 0.85;
      const t = Math.min(Math.max(window.scrollY / range, 0), 1);
      const style = header.style;
      style.setProperty('--header-bg', mix(light.bg, dark.bg, t));
      style.setProperty('--header-menu-bg', mix(light.menu, dark.menu, t));
      style.setProperty(
        '--header-text-shadow',
        t < 0.5 ? 'none' : '0 1px 8px rgba(0, 0, 0, 0.5)',
      );
      style.setProperty(
        '--header-edge',
        Math.min(window.scrollY / (range * 0.25), 1).toFixed(2),
      );
      style.setProperty('--header-line', mix(light.line, dark.line, t));
      style.setProperty('--header-fg', t < 0.5 ? '#141c3a' : '#ffffff');
      style.setProperty(
        '--header-fg-muted',
        t < 0.5 ? 'rgba(20, 28, 58, 0.6)' : 'rgba(255, 255, 255, 0.65)',
      );
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
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
        paddingTop: '3em',
        background: '#c4cbca',
      }}
    >
      <HeaderContainer ref={headerRef}>
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
