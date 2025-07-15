import * as icon from "react-icons/fa6";
import { BlogCard } from "../Cards/BlogCards";
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { navigationLinks, footerNavLinks, socialLinks } from "../etc/Links";
import { ShowRandomAds } from "../etc/RandomAds";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  thumbnail?: string;
  icon?: keyof typeof icon;
  featured?: boolean;
}

interface SearchHistoryItem {
  query: string;
  filter: SearchFilter;
  timestamp: number;
}

const blogPosts: BlogPost[] = [
  {
    id: "post_1",
    title: "Fundamental React JS untuk Pemula",
    excerpt: "Pelajari langkah langkah dan cara cara fundamental tentang react js",
    author: "Pixxdev",
    date: new Date(2025, 6, 14).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    readTime: "5 Menit Membaca",
    tags: ["React", "Frontend", "JavaScript", "Web Development", "UI"],
    thumbnail: "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "FaReact",
    featured: true
  }
];

type SearchFilter = 'all' | 'title' | 'author' | 'tag' | 'date';

export function BlogPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams] = useSearchParams();
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
  const [searchFilter, setSearchFilter] = useState<SearchFilter>('all');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [showAllTags, setShowAllTags] = useState(false);
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const navigate = useNavigate();

  // Load search history from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedHistory = localStorage.getItem('searchHistory');
      if (savedHistory) {
        setSearchHistory(JSON.parse(savedHistory));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  useEffect(() => {
    const tag = searchParams.get('tag');
    const search = searchParams.get('search');
    const filter = searchParams.get('filter') as SearchFilter | null;
    const date = searchParams.get('date');

    if (tag) setActiveTag(tag);
    if (search) setSearchQuery(search);
    if (filter) setSearchFilter(filter);
    if (date) setSelectedDate(date);
  }, [searchParams]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const featuredPost = blogPosts.find(post => post.featured);

  const initialTagsToShow = 5;
  const tagsToDisplay = showAllTags ? allTags : allTags.slice(0, initialTagsToShow);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery
      ? (searchFilter === 'all'
        ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        : searchFilter === 'title'
          ? post.title.toLowerCase().includes(searchQuery.toLowerCase())
          : searchFilter === 'author'
            ? post.author.toLowerCase().includes(searchQuery.toLowerCase())
            : searchFilter === 'tag'
              ? post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
              : true)
      : true;

    const matchesTag = activeTag
      ? post.tags.includes(activeTag)
      : true;

    const matchesDate = selectedDate
      ? post.date === new Date(selectedDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
      : true;

    return matchesSearch && matchesTag && matchesDate;
  });

  const updateFilters = (newTag: string | null, newSearch: string, newFilter: SearchFilter, newDate: string) => {
    const params = new URLSearchParams();

    if (newTag) params.set('tag', newTag);
    if (newSearch) params.set('search', newSearch);
    if (newFilter && newFilter !== 'all') params.set('filter', newFilter);
    if (newDate) params.set('date', newDate);

    navigate(`?${params.toString()}`, { replace: true });
  };

  const handleTagClick = (tag: string | null) => {
    setActiveTag(tag);
    updateFilters(tag, searchQuery, searchFilter, selectedDate);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    updateFilters(activeTag, query, searchFilter, selectedDate);
  };

  const handleFilterChange = (filter: SearchFilter) => {
    setSearchFilter(filter);
    updateFilters(activeTag, searchQuery, filter, selectedDate);
  };

  const addToSearchHistory = (query: string, filter: SearchFilter) => {
    if (!query.trim()) return;
    
    const newHistoryItem = {
      query,
      filter,
      timestamp: Date.now()
    };

    const updatedHistory = [
      newHistoryItem,
      ...searchHistory.filter(item => 
        !(item.query === query && item.filter === filter)
      ).slice(0, 9) // Keep only the last 10 items
    ];

    setSearchHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToSearchHistory(searchQuery, searchFilter);
    setShowHistory(false);
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  const clearFilters = () => {
    setActiveTag(null);
    setSearchQuery("");
    setSearchFilter('all');
    setSelectedDate('');
    setShowAllTags(false);
    navigate('', { replace: true });
  };

  const toggleShowAllTags = () => {
    setShowAllTags(!showAllTags);
  };

  const loadHistoryItem = (item: SearchHistoryItem) => {
    setSearchQuery(item.query);
    setSearchFilter(item.filter);
    updateFilters(activeTag, item.query, item.filter, selectedDate);
    setShowHistory(false);
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Header
        logo="sigmax.svg"
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

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ShowRandomAds/>
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} max-w-3xl mx-auto`}>
              Blog dan Artikel CodeSigmaX
            </h1>
            <p className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Artikel, tutorial, dan berita terbaru dari codesigmax.com
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Featured Post */}
              {featuredPost && !searchQuery && !activeTag && !selectedDate && (
                <div className="mb-10">
                  <h2 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Artikel Unggulan
                  </h2>
                  <BlogCard
                    title={featuredPost.title}
                    description={featuredPost.excerpt}
                    icon={featuredPost.icon ?? "FaRegWindowRestore"}
                    tags={featuredPost.tags}
                    link={`/blog/${featuredPost.id}`}
                    thumbnail={featuredPost.thumbnail}
                    theme={theme}
                    date={featuredPost.date}
                    badge="Featured"
                  />
                </div>
              )}

              {/* Search and Filter */}
              <div className="mb-8 flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-end gap-4">
                  <div className="flex-1 w-full relative">
                    <form onSubmit={handleSearchSubmit}>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder={`Cari berdasarkan ${searchFilter === 'all' ? 'semua' : searchFilter === 'title' ? 'judul' : searchFilter === 'author' ? 'penulis' : 'tag'}...`}
                          className={`w-full pl-10 pr-4 py-3 rounded-lg border ${theme === "dark"
                            ? "border-gray-700 bg-gray-800 text-white placeholder:text-gray-400"
                            : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-500"
                            } focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200`}
                          value={searchQuery}
                          onChange={(e) => handleSearchChange(e.target.value)}
                          onFocus={() => setShowHistory(true)}
                          onBlur={() => setTimeout(() => setShowHistory(false), 200)}
                        />
                        <icon.FaMagnifyingGlass
                          className={`absolute left-3 top-3.5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
                        />
                        <button
                          type="submit"
                          className="absolute right-3 top-3.5"
                        >
                          <icon.FaArrowRight
                            className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
                          />
                        </button>
                      </div>
                    </form>

                    {/* Search History Dropdown */}
                    {showHistory && searchHistory.length > 0 && (
                      <div className={`absolute z-10 w-full mt-1 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                        <div className="p-2">
                          <div className="flex justify-between items-center px-2 py-1">
                            <h4 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                              Riwayat Pencarian
                            </h4>
                            <button
                              onClick={clearSearchHistory}
                              className={`text-xs ${theme === 'dark' ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'}`}
                            >
                              Hapus Semua
                            </button>
                          </div>
                          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            {searchHistory.map((item, index) => (
                              <li key={index}>
                                <button
                                  className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex justify-between items-center`}
                                  onClick={() => loadHistoryItem(item)}
                                >
                                  <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                    {item.query}
                                  </span>
                                  <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {item.filter === 'all' ? 'Semua' : 
                                     item.filter === 'title' ? 'Judul' : 
                                     item.filter === 'author' ? 'Penulis' : 'Tag'}
                                  </span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    {/* End Search History Dropdown */}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Filter pencarian:
                  </span>
                  {(['all', 'title', 'author', 'tag'] as SearchFilter[]).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => handleFilterChange(filter)}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${searchFilter === filter
                        ? 'bg-indigo-600 text-white'
                        : theme === 'dark'
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                      {filter === 'all' ? 'Semua' : 
                       filter === 'title' ? 'Judul' : 
                       filter === 'author' ? 'Penulis' : 'Tag'}
                    </button>
                  ))}
                </div>

                {/* Tags and Clear Filters */}
                <div className="flex flex-wrap gap-4 justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleTagClick(null)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${!activeTag
                        ? 'bg-indigo-600 text-white'
                        : theme === "dark"
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                      Semua Artikel
                    </button>

                    {tagsToDisplay.map(tag => (
                      <button
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeTag === tag
                          ? 'bg-indigo-600 text-white'
                          : theme === "dark"
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                      >
                        {tag}
                      </button>
                    ))}

                    {allTags.length > initialTagsToShow && (
                      <button
                        onClick={toggleShowAllTags}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${theme === 'dark'
                          ? 'text-indigo-400 hover:text-indigo-300'
                          : 'text-indigo-600 hover:text-indigo-700'
                          }`}
                      >
                        {showAllTags ? 'Lebih Sedikit' : 'Lebih Banyak...'}
                      </button>
                    )}
                  </div>

                  {(activeTag || searchQuery || searchFilter !== 'all' || selectedDate) && (
                    <button
                      onClick={clearFilters}
                      className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${theme === 'dark'
                        ? 'text-indigo-400 hover:text-indigo-300'
                        : 'text-indigo-600 hover:text-indigo-700'
                        }`}
                    >
                      <icon.FaClockRotateLeft /> Bersihkan Filter
                    </button>
                  )}
                </div>
              </div>

              {/* Blog Posts Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map(post => (
                    <BlogCard
                      key={post.id}
                      title={post.title}
                      description={post.excerpt}
                      icon={post.icon ?? "FaRegWindowRestore"}
                      tags={post.tags}
                      link={`/blog/${post.id}`}
                      thumbnail={post.thumbnail}
                      theme={theme}
                      date={post.date}
                      author={post.author}
                      badge={post.readTime}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <icon.FaMagnifyingGlass
                    className={`mx-auto text-4xl mb-4 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                      }`}
                  />
                  <h3 className={`text-xl font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                    Artikel tidak ditemukan
                  </h3>
                  <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    Coba sesuaikan pencarian atau kriteria filter Anda
                  </p>
                  <button
                    onClick={clearFilters}
                    className={`mt-4 px-4 py-2 rounded-lg font-medium flex items-center gap-2 mx-auto ${theme === 'dark'
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                      }`}
                  >
                    <icon.FaRotateLeft /> Reset Pencarian
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-6">
              {/* About Card */}
              <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Tentang Blog Ini
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                  Temukan artikel terbaru seputar pengembangan web, mobile, dan teknologi terkini dari para ahli kami.
                </p>
                <button
                  onClick={() => navigate('/about')}
                  className={`w-full py-2 rounded-lg font-medium ${theme === 'dark'
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                    }`}
                >
                  Pelajari Lebih Lanjut
                </button>
              </div>

              {/* Recent Posts */}
              <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Postingan Terbaru
                </h3>
                <div className="space-y-4">
                  {recentPosts.map(post => (
                    <div
                      key={post.id}
                      className="flex gap-3 cursor-pointer hover:opacity-80 transition-opacity group"
                      onClick={() => navigate(`/blog/${post.id}`)}
                    >
                      {post.thumbnail && (
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded transition-transform group-hover:scale-105"
                        />
                      )}
                      <div>
                        <h4 className={`font-medium group-hover:text-indigo-600 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {post.title}
                        </h4>
                        <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          {post.date} • {post.readTime}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Tag Populer
                </h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className={`px-3 py-1 rounded-full text-sm ${activeTag === tag
                        ? 'bg-indigo-600 text-white'
                        : theme === 'dark'
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Newsletter
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                  Dapatkan update artikel terbaru langsung ke email Anda.
                </p>
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Alamat Email"
                    className={`w-full px-4 py-2 rounded-lg border ${theme === "dark"
                      ? "border-gray-700 bg-gray-700 text-white placeholder:text-gray-400"
                      : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-500"
                      }`}
                  />
                  <button
                    className={`w-full py-2 rounded-lg font-medium ${theme === 'dark'
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                      }`}
                  >
                    Berlangganan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer
        logo="sigmax.svg"
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