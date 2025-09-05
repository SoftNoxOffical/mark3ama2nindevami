import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { PiMouseMiddleClickLight } from "react-icons/pi";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const [heroRef, heroVisible] = useScrollAnimation();
  const [productsRef, productsVisible] = useScrollAnimation();
  const [featuresRef, featuresVisible] = useScrollAnimation();

  const products = [
      {
        id: 1,
        nameKey: 'products.ipaCloth.name',
        descriptionKey: 'products.ipaCloth.description',
        image: '/photo/ipa_silme_bezi.jpeg'
      },
      {
        id: 2,
        nameKey: 'products.silkMesh.name',
        descriptionKey: 'products.silkMesh.description',
        image: '/photo/ipek_elek_suzme_bezi.jpeg'
      },
      {
        id: 3,
        nameKey: 'products.microFiber.name',
        descriptionKey: 'products.microFiber.description',
        image: '/photo/mikro-fiber_bez.jpeg'
      },
      {
        id: 4,
        nameKey: 'products.bandocuGlove.name',
        descriptionKey: 'products.bandocuGlove.description',
        image: '/photo/bandocu_eldiveni.jpeg'
      }
    ];

  const features = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      titleKey: 'features.quality.title',
      descriptionKey: 'features.quality.description'
    },
    {
      icon: <Star className="h-6 w-6" />,
      titleKey: 'features.design.title',
      descriptionKey: 'features.design.description'
    },
    {
      icon: <ArrowRight className="h-6 w-6" />,
      titleKey: 'features.delivery.title',
      descriptionKey: 'features.delivery.description'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 ${
        heroVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-gray-900/50 z-10"></div>
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline >
            <source src="/videos/hero.webm" type="video/webm  " />
          </video>
        </div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t('home.heroTitle')}
            <span className="text-yellow-500 block">{t('home.heroSubtitle')}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {t('home.heroDescription')}
          </p>
          <Link 
            to="/urunlerimiz"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            {t('home.heroButton')}
          </Link>
        </div>
      </section>
      {/* Products Section */}
      <section 
        ref={productsRef}
        className={`py-20 bg-gray-50 transition-all duration-1000 delay-200 ${
          productsVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.productsTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.productsSubtitle')}
            </p>
          </div>

          <div className="relative group">
            {/* Products Container */}
            <div className="relative overflow-hidden rounded-3xl">
              <div className="flex space-x-8 pb-8 transition-all duration-500 group-hover:blur-sm">
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className={`flex-shrink-0 w-80 bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-700 ${
                      productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={t(product.nameKey)}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{t(product.nameKey)}</h3>
                      <p className="text-gray-600 mb-4">{t(product.descriptionKey)}</p>
                      {/*<span className="text-blue-900 font-semibold transition-colors duration-200">
                        Detayları Gör →
                      </span> */}
                    </div>
                  </div>
                ))}
                
                {/* Additional products that appear to continue */}
                <div className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-xl overflow-hidden opacity-60">
                  <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-300 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-xl overflow-hidden opacity-40">
                  <div className="h-64 bg-gradient-to-r from-gray-100 to-gray-200"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-100 rounded mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
              
              {/* Fade effect on the right */}
              <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent pointer-events-none"></div>
            </div>

            {/* Hover Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
              <Link
                to="/urunlerimiz"
                className="bg-blue-900 hover:bg-yellow-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl transform scale-95 group-hover:scale-100 transition-all duration-300 hover:shadow-3xl"
              >
                {t('home.viewAllProducts')}
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
        {/* Product Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.productTypesTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('home.productTypesSubtitle')}
            </p>
          </div>

          <div className="space-y-20">
            {products.map((product, index) => (
              <div key={product.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={product.image}
                      alt={t(product.nameKey)}
                      className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">{t(product.nameKey)}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t(product.descriptionKey)}
                  </p>
                  <div className={`${index % 4 === 0 ? 'bg-blue-50' : index % 4 === 1 ? 'bg-green-50' : index % 4 === 2 ? 'bg-purple-50' : 'bg-yellow-50'} p-4 rounded-lg`}>
                    <p className={`${index % 4 === 0 ? 'text-blue-800' : index % 4 === 1 ? 'text-green-800' : index % 4 === 2 ? 'text-purple-800' : 'text-yellow-800'} font-medium`}>
                      {t(`products.${product.nameKey.split('.')[1]}.features`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-900 to-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">{t('home.specialNeedsTitle')}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t('home.specialNeedsDescription')}
              </p>
              <Link
                to="/iletisim"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                {t('home.contactButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section 
        ref={featuresRef}
        className={`py-20 bg-white transition-all duration-1000 delay-400 ${
          featuresVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.featuresTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.featuresSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center p-8 transform transition-all duration-700 hover:scale-105 ${
                  featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t(feature.titleKey)}</h3>
                <p className="text-gray-600">{t(feature.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;