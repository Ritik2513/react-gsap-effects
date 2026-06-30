import { ReactNode } from "react";

export interface TextRevealProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  stagger?: number;
  className?: string;
}
