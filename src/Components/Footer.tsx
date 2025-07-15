import type { FooterProps } from "../Interface/FooterLinks";

export function Footer({
  logo,
  companyName,
  description,
  navLinks,
  socialLinks,
  theme,
  className = "",
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  // Memoize the theme classes to avoid recalculating
  const themeClasses = {
    bg: theme === "dark" ? "bg-gray-900/90" : "bg-white/90",
    textPrimary: theme === "dark" ? "text-gray-100" : "text-gray-900",
    textSecondary: theme === "dark" ? "text-gray-400" : "text-gray-600",
    textTertiary: theme === "dark" ? "text-gray-300" : "text-gray-700",
    border: theme === "dark" ? "border-gray-800" : "border-gray-200",
    hoverText: theme === "dark" ? "hover:text-indigo-400" : "hover:text-indigo-600",
    hoverBg: theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100",
    inputBg: theme === "dark" ? "bg-gray-800" : "bg-white",
    inputBorder: theme === "dark" ? "border-gray-700" : "border-gray-300",
    inputText: theme === "dark" ? "text-gray-100" : "text-gray-900",
    inputPlaceholder: theme === "dark" ? "placeholder-gray-500" : "placeholder-gray-400",
  };

  return (
    <footer className={`w-full ${themeClasses.bg} backdrop-blur-md transition-colors duration-300 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={logo}
                alt={companyName}
                className="w-12 h-12 object-contain rounded-lg"
                loading="lazy"
              />
              <h3 className={`text-xl font-bold ${themeClasses.textPrimary}`}>
                {companyName}
              </h3>
            </div>
            <p className={`text-sm ${themeClasses.textSecondary} mb-6`}>
              {description}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 lg:col-span-3">
            {Object.entries(navLinks).map(([sectionTitle, links]) => (
              <div key={sectionTitle} className="mb-8 last:mb-0">
                <h4 className={`text-lg font-semibold mb-4 ${themeClasses.textPrimary}`}>
                  {sectionTitle}
                </h4>
                <nav className="grid grid-cols-1 gap-3">
                  {Object.entries(links).map(([key, link]) => (
                    <a
                      key={key}
                      href={link.href}
                      className={`text-sm font-medium transition-colors duration-200 ${themeClasses.textSecondary} ${themeClasses.hoverText}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* Social Links & Newsletter */}
          <div className="md:col-span-4 lg:col-span-4">
            <div className="mb-8">
              <h4 className={`text-lg font-semibold mb-4 ${themeClasses.textPrimary}`}>
                Gabung dengan codesigmax
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    aria-label={label}
                    className={`p-2 rounded-full transition-colors duration-200 ${themeClasses.textSecondary} ${themeClasses.hoverText} ${themeClasses.hoverBg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className={`text-sm font-medium mb-3 ${themeClasses.textTertiary}`}>
                Berlangganan ke codesigmax
              </h5>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Email Kamu"
                  required
                  className={`flex-grow px-4 py-2 rounded-lg sm:rounded-r-none text-sm border ${themeClasses.inputBg} ${themeClasses.inputBorder} ${themeClasses.inputText} ${themeClasses.inputPlaceholder} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                />
                <button
                  type="submit"
                  className={`px-4 py-2 rounded-lg sm:rounded-l-none text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200`}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`border-t ${themeClasses.border} mt-12 pt-8 text-sm ${themeClasses.textSecondary}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {currentYear} {companyName}. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className={`hover:underline ${themeClasses.textSecondary} ${themeClasses.hoverText}`}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className={`hover:underline ${themeClasses.textSecondary} ${themeClasses.hoverText}`}
              >
                Terms of Service
              </a>
              <a
                href="#"
                className={`hover:underline ${themeClasses.textSecondary} ${themeClasses.hoverText}`}
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}