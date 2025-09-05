import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ScissorsSquare } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import logo from "/photo/logo_only.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/urunlerimiz' },
    { name: t('nav.about'), path: '/hakkimizda' },
    { name: t('nav.contact'), path: '/iletisim' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-lg'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}

          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Linenix"
              className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain shrink-0 transition-opacity duration-300 ${isScrolled ? 'opacity-90' : 'opacity-100'
                }`}
            />
            <span className="font-bold transition-colors duration-300 text-lg sm:text-xl md:text-2xl text-[#014e84]">
  VONZA
</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-all duration-300 hover:scale-105 text-sm xl:text-base ${location.pathname === item.path
                  ? isScrolled
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-blue-600 border-b-2 border-blue-600'
                  : isScrolled
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/teklifal"
              className={`px-3 py-2 xl:px-4 xl:py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm xl:text-base ${isScrolled
                ? 'bg-blue-900 hover:bg-blue-800 text-white'
                : 'bg-yellow-500 hover:bg-yellow-600 text-black'
                }`}
            >
              {t('nav.quote')}
            </Link>
            {/*<LanguageSelector />*/}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2 sm:space-x-4">           {/*<LanguageSelector />*/}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-gray-900'
                }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4 shadow-lg">
        {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 font-medium transition-colors duration-200 ${location.pathname === item.path
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/teklifal"
              onClick={() => setIsMenuOpen(false)}
              className="block mx-4 mt-4 px-4 py-2 bg-blue-900 text-white text-center rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
            >
              {t('nav.quote')}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;