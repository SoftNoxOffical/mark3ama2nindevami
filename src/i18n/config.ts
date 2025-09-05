import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  tr: {
    translation: {
      // Navigation
      nav: {
        home: 'Ana Sayfa',
        products: 'Ürünlerimiz',
        about: 'Hakkımızda',
        contact: 'İletişim',
        quote: 'Teklif Al'
      },
      whatsapp: {
        tooltip: "WhatsApp ile iletişime geçin",
        message: "Merhaba, Vonza Tekstil ile iletişime geçmek istiyorum."
      },
      // Home page
      home: {
        heroTitle: 'Özel Üretim',
        heroSubtitle: 'Bez Ürünleri',
        heroDescription: 'Kaliteli hammaddeler ile özel tasarım bez üretimi yapıyoruz',
        heroButton: 'Ürünlerimizi İnceleyin',
        productsTitle: 'Ürün Koleksiyonumuz',
        productsSubtitle: 'Yüksek kaliteli bez ürünlerimizi keşfedin',
        featuresTitle: 'Neden Bizi Tercih Edin?',
        featuresSubtitle: 'Kaliteli hizmet ve güvenilir çözümler sunuyoruz',
        viewAllProducts: 'Tüm Ürünleri Gör',
        productTypesTitle: 'Ürün Çeşitlerimiz ve Kullanım Alanları',
        productTypesSubtitle: 'Farklı sektörlere yönelik kaliteli bez ürünleri üretiyoruz. Her ürünümüz özel ihtiyaçlara göre tasarlanmıştır.',
        specialNeedsTitle: 'Özel İhtiyaçlarınız İçin Çözüm Arıyorsunuz?',
        specialNeedsDescription: 'Hangi sektörde olursanız olun, size özel bez ürünleri üretebiliriz. Detaylı bilgi almak için bizimle iletişime geçin.',
        contactButton: 'Teklif Alın'
      },
      // Products
      products: {
        title: 'Ürünlerimiz',
        subtitle: 'Kaliteli ve çeşitli bez ürün koleksiyonumuzu keşfedin',
        collectionTitle: 'Ürün Koleksiyonumuz',
        collectionSubtitle: 'İhtiyaçlarınıza uygun bez ürünlerini bulun',
        specialProductionTitle: 'Özel Üretim Talebi',
        specialProductionDescription: 'İhtiyaçlarınıza özel bez üretimi yapıyoruz. Bizimle iletişime geçin!',
        contactUs: 'İletişime Geçin',
        features: 'Özellikler:',
        detail: 'Detay',
        priceContact: 'Fiyat için iletişime geçin',
        ipaCloth: {
          name: 'İPA SİLME BEZİ',
          description: '%100 polyester endüstriyel örme silme bezi. Ultrasonik kesim ile dilimleme yapılmaktadır, kesilen kenarlardan hav bırakma veya iplik atması yapmaz. \n\n20×40, 30×40, 40×40 veya diğer istenilen ebatlarda dilimlenebilir. \nTek taraflı desen, 200 gr/m2. \nYüzeyi çizmez, hav veya lif bırakmaz. \nÜstün hidrofilik özellik, yüksek sıvı emme kapasitesi. \nTüm yüzeyler için uygundur. \nOtomotiv ve boya sanayi hassas yüzey işlemleri için uygundur.',
          features: '✓ Steril üretim ✓ Antibakteriyel özellik ✓ Tek kullanımlık seçenekler'
        },
        silkMesh: {
          name: 'İPEK ELEK SÜZME BEZİ (SCREEN MESH)',
          description: 'İpek elek bezi, hava, su, yağ ve yakıt gibi akışkanların filtresi olarak tekstil, cam, seramik, elektronik, grafik, plastik, gıda, kimya, sağlık, otomotiv ve reklam sektörlerinde kullanılmaktadır. \n\nÜrünlerimiz sektörün en kaliteli özelliklerine sahiptir.  Eşit gözenekli, eşit atkı ve çözgü sayıları vardır.  Ürünümüz yüksek kopma mukavemetli %100 polyester monofilament iplikten üretilmiştir.  25 mikron ve üstü tüm özelliklerde ürün yelpazesi bulunmaktadır. \n\nRENK \t                           :   BEYAZ \n\nUZUNLUK                     :  İstenilen ebatlarda hizmetimiz mevcuttur',
          features: '✓ Yüksek emicilik ✓ Kimyasal direnç ✓ Yıkanabilir ve tekrar kullanılabilir'
        },
        microFiber: {
          name: 'MİKRO-FİBER BEZ',
          description: 'Ultra ince mikrofiber dokudan üretilmiş, yüksek emicilik ve iz bırakmayan temizlik bezi.\nKuru kullanımda tozu statik olarak toplar; nemli kullanımda cam, paslanmaz ve parlak yüzeylerde lekesiz sonuç verir.\n\nYumuşak yapısı yüzeyleri çizmez, hav ve lif bırakmaz.\nKimyasal gerektirmeden etkili temizlik sağlar; çevre ve kullanıcı dostudur.\nDefalarca yıkanabilir, formunu ve performansını korur.\n30×30, 40×40 gibi standart ebatlar ve isteğe özel ölçüler mevcuttur.',
          features: '✓ Organik malzemeler ✓ Özel desenler ✓ Renk haslığı garantisi'
        },
        bandocuGlove: {
          name: 'BANDOCU ELDİVENİ',
          description: '%100 Polyester \n Hav ve iz bırakmayan minimum dikişle tasarlanmış eldivendir.',
          features: '✓ Leke direnci ✓ Sık yıkamaya dayanıklı ✓ Profesyonel görünüm'
        }
      },
      // About page
      about: {
        title: 'Hakkımızda',
        subtitle: '10 yılı aşkın deneyimle özel üretim bez sektöründe lider konumdayız',
        storyTitle: 'Hikayemiz',
        storyDescription: 'Vonza Tekstil Otomotiv San. ve Tic. Ltd. Şti. olarak, 10 yılı aşkın tecrübemizle otomotiv yan sanayi sektöründe faaliyet gösteren boyahanelere yüksek kaliteli teknik tekstil ürünleri tedarik etmekteyiz.',
        mainProducts: 'Başlıca ürün gruplarımız',
        productList: [
          'İPA Silme Bezleri',
          'Boya Süzme Bezleri (İpek Elek Süzme Bezleri)',
          'Bandocu Eldivenleri',
          'Mikrofiber Temizlik Bezleri'
        ],
        storyConclusion: 'Ürünlerimiz, kalite ve işlevsellik açısından kendini kanıtlamış; üretim süreçlerinizi kolaylaştıran ve verimliliğinizi artıran çözümler sunar.',
        valuesTitle: 'Değerlerimiz',
        valuesSubtitle: 'İş anlayışımızı şekillendiren temel değerlerimiz',
        values: {
          quality: {
            title: 'Kalite',
            description: 'En yüksek standartlarda üretim yaparak, kaliteli ürünler sunuyoruz.'
          },
          satisfaction: {
            title: 'Müşteri Memnuniyeti',
            description: 'Müşteri memnuniyeti önceliğimiz, her projede mükemmellik hedefliyoruz.'
          },
          capacity: {
            title: 'Üretim Kapasitesi',
            description: 'Modern tesisimiz ile yüksek kapasiteli üretim yapabiliyoruz.'
          },
          sustainability: {
            title: 'Sürdürülebilirlik',
            description: 'Çevre dostu üretim yöntemleri ile doğaya saygılıyız.'
          }
        },
        stats: {
          experience: 'Yıl Deneyim',
          customers: 'Mutlu Müşteri',
          products: 'Ürün Çeşidi',
          support: 'Destek Hizmeti'
        },
        ctaTitle: 'Özel Üretim Talebi',
        ctaDescription: 'İhtiyaçlarınıza özel bez üretimi yapıyoruz. Bizimle iletişime geçin!',
        ctaButton: 'İletişime Geçin'
      },
      // Contact page
      contact: {
        title: 'İletişim',
        subtitle: 'Bizimle iletişime geçin, size yardımcı olmaktan memnuniyet duyarız',
        infoTitle: 'İletişim Bilgilerimiz',
        infoSubtitle: 'Sorularınız için bizimle iletişime geçebilirsiniz',
        formTitle: 'İletişime Geçin',
        formSubtitle: 'Formu doldurarak bizimle iletişime geçebilirsiniz',
        form: {
          name: 'Ad Soyad',
          namePlaceholder: 'Adınızı ve soyadınızı giriniz',
          company: 'Şirket Adı',
          companyPlaceholder: 'Şirket adınızı giriniz',
          email: 'E-posta',
          emailPlaceholder: 'E-posta adresinizi giriniz',
          phone: 'Telefon',
          phonePlaceholder: 'Telefon numaranızı giriniz',
          country: 'Ülke',
          countryPlaceholder: 'Ülkenizi giriniz',
          location: 'Konum',
          locationPlaceholder: 'Şehir/İlçe bilginizi giriniz',
          message: 'Mesaj',
          messagePlaceholder: 'Mesajınızı buraya yazınız...',
          submit: 'Mesajı Gönder',
          required: '*'
        },
        info: {
          phone: {
            title: 'Telefon',
            details: ['+90 212 123 45 67', '+90 532 123 45 67']
          },
          email: {
            title: 'E-posta',
            details: ['info@bezpro.com', 'satis@bezpro.com']
          },
          address: {
            title: 'Adres',
            details: ['Merkez Mah. Tekstil Cad. No:123', 'Şişli / İstanbul / Türkiye']
          },
          hours: {
            title: 'Çalışma Saatleri',
            details: ['Pazartesi - Cuma: 08:00 - 18:00', 'Cumartesi: 09:00 - 15:00']
          }
        },
        mapTitle: 'Harita Konumu',
        mapLocation: 'Şişli / İstanbul'
      },
      // Product Detail page
      productDetail: {
        backToProducts: 'Ürünlere Geri Dön',
        features: 'Özellikler',
        specifications: 'Teknik Özellikler',
        advantages: 'Avantajlar',
        relatedProducts: 'Benzer Ürünler',
        relatedProductsSubtitle: 'Diğer kaliteli bez ürünlerimizi keşfedin',
        getQuote: 'Fiyat Teklifi Al',
        viewDetails: 'Detayları Gör',
        benefits: {
          delivery: {
            title: 'Hızlı Teslimat',
            description: 'Türkiye geneli hızlı ve güvenli teslimat'
          },
          quality: {
            title: 'Kalite Garantisi',
            description: 'Tüm ürünlerimizde kalite garantisi'
          },
          support: {
            title: 'Uzman Destek',
            description: '15 yıllık deneyimle profesyonel destek'
          }
        }
      },
      // Quote page
      quote: {
        title: 'Teklif Talep Formu',
        subtitle: 'Özel ihtiyaçlarınız için teklif almak üzere formu doldurun',
        formButton: 'Teklif Formu',
        description: 'Yan taraftaki formu doldurarak özel bez ürünleri için teklif alabilirsiniz.',
        benefitsTitle: 'Teklif Alma Avantajları',
        benefits: [
          'Ücretsiz teklif hazırlama',
          '24 saat içinde geri dönüş',
          'Özel tasarım seçenekleri',
          'Toplu sipariş',
          'Kalite garantisi',
          'Hızlı teslimat'
        ],
        quickContact: 'Hızlı İletişim',
        quickContactDescription: 'Acil durumlar için doğrudan bizimle iletişime geçebilirsiniz.',
        openInNewTab: 'Formu Yeni Sekmede Aç',
        fillForm: 'Formu doldurun, size ulaşalım'
      },
      // Features
      features: {
        quality: {
          title: 'Kaliteli Üretim',
          description: 'En kaliteli hammaddeler ile üretim yapıyoruz.'
        },
        design: {
          title: 'Özel Tasarım',
          description: 'Müşteri ihtiyaçlarına özel tasarım ve üretim.'
        },
        delivery: {
          title: 'Hızlı Teslimat',
          description: 'Zamanında ve güvenli teslimat garantisi.'
        }
      },
      // Common
      common: {
        productNotFound: 'Ürün Bulunamadı',
        backToProducts: 'Ürünler sayfasına dön',
        breadcrumb: {
          home: 'Ana Sayfa',
          products: 'Ürünlerimiz'
        }
      },
      // Footer
      footer: {
        description: 'Özel üretim bez ve tekstil ürünleri konusunda uzman firmamız, kaliteli hizmet anlayışı ile müşterilerine en iyi çözümleri sunar.',
        productsTitle: 'Ürünlerimiz',
        contactTitle: 'İletişim Bilgileri',
        copyright: '© 2025 SoftNox. Tüm hakları saklıdır.',
        address1: 'Altınova Mah. Fuar Caddesi No:61 16090 Osmangazi / BURSA',
        address2:"Anadolu Mah. Karlıdağ Caddesi No:44/C 16270 Yıldırım / BURSA",
      }
    }
  },
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        products: 'Products',
        about: 'About',
        contact: 'Contact',
        quote: 'Get Quote'
      },
      // Home page
      home: {
        heroTitle: 'Custom Production',
        heroSubtitle: 'Fabric Products',
        heroDescription: 'We produce custom designed fabrics with quality raw materials',
        heroButton: 'Explore Our Products',
        productsTitle: 'Our Product Collection',
        productsSubtitle: 'Discover our high-quality fabric products',
        featuresTitle: 'Why Choose Us?',
        featuresSubtitle: 'We provide quality service and reliable solutions',
        viewAllProducts: 'View All Products',
        productTypesTitle: 'Our Product Types and Usage Areas',
        productTypesSubtitle: 'We produce quality fabric products for different sectors. Each of our products is designed according to special needs.',
        specialNeedsTitle: 'Looking for Solutions for Your Special Needs?',
        specialNeedsDescription: 'Whatever sector you are in, we can produce special fabric products for you. Contact us for detailed information.',
        contactButton: 'Contact Us'
      },
      // Products
      products: {
        title: 'Our Products',
        subtitle: 'Discover our quality and diverse fabric product collection',
        collectionTitle: 'Our Product Collection',
        collectionSubtitle: 'Find fabric products suitable for your needs',
        specialProductionTitle: 'Custom Production Request',
        specialProductionDescription: 'We produce custom fabrics according to your needs. Contact us!',
        contactUs: 'Contact Us',
        features: 'Features:',
        detail: 'Detail',
        priceContact: 'Contact for price',
        ipaCloth: {
          name: 'IPA CLEANING CLOTH',
          description: '100% polyester industrial knitted cleaning cloth. Sliced with ultrasonic cutting, does not leave lint or thread shedding from cut edges.',
          features: ['100% Polyester', 'Ultrasonic Cut', 'Lint-Free', 'High Absorption']
        },
        silkMesh: {
          name: 'SILK SCREEN MESH',
          description: 'Silk screen mesh is used as air, water, oil, fuel, etc. filter in Textile, Glass, Ceramic, Electronics, Graphics, Plastic, Food, Chemical, Health, Automotive and Advertising sectors.',
          features: ['Equal Pore', 'High Strength', '100% Polyester', 'Multi-Sector Use']
        },
        microFiber: {
          name: 'MICRO-FIBER CLOTH',
          description: 'Specially patterned fabrics for home decoration, curtains, tablecloths and upholstery fabrics.',
          features: ['Custom Design', 'Eco-Friendly', 'Organic Material', 'Color Fastness']
        },
        bandocuGlove: {
          name: 'BAND GLOVES',
          description: 'Our band gloves designed for ceremonial marches, concerts and official parades; completes your outfit with its optical white color, neat stitching structure and comfortable fit.',
          features: ['Optical White', 'Comfortable Fit', 'Breathable', 'Professional Look']
        }
      },
      // About page
      about: {
        title: 'About Us',
        subtitle: 'We are the leader in the custom fabric production sector with over 10 years of experience',
        storyTitle: 'Our Story',
        storyDescription: 'As Vonza Tekstil Otomotiv San. ve Tic. Ltd. Şti., with our experience of over 10 years, we supply high quality technical textile products to paint shops operating in the automotive sub-industry sector.',
        mainProducts: 'Our main product groups',
        productList: [
          'IPA Cleaning Cloths',
          'Paint Filtering Cloths (Silk Screen Mesh)',
          'Band Gloves',
          'Microfiber Cleaning Cloths'
        ],
        storyConclusion: 'Our products have proven themselves in terms of quality and functionality; they offer solutions that facilitate your production processes and increase your efficiency.',
        valuesTitle: 'Our Values',
        valuesSubtitle: 'The fundamental values that shape our business approach',
        values: {
          quality: {
            title: 'Quality',
            description: 'We offer quality products by producing at the highest standards.'
          },
          satisfaction: {
            title: 'Customer Satisfaction',
            description: 'Customer satisfaction is our priority, we aim for excellence in every project.'
          },
          capacity: {
            title: 'Production Capacity',
            description: 'We can produce high capacity with our modern facility.'
          },
          sustainability: {
            title: 'Sustainability',
            description: 'We respect nature with environmentally friendly production methods.'
          }
        },
        stats: {
          experience: 'Years Experience',
          customers: 'Happy Customers',
          products: 'Product Types',
          support: 'Support Service'
        },
        ctaTitle: 'Custom Production Request',
        ctaDescription: 'We produce custom fabrics according to your needs. Contact us!',
        ctaButton: 'Contact Us'
      },
      // Contact page
      contact: {
        title: 'Contact',
        subtitle: 'Contact us, we are happy to help you',
        infoTitle: 'Our Contact Information',
        infoSubtitle: 'You can contact us for your questions',
        formTitle: 'Contact Us',
        formSubtitle: 'You can contact us by filling out the form',
        form: {
          name: 'Full Name',
          namePlaceholder: 'Enter your name and surname',
          company: 'Company Name',
          companyPlaceholder: 'Enter your company name',
          email: 'Email',
          emailPlaceholder: 'Enter your email address',
          phone: 'Phone',
          phonePlaceholder: 'Enter your phone number',
          country: 'Country',
          countryPlaceholder: 'Enter your country',
          location: 'Location',
          locationPlaceholder: 'Enter your city/district information',
          message: 'Message',
          messagePlaceholder: 'Write your message here...',
          submit: 'Send Message',
          required: '*'
        },
        info: {
          phone: {
            title: 'Phone',
            details: ['+90 212 123 45 67', '+90 532 123 45 67']
          },
          email: {
            title: 'Email',
            details: ['info@bezpro.com', 'satis@bezpro.com']
          },
          address: {
            title: 'Address',
            details: ['Merkez Mah. Tekstil Cad. No:123', 'Şişli / İstanbul / Turkey']
          },
          hours: {
            title: 'Working Hours',
            details: ['Monday - Friday: 08:00 - 18:00', 'Saturday: 09:00 - 15:00']
          }
        },
        mapTitle: 'Map Location',
        mapLocation: 'Şişli / İstanbul'
      },
      // Product Detail page
      productDetail: {
        backToProducts: 'Back to Products',
        features: 'Features',
        specifications: 'Technical Specifications',
        advantages: 'Advantages',
        relatedProducts: 'Related Products',
        relatedProductsSubtitle: 'Discover our other quality fabric products',
        getQuote: 'Get Price Quote',
        viewDetails: 'View Details',
        benefits: {
          delivery: {
            title: 'Fast Delivery',
            description: 'Fast and safe delivery throughout Turkey'
          },
          quality: {
            title: 'Quality Guarantee',
            description: 'Quality guarantee on all our products'
          },
          support: {
            title: 'Expert Support',
            description: 'Professional support with 15 years of experience'
          }
        }
      },
      // Quote page
      quote: {
        title: 'Quote Request Form',
        subtitle: 'Fill out the form to get a quote for your special needs',
        formButton: 'Quote Form',
        description: 'You can get a quote for custom fabric products by filling out the form below.',
        benefitsTitle: 'Quote Request Benefits',
        benefits: [
          'Free quote preparation',
          'Response within 24 hours',
          'Custom design options',
          'Bulk order discounts',
          'Quality guarantee',
          'Fast delivery'
        ],
        quickContact: 'Quick Contact',
        quickContactDescription: 'You can contact us directly for urgent situations.',
        openInNewTab: 'Open Form in New Tab',
        fillForm: 'Fill out the form, we will reach you'
      },
      // Features
      features: {
        quality: {
          title: 'Quality Production',
          description: 'We produce with the highest quality raw materials.'
        },
        design: {
          title: 'Custom Design',
          description: 'Custom design and production according to customer needs.'
        },
        delivery: {
          title: 'Fast Delivery',
          description: 'On-time and safe delivery guarantee.'
        }
      },
      // Common
      common: {
        productNotFound: 'Product Not Found',
        backToProducts: 'Back to products page',
        breadcrumb: {
          home: 'Home',
          products: 'Products'
        }
      },
      // Footer
      footer: {
        description: 'Our company, which specializes in custom fabric and textile products, offers the best solutions to its customers with a quality service approach.',
        productsTitle: 'Our Products',
        contactTitle: 'Contact Information',
        copyright: '© 2025 SoftNox. All rights reserved.'
      }
    }
  },
  de: {
    translation: {
      // Navigation
      nav: {
        home: 'Startseite',
        products: 'Produkte',
        about: 'Über uns',
        contact: 'Kontakt',
        quote: 'Angebot anfordern'
      },
      // Home page
      home: {
        heroTitle: 'Maßgeschneiderte Produktion',
        heroSubtitle: 'Stoffprodukte',
        heroDescription: 'Wir produzieren maßgeschneiderte Stoffe mit hochwertigen Rohstoffen',
        heroButton: 'Unsere Produkte erkunden',
        productsTitle: 'Unsere Produktkollektion',
        productsSubtitle: 'Entdecken Sie unsere hochwertigen Stoffprodukte',
        featuresTitle: 'Warum uns wählen?',
        featuresSubtitle: 'Wir bieten Qualitätsservice und zuverlässige Lösungen',
        viewAllProducts: 'Alle Produkte anzeigen',
        productTypesTitle: 'Unsere Produkttypen und Anwendungsbereiche',
        productTypesSubtitle: 'Wir produzieren hochwertige Stoffprodukte für verschiedene Branchen. Jedes unserer Produkte ist nach besonderen Bedürfnissen konzipiert.',
        specialNeedsTitle: 'Suchen Sie Lösungen für Ihre besonderen Bedürfnisse?',
        specialNeedsDescription: 'In welcher Branche Sie auch tätig sind, wir können spezielle Stoffprodukte für Sie produzieren. Kontaktieren Sie uns für detaillierte Informationen.',
        contactButton: 'Kontaktieren Sie uns'
      },
      // Products
      products: {
        title: 'Unsere Produkte',
        subtitle: 'Entdecken Sie unsere qualitativ hochwertige und vielfältige Stoffproduktkollektion',
        collectionTitle: 'Unsere Produktkollektion',
        collectionSubtitle: 'Finden Sie für Ihre Bedürfnisse geeignete Stoffprodukte',
        specialProductionTitle: 'Maßgeschneiderte Produktionsanfrage',
        specialProductionDescription: 'Wir produzieren maßgeschneiderte Stoffe nach Ihren Bedürfnissen. Kontaktieren Sie uns!',
        contactUs: 'Kontaktieren Sie uns',
        features: 'Eigenschaften:',
        detail: 'Detail',
        priceContact: 'Für Preis kontaktieren',
        ipaCloth: {
          name: 'IPA REINIGUNGSTUCH',
          description: '100% Polyester industrielles Strick-Reinigungstuch. Mit Ultraschallschnitt geschnitten, hinterlässt keine Flusen oder Fadenabwurf an den Schnittkanten.',
          features: ['100% Polyester', 'Ultraschallschnitt', 'Flusenfrei', 'Hohe Absorption']
        },
        silkMesh: {
          name: 'SEIDENSIEB-GEWEBE',
          description: 'Seidensieb-Gewebe wird als Luft-, Wasser-, Öl-, Kraftstoff- usw. Filter in Textil-, Glas-, Keramik-, Elektronik-, Grafik-, Kunststoff-, Lebensmittel-, Chemie-, Gesundheits-, Automobil- und Werbebranchen verwendet.',
          features: ['Gleichmäßige Poren', 'Hohe Festigkeit', '100% Polyester', 'Multi-Sektor-Nutzung']
        },
        microFiber: {
          name: 'MIKROFASER-TUCH',
          description: 'Speziell gemusterte Stoffe für Heimdekoration, Vorhänge, Tischdecken und Polsterstoffe.',
          features: ['Maßgeschneidertes Design', 'Umweltfreundlich', 'Organisches Material', 'Farbechtheit']
        },
        bandocuGlove: {
          name: 'BAND-HANDSCHUHE',
          description: 'Unsere für zeremonielle Märsche, Konzerte und offizielle Paraden entworfenen Band-Handschuhe; vervollständigen Ihr Outfit mit ihrer optisch weißen Farbe, ordentlichen Nähstruktur und bequemen Passform.',
          features: ['Optisches Weiß', 'Bequeme Passform', 'Atmungsaktiv', 'Professioneller Look']
        }
      },
      // About page
      about: {
        title: 'Über uns',
        subtitle: 'Wir sind führend im Bereich der maßgeschneiderten Stoffproduktion mit über 10 Jahren Erfahrung',
        storyTitle: 'Unsere Geschichte',
        storyDescription: 'Als Vonza Tekstil Otomotiv San. ve Tic. Ltd. Şti. liefern wir mit unserer über 10-jährigen Erfahrung hochwertige technische Textilprodukte an Lackierereien, die im Automobilzuliefersektor tätig sind.',
        mainProducts: 'Unsere Hauptproduktgruppen',
        productList: [
          'IPA Reinigungstücher',
          'Lackfiltertücher (Seidensieb-Gewebe)',
          'Band-Handschuhe',
          'Mikrofaser-Reinigungstücher'
        ],
        storyConclusion: 'Unsere Produkte haben sich in Bezug auf Qualität und Funktionalität bewährt; sie bieten Lösungen, die Ihre Produktionsprozesse erleichtern und Ihre Effizienz steigern.',
        valuesTitle: 'Unsere Werte',
        valuesSubtitle: 'Die grundlegenden Werte, die unseren Geschäftsansatz prägen',
        values: {
          quality: {
            title: 'Qualität',
            description: 'Wir bieten Qualitätsprodukte durch Produktion nach höchsten Standards.'
          },
          satisfaction: {
            title: 'Kundenzufriedenheit',
            description: 'Kundenzufriedenheit ist unsere Priorität, wir streben in jedem Projekt nach Exzellenz.'
          },
          capacity: {
            title: 'Produktionskapazität',
            description: 'Mit unserer modernen Anlage können wir hochkapazitiv produzieren.'
          },
          sustainability: {
            title: 'Nachhaltigkeit',
            description: 'Wir respektieren die Natur mit umweltfreundlichen Produktionsmethoden.'
          }
        },
        stats: {
          experience: 'Jahre Erfahrung',
          customers: 'Zufriedene Kunden',
          products: 'Produkttypen',
          support: 'Support-Service'
        },
        ctaTitle: 'Maßgeschneiderte Produktionsanfrage',
        ctaDescription: 'Wir produzieren maßgeschneiderte Stoffe nach Ihren Bedürfnissen. Kontaktieren Sie uns!',
        ctaButton: 'Kontaktieren Sie uns'
      },
      // Contact page
      contact: {
        title: 'Kontakt',
        subtitle: 'Kontaktieren Sie uns, wir helfen Ihnen gerne',
        infoTitle: 'Unsere Kontaktinformationen',
        infoSubtitle: 'Sie können uns für Ihre Fragen kontaktieren',
        formTitle: 'Kontaktieren Sie uns',
        formSubtitle: 'Sie können uns kontaktieren, indem Sie das Formular ausfüllen',
        form: {
          name: 'Vollständiger Name',
          namePlaceholder: 'Geben Sie Ihren Vor- und Nachnamen ein',
          company: 'Firmenname',
          companyPlaceholder: 'Geben Sie Ihren Firmennamen ein',
          email: 'E-Mail',
          emailPlaceholder: 'Geben Sie Ihre E-Mail-Adresse ein',
          phone: 'Telefon',
          phonePlaceholder: 'Geben Sie Ihre Telefonnummer ein',
          country: 'Land',
          countryPlaceholder: 'Geben Sie Ihr Land ein',
          location: 'Standort',
          locationPlaceholder: 'Geben Sie Ihre Stadt/Bezirk-Informationen ein',
          message: 'Nachricht',
          messagePlaceholder: 'Schreiben Sie Ihre Nachricht hier...',
          submit: 'Nachricht senden',
          required: '*'
        },
        info: {
          phone: {
            title: 'Telefon',
            details: ['+90 212 123 45 67', '+90 532 123 45 67']
          },
          email: {
            title: 'E-Mail',
            details: ['info@bezpro.com', 'satis@bezpro.com']
          },
          address: {
            title: 'Adresse',
            details: ['Merkez Mah. Tekstil Cad. No:123', 'Şişli / İstanbul / Türkei']
          },
          hours: {
            title: 'Arbeitszeiten',
            details: ['Montag - Freitag: 08:00 - 18:00', 'Samstag: 09:00 - 15:00']
          }
        },
        mapTitle: 'Kartenstandort',
        mapLocation: 'Şişli / İstanbul'
      },
      // Product Detail page
      productDetail: {
        backToProducts: 'Zurück zu Produkten',
        features: 'Eigenschaften',
        specifications: 'Technische Spezifikationen',
        advantages: 'Vorteile',
        relatedProducts: 'Ähnliche Produkte',
        relatedProductsSubtitle: 'Entdecken Sie unsere anderen hochwertigen Stoffprodukte',
        getQuote: 'Preisangebot erhalten',
        viewDetails: 'Details anzeigen',
        benefits: {
          delivery: {
            title: 'Schnelle Lieferung',
            description: 'Schnelle und sichere Lieferung in der ganzen Türkei'
          },
          quality: {
            title: 'Qualitätsgarantie',
            description: 'Qualitätsgarantie auf alle unsere Produkte'
          },
          support: {
            title: 'Expertenunterstützung',
            description: 'Professionelle Unterstützung mit 15 Jahren Erfahrung'
          }
        }
      },
      // Quote page
      quote: {
        title: 'Angebotsanfrage-Formular',
        subtitle: 'Füllen Sie das Formular aus, um ein Angebot für Ihre besonderen Bedürfnisse zu erhalten',
        formButton: 'Angebotsformular',
        description: 'Sie können ein Angebot für maßgeschneiderte Stoffprodukte erhalten, indem Sie das untenstehende Formular ausfüllen.',
        benefitsTitle: 'Vorteile der Angebotsanfrage',
        benefits: [
          'Kostenlose Angebotserstellung',
          'Antwort innerhalb von 24 Stunden',
          'Maßgeschneiderte Designoptionen',
          'Mengenrabatte',
          'Qualitätsgarantie',
          'Schnelle Lieferung'
        ],
        quickContact: 'Schnellkontakt',
        quickContactDescription: 'Sie können uns für dringende Fälle direkt kontaktieren.',
        openInNewTab: 'Formular in neuem Tab öffnen',
        fillForm: 'Füllen Sie das Formular aus, wir werden Sie erreichen'
      },
      // Features
      features: {
        quality: {
          title: 'Qualitätsproduktion',
          description: 'Wir produzieren mit den hochwertigsten Rohstoffen.'
        },
        design: {
          title: 'Maßgeschneidertes Design',
          description: 'Maßgeschneidertes Design und Produktion nach Kundenbedürfnissen.'
        },
        delivery: {
          title: 'Schnelle Lieferung',
          description: 'Pünktliche und sichere Liefergarantie.'
        }
      },
      // Common
      common: {
        productNotFound: 'Produkt nicht gefunden',
        backToProducts: 'Zurück zur Produktseite',
        breadcrumb: {
          home: 'Startseite',
          products: 'Produkte'
        }
      },
      // Footer
      footer: {
        description: 'Unser Unternehmen, das sich auf maßgeschneiderte Stoff- und Textilprodukte spezialisiert hat, bietet seinen Kunden mit einem qualitätsorientierten Serviceansatz die besten Lösungen.',
        productsTitle: 'Unsere Produkte',
        contactTitle: 'Kontaktinformationen',
        copyright: '© 2025 SoftNox. Alle Rechte vorbehalten.'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tr', // default language
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;