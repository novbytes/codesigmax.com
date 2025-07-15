import { Header } from '../Header.tsx';
import { Footer } from '../Footer.tsx';
import { GalleryCard, ProductCard } from '../Cards/Cards.tsx';
import { ContactCard } from '../Cards/ContactCard.tsx';
import { navigationLinks, footerNavLinks, socialLinks } from '../etc/Links.tsx';
import { galleryItems } from '../etc/Items.tsx';
import { Typing } from '../Animated/Typing.tsx';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CodeCards } from '../Cards/CodeCard.tsx';

export function Homepage() {
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

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
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

    return (
        <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <Header
                logo="sigmax.svg"
                title="CodeSigmaX"
                description="Solusi Pengembangan Digital Profesional"
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

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
                {/* Hero Section */}
                <section className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 space-y-6" data-aos="fade-right">
                        <Typing
                            text="Solusi Digital Berkualitas"
                            className={`text-4xl md:text-5xl font-bold leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                            speed={100}
                            element="h1"
                            bold={true}
                        />
                        <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                            Kami menyediakan layanan pengembangan perangkat lunak profesional dengan pendekatan modern untuk membantu bisnis Anda tumbuh di era digital.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg shadow transition-colors duration-200"
                                data-aos="fade-up"
                                data-aos-delay="200"
                                onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                            >
                                Konsultasi Gratis
                            </button>
                            <button
                                className={`border font-medium px-6 py-3 rounded-lg shadow transition-colors duration-200 ${theme === 'dark'
                                    ? 'border-gray-600 text-white hover:bg-gray-800'
                                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                                    }`}
                                data-aos="fade-up"
                                data-aos-delay="300"
                                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Layanan Kami
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-1/2" data-aos="fade-left">
                        <div className={`rounded-xl overflow-hidden shadow-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                            <img
                                src="https://images.unsplash.com/photo-1580983559367-0dc2f8934365?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Dashboard Preview"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="space-y-12">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2
                            className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                            data-aos="fade-up"
                        >
                            Layanan Profesional Kami
                        </h2>
                        <p
                            className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Solusi lengkap untuk kebutuhan digital bisnis Anda
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProductCard
                            theme={theme}
                            title="Pengembangan Backend"
                            price="Mulai dari Rp950.000"
                            description="Layanan pembuatan server backend custom dengan arsitektur terbaik"
                            tags={["Node.js", "C++", "MySQL", "REST API"]}
                            data-aos="fade-up"
                        />
                        <ProductCard
                            theme={theme}
                            title="Pengembangan Website"
                            price="Mulai dari Rp750.000"
                            description="Pembuatan website profesional dengan teknologi terkini"
                            tags={["React", "Next.js", "Tailwind CSS", "SEO"]}
                            data-aos="fade-up"
                            data-aos-delay="100"
                        />
                        <ProductCard
                            theme={theme}
                            title="Optimasi Server"
                            price="Mulai dari Rp300.000"
                            description="Perbaikan dan optimasi performa server"
                            tags={["Debugging", "Optimasi", "Maintenance", "Security"]}
                            data-aos="fade-up"
                            data-aos-delay="200"
                        />
                        <ProductCard
                            theme={theme}
                            title="Digitalisasi Dokumen"
                            price="Rp10.000 per halaman"
                            description="Konversi dan pengelolaan dokumen digital"
                            tags={["OCR", "PDF", "Google Docs", "Automation"]}
                            data-aos="fade-up"
                            data-aos-delay="300"
                        />
                        <ProductCard
                            theme={theme}
                            title="WhatsApp Business Solution"
                            price="Mulai dari Rp100.000"
                            description="Solusi otomatisasi untuk bisnis WhatsApp Anda"
                            tags={["Automation", "Chatbot", "Integration", "API"]}
                            data-aos="fade-up"
                            data-aos-delay="400"
                        />
                        <ProductCard
                            theme={theme}
                            title="Konsultasi Teknologi"
                            price="Mulai dari Rp200.000/jam"
                            description="Solusi khusus untuk kebutuhan bisnis digital Anda"
                            tags={["Strategy", "Digital Transformation", "Consulting"]}
                            data-aos="fade-up"
                            data-aos-delay="400"
                        />
                    </div>
                </section>

                {/* About */}
                <section
                    id="about"
                    className={`py-16 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm`}
                >
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2
                                className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                                data-aos="fade-up"
                            >
                                Tentang CodeSigmaX
                            </h2>
                            <p
                                className={`mt-4 text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                Menghadirkan inovasi digital melalui solusi teknologi terkini
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div data-aos="fade-right" data-aos-delay="200">
                                <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                    Visi & Misi
                                </h3>
                                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                                    Kami berkomitmen untuk memberikan solusi teknologi yang andal dan inovatif, membantu klien mencapai tujuan bisnis mereka melalui pendekatan yang terstruktur dan profesional.
                                </p>
                                <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1">•</span>
                                        <span>Menggunakan teknologi terkini dalam setiap solusi</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1">•</span>
                                        <span>Memberikan layanan profesional dengan harga kompetitif</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1">•</span>
                                        <span>Membangun kemitraan jangka panjang dengan klien</span>
                                    </li>
                                </ul>
                            </div>
                            <div data-aos="fade-left" data-aos-delay="300">
                                <img
                                    src="https://cdn.dribbble.com/users/330915/screenshots/3587000/10_coding_dribbble.gif"
                                    alt="Ilustrasi Pengembangan Digital"
                                    className="w-full max-w-md mx-auto rounded-lg shadow"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Portfolio Section */}
                <section id="portfolio" className="space-y-12">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2
                            className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                            data-aos="fade-up"
                        >
                            Portofolio Kami
                        </h2>
                        <p
                            className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Beberapa proyek yang telah kami selesaikan untuk klien
                        </p>
                    </div>
                    <div data-aos="fade-up">
                        <GalleryCard
                            theme={theme}
                            items={galleryItems}
                            cols={3}
                        />
                    </div>
                </section>

                <section
                    id="contact"
                    className={`py-16 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm`}
                    data-aos="fade-up"
                >
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            Hubungi Kami
                        </h2>
                        <p className={`text-lg mb-10 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                            Kami siap membantu kebutuhan digital Anda. Hubungi tim kami untuk konsultasi atau penawaran.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                            <ContactCard
                                avatar="./adjidev.png"
                                name="Adjidev"
                                about="Frontend Developer & Konsultan Teknologi"
                                coverPhoto="https://static.vecteezy.com/system/resources/thumbnails/011/020/206/small_2x/modern-abstract-simple-blue-background-free-vector.jpg"
                                theme={theme}
                                social={[
                                    { icon: "FaWhatsapp", link: "https://wa.me/5519984493119" },
                                    { icon: "FaGithub", link: "https://github.com/novbytes" },
                                    { icon: "FaLinkedin", link: "https://linkedin.com/in/sigmax" },
                                ]}
                            />

                            <ContactCard
                                avatar="./pixxdev.jpg"
                                name="Pixxdev"
                                about="Backend Developer & Ahli Keamanan Siber"
                                coverPhoto="https://static.vecteezy.com/system/resources/previews/014/525/104/original/simple-and-cool-background-design-suitable-for-ppt-backgrounds-and-others-simple-backgrounds-free-vector.jpg"
                                theme={theme}
                                social={[
                                    { icon: "FaWhatsapp", link: "https://wa.me/6288801163320" },
                                    { icon: "FaGithub", link: "https://github.com/novbytes" },
                                    { icon: "FaLinkedin", link: "https://linkedin.com/in/sigmax" },
                                ]}
                            />
                        </div>
                    </div>
                </section>
                {/* Resources Section */}
                <section
                    className={`py-16 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm`}
                    data-aos="fade-up"
                >
                    <div className="max-w-4xl mx-auto text-center px-6">
                        <h2
                            className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                            data-aos="fade-up"
                        >
                            Sumber Belajar
                        </h2>
                        <p
                            className={`text-lg mb-10 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Materi pembelajaran pemrograman untuk meningkatkan kompetensi digital Anda
                        </p>

                        <CodeCards
                            items={[
                                {
                                    title: "Struktur Dasar C++",
                                    language: "cpp",
                                    code: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}`,
                                    description: "Pengenalan sintaks dasar C++"
                                },
                                {
                                    title: "Pemrograman Berorientasi Objek",
                                    language: "cpp",
                                    code: `class Rectangle {\nprivate:\n    int width, height;\n\npublic:\n    Rectangle(int w, int h) : width(w), height(h) {}\n    \n    int area() {\n        return width * height;\n    }\n};`,
                                    description: "Implementasi konsep OOP dalam C++"
                                },
                                {
                                    title: "Template Generik",
                                    language: "cpp",
                                    code: `template <typename T>\nT max(T a, T b) {\n    return (a > b) ? a : b;\n}\n\n// Penggunaan:\n// int hasil = max<int>(5, 10);`,
                                    description: "Pemrograman generik dengan template"
                                },
                                {
                                    title: "Standard Template Library",
                                    language: "cpp",
                                    code: `#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> nums = {5, 2, 8, 1};\n    std::sort(nums.begin(), nums.end());\n    \n    for (int num : nums) {\n        std::cout << num << " ";\n    }\n    return 0;\n}`,
                                    description: "Pemanfaatan STL untuk struktur data"
                                }
                            ]}
                            cols={2}
                            theme={theme}
                        />

                        <div className="mt-10">
                            <a
                                href="/resources"
                                className={`inline-block px-6 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${theme === 'dark'
                                    ? 'bg-teal-500 text-gray-800 hover:bg-teal-400'
                                    : 'bg-teal-500 text-gray-800 hover:bg-teal-400'
                                    }`}
                            >
                                Jelajahi Materi Lainnya
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer
                logo="sigmax.svg"
                companyName="CodeSigmaX"
                description="Solusi Pengembangan Digital Profesional"
                navLinks={footerNavLinks}
                socialLinks={socialLinks}
                theme={theme}
                onThemeToggle={toggleTheme}
            />
        </div>
    );
}