import * as LucideIcons from "lucide-react"

export interface SidebarItem {
  icon: keyof typeof LucideIcons;
  title: string;
  href: string;
  badge?: number;
}

export interface SidebarProps {
  logo: string;
  title: string;
  items: SidebarItem[];
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  className?: string;
  collapsed?: boolean;
  onCollapseToggle?: () => void;
}