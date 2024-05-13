/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ShowCursor = () => {
  const cursorRef = useRef(null);
  const pointerRef = useRef(null);
  const isTouch = !!('undefined' != typeof document.documentElement.ontouchstart);

  useGSAP(() => {
    const cursor = cursorRef.current;
    if (isTouch || !cursor) {
      return;
    }

    window.addEventListener('mousemove', (e) => {
      const { target, x, y } = e;

      const isTargetLinkOrBtn = target?.closest('a') || target?.closest('button');
      // controls mouse follow
      gsap.to(cursor, {
        x: x + -19,
        y: y + -19,
        duration: 2,
        ease: 'power4.out',
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
      });
      // controls rotation
      gsap.to(cursor, {
        rotation: '+=360',
        transformOrigin: '50% 50%',
        duration: 5,
        ease: 'none',
        repeat: -1,
      });
    });

    document.addEventListener('mouseleave', () => {
      gsap.to(cursor, {
        duration: 2,
        opacity: 0,
      });
    });
  }, []);

  useGSAP(() => {
    const pointer = pointerRef.current;
    if (isTouch || !pointer) {
      return;
    }

    window.addEventListener('mousemove', (e) => {
      const { target, x, y } = e;

      const isTargetLinkOrBtn = target?.closest('a') || target?.closest('button');
      // controls mouse follow
      gsap.to(pointer, {
        x: x + -12,
        y: y + -12,
        duration: 1,
        ease: 'power4.out',
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
      });
      // controls rotation
      gsap.to(pointer, {
        rotation: '-=360',
        transformOrigin: '50% 50%',
        duration: 3,
        ease: 'none',
        repeat: -1,
      });
    });
    // Using mouseleave() to animate the element pointer to nothing when the mouse curpointersor is moved off the page
    document.addEventListener('mouseleave', () => {
      gsap.to(pointer, {
        duration: 1,
        opacity: 0,
      });
    });
  }, []);

  return (
    <>
      {isTouch ? (
        <div />
      ) : (
        <>
          <div
            ref={cursorRef}
            style={{
              border: '3px solid #4fecec',
              width: '30px',
              height: '30px',
              position: 'fixed',
              top: '0',
              left: '0',
              zIndex: '10000',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />
          <div
            ref={pointerRef}
            style={{
              border: '3px solid #c4cbca',
              width: '15px',
              height: '15px',
              position: 'fixed',
              top: '0',
              left: '0',
              zIndex: '10000',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />
        </>
      )}
    </>
  );
};
export default ShowCursor;
