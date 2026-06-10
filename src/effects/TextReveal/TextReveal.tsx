import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { TextRevealProps } from "./TextReveal.types";

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  duration = 1,
  delay = 0,
  stagger = 0.05,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const chars = text.split("");

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const elements = containerRef.current.querySelectorAll(".rge-char");

      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out",
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className={`rge-text-reveal ${className}`}
      aria-label={text}
    >
      {chars.map((char, i) => (
        <span key={i} className="rge-char">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};
