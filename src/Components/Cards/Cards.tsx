import * as LucideIcons from "lucide-react";
import type { CardProps, LandscapeCardProps, GalleryCardProps, AboutCardProps, PricingCardProps, ProductCardProps } from "../../Interface/Cards"; 

//-- Shared Card Styles --//
const getCardClasses = (theme: 'light' | 'dark' = 'light') => ({
  card: `rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${
    theme === 'dark' 
      ? 'bg-gray-800 border-gray-700' 
      : 'bg-white border-gray-200'
  } border`,
  title: `font-semibold ${
    theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
  }`,
  description: `text-sm ${
    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
  }`,
  actionButton: `mt-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
    theme === 'dark'
      ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
  }`,
  tag: `text-xs px-2 py-1 rounded-full ${
    theme === 'dark'
      ? 'bg-gray-700 text-gray-300'
      : 'bg-gray-100 text-gray-700'
  }`,
  hoverEffect: `hover:shadow-md ${
    theme === 'dark' 
      ? 'hover:border-gray-600' 
      : 'hover:border-gray-300'
  }`,
  aboutCardAvatar: `w-20 h-20 rounded-full border-2 ${
    theme === 'dark' ? 'border-indigo-500' : 'border-indigo-400'
  } object-cover mx-auto`,
  pricingCardFeatured: `ring-2 ${
    theme === 'dark' ? 'ring-indigo-500' : 'ring-indigo-400'
  } relative`,
  pricingCardFeaturedBadge: `absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full`,
   priceText: `text-xl font-bold ${
    theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
  }`,
  whatsappButton: `mt-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
    theme === 'dark'
      ? 'bg-green-600 hover:bg-green-700 text-white'
      : 'bg-green-600 hover:bg-green-700 text-white'
  } flex items-center justify-center gap-2`,
});

//-- Components --//

/**
 * Standard Item Card Component
 */
export function ItemCard({
  theme = 'light',
  title,
  description,
  icon,
  imageUrl,
  tags = [],
  actionText,
  onAction,
  badge,
  className = '',
}: CardProps) {
  const classes = getCardClasses(theme);
  const IconComponent = icon ? LucideIcons[icon] as React.ElementType : null;

  return (
    <div className={`relative ${classes.card} ${classes.hoverEffect} ${className}`}>
      {badge && (
        <div className="absolute top-2 right-2 bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {badge}
        </div>
      )}
      
      {imageUrl && (
        <div className="h-40 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-5">
        <div className="flex items-start space-x-3">
          {IconComponent && !imageUrl && (
            <div className={`p-2 rounded-lg ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <IconComponent className="w-5 h-5" />
            </div>
          )}
          <div className="flex-1">
            <h3 className={`${classes.title} mb-1`}>{title}</h3>
            {description && (
              <p className={`${classes.description} mb-3`}>{description}</p>
            )}
          </div>
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span key={tag} className={classes.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {actionText && (
          <button 
            onClick={onAction} 
            className={`${classes.actionButton} w-full`}
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * Landscape-oriented Card Component
 */
export function LandscapeCard({
  theme = 'light',
  title,
  description,
  icon,
  imageUrl,
  tags = [],
  actionText,
  onAction,
  badge,
  orientation = 'horizontal',
  metaInfo,
  className = '',
}: LandscapeCardProps) {
  const classes = getCardClasses(theme);
  const IconComponent = icon ? LucideIcons[icon] as React.ElementType : null;

  return (
    <div className={`${classes.card} ${classes.hoverEffect} ${
      orientation === 'horizontal' ? 'flex' : ''
    } ${className}`}>
      {badge && (
        <div className="absolute top-2 right-2 bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {badge}
        </div>
      )}

      {imageUrl && (
        <div className={`${
          orientation === 'horizontal' 
            ? 'w-1/3 min-h-full' 
            : 'w-full h-48'
        } overflow-hidden`}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className={`p-5 ${orientation === 'horizontal' ? 'flex-1' : ''}`}>
        <div className="flex justify-between items-start">
          <div className="flex items-start space-x-3">
            {IconComponent && !imageUrl && (
              <div className={`p-2 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <IconComponent className="w-5 h-5" />
              </div>
            )}
            <div className="flex-1">
              <h3 className={`${classes.title} mb-1`}>{title}</h3>
              {description && (
                <p className={`${classes.description} mb-3`}>{description}</p>
              )}
            </div>
          </div>
          
          {metaInfo && (
            <span className={`text-xs ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
            }`}>
              {metaInfo}
            </span>
          )}
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span key={tag} className={classes.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {actionText && (
          <button 
            onClick={onAction} 
            className={`${classes.actionButton} mt-4`}
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * Gallery Card Component for displaying multiple items
 */
export function GalleryCard({
  theme = 'light',
  items,
  cols = 3,
  className = '',
}: GalleryCardProps) {
  const classes = getCardClasses(theme);
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`${classes.card} ${className}`}>
      <div className={`grid ${gridCols[cols]} gap-4 p-4`}>
        {items.map((item, index) => (
          <div 
            key={index} 
            onClick={item.onClick}
            className={`cursor-pointer rounded-lg overflow-hidden ${classes.hoverEffect} ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
            }`}
          >
            <div className="h-40 overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className={`${classes.title} mb-1`}>{item.title}</h3>
              {item.description && (
                <p className={`${classes.description} line-clamp-2`}>
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * About Card Component for team members or profiles
 */
export function AboutCard({
  theme = 'light',
  name,
  role,
  avatarUrl,
  socialLinks = [],
  bio,
  stats = [],
  className = '',
}: AboutCardProps) {
  const classes = getCardClasses(theme);

  return (
    <div className={`${classes.card} ${classes.hoverEffect} text-center ${className}`}>
      <div className="p-6">
        <img 
          src={avatarUrl} 
          alt={name}
          className={classes.aboutCardAvatar}
          loading="lazy"
        />
        <h3 className={`${classes.title} mt-4 text-xl`}>{name}</h3>
        <p className={`${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} text-sm font-medium`}>
          {role}
        </p>
        
        <p className={`${classes.description} mt-4`}>{bio}</p>
        
        {socialLinks.length > 0 && (
          <div className="flex justify-center space-x-4 mt-4">
            {socialLinks.map((link, index) => {
              const IconComponent = LucideIcons[link.icon] as React.ElementType;
              return (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full ${
                    theme === 'dark' 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        )}
      </div>
      
      {stats.length > 0 && (
        <div className={`border-t ${
          theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
        } px-6 py-4`}>
          <div className="flex justify-around">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className={`${classes.title} text-lg`}>{stat.value}</p>
                <p className={`${classes.description} text-xs`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Pricing Card Component for subscription plans
 */
export function PricingCard({
  theme = 'light',
  title,
  price,
  period = '/month',
  features = [],
  isFeatured = false,
  ctaText = 'Get Started',
  onCtaClick,
  disclaimer,
  className = '',
}: PricingCardProps) {
  const classes = getCardClasses(theme);

  return (
    <div className={`${classes.card} ${isFeatured ? classes.pricingCardFeatured : ''} ${
      className
    }`}>
      {isFeatured && (
        <span className={classes.pricingCardFeaturedBadge}>Popular</span>
      )}
      
      <div className="p-6 text-center">
        <h3 className={`${classes.title} text-xl mb-2`}>{title}</h3>
        <div className="flex items-center justify-center mb-4">
          <span className={`${classes.title} text-4xl font-bold`}>{price}</span>
          <span className={`${classes.description} ml-1`}>{period}</span>
        </div>
        
        <button
          onClick={onCtaClick}
          className={`${classes.actionButton} w-full mb-6 ${
            isFeatured ? 'bg-indigo-700 hover:bg-indigo-800' : ''
          }`}
        >
          {ctaText}
        </button>
        
        <ul className="space-y-3 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className={`mr-2 ${
                theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
              }`}>
                <LucideIcons.Check className="w-5 h-5" />
              </span>
              <span className={classes.description}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {disclaimer && (
        <div className={`px-6 py-3 text-center ${
          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
        }`}>
          <p className={`text-xs ${classes.description}`}>{disclaimer}</p>
        </div>
      )}
    </div>
  );
}

export function ProductCard({
  theme = 'light',
  title,
  price,
  description,
  tags = [],
  whatsappNumber = '6288801163320',
  className = '',
}: ProductCardProps) {
  const classes = getCardClasses(theme);
  
  const handleWhatsAppClick = () => {
    const message = `Hai kak saya ingin membeli jasa ${encodeURIComponent(title)} ${encodeURIComponent(price)}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className={`relative ${classes.card} ${classes.hoverEffect} ${className}`}>
      <div className="p-5">
        <h3 className={`${classes.title} mb-2`}>{title}</h3>
        
        <div className={`${classes.priceText} mb-3`}>
          {price}
        </div>
        
        {description && (
          <p className={`${classes.description} mb-3`}>{description}</p>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span key={tag} className={classes.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <button 
          onClick={handleWhatsAppClick}
          className={`${classes.whatsappButton} w-full`}
        >
          <LucideIcons.MessageCircle className="w-4 h-4" />
          Pesan via WhatsApp
        </button>
      </div>
    </div>
  );
}