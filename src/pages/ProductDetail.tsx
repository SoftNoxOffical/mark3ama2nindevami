import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowLeft, CheckCircle, Truck, Shield, Award } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';
import { useTranslation } from 'react-i18next';

const ProductDetail = () => {
  const { id } = useParams();
  const [heroRef, heroVisible] = useScrollAnimation();
  const [detailsRef, detailsVisible] = useScrollAnimation();
  const [featuresRef, featuresVisible] = useScrollAnimation();
  const { t } = useTranslation();

  const products = [
    {
      id: 1,
      name: 'products.ipaCloth.name',
      description: 'products.ipaCloth.description',
      image: '/photo/ipa_silme_bezi.jpeg',
      gallery: [
        '/photo/ipa_silme_bezi.jpeg',
        '/photo/ipa_silme_bezi.jpeg',
        '/photo/ipa_silme_bezi.jpeg'
      ],
      
      specifications: {
        'Malzeme': '100% Pamuk',
        'Dokuma Tipi': 'Özel Dokuma',
        'Ağırlık': '200-300 GSM',
        'Renk Seçenekleri': '15+ Farklı Renk',
        'Boyutlar': 'Özel Ölçü Mevcut',
        'Bakım': 'Makine Yıkanabilir'
      },
      price: 'Fiyat için iletişime geçin'    },
    {
      id: 2,
      name: 'products.silkMesh.name',
      description: 'products.silkMesh.description',
      image: '/photo/ipek_elek_suzme_bezi.jpeg',
      gallery: [
        '/photo/ipek_elek_suzme_bezi.jpeg',
        '/photo/ipek_elek_suzme_bezi.jpeg',
        '/photo/ipek_elek_suzme_bezi.jpeg'
      ],
      specifications: {
        'Malzeme': 'Sertifikalı Organik Pamuk',
        'Sertifika': 'GOTS Sertifikalı',
        'Boyalar': 'Doğal Bitkisel Boyalar',
        'Ağırlık': '180-250 GSM',
        'Özel Özellik': 'Hipoalerjenik',
        'Çevre Etkisi': 'Karbon Nötr Üretim'
      },
      price: 'Fiyat için iletişime geçin'
    },
    {
      id: 3,
      name: 'products.microFiber.name',
      description: 'products.microFiber.description',
      image: '/photo/mikro-fiber_bez.jpeg',
      gallery: [
        '/photo/mikro-fiber_bez.jpeg',
        '/photo/mikro-fiber_bez.jpeg',
        '/photo/mikro-fiber_bez.jpeg'
      ],
      specifications: {
        'Baskı Tipi': 'Dijital Sublimation',
        'Renk Kalitesi': 'Full HD Çözünürlük',
        'Minimum Sipariş': '50 Adet',
        'Üretim Süresi': '7-10 İş Günü',
        'Tasarım Desteği': 'Ücretsiz Tasarım',
        'Dosya Formatı': 'AI, PSD, PDF'
      },
      price: 'Fiyat için iletişime geçin'
    },
    {
      id: 4,
      name: 'products.bandocuGlove.name',
      description: 'products.bandocuGlove.description',
      image: '/photo/bandocu_eldiveni.jpeg',
      gallery: [
        '/photo/bandocu_eldiveni.jpeg',
        '/photo/bandocu_eldiveni.jpeg',
        '/photo/bandocu_eldiveni.jpeg'
      ],
      specifications: {
        'Kullanım Alanı': 'Ev İçi',
        'Malzeme': 'Pamuk-Polyester Karışım',
        'Bakım': 'Makine Yıkanabilir 40°C',
        'Ütüleme': 'Orta Sıcaklık',
        'Çeşitler': 'Perde, Örtü, Yastık',
        'Renk Haslığı': 'Yüksek'
      },
      price: 'Fiyat için iletişime geçin'
    }
  ];

  const product = products.find(p => p.id === parseInt(id || '1'));

  if (!product) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ürün Bulunamadı</h1>
          <Link to="/urunlerimiz" className="text-blue-900 hover:text-blue-700">
            Ürünler sayfasına dön
          </Link>
        </div>
      </div>
    );
  }

  const benefits = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: 'Hızlı Teslimat',
      description: 'Türkiye geneli hızlı ve güvenli teslimat'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Kalite Garantisi',
      description: 'Tüm ürünlerimizde kalite garantisi'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Uzman Destek',
      description: '15 yıllık deneyimle profesyonel destek'
    }
  ];

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-900">Ana Sayfa</Link>
            <span>/</span>
            <Link to="/urunlerimiz" className="hover:text-blue-900">Ürünlerimiz</Link>
            <span>/</span>
            <span className="text-gray-900">{t(product.name)}</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <section 
        ref={heroRef}
        className={`py-12 bg-white transition-all duration-1000 ${
          heroVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <Link 
            to="/urunlerimiz"
            className="inline-flex items-center space-x-2 text-blue-900 hover:text-blue-700 mb-8"
          >
            <ArrowLeft size={20} />
            <span>Ürünlere Geri Dön</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <ImageGallery images={product.gallery} productName={product.name} />
            </div>

            {/* Product Info */}
            <div>
              {/* 
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-900 text-sm px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>*/}
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{t(product.name)}</h1>
              <p className="text-xl text-gray-600 mb-6 whitespace-pre-line whitespace-pre-wrap [tab-size:4]">{t(product.description)}</p>
             {/*  <p className="text-gray-700 mb-8 leading-relaxed whitespace-pre-line whitespace-pre-wrap [tab-size:4]">{t(product.description)}</p> */}
{/*
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Özellikler</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
*/}
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <p className="text-2xl font-bold text-blue-900 mb-4">{product.price}</p>
                <Link 
                  to="/iletisim"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
                >
                  Fiyat Teklifi Al
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details 
      <section 
        ref={detailsRef}
        className={`py-20 bg-gray-50 transition-all duration-1000 delay-200 ${
          detailsVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Specifications 
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Teknik Özellikler</h2>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="space-y-4">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700">{key}:</span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits 
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Avantajlar</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 flex items-start space-x-4">
                    <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
*/}
      {/* Related Products */}
      <section 
        ref={featuresRef}
        className={`py-20 bg-white transition-all duration-1000 delay-400 ${
          featuresVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benzer Ürünler</h2>
            <p className="text-xl text-gray-600">Diğer kaliteli bez ürünlerimizi keşfedin</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.filter(p => p.id !== product.id).slice(0, 3).map((relatedProduct, index) => (
              <Link
                key={relatedProduct.id}
                to={`/urun/${relatedProduct.id}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t(relatedProduct.name)} </h3>
                  <p className="text-gray-600 text-sm mb-4">{t(relatedProduct.description)}</p>
                  <span className="text-blue-900 font-semibold hover:text-yellow-500 transition-colors duration-200">
                    Detayları Gör →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;