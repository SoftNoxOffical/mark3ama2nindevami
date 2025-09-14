import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import logo from "/photo/logo_only.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  type TimeoutId = ReturnType<typeof setTimeout>;

 const [dropdownTimeout, setDropdownTimeout] = useState<TimeoutId | null>(null);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
   const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsProductsDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 300); // 300ms delay before closing
    setDropdownTimeout(timeout);
  };

  const products = [
    {
      id: 1,
      name: 'products.ipaCloth.name',
      description: 'products.ipaCloth.description',
      image: '/photo/ipa_silme_bezi.jpeg',
      price: 'products.priceContact'
    },
    {
      id: 2,
      name: 'products.silkMesh.name',
      description: 'products.silkMesh.description',
      image: '/photo/ipek_elek_suzme_bezi.jpeg',
      price: 'products.priceContact'
    },
    {
      id: 3,
      name: 'products.microFiber.name',
      description: 'products.microFiber.description',
      image: '/photo/mikro-fiber_bez.jpeg',
      price: 'products.priceContact'
    },
    {
      id: 4,
      name: 'products.bandocuGlove.name',
      description: 'products.bandocuGlove.description',
      image: '/photo/bandocu_eldiveni.jpeg',
      price: 'products.priceContact'
    }
  ];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 0, name: t('nav.home'), path: '/' },
    { id: 1, name: t('nav.products'), path: '/urunlerimiz' },
    { id: 2, name: t('nav.about'), path: '/hakkimizda' },
    { id: 3, name: t('nav.contact'), path: '/iletisim' },
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
            {navItems.map((item) =>
              item.id !== 1 ? (
                // Normal link
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-all duration-300 hover:scale-105 text-sm xl:text-base ${location.pathname === item.path
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                    }`}
                >
                  {item.name}
                </Link>
              ) : (
                // Products Dropdown
                <div
                  key="products"
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/urunlerimiz"
                    className={`font-medium transition-all duration-300 hover:scale-105 text-sm xl:text-base flex items-center space-x-1 ${location.pathname === '/urunlerimiz' || location.pathname.startsWith('/urun/')
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                      }`}
                  >
                    <span>{t('nav.products')}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </Link>


                  {isProductsDropdownOpen && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 backdrop-blur-sm">
                      {/* Elegant header */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800 text-center">{t('home.productsTitle')}</h3>
                        <p className="text-sm text-gray-600 text-center mt-1"></p>
                      </div>
                      
                      {/* Products grid */}
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-6">
                          {products.map((product) => (
                            <Link
                              key={product.id}
                              to={`/urun/${product.id}`}
                              className="group block bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 hover:from-blue-50 hover:to-indigo-50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 border border-gray-200 hover:border-blue-200"
                            >
                              <div className="aspect-[4/3] overflow-hidden rounded-xl mb-4 bg-white shadow-sm">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                              </div>
                              <div className="text-center">
                                <h4 className="font-semibold text-gray-900 text-base mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                  {t(product.name)}
                                </h4>
                                <p className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                                  {t(product.description)}
                                </p>
                                <div className="mt-3 inline-flex items-center text-xs font-medium text-blue-600 group-hover:text-blue-700">
                                  {t('productDetail.viewDetails')}
                                  <svg className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Elegant footer */}
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-4 border-t border-gray-100 text-center">
                        <Link
                          to="/urunlerimiz"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                          <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          {t('productDetail.seeAll')}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
            <Link
              to="/teklifal"
              className={`px-3 py-2 xl:px-4 xl:py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm xl:text-base ${isScrolled
                ? 'bg-blue-900 hover:bg-blue-800 text-white'
                : 'bg-yellow-500 hover:bg-yellow-600 text-black'
                }`}
            >
              {t('nav.quote')}
            </Link>
            <LanguageSelector />
          </nav>

          
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2 sm:space-x-4">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4 shadow-lg">
            {navItems.map((item) => 
              item.id !== 1 ? (
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
              ) : (
                <div key="mobile-products">
                  <button
                    onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                    className={`w-full flex items-center justify-between px-4 py-2 font-medium transition-colors duration-200 ${location.pathname === '/urunlerimiz' || location.pathname.startsWith('/urun/')
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                  >
                    <span>{t('nav.products')}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${isMobileProductsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {isMobileProductsOpen && (
                    <div className="bg-gray-50 border-t border-gray-200">
                      <div className="px-6 py-4">
                        <h3 className="text-sm font-semibold text-gray-800 mb-3">{t('home.productsTitle')}</h3>
                        <div className="space-y-3">
                          {products.map((product) => (
                            <Link
                              key={product.id}
                              to={`/urun/${product.id}`}
                              onClick={() => setIsMenuOpen(false)}
                              className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300"
                            >
                              <div className="w-12 h-12 overflow-hidden rounded-lg bg-gray-100">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900 text-sm mb-1">
                                  {t(product.name)}
                                </h4>
                                <p className="text-xs text-gray-600 line-clamp-2">
                                  {t(product.description)}
                                </p>
                              </div>
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/urunlerimiz"
                          onClick={() => setIsMenuOpen(false)}
                          className="block mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                        >
                          {t('productDetail.seeAll')}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
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
    </header >
  );
};

export default Header;