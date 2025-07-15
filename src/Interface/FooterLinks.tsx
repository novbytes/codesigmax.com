import React from "react"

export interface FooterLinkItem {
  href: string;
  label: string;
}

export type FooterNavLinks = {
  [section: string]: {
    [title: string]: FooterLinkItem;
  };
};

export interface FooterProps {
  logo: string;
  companyName: string;
  description: string;
  navLinks: FooterNavLinks; 
  socialLinks: {
    href: string;
    icon: React.ElementType;
    label: string;
  }[];
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  className?: string;
}
