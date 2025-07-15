import type { NavLink } from "./NavLink.tsx"

export interface HeaderProps {
  logo: string;
  title: string;
  description: string;
  navLinks?: NavLink[];
  children?: React.ReactNode;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  className?: string;
}