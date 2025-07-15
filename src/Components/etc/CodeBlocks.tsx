import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { CodeProps } from '../../Interface/CodeProps';
import { useState } from 'react';

export const CodeBlock = ({
    inline,
    className,
    children,
    ...props
}: CodeProps) => {
    const match = /language-(\w+)/.exec(className || '');
    const [theme] = useState<'light' | 'dark'>(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') return 'dark';
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
        }
        return 'light';
    });
    return !inline && match ? (
        <SyntaxHighlighter
            language={match[1]}
            style={theme === 'dark' ? oneDark : oneLight}
            customStyle={{
                margin: '1rem 0',
                borderRadius: '0.5rem',
                backgroundColor: theme === 'dark' ? '#15151f' : '#f6f8fa',
                fontSize: '0.95rem',
                fontFamily: "'Fira Code', 'Courier New', monospace",
            }} a
            showLineNumbers={true}
            lineNumberStyle={{
                color: theme === 'dark' ? '#555' : '#aaa',
                marginRight: '1rem',
            }}
        >
            {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
    ) : (
        <code
            className={`px-1 py-0.5 rounded ${theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-black"
                }`}
            {...props}
        >
            {children}
        </code>
    );
};
