import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FileText, ExternalLink, CheckCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Quote = () => {
  const { t } = useTranslation();
  const [headerRef, headerVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();

  const FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeqycag4maubVF3TJmPlGuyBzYXPofVN0EMGE25Q50R2mvT6w/viewform?usp=header";

  const [isTouch, setIsTouch] = useState(false);

  const openForm = () => {
    window.open(FORM_URL, "_blank", "noopener,noreferrer");
  };
  useEffect(() => {
    const touch =
      (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) ||
      "ontouchstart" in window ||
      (navigator.maxTouchPoints ?? 0) > 0;
    setIsTouch(touch);
  }, []);

  const benefits = [
    'Ücretsiz teklif hazırlama',
    '24 saat içinde geri dönüş',
    'Özel tasarım seçenekleri',
    'Toplu sipariş indirimleri',
    'Kalite garantisi',
    'Hızlı teslimat'
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header Section */}
      <section
        ref={headerRef}
        className={`py-20 bg-gradient-to-r from-blue-900 to-gray-800 text-white transition-all duration-1000 ${headerVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
      >
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('telkifal.title')}</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {t('telkifal.subtitle')}
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section
        ref={formRef}
        className={`py-20 transition-all duration-1000 delay-200 ${formVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Teklif Alma Avantajları</h2>
                <p className="text-lg text-gray-700 mb-8">
                  {t('telkifal.description')}
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-900 to-gray-800 p-6 rounded-2xl text-white">
                <h3 className="text-xl font-semibold mb-2">Hızlı İletişim</h3>
                <p className="opacity-90 mb-4">
                  Acil durumlar için doğrudan bizimle iletişime geçebilirsiniz.
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400 font-semibold">📞 +90 XXX XXX XX XX</span>
                </div>
              </div>
            </div>

            {/* Embedded Google Form */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 text-center">
                <FileText className="h-8 w-8 text-black mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-black">{t('quote.formButton')}</h3>
                <p className="text-black/80 mt-2">Formu doldurun, size ulaşalım</p>
              </div>
              <div className="p-6">
                <div className="relative aspect-[4/5] w-full">
                  {/* Üstte tamamen görünmez ama tıklanabilir katman */}
                  <button
                    type="button"
                    onClick={openForm}
                    onTouchStart={openForm}            // iOS için ekstra güvence
                    aria-label="Formu yeni sekmede aç"
                    className="absolute inset-0 z-20 bg-transparent cursor-pointer"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  />

                  <iframe
                    src={FORM_URL}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Teklif Talep Formu"
                    className="rounded-lg pointer-events-none z-0"  // alttaki içerik tıklanmasın
                  >
                    Yükleniyor...
                  </iframe>
                </div>

                <div className="mt-6 text-center">
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Formu Yeni Sekmede Aç
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;