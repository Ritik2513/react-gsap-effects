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

  // split by words first
  const words = text.split(" ");

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const chars = containerRef.current.querySelectorAll(".rge-char");

      gsap.fromTo(
        chars,
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
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={`rge-text-reveal ${className}`}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="rge-word">

          {word.split("").map((char, charIndex) => (
            <span key={charIndex} className="rge-char">
              {char}
            </span>
          ))}

          {/* preserve space between words */}
          {wordIndex !== words.length - 1 && (
            <span className="rge-space"> </span>
          )}

        </span>
      ))}
    </div>
  );
};