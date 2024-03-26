/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from "react";
import gsap from "gsap";
const CursorDrift = () => {
  const cursorRef = useRef(null);
  const isTouchDevice = "ontouchstart" in window;

  useEffect(() => {
    const cursor = cursorRef.current;

    if (isTouchDevice || !cursor) {
      return;
    }

    window.addEventListener("mousemove", (e) => {
      const { target, x, y } = e;

      const isTargetLinkOrBtn =
        target?.closest("a") || target?.closest("button");

      gsap.to(cursor, {
        x: x + -19,
        y: y + -19,
        duration: 1.2,
        ease: "power4.out",
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
        transform: `scale(${isTargetLinkOrBtn ? 3.5 : 1})`,
      });
    });
    // Using mouseleave() to animate the element cursor when the mouse cursor is moved off the page
    document.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        duration: 1.2,
        opacity: 0,
      });
    });
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        border: "3px solid #4fecec",
        width: "30px",
        height: "30px",
        position: "fixed",
        top: "0",
        left: "0",
        borderRadius: "100%",
        zIndex: "10000",
        userSelect: "none",
        pointerEvents: "none",
      }}
    />
  );
};
export default CursorDrift;
