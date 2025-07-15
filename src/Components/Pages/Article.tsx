import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams, useNavigate } from "react-router-dom";
import { navigationLinks, footerNavLinks, socialLinks } from '../etc/Links.tsx';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import * as icon from "react-icons/fa6";
import "highlight.js/styles/github-dark-dimmed.css";
import { Header } from "../Header.tsx";
import { Footer } from "../Footer.tsx";
import { blogPosts } from "../../database/ArticleData.tsx";

export function ArticlePage() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') return 'dark';
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
        }
        return 'light';
    });
    const { id } = useParams<{ id: string }>();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    const titleParam = searchParams.get('title');
    const authorParam = searchParams.get('author');

    const post = blogPosts.find(p => p.id === id);

    useEffect(() => {
        if (!post) {
            const timer = setTimeout(() => {
                navigate('/blog');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [post, navigate]);

    if (!post) {
        return (
            <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Tidak ada artikel yang ditemukan kembali ke halaman blog . . .
                    </p>
                </div>
            </div>
        );
    }

    const displayTitle = titleParam || post.title;
    const displayAuthor = authorParam || post.author;

    return (
        <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <Header
                logo="../sigmax.svg"
                title="codesigmax.com"
                description="Solusi digital untuk membangun skill anda"
                navLinks={navigationLinks}
                theme={theme}
                onThemeToggle={toggleTheme}
            >
                <button
                    className="w-full sm:w-auto bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
                    onClick={() => window.open('mailto:contact@codesigmax.com', '_blank')}
                >
                    Hubungi Kami
                </button>
            </Header>
            <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} py-12`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    {/* Article Header */}
                    <div className="mb-12">
                        <div className="flex items-center space-x-4 mb-6">
                            <Link
                                to="/"
                                className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                            >
                                <icon.FaArrowLeft className="mr-2" />
                                Kembali ke blog
                            </Link>
                        </div>

                        <div className="mb-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className={`px-3 py-1 rounded-full text-xs font-medium border ${theme === 'dark'
                                            ? 'bg-gray-900 text-gray-200 border-gray-700'
                                            : 'bg-gray-50 text-gray-800 border-gray-300'
                                            }`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                {displayTitle}
                            </h1>

                            <div className={`flex items-center space-x-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                                <span>•</span>
                                <span>Oleh {displayAuthor}</span>
                            </div>
                        </div>

                        {post.thumbnail && (
                            <div className="rounded-xl overflow-hidden mb-8">
                                <img
                                    src={post.thumbnail}
                                    alt={displayTitle}
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                            </div>
                        )}
                    </div>

                    <article className={`markdown-body ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeHighlight]}
                            components={{
                                h1: ({ node, ...props }) => (
                                    <h1
                                        className={`text-3xl font-bold mt-8 mb-4 ${theme === "dark" ? "text-white" : "text-black"
                                            }`}
                                        {...props}
                                    />
                                ),
                                h2: ({ node, ...props }) => (
                                    <h2
                                        className={`text-2xl font-bold mt-6 mb-3 ${theme === "dark" ? "text-white" : "text-black"
                                            }`}
                                        {...props}
                                    />
                                ),
                                h3: ({ node, ...props }) => (
                                    <h3
                                        className={`text-xl font-bold mt-5 mb-2 ${theme === "dark" ? "text-white" : "text-black"
                                            }`}
                                        {...props}
                                    />
                                ),
                                h4: ({ node, ...props }) => (
                                    <h4
                                        className={`text-lg font-semibold mt-4 mb-2 ${theme === "dark" ? "text-white" : "text-black"
                                            }`}
                                        {...props}
                                    />
                                ),
                                h5: ({ node, ...props }) => (
                                    <h5
                                        className={`text-base font-semibold mt-4 mb-2 ${theme === "dark" ? "text-white" : "text-black"
                                            }`}
                                        {...props}
                                    />
                                ),
                                h6: ({ node, ...props }) => (
                                    <h6
                                        className={`text-sm font-semibold mt-4 mb-2 ${theme === "dark" ? "text-white" : "text-black"
                                            }`}
                                        {...props}
                                    />
                                ),
                                p: ({ node, ...props }) => (
                                    <p
                                        className={`my-4 leading-relaxed ${theme === "dark" ? "text-gray-200" : "text-gray-800"
                                            }`}
                                        {...props}
                                    />
                                ),
                                a: ({ node, ...props }) => (
                                    <a
                                        className={`hover:underline ${theme === "dark" ? "text-indigo-300" : "text-indigo-600"
                                            }`}
                                        {...props}
                                    />
                                ),
                                ul: ({ node, ...props }) => (
                                    <ul className="list-disc pl-6 my-4" {...props} />
                                ),
                                ol: ({ node, ...props }) => (
                                    <ol className="list-decimal pl-6 my-4" {...props} />
                                ),
                                li: ({ node, ...props }) => (
                                    <li className={`my-2 ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`} {...props} />
                                ),
                                blockquote: ({ node, ...props }) => (
                                    <blockquote
                                        className={`border-l-4 italic my-4 pl-4 ${theme === "dark"
                                            ? "text-gray-300 border-gray-600"
                                            : "text-gray-600 border-gray-300"
                                            }`}
                                        {...props}
                                    />
                                ),
                                table: ({ node, ...props }) => (
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full my-4 border-collapse" {...props} />
                                    </div>
                                ),
                                th: ({ node, ...props }) => (
                                    <th
                                        className={`border px-4 py-2 text-left ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
                                            }`}
                                        {...props}
                                    />
                                ),
                                td: ({ node, ...props }) => (
                                    <td
                                        className={`border px-4 py-2 ${theme === "dark" ? "text-gray-200" : "text-gray-800"
                                            }`}
                                        {...props}
                                    />
                                ),
                                code: ({
                                    inline,
                                    className,
                                    children,
                                    ...props
                                }: {
                                    inline?: boolean;
                                    className?: string;
                                    children?: React.ReactNode;
                                    [key: string]: any;
                                }) => {
                                    if (inline) {
                                        return (
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
                                    }
                                    return (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    );
                                },
                                img: ({ node, ...props }) => (
                                    <img className="my-4 rounded-lg max-w-full" {...props} />
                                ),
                                strong: ({ node, ...props }) => (
                                    <strong className={`${theme === "dark" ? "text-gray-100" : "text-black"} font-semibold`} {...props} />
                                ),
                                em: ({ node, ...props }) => (
                                    <em className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} italic`} {...props} />
                                ),
                                span: ({ node, ...props }) => (
                                    <span className={`${theme === "dark" ? "text-gray-100" : "text-gray-800"}`} {...props} />
                                ),
                                pre: ({ node, ...props }) => (
                                    <pre className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} rounded-lg p-4 overflow-x-auto`} {...props} />
                                ),
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </article>

                    <div className={`mt-12 pt-8 border-t ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h3 className={`text-lg font-medium mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                                    Ditulis Oleh {displayAuthor}
                                </h3>
                            </div>
                            <Link
                                to="/"
                                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center"
                            >
                                <icon.FaArrowLeft className="mr-2" />
                                Kembali ke blog
                            </Link>
                        </div>
                    </div>
                </div>

                <style>{`
  .markdown-body code {
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 0.95rem;
    padding: 0.2em 0.4em;
    border-radius: 0.25rem;
    background-color: ${theme === 'dark' ? '#2d2d40' : '#f3f3f3'};
    color: ${theme === 'dark' ? '#eaeaea' : '#111'};
  }

  .markdown-body pre {
    border-radius: 0.5rem;
    padding: 1rem;
    overflow-x: auto;
    margin: 1rem 0;
    background: ${theme === 'dark' ? '#15151f' : '#eeeee4'};
    color: ${theme === 'dark' ? '#e0e0e0' : '#222'};
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 0.95rem;
  }

  .markdown-body code.hljs {
    background: transparent;
    padding: 0;
    color: ${theme === 'dark' ? '#e6e6e6' : '#111'};
  }

  .markdown-body blockquote {
    border-left-width: 4px;
    border-left-style: solid;
    margin: 1rem 0;
    padding-left: 1rem;
    color: ${theme === 'dark' ? '#aaa' : '#666'};
    border-left-color: ${theme === 'dark' ? '#444' : '#ddd'};
  }
`}</style>
            </div>
            <Footer
                logo="../sigmax.svg"
                companyName="CodeSigmaX"
                description="Solusi Digital dan Inovasi untuk meningkatkan skill anda."
                navLinks={footerNavLinks}
                socialLinks={socialLinks}
                theme={theme}
                onThemeToggle={toggleTheme}
            />
        </div>
    );
}