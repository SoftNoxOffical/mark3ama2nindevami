import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, Users, Factory, Globe } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const About = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [storyRef, storyVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();
  const [valuesRef, valuesVisible] = useScrollAnimation();
  const { t } = useTranslation();


  const stats = [
    { number: '10+', label: 'about.stats.experience' },
    { number: '10.000+', label: 'about.stats.products' },
    { number: '20+', label: 'about.stats.customers' },
    { number: '24/7', label: 'about.stats.support' }
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'about.values.quality.title',
      description: 'about.values.quality.description'
    },
    {
      icon: <Users className="h-8 w-8" />,
       title: 'about.values.satisfaction.title',
      description: 'about.values.satisfaction.description'
    },
    {
      icon: <Factory className="h-8 w-8" />,
       title: 'about.values.capacity.title',
      description: 'about.values.capacity.description'
    },
    {
      icon: <Globe className="h-8 w-8" />,
       title: 'about.values.sustainability.title',
      description: 'about.values.sustainability.description'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section 
      <section 
        ref={heroRef}
        className={`relative h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 ${
          heroVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/60 z-10"></div>
          <img
            src="https://images.pexels.com/photos/3999368/pexels-photo-3999368.jpeg"
            alt="Bez Üretimi"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hakkımızda
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            10 yılı aşkın deneyimle özel üretim bez sektöründe lider konumdayız
          </p>
        </div>
      </section>
*/}
      {/* Story Section */}
      <section
        ref={storyRef}
        className={`py-20 bg-white transition-all duration-1000 delay-200 ${storyVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="hikaye-baslik" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                {t('about.storyTitle')}
              </h2>
              <div className="h-1 w-16 bg-amber-500 rounded mb-6" />

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <Trans i18nKey="about.storyDescriptionHtml" components={[<strong />]} />
              </p>

              <h3 className="text-xl font-semibold text-gray-800">{t('about.mainProducts')} </h3>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 list-disc pl-6 text-base text-gray-700 leading-relaxed marker:text-amber-500">
                <li>{t('products.ipaCloth.nameUppercase')}</li>
                <li>{t('products.silkMesh.nameUppercase')} </li>
                <li>{t('products.bandocuGlove.nameUppercase')} </li>
                <li>{t('products.microFiber.nameUppercase')} </li>
                
              </ul>

              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {t('about.storyConclusion')}
              </p>
            </div>
            <div className="relative">
              <img
                src="/photo/hakkimizda_photo_2.jpeg"
                alt="Fabrika İçi"
                className="rounded-2xl shadow-2xl w-90"
              />
              {/* değişiklik photo gözükmüyor */}
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-6 rounded-xl shadow-xl">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm">{t('about.stats.experience')} </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className={`py-20 bg-blue-900 text-white transition-all duration-1000 delay-300 ${statsVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl md:text-6xl font-bold text-yellow-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{t(stat.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={valuesRef}
        className={`py-20 bg-gray-50 transition-all duration-1000 delay-400 ${valuesVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.valuesTitle')} </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('about.valuesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t(value.title)}</h3>
                <p className="text-gray-600">{t(value.description)}</p>
              </div>
            ))}
          </div>
          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-blue-900 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">{t('about.ctaTitle')} </h3>
              <p className="text-xl mb-6 opacity-90">
                {t('about.ctaDescription')}
              </p>

              <Link
                to="/iletisim"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                {t('about.ctaButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;