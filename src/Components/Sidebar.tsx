import * as LucideIcons from "lucide-react";
import { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import type { SidebarProps } from "../Interface/SidebarProps.tsx";

export function Sidebar({
  logo,
  title,
  items,
  theme,
  onThemeToggle,
  className = '',
  collapsed = false,
  onCollapseToggle,
}: SidebarProps) {
  const [activeItem, setActiveItem] = useState<string>(items[0]?.href || '');
  const [hovered, setHovered] = useState(false);

  const themeClasses = {
    background: theme === 'dark' ? 'bg-gray-900' : 'bg-white',
    textPrimary: theme === 'dark' ? 'text-gray-100' : 'text-gray-900',
    textSecondary: theme === 'dark' ? 'text-gray-400' : 'text-gray-600',
    border: theme === 'dark' ? 'border-gray-700' : 'border-gray-200',
    hoverBg: theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-50',
    activeBg: theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100',
  };

  const handleItemClick = (href: string) => {
    setActiveItem(href);
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex flex-col ${themeClasses.background} shadow-lg transition-all duration-300 ease-in-out ${
        collapsed ? 'w-20' : 'w-64'
      } ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Sidebar Header */}
      <div className={`flex items-center ${collapsed ? 'justify-center p-4' : 'justify-between p-6'} border-b ${themeClasses.border}`}>
        {!collapsed && (
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt={title} 
              className="w-8 h-8 rounded-lg"
              loading="lazy"
            />
            <h2 className={`text-lg font-semibold ${themeClasses.textPrimary}`}>
              {title}
            </h2>
          </div>
        )}
        {collapsed && hovered && (
          <div className="absolute left-full ml-4 bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 whitespace-nowrap">
            {title}
          </div>
        )}
        {onCollapseToggle && (
          <button
            onClick={onCollapseToggle}
            className={`p-1 rounded-full ${themeClasses.hoverBg} transition-colors duration-200`}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? (
              <LucideIcons.ChevronRight className="w-5 h-5" />
            ) : (
              <LucideIcons.ChevronLeft className="w-5 h-5" />
            )}
          </button>
        )}
      </div>

      {/* Sidebar Items */}
      <nav className="flex-1 overflow-y-auto pt-4">
        <ul className="space-y-1 px-2">
          {items.map((item) => {
            const Icon = LucideIcons[item.icon] as React.ElementType;
            const isActive = activeItem === item.href;
            
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => handleItemClick(item.href)}
                  className={`flex items-center rounded-lg p-3 transition-colors duration-200 ${
                    isActive ? themeClasses.activeBg : themeClasses.hoverBg
                  } ${collapsed ? 'justify-center' : 'justify-between'}`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-500' : themeClasses.textSecondary}`} />
                    {!collapsed && (
                      <span className={`text-sm font-medium ${isActive ? 'text-indigo-500' : themeClasses.textPrimary}`}>
                        {item.title}
                      </span>
                    )}
                  </div>
                  {!collapsed && item.badge && (
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-indigo-500 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {collapsed && hovered && (
                    <div className="absolute left-full ml-4 bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 whitespace-nowrap">
                      {item.title}
                    </div>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={`p-4 border-t ${themeClasses.border}`}>
        <ThemeSwitcher 
          theme={theme} 
          onToggle={onThemeToggle} 
        />
      </div>
    </aside>
  );
}