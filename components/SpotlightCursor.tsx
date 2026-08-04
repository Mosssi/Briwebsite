"use client";

import { useEffect, useState } from "react";

export default function SpotlightCursor() {
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      setPos({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(200,255,60,0.11), transparent 70%)`,
      }}
    />
  );
}