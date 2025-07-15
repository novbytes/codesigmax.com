import type { ReactNode } from "react";

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  inline?: boolean;
  className?: string;
  children?: ReactNode;
}