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
        message: " "
      },
      // Home page
      home: {
        heroTitle: 'Otomotiv Teknik Tekstil',
        heroSubtitle: 'Ürünleri',
        heroDescription: 'Kaliteli hammaddeler ile üretim yapıyoruz',
        heroButton: 'Ürün Kataloğu İçin Tıklayınız',
        productsTitle: 'Ürün Koleksiyonumuz',
        productsSubtitle: '',
        featuresTitle: 'Neden Bizi Tercih Etmelisiniz?',
        featuresSubtitle: 'Kaliteli hizmet ve güvenilir çözümler sunuyoruz',
        viewAllProducts: 'Tüm Ürünleri Gör',
        productTypesTitle: 'Ürün Çeşitlerimiz ve Kullanım Alanları',
        productTypesSubtitle: '',
        specialNeedsTitle: 'Özel İhtiyaçlarınız İçin Çözüm Arıyorsunuz?',
        specialNeedsDescription: 'Hangi sektörde olursanız olun, size özel ürünleri üretebiliriz. Detaylı bilgi almak için bizimle iletişime geçin.',
        contactButton: 'Teklif Alın'
      },
      // Products
      products: {
        title: 'Özel Üretim',
        subtitle: 'Kaliteli ve çeşitli bez ürün koleksiyonumuzu keşfedin',
        collectionTitle: 'Ürün Koleksiyonumuz',
        collectionSubtitle: 'İhtiyaçlarınıza uygun bez ürünlerini bulun',
        specialProductionTitle: 'Özel Üretim Talebi',
        specialProductionDescription: 'İhtiyaçlarınıza özel bez üretimi. Bizimle iletişime geçin!',
        ctaDescription: 'İhtiyaçlarınıza özel bez üretimi yapıyoruz. Bizimle iletişime geçin!',
        contactUs: 'İletişime Geçin',
        features: 'Özellikler:',
        detail: 'Detay',
        priceContact: 'Fiyat için iletişime geçiniz',
        dowloadPDF: 'Kataloğu İndir',
        ipaCloth: {
          nameUppercase: 'İPA Silme Bezleri',
          name: 'İPA SİLME BEZİ',
          description: '%100 polyester endüstriyel örme silme bezi. Ultrasonik kesim ile dilimleme yapılmaktadır, kesilen kenarlardan hav bırakma veya iplik atması yapmaz. \n\n20×40, 30×40, 40×40 veya diğer istenilen ebatlarda dilimlenebilir. \nTek taraflı desen, 200 gr/m². \nYüzeyi çizmez, hav veya lif bırakmaz. \nÜstün hidrofilik özellik, yüksek sıvı emme kapasitesi. \nTüm yüzeyler için uygundur. \nOtomotiv ve boya sanayi hassas yüzey işlemleri için uygundur.',
          features: '✓ Steril üretim ✓ Antibakteriyel özellik ✓ Tek kullanımlık seçenekler',
          specifications: {
            'Malzeme': '100% Pamuk',
            'Dokuma Tipi': 'Özel Dokuma',
            'Ağırlık': '200-300 GSM',
            'Renk Seçenekleri': '15+ Farklı Renk',
            'Boyutlar': 'Özel Ölçü Mevcut',
            'Bakım': 'Makine Yıkanabilir'
          }
        },
        silkMesh: {
          nameUppercase: 'Boya Süzme Bezleri',
          name: 'BOYA SÜZME BEZİ',
          description: 'Boya süzme bezi, hava, su, yağ ve yakıt gibi akışkanların filtresi olarak tekstil, cam, seramik, elektronik, grafik, plastik, gıda, kimya, sağlık, otomotiv ve reklam sektörlerinde kullanılmaktadır. \n\nÜrünlerimiz sektörün en kaliteli özelliklerine sahiptir.  Eşit gözenekli, eşit atkı ve çözgü sayıları vardır.  Ürünümüz yüksek kopma mukavemetli %100 polyester monofilament iplikten üretilmiştir.  25 mikron ve üstü tüm özelliklerde ürün gamı bulunmaktadır. ',
          features: '✓ Yüksek emicilik ✓ Kimyasal direnç ✓ Yıkanabilir ve tekrar kullanılabilir',
          specifications: {
            'Malzeme': 'Sertifikalı Organik Pamuk',
            'Sertifika': 'GOTS Sertifikalı',
            'Boyalar': 'Doğal Bitkisel Boyalar',
            'Ağırlık': '180-250 GSM',
            'Özel Özellik': 'Hipoalerjenik',
            'Çevre Etkisi': 'Karbon Nötr Üretim'
          }
        },
        microFiber: {
          nameUppercase: 'Mikrofiber Temizlik Bezleri',
          name: 'MİKRO-FİBER BEZ',
          description: '%80 polyester %20 poliamid ipliğinden üretilmiştir. Kısa hav boyu sayesinde hem kurulama hemde temizleme yapılabilmektedir. Tüm yüzeylerde rahatlıkla kullanılmaktadır. Özel teknoloji boyama ile üretilerek kullanım kalitesi üst seviyede sunulmaktadır.  Mat bir görünüme sahiptir. Kolay temizlenebilir yapısı sayesinde her türlü kirli noktada rahatlıkla kullanılabilir. Talep edilen cinste 40x40cm ebatında üretilmektedir.',
          features: '✓ Organik malzemeler ✓ Özel desenler ✓ Renk haslığı garantisi',
          specifications: {
            'Baskı Tipi': 'Dijital Sublimation',
            'Renk Kalitesi': 'Full HD Çözünürlük',
            'Minimum Sipariş': '50 Adet',
            'Üretim Süresi': '7-10 İş Günü',
            'Tasarım Desteği': 'Ücretsiz Tasarım',
            'Dosya Formatı': 'AI, PSD, PDF'
          }
        },
        bandocuGlove: {
          nameUppercase: 'Bandocu Eldivenleri',
          name: 'BANDOCU ELDİVENİ',
          description: '%100 Polyester \nHav ve iz bırakmayan minimum dikişle tasarlanmış eldivendir.\nHassas çalışmalarda kullanılmak üzere tasarlanmıştır. Ürün koruma amaçlıdır. İnce, elastik kumaşı sayesinde eli tam olarak kavrar, üst düzeyde hassasiyet sağlar. ',
          features: '✓ Leke direnci ✓ Sık yıkamaya dayanıklı ✓ Profesyonel görünüm',
          specifications: {
            'Kullanım Alanı': 'Ev İçi',
            'Malzeme': 'Pamuk-Polyester Karışım',
            'Bakım': 'Makine Yıkanabilir 40°C',
            'Ütüleme': 'Orta Sıcaklık',
            'Çeşitler': 'Perde, Örtü, Yastık',
            'Renk Haslığı': 'Yüksek'
          }

        }
      },
      // About page
      about: {
        title: 'Hakkımızda',
        subtitle: '10 yılı aşkın deneyimle özel üretim bez sektöründe lider konumdayız',
        storyTitle: 'Hikayemiz',
        storyDescriptionHtml: "Vonza Tekstil Otomotiv San. ve Tic. Ltd. Şti. olarak, <strong>2013 yılından beri</strong> tecrübeli ekibimizle otomotiv yan sanayi sektöründe faaliyet gösteren boyahanelere yüksek kaliteli teknik tekstil ürünleri tedarik etmekteyiz.",
        mainProducts: 'Başlıca ürün gruplarımız',
        storyConclusion: 'Ürünlerimiz, kalite ve işlevsellik açısından sektörde kendini kanıtlamış; üretim süreçlerinizi kolaylaştırmayı, verimliliğinizi artırmayı hedefleyen çözümler sunmaktadır.',

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
          customers: 'Kurumsal Referans',
          products: 'Günlük Üretim Kapasitesi',
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
        coppiedEmail: 'mail adresi kopyalandı',
        centralAddress: 'Merkez',
        factoryAddress: 'Fabrika',
        phone: 'Telefon',
        email: 'E-posta',
        coppy: 'Kopyala',
        coppied: 'Kopyalandı!',
        coppyButtonHover: 'E-postayı kopyala',

        form: {
          name: 'Ad Soyad *',
          namePlaceholder: 'Adınızı ve soyadınızı giriniz',
          company: 'Şirket Adı',
          companyPlaceholder: 'Şirket adınızı giriniz',
          email: 'E-posta *',
          emailPlaceholder: 'E-posta adresinizi giriniz',
          phone: 'Telefon *',
          phonePlaceholder: 'Telefon numaranızı giriniz',
          country: 'Ülke',
          countryPlaceholder: 'Ülkenizi giriniz',
          location: 'Konum',
          locationPlaceholder: 'Şehir/İlçe bilginizi giriniz',
          message: 'Mesaj *',
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
        viewDetails: 'Detayları Gör →',
        seeAll:'Tüm Ürün Kataloğunu İncele',
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
        back: 'En kısa sürede size dönüş yapacağız.',
        benefits: [
          'Ücretsiz teklif hazırlama',
          '24 saat içinde geri dönüş',
          'Özel tasarım seçenekleri',
          'Toplu sipariş',
          'Kalite garantisi',
          'Hızlı teslimat'
        ],
        sended_form_title: 'Mesajınız başarıyla gönderildi!',
        sending: 'Gönderiliyor',
        sended: 'Başarıyla Gönderildi!',
        form: {

          phonePlaceholder: '+90 530 830 34 22',
          countryPlaceholder: 'Türkiye',
          locationPlaceholder: 'İstanbul',
          submit: 'Mesajı Gönder',
          required: '*'
        },
        quickContact: 'Hızlı İletişim',
        quickContactDescription: 'Acil durumlar için doğrudan bizimle iletişime geçebilirsiniz.',
        openInNewTab: 'Formu Yeni Sekmede Aç',
        fillForm: 'Formu doldurun, size ulaşalım',
        loading: 'Yükleniyor...'
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
        description: 'Özel üretim bez ve teknik tekstil ürünleri konusunda uzman firmamız, kaliteli hizmet anlayışı ile müşterilerine en iyi çözümleri sunar.',
        productsTitle: 'Ürünlerimiz',
        contactTitle: 'İletişim Bilgileri',
        copyright: '© 2025 SoftNox. Tüm hakları saklıdır.',
        address1: 'Altınova Mah. Fuar Caddesi No:61 16090 Osmangazi / BURSA',
        address2: "Anadolu Mah. Karlıdağ Caddesi No:44/C 16270 Yıldırım / BURSA",
      }
    }
  },
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        products: 'Our Products',
        about: 'About Us',
        contact: 'Contact',
        quote: 'Get a Quote'
      },
      whatsapp: {
        tooltip: 'Contact us on WhatsApp',
        message: ' '
      },
      // Home page
      home: {
        heroTitle: 'Automotive Technical Textiles',
        heroSubtitle: 'Products',
        heroDescription: 'We manufacture using high-quality raw materials',
        heroButton: 'Open the Product Catalogue',
        productsTitle: 'Our Product Collection',
        productsSubtitle: '',
        featuresTitle: 'Why Choose Us?',
        featuresSubtitle: 'We offer quality service and reliable solutions',
        viewAllProducts: 'View All Products',
        productTypesTitle: 'Our Product Types and Use Cases',
        productTypesSubtitle: 'Each product is designed to meet specific needs.',
        specialNeedsTitle: 'Looking for a Solution to Your Specific Needs?',
        specialNeedsDescription: 'Whatever your industry, we can produce custom products for you. Contact us for details.',
        contactButton: 'Get a Quote'
      },
      // Products
      products: {
        title: 'Custom Production',
        subtitle: 'Discover our collection of high-quality and diverse cloth products',
        collectionTitle: 'Our Product Collection',
        collectionSubtitle: 'Find the right cloth products for your needs',
        specialProductionTitle: 'Custom Production Request',
        specialProductionDescription: 'Custom production tailored to your needs. Contact us!',
        ctaDescription: 'We produce tailor-made cloth products. Get in touch!',
        contactUs: 'Contact Us',
        features: 'Features:',
        detail: 'Detail',
        priceContact: 'Contact for pricing',
        dowloadPDF: 'Download Catalogue',
        ipaCloth: {
          nameUppercase: 'IPA Wiping Cloths',
          name: 'IPA WIPING CLOTH',
          description:
            '100% polyester industrial knitted wiping cloth. Cut by ultrasonic slicing so the edges do not shed lint or threads.\n\n' +
            'Can be cut to 20×40, 30×40, 40×40 or any requested size.\n' +
            'Single-sided pattern, 200 g/m².\n' +
            'Does not scratch surfaces; leaves no lint or fibers.\n' +
            'Excellent hydrophilic properties with high liquid absorption.\n' +
            'Suitable for all surfaces.\n' +
            'Ideal for sensitive surface operations in the automotive and paint industries.',
          features: '✓ Sterile production ✓ Antibacterial properties ✓ Disposable options',
          specifications: {
            'Malzeme': '100% Cotton',
            'Dokuma Tipi': 'Special Weave',
            'Ağırlık': '200–300 GSM',
            'Renk Seçenekleri': '15+ Colors',
            'Boyutlar': 'Custom Sizes Available',
            'Bakım': 'Machine Washable'
          }
        },
        silkMesh: {
          nameUppercase: 'Paint Filtering Cloths',
          name: 'PAINT FILTERING CLOTH',
          description:
            'Used as a filter for air, water, oil and fuel, this cloth serves the textile, glass, ceramic, electronics, graphics, plastic, food, chemical, healthcare, automotive and advertising industries.\n\n' +
            'Our products meet the highest standards in the field. They feature uniform pores with consistent warp and weft counts. ' +
            'Made from high tensile-strength 100% polyester monofilament yarn. Available from 25 microns and above.',
          features: '✓ High absorbency ✓ Chemical resistance ✓ Washable and reusable',
          specifications: {
            'Malzeme': 'Certified Organic Cotton',
            'Sertifika': 'GOTS Certified',
            'Boyalar': 'Natural Plant-Based Dyes',
            'Ağırlık': '180–250 GSM',
            'Özel Özellik': 'Hypoallergenic',
            'Çevre Etkisi': 'Carbon-Neutral Production'
          }
        },
        microFiber: {
          nameUppercase: 'Microfiber Cleaning Cloths',
          name: 'MICROFIBER CLOTH',
          description:
            'Made of 80% polyester and 20% polyamide yarn. Thanks to its short pile height, it can both dry and clean. ' +
            'Comfortably usable on all surfaces. Dyed with special technology for premium finish quality. Has a matte appearance. ' +
            'Its easy-to-clean structure makes it suitable for all kinds of dirty spots. Produced in 40×40 cm or requested sizes.',
          features: '✓ Organic materials ✓ Custom patterns ✓ Guaranteed color fastness',
          specifications: {
            'Baskı Tipi': 'Digital Sublimation',
            'Renk Kalitesi': 'Full HD Resolution',
            'Minimum Sipariş': '50 Pieces',
            'Üretim Süresi': '7–10 Business Days',
            'Tasarım Desteği': 'Free Design Support',
            'Dosya Formatı': 'AI, PSD, PDF'
          }
        },
        bandocuGlove: {
          nameUppercase: 'Band Gloves',
          name: 'BAND GLOVE',
          description:
            '100% polyester.\nDesigned with minimal seams to avoid lint and marks.\nMade for precision work and product protection. ' +
            'Its thin, elastic fabric wraps the hand, delivering an excellent fit and high sensitivity.',
          features: '✓ Stain resistance ✓ Withstands frequent washing ✓ Professional appearance',
          specifications: {
            'Kullanım Alanı': 'Indoor Use',
            'Malzeme': 'Cotton–Polyester Blend',
            'Bakım': 'Machine Washable at 40°C',
            'Ütüleme': 'Medium Heat',
            'Çeşitler': 'Curtains, Covers, Cushions',
            'Renk Haslığı': 'High'
          }
        }
      },
      // About page
      about: {
        title: 'About Us',
        subtitle: 'We are a leader in the custom wiping-cloth industry with over 10 years of experience',
        storyTitle: 'Our Story',
        storyDescriptionHtml:
          'As Vonza Tekstil Otomotiv San. ve Tic. Ltd. Şti., we have been supplying high-quality technical textile products to paint shops in the automotive sub-industry sector with our experienced team since <strong>2013</strong>.',
        mainProducts: 'Our main product groups',
        storyConclusion:
          'Our products have proven themselves in terms of quality and functionality; they provide solutions that streamline your production processes and enhance efficiency.',
        valuesTitle: 'Our Values',
        valuesSubtitle: 'The core values that shape our business approach',
        values: {
          quality: {
            title: 'Quality',
            description: 'We produce to the highest standards to deliver quality products.'
          },
          satisfaction: {
            title: 'Customer Satisfaction',
            description: 'Customer satisfaction is our priority; we strive for excellence in every project.'
          },
          capacity: {
            title: 'Production Capacity',
            description: 'With our modern facility, we can manufacture at high capacity.'
          },
          sustainability: {
            title: 'Sustainability',
            description: 'We respect nature through eco-friendly production methods.'
          }
        },
        stats: {
          experience: 'Years of Experience',
          customers: 'Corporate References',
          products: 'Daily Production Capacity',
          support: 'Support Service'
        },
        ctaTitle: 'Custom Production Request',
        ctaDescription: 'We manufacture custom cloth products to your needs. Contact us!',
        ctaButton: 'Contact Us'
      },
      // Contact page
      contact: {
        title: 'Contact',
        subtitle: 'Get in touch — we will be happy to help',
        infoTitle: 'Our Contact Information',
        infoSubtitle: 'You can contact us with any questions',
        formTitle: 'Get in Touch',
        formSubtitle: 'Fill out the form to contact us',
        coppiedEmail: 'Email address copied',
        centralAddress: 'Head Office',
        factoryAddress: 'Factory',
        phone: 'Phone',
        email: 'Email',
        coppy: 'Copy',
        coppied: 'Copied!',
        coppyButtonHover: 'Copy email address',
        form: {
          name: 'Full Name *',
          namePlaceholder: 'Enter your full name',
          company: 'Company Name',
          companyPlaceholder: 'Enter your company name',
          email: 'Email *',
          emailPlaceholder: 'Enter your email address',
          phone: 'Phone *',
          phonePlaceholder: 'Enter your phone number',
          country: 'Country',
          countryPlaceholder: 'Enter your country',
          location: 'Location',
          locationPlaceholder: 'Enter your city/district',
          message: 'Message *',
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
            details: ['Merkez Mah. Tekstil Cad. No:123', 'Şişli / Istanbul / Turkey']
          },
          hours: {
            title: 'Working Hours',
            details: ['Monday – Friday: 08:00 – 18:00', 'Saturday: 09:00 – 15:00']
          }
        },
        mapTitle: 'Map Location',
        mapLocation: 'Şişli / Istanbul'
      },
      // Product Detail page
      productDetail: {
        backToProducts: 'Back to Products',
        features: 'Features',
        specifications: 'Technical Specifications',
        advantages: 'Advantages',
        relatedProducts: 'Related Products',
        relatedProductsSubtitle: 'Discover our other high-quality cloth products',
        getQuote: 'Get a Price Quote',
        viewDetails: 'View Details →',
        seeAll:'View the Entire Product Catalogue',
        benefits: {
          delivery: {
            title: 'Fast Delivery',
            description: 'Fast and secure delivery across Turkey'
          },
          quality: {
            title: 'Quality Guarantee',
            description: 'Quality guaranteed on all our products'
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
        subtitle: 'Fill out the form to receive a quote tailored to your needs',
        formButton: 'Quote Form',
        description: 'Fill out the form to request a quote for custom cloth products.',
        benefitsTitle: 'Benefits of Getting a Quote',
        back: 'We will get back to you as soon as possible.',
        benefits: [
          'Free quote preparation',
          'Response within 24 hours',
          'Custom design options',
          'Bulk orders',
          'Quality guarantee',
          'Fast delivery'
        ],
        sended_form_title: 'Your message has been sent successfully!',
        sending: 'Sending',
        sended: 'Sent Successfully!',
        form: {
          phonePlaceholder: '+90 530 830 34 22',
          countryPlaceholder: 'Turkey',
          locationPlaceholder: 'Istanbul',
          submit: 'Send Message',
          required: '*'
        },
        quickContact: 'Quick Contact',
        quickContactDescription: 'For urgent matters, you can contact us directly.',
        openInNewTab: 'Open the Form in a New Tab',
        fillForm: 'Fill out the form and we will reach you',
        loading: 'Loading...'
      },
      // Features
      features: {
        quality: {
          title: 'Quality Production',
          description: 'We manufacture with the highest-quality raw materials.'
        },
        design: {
          title: 'Custom Design',
          description: 'Design and production tailored to customer needs.'
        },
        delivery: {
          title: 'Fast Delivery',
          description: 'On-time and secure delivery guarantee.'
        }
      },
      // Common
      common: {
        productNotFound: 'Product Not Found',
        backToProducts: 'Back to the products page',
        breadcrumb: {
          home: 'Home',
          products: 'Our Products'
        }
      },
      // Footer
      footer: {
        description:
          'Our company specializes in custom cloth and technical textile products, providing the best solutions with a quality-focused approach.',
        productsTitle: 'Our Products',
        contactTitle: 'Contact Information',
        copyright: '© 2025 SoftNox. All rights reserved.',
        address1: 'Altınova Mah. Fuar Caddesi No:61 16090 Osmangazi / BURSA',
        address2: 'Anadolu Mah. Karlıdağ Caddesi No:44/C 16270 Yıldırım / BURSA'
      }
    }
  },
  de: {
  translation: {
    // Navigation
    nav: {
      home: 'Startseite',
      products: 'Unsere Produkte',
      about: 'Über uns',
      contact: 'Kontakt',
      quote: 'Angebot anfordern'
    },
    whatsapp: {
      tooltip: 'Über WhatsApp kontaktieren',
      message: ' '
    },
    // Home page
    home: {
      heroTitle: 'Technische Textilien für die Automobilindustrie',
      heroSubtitle: 'Produkte',
      heroDescription: 'Wir produzieren mit hochwertigen Rohstoffen',
      heroButton: 'Zum Produktkatalog',
      productsTitle: 'Unsere Produktkollektion',
      productsSubtitle: '',
      featuresTitle: 'Warum uns wählen?',
      featuresSubtitle: 'Wir bieten hochwertigen Service und verlässliche Lösungen',
      viewAllProducts: 'Alle Produkte ansehen',
      productTypesTitle: 'Unsere Produktarten und Einsatzbereiche',
      productTypesSubtitle: 'Jedes unserer Produkte ist auf spezielle Anforderungen ausgelegt.',
      specialNeedsTitle: 'Suchen Sie eine Lösung für Ihre speziellen Anforderungen?',
      specialNeedsDescription: 'Unabhängig von Ihrer Branche fertigen wir maßgeschneiderte Produkte. Kontaktieren Sie uns für Details.',
      contactButton: 'Angebot einholen'
    },
    // Products
    products: {
      title: 'Sonderfertigung',
      subtitle: 'Entdecken Sie unsere hochwertige und vielseitige Tuch-Kollektion',
      collectionTitle: 'Unsere Produktkollektion',
      collectionSubtitle: 'Finden Sie die passenden Tücher für Ihre Anforderungen',
      specialProductionTitle: 'Anfrage für Sonderfertigung',
      specialProductionDescription: 'Sonderanfertigung nach Ihren Bedürfnissen. Kontaktieren Sie uns!',
      ctaDescription: 'Wir fertigen speziell nach Ihren Anforderungen. Nehmen Sie Kontakt auf!',
      contactUs: 'Kontakt aufnehmen',
      features: 'Eigenschaften:',
      detail: 'Detail',
      priceContact: 'Preis auf Anfrage',
      dowloadPDF: 'Katalog herunterladen',
      ipaCloth: {
        nameUppercase: 'IPA-Wischtücher',
        name: 'IPA-WISCHTUCH',
        description:
          '100 % Polyester, industriell gestricktes Wischtuch. Mit Ultraschallschnitt zugeschnitten – die Schnittkanten fusseln nicht und es lösen sich keine Fäden.\n\n' +
          'Kann in 20×40, 30×40, 40×40 cm oder in beliebigen Wunschmaßen geschnitten werden.\n' +
          'Einseitiges Muster, 200 g/m².\n' +
          'Kratzt Oberflächen nicht; hinterlässt weder Fusseln noch Fasern.\n' +
          'Ausgezeichnet hydrophile Eigenschaften mit hoher Flüssigkeitsaufnahme.\n' +
          'Für alle Oberflächen geeignet.\n' +
          'Ideal für empfindliche Oberflächenarbeiten in der Automobil- und Lackindustrie.',
        features: '✓ Sterile Fertigung ✓ Antibakterielle Eigenschaften ✓ Einweg-Optionen',
        specifications: {
          'Material': '100 % Baumwolle',
          'Webart': 'Spezialgewebe',
          'Flächengewicht': '200–300 g/m²',
          'Farbauswahl': '15+ Farben',
          'Abmessungen': 'Sondermaße möglich',
          'Pflege': 'Maschinenwaschbar'
        }
      },
      silkMesh: {
        nameUppercase: 'Farbfilter-Tücher',
        name: 'FARBFILTER-TUCH',
        description:
          'Als Filter für Luft, Wasser, Öl und Kraftstoff in den Branchen Textil, Glas, Keramik, Elektronik, Grafik, Kunststoff, Lebensmittel, Chemie, Gesundheit, Automobil und Werbung im Einsatz.\n\n' +
          'Unsere Produkte entsprechen den höchsten Branchenstandards: gleichmäßige Poren sowie konstante Kett- und Schusszahlen. ' +
          'Gefertigt aus hochzugfestem 100 % Polyester-Monofilamentgarn. Verfügbar ab 25 µm und darüber.',
        features: '✓ Hohe Saugfähigkeit ✓ Chemikalienbeständig ✓ Waschbar & wiederverwendbar',
        specifications: {
          'Material': 'Zertifizierte Bio-Baumwolle',
          'Zertifikat': 'GOTS-zertifiziert',
          'Farbstoffe': 'Pflanzliche Naturfarbstoffe',
          'Flächengewicht': '180–250 g/m²',
          'Besonderheit': 'Hypoallergen',
          'Ökobilanz': 'Klimaneutrale Produktion'
        }
      },
      microFiber: {
        nameUppercase: 'Mikrofaser-Reinigungstücher',
        name: 'MIKROFASER-TUCH',
        description:
          'Aus 80 % Polyester und 20 % Polyamidgarn hergestellt. Dank der kurzen Florhöhe zum Trocknen und Reinigen geeignet. ' +
          'Auf allen Oberflächen bequem einsetzbar. Durch spezielle Färbetechnologie mit erstklassiger Verarbeitungsqualität. ' +
          'Matte Optik. Die leicht zu reinigende Struktur macht es für verschiedenste Verschmutzungen geeignet. Standardmäßig 40×40 cm oder nach Wunsch.',
        features: '✓ Organische Materialien ✓ Individuelle Muster ✓ Farbechtheitsgarantie',
        specifications: {
          'Druckart': 'Digitale Sublimation',
          'Farbqualität': 'Full-HD-Auflösung',
          'Mindestbestellmenge': '50 Stück',
          'Produktionszeit': '7–10 Werktage',
          'Designsupport': 'Kostenloses Design',
          'Dateiformat': 'AI, PSD, PDF'
        }
      },
      bandocuGlove: {
        nameUppercase: 'Band-Handschuhe',
        name: 'BAND-HANDSCHUH',
        description:
          '100 % Polyester.\nMit minimalen Nähten konzipiert, damit weder Fusseln noch Spuren entstehen.\nFür präzise Arbeiten entwickelt – dient dem Produktschutz. ' +
          'Das dünne, elastische Gewebe schmiegt sich an die Hand an und bietet hohe Sensibilität.',
        features: '✓ Fleckenresistent ✓ Waschfest ✓ Professionelles Erscheinungsbild',
        specifications: {
          'Einsatzbereich': 'Innenbereich',
          'Material': 'Baumwoll-Polyester-Mischung',
          'Pflege': 'Maschinenwaschbar bei 40 °C',
          'Bügeln': 'Mittlere Hitze',
          'Varianten': 'Vorhang, Decke, Kissen',
          'Farbechtheit': 'Hoch'
        }
      }
    },
    // About page
    about: {
      title: 'Über uns',
      subtitle: 'Mit über 10 Jahren Erfahrung führend in der Sonderfertigung von Wischtüchern',
      storyTitle: 'Unsere Geschichte',
      storyDescriptionHtml:
        'Als Vonza Tekstil Otomotiv San. ve Tic. Ltd. Şti. beliefern wir seit <strong>2013</strong> Lackierereien der Automobilzulieferindustrie mit hochwertigen technischen Textilprodukten – mit einem erfahrenen Team.',
      mainProducts: 'Unsere Hauptproduktgruppen',
      storyConclusion:
        'Unsere Produkte haben sich in Qualität und Funktionalität bewährt; sie bieten Lösungen, die Ihre Produktionsprozesse vereinfachen und Ihre Effizienz steigern.',
      valuesTitle: 'Unsere Werte',
      valuesSubtitle: 'Grundwerte, die unseren Geschäftsansatz prägen',
      values: {
        quality: {
          title: 'Qualität',
          description: 'Wir produzieren nach höchsten Standards, um Qualitätsprodukte zu liefern.'
        },
        satisfaction: {
          title: 'Kundenzufriedenheit',
          description: 'Kundenzufriedenheit hat Priorität – wir streben in jedem Projekt nach Exzellenz.'
        },
        capacity: {
          title: 'Produktionskapazität',
          description: 'Mit unserer modernen Anlage produzieren wir in hoher Kapazität.'
        },
        sustainability: {
          title: 'Nachhaltigkeit',
          description: 'Mit umweltfreundlichen Verfahren handeln wir naturbewusst.'
        }
      },
      stats: {
        experience: 'Jahre Erfahrung',
        customers: 'Unternehmens-Referenzen',
        products: 'Tägliche Produktionskapazität',
        support: 'Support-Service'
      },
      ctaTitle: 'Anfrage für Sonderfertigung',
      ctaDescription: 'Wir fertigen Tücher nach Ihren Anforderungen. Kontaktieren Sie uns!',
      ctaButton: 'Kontakt aufnehmen'
    },
    // Contact page
    contact: {
      title: 'Kontakt',
      subtitle: 'Kontaktieren Sie uns – wir helfen Ihnen gern',
      infoTitle: 'Unsere Kontaktdaten',
      infoSubtitle: 'Für Fragen können Sie uns jederzeit erreichen',
      formTitle: 'Kontakt aufnehmen',
      formSubtitle: 'Füllen Sie das Formular aus, um uns zu schreiben',
      coppiedEmail: 'E-Mail-Adresse kopiert',
      centralAddress: 'Zentrale',
      factoryAddress: 'Fabrik',
      phone: 'Telefon',
      email: 'E-Mail',
      coppy: 'Kopieren',
      coppied: 'Kopiert!',
      coppyButtonHover: 'E-Mail kopieren',
      form: {
        name: 'Vollständiger Name *',
        namePlaceholder: 'Geben Sie Ihren Vor- und Nachnamen ein',
        company: 'Firmenname',
        companyPlaceholder: 'Geben Sie Ihren Firmennamen ein',
        email: 'E-Mail *',
        emailPlaceholder: 'Geben Sie Ihre E-Mail-Adresse ein',
        phone: 'Telefon *',
        phonePlaceholder: 'Geben Sie Ihre Telefonnummer ein',
        country: 'Land',
        countryPlaceholder: 'Geben Sie Ihr Land ein',
        location: 'Standort',
        locationPlaceholder: 'Stadt/Bezirk eingeben',
        message: 'Nachricht *',
        messagePlaceholder: 'Schreiben Sie Ihre Nachricht…',
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
          details: ['Merkez Mah. Tekstil Cad. No:123', 'Şişli / Istanbul / Türkei']
        },
        hours: {
          title: 'Öffnungszeiten',
          details: ['Montag – Freitag: 08:00 – 18:00', 'Samstag: 09:00 – 15:00']
        }
      },
      mapTitle: 'Kartenstandort',
      mapLocation: 'Şişli / Istanbul'
    },
    // Product Detail page
    productDetail: {
      backToProducts: 'Zurück zu den Produkten',
      features: 'Eigenschaften',
      specifications: 'Technische Spezifikationen',
      advantages: 'Vorteile',
      relatedProducts: 'Ähnliche Produkte',
      relatedProductsSubtitle: 'Entdecken Sie weitere hochwertige Tuch-Produkte',
      getQuote: 'Preisangebot einholen',
      viewDetails: 'Details anzeigen →',
      seeAll: 'Den gesamten Produktkatalog anzeigen',
      benefits: {
        delivery: {
          title: 'Schnelle Lieferung',
          description: 'Schnelle und sichere Lieferung in der gesamten Türkei'
        },
        quality: {
          title: 'Qualitätsgarantie',
          description: 'Qualitätsgarantie für all unsere Produkte'
        },
        support: {
          title: 'Experten-Support',
          description: 'Professionelle Unterstützung mit 15 Jahren Erfahrung'
        }
      }
    },
    // Quote page
    quote: {
      title: 'Angebotsanfrage-Formular',
      subtitle: 'Füllen Sie das Formular aus, um ein auf Ihre Bedürfnisse zugeschnittenes Angebot zu erhalten',
      formButton: 'Angebotsformular',
      description: 'Fordern Sie ein Angebot für maßgefertigte Tuch-Produkte über das Formular an.',
      benefitsTitle: 'Vorteile der Angebotsanfrage',
      back: 'Wir melden uns schnellstmöglich bei Ihnen.',
      benefits: [
        'Kostenlose Angebotserstellung',
        'Antwort innerhalb von 24 Stunden',
        'Individuelle Designoptionen',
        'Großbestellungen',
        'Qualitätsgarantie',
        'Schnelle Lieferung'
      ],
      sended_form_title: 'Ihre Nachricht wurde erfolgreich gesendet!',
      sending: 'Wird gesendet',
      sended: 'Erfolgreich gesendet!',
      form: {
        phonePlaceholder: '+90 530 830 34 22',
        countryPlaceholder: 'Türkei',
        locationPlaceholder: 'Istanbul',
        submit: 'Nachricht senden',
        required: '*'
      },
      quickContact: 'Schnellkontakt',
      quickContactDescription: 'Für dringende Fälle können Sie uns direkt kontaktieren.',
      openInNewTab: 'Formular in neuem Tab öffnen',
      fillForm: 'Formular ausfüllen – wir setzen uns mit Ihnen in Verbindung',
      loading: 'Lädt …'
    },
    // Features
    features: {
      quality: {
        title: 'Qualitätsproduktion',
        description: 'Wir arbeiten mit Rohstoffen höchster Qualität.'
      },
      design: {
        title: 'Individuelles Design',
        description: 'Design und Produktion nach Kundenanforderungen.'
      },
      delivery: {
        title: 'Schnelle Lieferung',
        description: 'Pünktliche und sichere Lieferung garantiert.'
      }
    },
    // Common
    common: {
      productNotFound: 'Produkt nicht gefunden',
      backToProducts: 'Zur Produktseite zurück',
      breadcrumb: {
        home: 'Startseite',
        products: 'Unsere Produkte'
      }
    },
    // Footer
    footer: {
      description:
        'Unser Unternehmen ist auf maßgeschneiderte Tuch- und technische Textilprodukte spezialisiert und bietet mit einem qualitätsorientierten Ansatz die besten Lösungen.',
      productsTitle: 'Unsere Produkte',
      contactTitle: 'Kontaktinformationen',
      copyright: '© 2025 SoftNox. Alle Rechte vorbehalten.',
      address1: 'Altınova Mah. Fuar Caddesi No:61 16090 Osmangazi / BURSA',
      address2: 'Anadolu Mah. Karlıdağ Caddesi No:44/C 16270 Yıldırım / BURSA'
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