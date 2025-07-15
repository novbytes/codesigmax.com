import { Header } from "../Header";
import { Footer } from "../Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { footerNavLinks, navigationLinks } from "../etc/Links";

export function NotFound() {
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

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const socialLinks = [
    { href: "https://github.com/novbytes", icon: FaGithub, label: "GitHub" },
    { href: "https://x.com", icon: FaXTwitter, label: "X (Twitter)" },
    { href: "https://linkedin.com/codesigmax", icon: FaLinkedin, label: "LinkedIn" },
  ];

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
        <button className="w-full sm:w-auto bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200">
          Mulai
        </button>
      </Header>

      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl" data-aos="zoom-in">
          <div className={`inline-flex items-center justify-center p-4 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} mb-6`}>
            <LucideIcons.AlertTriangle className={`w-12 h-12 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'}`} />
          </div>
          <h1 className={`text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            404
          </h1>
          <h2 className={`text-3xl font-semibold mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Halaman Tidak Ditemukan
          </h2>
          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
            >
              <LucideIcons.ArrowLeft className="w-5 h-5" />
              Kembali
            </button>
            <button
              onClick={() => navigate("/beranda")}
              className="px-6 py-3 rounded-lg font-medium bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center gap-2"
            >
              <LucideIcons.Home className="w-5 h-5" />
              Ke Beranda
            </button>
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