import { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { ThemeSwitcher } from "./ThemeSwitcher";
import type { HeaderProps } from '../Interface/HeaderProps';

export function Header({
  logo,
  title,
  description,
  navLinks = [],
  children,
  theme,
  onThemeToggle,
  className = '',
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('#mobile-menu')) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themeClasses = {
    background: theme === 'dark' 
      ? `bg-gray-900 ${isScrolled ? 'bg-opacity-95' : 'bg-opacity-80'}` 
      : `bg-white ${isScrolled ? 'bg-opacity-95' : 'bg-opacity-80'}`,
    textPrimary: theme === 'dark' ? 'text-gray-100' : 'text-gray-900',
    textSecondary: theme === 'dark' ? 'text-gray-400' : 'text-gray-500',
    textTertiary: theme === 'dark' ? 'text-gray-300' : 'text-gray-700',
    border: theme === 'dark' ? 'border-gray-700' : 'border-gray-200',
    shadow: isScrolled 
      ? theme === 'dark' 
        ? 'shadow-lg shadow-gray-900/50' 
        : 'shadow-lg shadow-gray-300/50' 
      : 'shadow-sm',
    navLink: {
      text: theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
      hoverText: theme === 'dark' ? 'hover:text-indigo-400' : 'hover:text-indigo-600',
      hoverBg: theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100',
      active: theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
    },
    mobileMenu: {
      background: theme === 'dark' ? 'bg-gray-900/95' : 'bg-white/95',
      link: {
        text: theme === 'dark' ? 'text-gray-300' : 'text-gray-700',
        hoverText: theme === 'dark' ? 'hover:text-indigo-400' : 'hover:text-indigo-700',
        hoverBg: theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-50',
        active: theme === 'dark' ? 'bg-gray-800 text-indigo-400' : 'bg-gray-100 text-indigo-600'
      }
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Check active link
  const isActiveLink = (href: string) => {
    if (typeof window !== 'undefined') {
      return window.location.pathname === href;
    }
    return false;
  };

  return (
    <div className={`sticky top-0 z-50 w-full ${themeClasses.background} backdrop-blur-md transition-all duration-300 ${isScrolled ? 'py-0' : 'py-2'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className={`rounded-xl ${themeClasses.shadow} ${className} transition-all duration-300 ${isScrolled ? 'border border-opacity-20' : 'border border-transparent'} ${themeClasses.border}`}>
          <div className="flex items-center justify-between h-16">
            {/* Logo and Branding */}
            <a href="/" className="flex-shrink-0 flex items-center space-x-4 group">
              <img 
                src={logo} 
                alt={`${title} logo`} 
                className="w-10 h-10 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                width={40}
                height={40}
              />
              <div>
                <h1 className={`text-lg font-bold ${themeClasses.textPrimary} group-hover:opacity-80 transition-opacity`}>
                  {title}
                </h1>
                <p className={`text-xs hidden sm:block ${themeClasses.textSecondary}`}>
                  {description}
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`flex items-center font-medium transition-colors duration-200 px-3 py-2 rounded-lg ${themeClasses.navLink.text} ${themeClasses.navLink.hoverText} ${themeClasses.navLink.hoverBg} ${isActiveLink(link.href) ? themeClasses.navLink.active : ''}`}
                  >
                    {link.icon && <span className="mr-2">{link.icon}</span>}
                    {link.label}
                  </a>
                ))}
              </nav>
              <ThemeSwitcher theme={theme} onToggle={onThemeToggle} />
              {children && <div className="hidden md:block ml-2">{children}</div>}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden space-x-3">
              <ThemeSwitcher theme={theme} onToggle={onThemeToggle} />
              <button
                onClick={toggleMenu}
                className={`inline-flex items-center justify-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200 ${themeClasses.textSecondary} ${themeClasses.navLink.hoverText} ${themeClasses.navLink.hoverBg}`}
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div 
              id="mobile-menu"
              className={`md:hidden rounded-b-xl shadow-lg ${themeClasses.mobileMenu.background} backdrop-blur-lg transition-all duration-300`}
            >
              <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t ${themeClasses.border}`}>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex items-center px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${themeClasses.mobileMenu.link.text} ${themeClasses.mobileMenu.link.hoverText} ${themeClasses.mobileMenu.link.hoverBg} ${isActiveLink(link.href) ? themeClasses.mobileMenu.link.active : ''}`}
                  >
                    {link.icon && <span className="mr-3">{link.icon}</span>}
                    {link.label}
                  </a>
                ))}
              </div>
              {children && (
                <div className={`pt-2 pb-3 border-t px-4 ${themeClasses.border}`}>
                  {children}
                </div>
              )}
            </div>
          )}
        </header>
      </div>
    </div>
  );
}