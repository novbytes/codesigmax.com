import { SunIcon, MoonIcon } from "lucide-react";
import { useState, useEffect } from "react";

interface ThemeSwitcherProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

export function ThemeSwitcher({ theme, onToggle }: ThemeSwitcherProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const isDark = theme === 'dark';

  const handleClick = () => {
    setIsAnimating(true);
    onToggle();
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <button
      onClick={handleClick}
      className={`relative w-14 h-8 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300 ${
        isDark ? 'bg-gray-700' : 'bg-gray-200'
      }`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Track */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5">
        <SunIcon className={`w-4 h-4 ${isDark ? 'text-gray-500' : 'text-yellow-500'}`} />
        <MoonIcon className={`w-4 h-4 ${isDark ? 'text-blue-300' : 'text-gray-500'}`} />
      </div>
      
      {/* Thumb */}
      <div
        className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
          isAnimating ? (isDark ? 'translate-x-0' : 'translate-x-6') : ''
        } ${
          isDark ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {isDark ? (
            <MoonIcon className="w-3 h-3 text-gray-700" />
          ) : (
            <SunIcon className="w-3 h-3 text-yellow-500" />
          )}
        </div>
      </div>
    </button>
  );
}