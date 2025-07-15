import * as icon from "react-icons/fa6";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  description: string;
  icon?: keyof typeof icon; 
  tags?: string[];
  link: string;
  thumbnail?: string;
  theme?: 'light' | 'dark';
  badge?: string;
  date?: string;
  readingTime?: string; 
  author?: string; 
}

export function BlogCard({ 
  title, 
  description, 
  icon: iconName, 
  tags = [], 
  link, 
  thumbnail,
  theme = 'light',
  badge,
  date,
  readingTime,
  author
}: BlogCardProps) {
  const IconComponent = iconName ? icon[iconName] : null;
  const isDark = theme === 'dark';

  return (
    <div className={`group relative h-full rounded-xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out 
      ${isDark ? 'bg-gray-800 hover:shadow-gray-700/30' : 'bg-white hover:shadow-md'} 
      hover:-translate-y-1 border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
      
      <Link to={link} className="block h-full">
        {/* Badge with transparency */}
        {badge && (
          <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full z-10 backdrop-blur-sm
            ${isDark 
              ? 'bg-indigo-600/80 text-white' 
              : 'bg-indigo-100/80 text-indigo-800'
            } shadow-sm transition-opacity hover:opacity-90`}>
            {badge}
          </span>
        )}

        {/* Thumbnail */}
        {thumbnail && (
          <div className="relative h-48 w-full overflow-hidden">
            <img 
              src={thumbnail} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${
              isDark ? 'from-gray-900/80 to-gray-800/20' : 'from-white/90 to-white/10'
            }`} />
          </div>
        )}

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start gap-3 mb-3">
            {IconComponent && !thumbnail && (
              <div className={`p-2 rounded-lg flex-shrink-0 ${
                isDark ? 'bg-gray-700 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
              }`}>
                <IconComponent className="w-5 h-5" />
              </div>
            )}
            
            <div className="flex-1">
              <div className="flex justify-between items-start gap-2">
                <h3 className={`text-lg font-semibold ${
                  isDark ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  {title}
                </h3>
                {date && (
                  <span className={`text-xs whitespace-nowrap ${
                    isDark ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                    {date}
                  </span>
                )}
              </div>
              
              {/* Meta information (author and reading time) */}
              {(author || readingTime) && (
                <div className={`flex items-center gap-2 mt-1 text-xs ${
                  isDark ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  {author && <span>{author}</span>}
                  {author && readingTime && <span>•</span>}
                  {readingTime && <span>{readingTime} read</span>}
                </div>
              )}

              <p className={`mt-2 text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {description}
              </p>
            </div>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className={`px-2.5 py-1 text-xs rounded-full ${
                  isDark 
                    ? 'bg-gray-700/80 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200'
                } transition-colors`}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Read More */}
          <div className={`mt-4 pt-3 border-t ${
            isDark ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <span className={`inline-flex items-center text-sm font-medium ${
              isDark 
                ? 'text-indigo-400 group-hover:text-indigo-300' 
                : 'text-indigo-600 group-hover:text-indigo-700'
            } transition-colors`}>
              Read more
              <svg 
                className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}