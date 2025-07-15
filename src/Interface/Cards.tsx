import * as LucideIcons from "lucide-react"

//-- Types --//
export interface CardBaseProps {
  theme?: 'light' | 'dark';
  className?: string;
  children?: React.ReactNode;
}

export interface CardProps extends CardBaseProps {
  title: string;
  description?: string;
  icon?: keyof typeof LucideIcons;
  imageUrl?: string;
  tags?: string[];
  actionText?: string;
  onAction?: () => void;
  badge?: string | number;
}

export interface LandscapeCardProps extends CardProps {
  orientation?: 'horizontal' | 'vertical';
  metaInfo?: string;
}

export interface GalleryCardProps extends CardBaseProps {
  items: Array<{
    imageUrl: string;
    title: string;
    description?: string;
    onClick?: () => void;
  }>;
  cols?: 1 | 2 | 3 | 4;
}

export interface AboutCardProps extends CardBaseProps {
  name: string;
  role: string;
  avatarUrl: string;
  socialLinks?: Array<{
    icon: keyof typeof LucideIcons;
    url: string;
  }>;
  bio: string;
  stats?: Array<{
    value: string | number;
    label: string;
  }>;
}

export interface PricingCardProps extends CardBaseProps {
  title: string;
  price: string;
  period?: string;
  features: string[];
  isFeatured?: boolean;
  ctaText?: string;
  onCtaClick?: () => void;
  disclaimer?: string;
}

export interface ProductCardProps extends CardBaseProps {
  title: string;
  price: string;
  description?: string;
  tags?: string[];
  whatsappNumber?: string;
}