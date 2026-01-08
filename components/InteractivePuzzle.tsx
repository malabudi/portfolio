"use client";
import { useRef, useEffect } from "react";

export default function InteractiveShape() {
  const shapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = shapeRef.current;
    if (!el) return;

    function handleMouseMove(e: MouseEvent) {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        // Rotate shape toward cursor
        el.style.transform = `rotateX(${-offsetY / 12}deg) rotateY(${offsetX / 12}deg)`;
    }

    function handleMouseLeave() {
        if (!el) return;
        el.style.transform = "rotateX(0deg) rotateY(0deg)";
    }

    // Listen for mouse movement anywhere on the window
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative z-10 mt-12 flex justify-center">
      <div
        ref={shapeRef}
        className="
          puzzle
          hover:shadow-[0_0_80px_#fca311]
          transition-transform
          duration-150
          ease-out
        "
      />
    </div>
  );
}
