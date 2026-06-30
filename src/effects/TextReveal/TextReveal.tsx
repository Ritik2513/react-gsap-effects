import React, { useRef, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { TextRevealProps } from "./TextReveal.types";

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  duration = 1,
  delay = 0,
  stagger = 0.05,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

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
        },
      );
    },
    { scope: containerRef },
  );

  const splitText = (node: ReactNode): ReactNode => {
    // if plain text
    if (typeof node === "string" || typeof node === "number") {
      const words = String(node).split(" ");

      return words.map((word, wordIndex) => (
        <span key={wordIndex} className="rge-word">
          {word.split("").map((char, charIndex) => (
            <span key={charIndex} className="rge-char">
              {char}
            </span>
          ))}

          {wordIndex !== words.length - 1 && (
            <span className="rge-space"> </span>
          )}
        </span>
      ));
    }

    // if React element like <strong>, <span>, etc.
    if (React.isValidElement(node)) {
      const element = node as React.ReactElement<{
        children?: React.ReactNode;
      }>;

      return React.cloneElement(element, {}, splitText(element.props.children));
    }

    // if array of children
    if (Array.isArray(node)) {
      return node.map((child, index) => (
        <React.Fragment key={index}>{splitText(child)}</React.Fragment>
      ));
    }

    return node;
  };

  return (
    <div
      ref={containerRef}
      className={`rge-text-reveal ${className}`}
      aria-live="polite"
    >
      {splitText(children)}
    </div>
  );
};
