/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BlurryCursor = ({ isActive }) => {
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const circle = useRef();
  const size = 30;
  // const size = clickable ? 60 : 30;

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseMove = (e) => {
    const { clientX, clientY, target } = e;

    mouse.current = {
      x: clientX,
      y: clientY,
      duration: 0.7,
      ease: 'power4',
    };
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);

    rafId.current = window.requestAnimationFrame(animate);
  };

  const moveCircle = (x, y) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  useEffect(() => {
    animate();
    window.addEventListener('mousemove', manageMouseMove);

    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      window.cancelAnimationFrame(rafId.current);
    };
  }, [isActive]);

  return (
    <div
      ref={circle}
      style={{
        border: '3px solid #4fecec',
        width: size,
        height: size,
        position: 'fixed',
        top: '0',
        left: '0',
        borderRadius: '100%',
        zIndex: '10000',
        userSelect: 'none',
        pointerEvents: 'none',
      }}
    />
  );
};
export default BlurryCursor;
