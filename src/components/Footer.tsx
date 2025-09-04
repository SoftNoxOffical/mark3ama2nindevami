import React from 'react';
import { Phone, Mail, MapPin, Scissors } from 'lucide-react';

const Footer = () => {
  const products = [
    'Pamuklu Bez',
    'Organik Bez',
    'Renkli Bez',
    'Desenli Bez',
    'Özel Dokuma',
    'Ev Tekstili'
  ];

  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-blue-900/90 to-gray-900/90 absolute z-10"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/3196271/3196271-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="h-8 w-8 text-yellow-500" />
              <span className="text-2xl font-bold">BezPro</span>
            </div>
            <p className="text-gray-300 mb-4">
              Özel üretim bez ve tekstil ürünleri konusunda uzman firmamız, 
              kaliteli hizmet anlayışı ile müşterilerine en iyi çözümleri sunar.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ürünlerimiz</h3>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index} className="text-gray-300 hover:text-white transition-colors duration-200">
                  {product}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim Bilgileri</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} />
                <span>+90 212 123 45 67</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <span>info@bezpro.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin size={16} />
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SoftNox. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;