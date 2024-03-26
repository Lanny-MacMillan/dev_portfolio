"use client";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

export const ContactDiv = styled.div`
  background-color: "#BCE4F2";
  /* width: "size"; */
  width: ${(props) => (props.width ? props.width : "20")};

  /* height: "size"; */
  height: ${(props) => (props.height ? props.height : "20")};
  position: "fixed";
  top: "0";
  left: "0";
  border-radius: "100%";
  z-index: "10000";
  user-select: "none";
  pointer-events: "none";
`;

export default function BlurryCursor() {
  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef();
  const size = 30;

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };
    moveCircle(mouse.current.x, mouse.current.y);
  };

  const moveCircle = (x, y) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    // <ContactDiv ref={circle} height={size} width={size} />
    // <div className="relative h-screen">
    <div
      ref={circle}
      style={{
        backgroundColor: "#BCE4F2",
        width: size,
        height: size,
        position: "fixed",
        top: "0",
        left: "0",
        borderRadius: "100%",
        zIndex: "10000",
        userSelect: "none",
        pointerEvents: "none",
      }}
    />
    // </div>
  );
}
