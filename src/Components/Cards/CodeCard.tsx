import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Copy, Check } from 'lucide-react';
import { 
  atomDark, 
  tomorrow 
} from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeProps {
  language: string;
  code: string;
  className?: string;
  theme?: 'light' | 'dark';
  showLineNumbers?: boolean;
}

interface CodeCardProps extends CodeProps {
  title?: string;
  description?: string;
}

interface CodeCardsProps {
  items: CodeCardProps[];
  cols?: 1 | 2 | 3;
  theme?: 'light' | 'dark';
}

function CopyButton({ 
  code, 
  theme = 'light',
  className = '' 
}: { 
  code: string; 
  theme?: 'light' | 'dark';
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`p-2 rounded-md transition-colors ${className} ${
        theme === 'dark'
          ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
          : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
      }`}
      aria-label="Copy code"
    >
      {copied ? (
        <Check className="w-4 h-4" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  );
}

export function Code({
  language,
  code,
  theme = 'light',
  showLineNumbers = true,
  className = '',
}: CodeProps) {
  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      <div className={`absolute right-2 top-2 z-10 ${
        theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'
      } backdrop-blur-sm rounded`}>
        <CopyButton code={code} theme={theme} />
      </div>
      <SyntaxHighlighter
        language={language}
        style={theme === 'dark' ? atomDark : tomorrow}
        showLineNumbers={showLineNumbers}
        wrapLines={true}
        customStyle={{
          margin: 0,
          padding: '1.25rem',
          background: theme === 'dark' ? '#1e1e2d' : '#f8fafc',
          fontSize: '0.875rem',
          borderRadius: '0.5rem',
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}

export function CodeCard({
  language,
  code,
  title,
  description,
  theme = 'light',
  className = '',
}: CodeCardProps) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-sm border transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-gray-800 border-gray-700'
        : 'bg-white border-gray-200'
    } ${className}`}>
      {(title || description) && (
        <div className="px-5 pt-5">
          {title && (
            <h3 className={`text-lg font-semibold ${
              theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
            }`}>
              {title}
            </h3>
          )}
          {description && (
            <p className={`mt-1 text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {description}
            </p>
          )}
        </div>
      )}
      <div className="p-5">
        <Code 
          language={language} 
          code={code} 
          theme={theme}
        />
      </div>
    </div>
  );
}

export function CodeCards({
  items,
  cols = 2,
  theme = 'light',
}: CodeCardsProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div className={`grid ${gridCols[cols]} gap-6`}>
      {items.map((item, index) => (
        <CodeCard
          key={index}
          language={item.language}
          code={item.code}
          title={item.title}
          description={item.description}
          theme={theme}
        />
      ))}
    </div>
  );
}