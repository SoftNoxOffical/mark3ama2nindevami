import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, Phone, Mail, Check, Copy, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ContactFormData {
  formtype: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  country: string;
  location: string;
  issuccessfulsendinggmail: string;
}
const Contact = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();
  const [infoRef, infoVisible] = useScrollAnimation();
  const { t } = useTranslation();
  const email = "info@vonza.com.tr";
  const phone_number = "+90 530 830 34 22";   // ekranda görünen
  const phone_whatsup = "+905308303422";      // tel:/WhatsApp için E.164
  const address1 = t("footer.address1");
  const address2 = t("footer.address2");
  const mapsUrl = (addr: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`;
  // Üst tarafa (gerekliyse):
  const onKeyActivate = (e: React.KeyboardEvent, fn: () => void) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fn(); } };
  const handleCall = () => window.location.href = `tel:${phone_whatsup}`;
  const handleEmail = () => window.location.href = `mailto:${email}`;
  const handleMap1 = () => window.open(mapsUrl(address1), "_blank", "noopener,noreferrer");
  const handleMap2 = () => window.open(mapsUrl(address2), "_blank", "noopener,noreferrer");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false); const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch { }
  };
  // sayfanın üstünde:
  const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLScdlbr8yP67NJ6UTeDQwQudYO47aVse2oTKFMadm-X20Ber9A/formResponse";
  const INITIAL: ContactFormData = {
    formtype: 'İletişim Formu',
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    location: '',
    message: '',
    issuccessfulsendinggmail: 'gönderilmedi'
  };
  const [formData, setFormData] = useState<ContactFormData>(INITIAL);
  // Doğru entry ID'ler
  const ENTRY = {
    formtype: "entry.20428007",
    firstName: "entry.2005620554",   // Ad
    lastName: "entry.41818161",     // Soyad
    company: "entry.1751242971",   // Şirket Adı
    email: "entry.1045781291",   // E-posta
    address: "entry.1065046570",   // Adres (tek alan)
    phone: "entry.1166974658",   // Telefon numarası
    message: "entry.839337160",    // Notlar
    issuccessfulsendinggmail: "entry.36195537",
  };
  function submitToGoogleForm(data: ContactFormData) {
    const TARGET = "hidden_iframe";
    let iframe = document.querySelector<HTMLIFrameElement>(`iframe[name="${TARGET}"]`);
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.name = TARGET;              // target ile aynı isim OLMALI
      iframe.style.display = "none";
      document.body.appendChild(iframe);
    }

    const form = document.createElement("form");
    form.action = GOOGLE_FORM_ACTION;
    form.method = "POST";
    form.target = TARGET; // yeni sekmede aç (istersen "hidden_iframe" kullanabilirsin)
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
    add(ENTRY.formtype, data.formtype || "boş gönderildi");
    add(ENTRY.firstName, first || "boş gönderildi");
    add(ENTRY.lastName, last || "boş gönderildi");
    // Şirket
    add(ENTRY.company, data.company || "boş gönderildi");
    // E-posta
    add(ENTRY.email, data.email || "boş gönderildi");
    // Adres: location + country birleşik
    const address = [data.location, data.country].filter(Boolean).join(", ");
    add(ENTRY.address, address || "boş gönderildi");
    // Telefon
    add(ENTRY.phone, data.phone || "boş gönderildi");
    // Notlar (bizde "message")
    add(ENTRY.message, data.message || "boş gönderildi");
    add(ENTRY.issuccessfulsendinggmail, data.issuccessfulsendinggmail || "boş gönderildi");
    document.body.appendChild(form);
    form.submit();
    setTimeout(() => form.remove(), 0);
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    const snapshot: ContactFormData = { ...formData };
    try {
      // Web3Forms ile e-posta gönderimi
      const result = await sendEmail(snapshot);
      const success = !!result?.success;

      const gfPayload = {
        ...snapshot,
        issuccessfulsendinggmail: success ? 'mail gönderildi' : 'gönderilemedi'
      };
      await submitToGoogleForm(gfPayload);
      setSubmitStatus(success ? 'success' : 'error');
      if (success) setFormData(INITIAL);
    } catch (err) {
      // E-posta atımı beklenmedik şekilde çöktüyse de Google’a “error” diye logla
      const gfPayload = {
        ...snapshot,
        issuccessfulsendinggmail: 'error'
      };
      try { await submitToGoogleForm(gfPayload); } catch { }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false); // Temizlik: sadece burada
    }
  };
  {/* alert("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız."); */ }

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
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);
  const sendEmail = async (data: ContactFormData) => {
    // Web3Forms kullanarak e-posta gönderimi
    const formDataToSend = new FormData();
    formDataToSend.append('access_key', 'a32b6ff8-ba4f-410b-8b62-2f6e704d55c3'); // Bu key'i web3forms.com'dan alacaksınız
    formDataToSend.append('name', data.name || 'Boş gönderilmiş');
    formDataToSend.append('email', data.email || 'Boş gönderilmiş');
    formDataToSend.append('phone', data.phone || 'Boş gönderilmiş');
    formDataToSend.append('company', data.company || 'Boş gönderilmiş');
    formDataToSend.append('message', data.message || 'Boş gönderilmiş');
    formDataToSend.append('subject', `İletişim Formu - ${data.name}`);
    formDataToSend.append('country', data.country || 'Boş gönderilmiş');
    formDataToSend.append('location', data.location || 'Boş gönderilmiş');
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formDataToSend
    });
    return response.json();
  };

  return (
    <div className="pt-16">
      {/* Success Overlay */}
      {submitStatus === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Blur Background */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-fadeIn"></div>

          {/* Success Message */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-12 mx-4 text-center animate-successPopIn">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-checkmark">
              <Check className="h-10 w-10 text-white animate-checkDraw" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Formunuz Gönderildi</h3>
            <p className="text-gray-600">Mesajınız başarıyla iletildi. En kısa sürede size dönüş yapacağız.</p>
            {/*<button
              type="button"
              onClick={() => setSubmitStatus('idle')}
              className="mt-6 px-4 py-2 rounded-lg bg-blue-900 text-white"
            >
              Kapat
            </button>*/}
          </div>
        </div>
      )}
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
            {t('contact.title')}
          </h1>
          <p className="text-xl opacity-90">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section
        ref={infoRef}
        className={`py-20 bg-white transition-all duration-1000 delay-200 ${infoVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('footer.contactTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.infoSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {/* Telefon (TÜM KART TIKLANABİLİR) */}
          <div
            role="button"
            tabIndex={0}
            onClick={handleCall}
            onKeyDown={(e) => onKeyActivate(e, handleCall)}
            className={`cursor-pointer bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            style={{ transitionDelay: `0ms` }}
            aria-label={`Telefonu ara: ${phone_number}`}
          >
            <div className="text-blue-600 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3"> {t('contact.phone')}</h3>
            <span className="block text-blue-700 font-medium">{phone_number}</span>
          </div>

          {/* E-posta (kart tıklanınca mailto, kopyala butonu propagation durdurur) */}
          <div
            role="button"
            tabIndex={0}
            onClick={handleEmail}
            onKeyDown={(e) => onKeyActivate(e, handleEmail)}
            className={`cursor-pointer bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            style={{ transitionDelay: `150ms` }}
            aria-label={`E-posta gönder: ${email}`}
          >
            <div className="text-green-600 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('contact.email')}</h3>

            <div className="flex items-center justify-center gap-2">
              <span className="text-blue-700 font-medium">{email}</span>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); copyEmail(); }}
                aria-label={t('contact.coppyButtonHover')}
                title={copied ? t('contact.coppied') : t('contact.coppy')}
                className="p-1 rounded hover:bg-black/5 transition"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            {copied && (
              <span
                role="status"
                aria-live="polite"
                className="mt-3 inline-flex items-center gap-1 rounded-md bg-green-400 text-black text-xs font-semibold px-2 py-1 shadow"
                onClick={(e) => e.stopPropagation()}
              >
                <Check size={12} />
                {t('contact.coppiedEmail')}
              </span>
            )}
          </div>

          {/* Adres 1 */}
          <div
            role="button"
            tabIndex={0}
            onClick={handleMap1}
            onKeyDown={(e) => onKeyActivate(e, handleMap1)}
            className={`cursor-pointer bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            style={{ transitionDelay: `300ms` }}
            aria-label={`Adres 1 haritada aç: ${address1}`}
          >
            <div className="text-red-600 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('contact.centralAddress')}</h3>
            <span className="text-blue-700 font-medium">{address1}</span>
          </div>

          {/* Adres 2 */}
          <div
            role="button"
            tabIndex={0}
            onClick={handleMap2}
            onKeyDown={(e) => onKeyActivate(e, handleMap2)}
            className={`cursor-pointer bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            style={{ transitionDelay: `450ms` }}
            aria-label={`Adres 2 haritada aç: ${address2}`}
          >
            <div className="text-purple-600 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('contact.factoryAddress')}</h3>
            <span className="text-blue-700 font-medium">{address2}</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('contact.formTitle')}</h2>
              <p className="text-xl text-gray-600">
                {t('contact.formSubtitle')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder={t('contact.form.companyPlaceholder')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder={t('contact.form.phonePlaceholder')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.country')}
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder={t('contact.form.countryPlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.location')}
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder={t('contact.form.locationPlaceholder')}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto ${isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-900 hover:bg-blue-800 text-white'
                      }`}
                  >
                    <Send className="h-5 w-5" />
                    <span>{isSubmitting ? 'Gönderiliyor...' : t('contact.form.submit')}</span>
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