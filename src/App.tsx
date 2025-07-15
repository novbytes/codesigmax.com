import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useState, useEffect } from 'react';
import { Loading } from './Components/Pages/Loading';

const Homepage = lazy(() => import('./Components/Pages/Homepage').then(m => ({ default: m.Homepage })));
const NotFound = lazy(() => import('./Components/Pages/NotFound').then(m => ({ default: m.NotFound })));
const BlogPage = lazy(() => import('./Components/Pages/Blog').then(m => ({ default: m.BlogPage })));
const ArticlePage = lazy(() => import('./Components/Pages/Article').then(m => ({ default: m.ArticlePage })));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = document.cookie.includes("visited=true");

    if (hasVisited) {
      setIsLoading(false);
    } else {
      document.cookie = "visited=true; max-age=31536000; path=/";
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
        <Loading variant="spinner" size="lg" theme="dark" text="Preparing your experience..." />
      </div>
    );
  }

  return (
    <Router>
      <Suspense fallback={
        <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
          <Loading variant="spinner" size="md" />
        </div>
      }>
        <Routes>
          {/* BLOG is now the homepage */}
          <Route path="/" element={<BlogPage />} />
          <Route path="/blog/:id" element={<ArticlePage />} />

          {/* Homepage moved to /beranda */}
          <Route path="/beranda" element={<Homepage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
