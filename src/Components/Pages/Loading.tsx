import { Loader2, Sparkles } from 'lucide-react';

export function Loading({
  variant = 'spinner',
  size = 'md',
  text = 'Loading...',
  theme = 'light',
  fullScreen = false
}: {
  variant?: 'spinner' | 'pulse' | 'sparkles';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  theme?: 'light' | 'dark';
  fullScreen?: boolean;
}) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  const colorClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const textColorClass = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';

  const animations = {
    spinner: <Loader2 className={`animate-spin ${sizeClasses[size]} ${colorClass}`} />,
    pulse: (
      <div className="flex space-x-2">
        <div className={`rounded-full ${sizeClasses[size]} ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'} animate-pulse`} style={{ animationDelay: '0ms' }} />
        <div className={`rounded-full ${sizeClasses[size]} ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'} animate-pulse`} style={{ animationDelay: '150ms' }} />
        <div className={`rounded-full ${sizeClasses[size]} ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'} animate-pulse`} style={{ animationDelay: '300ms' }} />
      </div>
    ),
    sparkles: <Sparkles className={`animate-pulse ${sizeClasses[size]} ${colorClass}`} />
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${fullScreen ? 'fixed inset-0 z-50 bg-white dark:bg-gray-900' : ''}`}>
      <div className="flex items-center justify-center">
        {animations[variant]}
      </div>
      {text && (
        <p className={`text-sm ${textColorClass} mt-2 font-medium`}>
          {text}
        </p>
      )}
    </div>
  );
}