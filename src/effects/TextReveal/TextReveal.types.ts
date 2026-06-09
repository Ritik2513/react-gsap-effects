import { ReactNode } from "react";

export interface TextRevealProps {
  text: string;
  duration?: number;
  delay?: number;
  stagger?: number;
  className?: string;
}
