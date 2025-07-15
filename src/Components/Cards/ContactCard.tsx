import * as icons from 'react-icons/fa';
import { useState } from 'react';

interface SocialLink {
  icon: keyof typeof icons;
  link: string;
}

interface ContactCardProps {
  avatar: string;
  name: string;
  about: string;
  coverPhoto: string;
  social?: SocialLink[];
  theme?: 'light' | 'dark';
}

export function ContactCard({
  avatar,
  name,
  about,
  coverPhoto,
  social = [],
  theme = 'light',
}: ContactCardProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const isDark = theme === 'dark';

  return (
    <div className={`max-w-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      {/* Cover Photo */}
      <div className="h-32 w-full relative">
        <img 
          src={coverPhoto} 
          alt={`${name}'s cover`} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Avatar */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <img
            src={avatar}
            alt={name}
            className="w-24 h-24 rounded-full border-4 object-cover"
            style={{ borderColor: isDark ? '#1F2937' : '#FFFFFF' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="pt-14 pb-6 px-6">
        {/* Name */}
        <h2 className={`text-center text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {name}
        </h2>
        
        {/* About */}
        <p className={`text-center mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {about}
        </p>

        {/* Follow Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
              isFollowing
                ? 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>
        </div>

        {/* Social Links */}
        {social.length > 0 && (
          <div className="flex justify-center space-x-4">
            {social.map((item, index) => {
              const IconComponent = icons[item.icon];
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    isDark
                      ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-blue-500'
                  }`}
                  aria-label={`${name}'s ${item.icon}`}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}