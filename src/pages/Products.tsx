import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Eye, ShoppingCart ,Download} from 'lucide-react';

const Products = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [productsRef, productsVisible] = useScrollAnimation();

  const productCategories = [
    {
      id: 1,
      name: 'İPA Silme Bezi',
      image: '/photo/ipa_silme_bezi.jpeg',
      description: '%100 polyester endüstriyel örme silme bezi Ultrasonik kesim ile dilimleme yapılmaktadır, kesilen kenarlardan hav bırakma veya iplik atması yapmaz. 20×40, 30×40, 40×40 veya diğer istenilen ebatlarda dilimlenebilir Tek taraflı desen, 200 gr/m2 Yüzeyi çizmez, hav veya lif bırakmaz. Üstün hidrofilik özellik, yüksek sıvı emme kapasitesi Tüm yüzeyler için uygundur Otomotiv ve boya sanayi hassas yüzey işlemleri için uygundur',
      features: ['<strong>burası değişecek;</strong>', '100% Pamuk', 'Yumuşak Doku', 'Dayanıklı', 'Çeşitli Renkler'],
      price: 'Fiyat için iletişime geçin'
    },
    {
      id: 2,
      name: 'İpel Elek Süzme Bezi',
      image: '/photo/ipek_elek_suzme_bezi.jpeg',
      description: 'İpek elek Bezi, Hava, Su, Yağ, yakıt, vs. filtresi olarak Tekstil, Cam, Seramik, Elektronik, Grafik, Plastik,Gıda, Kimya, Sağlık, Otomobil ve Reklam sektörlerinde kullanılmaktadır. Ürünlerimiz sektörün en kaliteli özelliklerine sahiptir.  Eşit gözenekli, eşit atkı ve çözgü sayıları vardır.  Ürünümüz yüksek kopma mukavemetli %100 polyester monofilament iplikten üretilmiştir.  25 mikron ve üstü tüm özelliklerde ürün yelpazesi bulunmaktadır.',
      features: ['<strong>burası değişecek;</strong>', 'Organik Malzeme', 'Çevre Dostu', 'Hipoalerjenik', 'Sertifikalı'],
      price: 'Fiyat için iletişime geçin'
    },
    {
      id: 3,
      name: 'Mikro-Fiber Bez',
      image: 'photo/mikro-fiber_bez.jpeg',
      description: '<strong>burası değişecek;</strong>  Ev dekorasyonu, perde, masa örtüsü ve döşemelik kumaşlar için özel desenli bezler. Doğal pamuk ve organik liflerden üretilen, çevre dostu ve sağlıklı ev tekstili ürünleri. Renk ve desen seçenekleri ile kişisel zevklere uygun çözümler sunuyoruz.',
      features: ['Özel Tasarım', 'Kişiselleştirme', 'Çeşitli Desenler', 'Hızlı Üretim'],
      price: 'Fiyat için iletişime geçin'
    },
    {
      id: 4,
      name: 'Bandocu Eldiveni',
      image: 'photo/bandocu_eldiveni.jpeg',
      description: '<strong>burası değişecek;</strong>  Tören yürüyüşleri, konserler ve resmi geçitler için tasarlanan bandocu eldivenimiz; optik beyaz rengi, düzgün dikiş yapısı ve konforlu kalıbıyla kıyafetinizi tamamlar. Nefes alabilen pamuk-polyester karışımı kumaşı terlemeyi azaltır, yumuşak dokusu enstrüman üzerinde iz bırakmaz. Esnek bilek yapısı sayesinde güvenli ve rahat bir kullanım sunar; sık prova ve performanslarda formunu korur.',
      features: ['<strong>burası değişecek;</strong>', 'Ev Kullanımı', 'Şık Tasarım', 'Kolay Bakım', 'Uzun Ömürlü'],
      price: 'Fiyat için iletişime geçin'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
       {/*"https://images.pexels.com/photos/5708977/pexels-photo-5708977.jpeg"*/}
      <section
        ref={heroRef}
        className={`relative h-96 flex items-center justify-center overflow-hidden transition-all duration-1000 ${heroVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/60 z-10"></div>
          <img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
            alt="Ürünlerimiz"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4">Özel Üretim</h3>
          <p className="text-xl mb-6 opacity-90">
            İhtiyaçlarınıza özel bez üretimi. Bizimle iletişime geçin!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/iletisim"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              İletişime Geçin
            </Link>

            {/* İNDİRME BUTONU */}
            <a
              href="/public/files/Vonza_Tekstil_Katalog.pdf"   // public/ içine koyduğun dosya adı
              download="VONZA_Tekstil_Katalog.pdf"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-blue-50"
            // iOS Safari "download" yerine yeni sekmede açar; normaldir
            >
              Kataloğu İndir
              <Download className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action
      <div className="text-center mt-16">
        <div className="bg-blue-900 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Özel Üretim Talebi</h3>
          <p className="text-xl mb-6 opacity-90">
            İhtiyaçlarınıza özel bez üretimi yapıyoruz. Bizimle iletişime geçin!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/iletisim"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              İletişime Geçin
            </Link>

            {/* İNDİRME BUTONU 
            <a
              href="/public/files/Vonza_Tekstil_Katalog.pdf"   // public/ içine koyduğun dosya adı
              download="VONZA_Tekstil_Katalog.pdf"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-blue-50"
            // iOS Safari "download" yerine yeni sekmede açar; normaldir
            >
              Kataloğu İndir
              <Download className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div> */}

      {/* Products Grid */}
      <section
        ref={productsRef}
        className={`py-20 bg-gray-50 transition-all duration-1000 delay-200 ${productsVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ürün Koleksiyonumuz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              İhtiyaçlarınıza uygun bez ürünlerini bulun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product, index) => (
              <div
                key={product.id}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                      <button className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-900 hover:text-white transition-colors duration-200">
                        <Eye size={20} />
                      </button>
                      <button className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-900 hover:text-white transition-colors duration-200">
                        <ShoppingCart size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Özellikler:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-blue-100 text-blue-900 text-xs px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4 flex items-center justify-between">
                    <p className="text-sm text-gray-500">{product.price}</p>
                    <Link
                      to={`/urun/${product.id}`}
                      className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200"
                    >
                      Detay
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-blue-900 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Özel Üretim Talebi</h3>
              <p className="text-xl mb-6 opacity-90">
                İhtiyaçlarınıza özel bez üretimi yapıyoruz. Bizimle iletişime geçin!
              </p>
              <Link
                to="/teklifal"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;