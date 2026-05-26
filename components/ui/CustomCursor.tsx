"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const current = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    let animationFrame: number;

    const animate = () => {
      current.current.x += (mouse.current.x - current.current.x) * 0.18;

      current.current.y += (mouse.current.y - current.current.y) * 0.18;

      cursor.style.transform = `
        translate3d(
          ${current.current.x}px,
          ${current.current.y}px,
          0
        )
        translate(-50%, -50%)
      `;

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    // hover interactions
    const targets = document.querySelectorAll("a, button, .interactive, .card");

    const activate = () => {
      cursor.classList.add("active");
    };

    const deactivate = () => {
      cursor.classList.remove("active");
    };

    targets.forEach((el) => {
      el.addEventListener("mouseenter", activate);

      el.addEventListener("mouseleave", deactivate);
    });

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("mousemove", move);

      targets.forEach((el) => {
        el.removeEventListener("mouseenter", activate);

        el.removeEventListener("mouseleave", deactivate);
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
