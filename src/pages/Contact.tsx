import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();
  const [infoRef, infoVisible] = useScrollAnimation();

  // sayfanın üstünde:
  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLScdlbr8yP67NJ6UTeDQwQudYO47aVse2oTKFMadm-X20Ber9A/formResponse";
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    location: '',
    message: ''
  });

// Doğru entry ID'ler
const ENTRY = {
  firstName: "entry.2005620554",   // Ad
  lastName:  "entry.41818161",     // Soyad
  company:   "entry.1751242971",   // Şirket Adı
  email:     "entry.1045781291",   // E-posta
  address:   "entry.1065046570",   // Adres (tek alan)
  phone:     "entry.1166974658",   // Telefon numarası
  message:   "entry.839337160",    // Notlar
};


  function submitToGoogleForm(data: typeof formData) {
    const form = document.createElement("form");
    form.action = GOOGLE_FORM_ACTION;
    form.method = "POST";
    form.target = "_blank"; // yeni sekmede aç (istersen "hidden_iframe" kullanabilirsin)

    const add = (name: string, value: string) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value ?? "";
      form.appendChild(input);
    };

const [first, ...rest] = (data.name || "").trim().split(/\s+/);
  const last = rest.join(" ");

  // Ad, Soyad
  add(ENTRY.firstName, first || "-");
  add(ENTRY.lastName, last || "-");

  // Şirket
  add(ENTRY.company, data.company || "-");

  // E-posta
  add(ENTRY.email, data.email);

  // Adres: location + country birleşik
  const address = [data.location, data.country].filter(Boolean).join(", ");
  add(ENTRY.address, address || "-");

  // Telefon
  add(ENTRY.phone, data.phone);

  // Notlar (bizde "message")
  add(ENTRY.message, data.message || "-");

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  submitToGoogleForm(formData);
  alert("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.");
 
  }


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  {/*const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic here
    alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
  };*/}

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Telefon',
      details: ['+90 212 123 45 67', '+90 532 123 45 67'],
      color: 'text-blue-600'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'E-posta',
      details: ['info@bezpro.com', 'satis@bezpro.com'],
      color: 'text-green-600'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Adres',
      details: ['Merkez Mah. Tekstil Cad. No:123', 'Şişli / İstanbul / Türkiye'],
      color: 'text-red-600'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Çalışma Saatleri',
      details: ['Pazartesi - Cuma: 08:00 - 18:00', 'Cumartesi: 09:00 - 15:00'],
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative h-96 flex items-center justify-center overflow-hidden transition-all duration-1000 ${heroVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/60 z-10"></div>
          <img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
            alt="İletişim"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            İletişim
          </h1>
          <p className="text-xl opacity-90">
            Bizimle iletişime geçin, size yardımcı olmaktan memnuniyet duyarız
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section
        ref={infoRef}
        className={`py-20 bg-white transition-all duration-1000 delay-200 ${infoVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">İletişim Bilgilerimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sorularınız için bizimle iletişime geçebilirsiniz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`${info.color} w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 text-sm mb-1">{detail}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center mb-8">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Harita Konumu</p>
              <p className="text-sm text-gray-500">Şişli / İstanbul</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        ref={formRef}
        className={`py-20 bg-gray-50 transition-all duration-1000 delay-400 ${formVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">İletişime Geçin</h2>
              <p className="text-xl text-gray-600">
                Formu doldurarak bizimle iletişime geçebilirsiniz
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="Adınızı ve soyadınızı giriniz"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Şirket Adı
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="Şirket adınızı giriniz"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="E-posta adresinizi giriniz"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="Telefon numaranızı giriniz"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                      Ülke
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="Ülkenizi giriniz"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Konum
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="Şehir/İlçe bilginizi giriniz"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                    placeholder="Mesajınızı buraya yazınız..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
                  >
                    <Send className="h-5 w-5" />
                    <span>Mesajı Gönder</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;