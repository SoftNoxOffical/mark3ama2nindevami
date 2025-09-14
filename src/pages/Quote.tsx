import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Send, CheckCircle, FileText, ExternalLink, AlertCircle, User, Mail, Phone, Building, MapPin, MessageSquare } from 'lucide-react';

interface ContactFormData {
  formtype: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  location: string;
  message: string;
  issuccessfulsendinggmail: string;
}
const Quote = () => {
  const { t } = useTranslation();
  const [headerRef, headerVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLScdlbr8yP67NJ6UTeDQwQudYO47aVse2oTKFMadm-X20Ber9A/formResponse";
  const INITIAL: ContactFormData = {
    formtype: 'Teklif Formu',
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
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

  };

  const sendEmail = async (data: ContactFormData) => {
    // Web3Forms kullanarak e-posta gönderimi
    const formDataToSend = new FormData();
    formDataToSend.append('access_key', 'a32b6ff8-ba4f-410b-8b62-2f6e704d55c3');
    formDataToSend.append('name', data.name || 'Boş gönderilmiş');
    formDataToSend.append('email', data.email || 'Boş gönderilmiş');
    formDataToSend.append('phone', data.phone || 'Boş gönderilmiş');
    formDataToSend.append('company', data.company || 'Boş gönderilmiş');
    formDataToSend.append('message', data.message || 'Boş gönderilmiş');
    formDataToSend.append('subject', `Teklif Formu - ${data.name}`);
    formDataToSend.append('country', data.country || 'Boş gönderilmiş');
    formDataToSend.append('location', data.location || 'Boş gönderilmiş');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formDataToSend
    });
    return response.json();
  };
  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Ad Soyad gereklidir';
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta gereklidir';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi girin';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Telefon numarası gereklidir';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };





 
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header Section */}
      <section
        ref={headerRef}
        className={`py-20 bg-gradient-to-r from-blue-900 to-gray-800 text-white transition-all duration-1000 ${headerVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
      >
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('quote.title')}</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {t('quote.subtitle')}
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6"> {t('quote.benefitsTitle')}</h2>
                <p className="text-lg text-gray-700 mb-8">
                  {t('quote.description')}
                </p>
              </div>

              <div className="space-y-4">
                {(t("quote.benefits", { returnObjects: true }) as string[]).map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              {/*
              <div className="bg-gradient-to-r from-blue-900 to-gray-800 p-6 rounded-2xl text-white">
                <h3 className="text-xl font-semibold mb-2">Hızlı İletişim</h3>
                <p className="opacity-90 mb-4">
                  Acil durumlar için doğrudan bizimle iletişime geçebilirsiniz.
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400 font-semibold">📞 +90 XXX XXX XX XX</span>
                </div>
              </div>
               */}
            </div>

            {/* Embedded Google Form 
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 text-center">
                <FileText className="h-8 w-8 text-black mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-black">{t('quote.formButton')}</h3>
                <p className="text-black/80 mt-2">{t('quote.fillForm')}</p>
              </div>

              <div className="p-6">
                <div className="aspect-[4/5] w-full">
                  <iframe
                    src={FORM_URL} width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="rounded-lg"
                    title={t('quote.title')}
                  >
                    {t('quote.loading')}
                  </iframe>
                </div>

                <div className="mt-6 text-center">
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    {t('quote.openInNewTab')}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>*/}
            {/* Custom Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 text-center">
                <Send className="h-8 w-8 text-black mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-black">{t('quote.title')}</h3>
                <p className="text-black/80 mt-2">{t('quote.fillForm')}</p>
              </div>

              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="h-4 w-4 inline mr-1" />
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                      placeholder={t('contact.form.namePlaceholder')}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="h-4 w-4 inline mr-1" />
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                      placeholder={t('contact.form.emailPlaceholder')}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="h-4 w-4 inline mr-1" />
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                      placeholder={t('contact.form.phonePlaceholder')}
                      disabled={isSubmitting}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      <Building className="h-4 w-4 inline mr-1" />
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder={t('contact.form.companyPlaceholder')}
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Country & Location Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                        <MapPin className="h-4 w-4 inline mr-1" />
                        {t('contact.form.country')}
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder={t('quote.form.countryPlaceholder')}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        <MapPin className="h-4 w-4 inline mr-1" />
                        {t('contact.form.location')}
                      </label>

                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder={t('quote.form.locationPlaceholder')}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="h-4 w-4 inline mr-1" />
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder={t('contact.form.messagePlaceholder')}
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : submitStatus === 'success'
                          ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
                          : submitStatus === 'error'
                            ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
                            : 'bg-blue-900 hover:bg-blue-800 focus:ring-blue-500'
                      }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        {t('quote.sending')}
                      </div>
                    ) : submitStatus === 'success' ? (
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        {t('quote.sended')}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="h-5 w-5 mr-2" />
                        {t('quote.title')}
                      </div>
                    )}
                  </button>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        <div className="text-green-800">
                          <h4 className="font-medium">{t('quote.sended')} </h4>
                          <p className="text-sm mt-1">{t('quote.back')} </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {/*
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
                        <div className="text-red-800">
                          <h4 className="font-medium">{t('quote.title')}Bir hata oluştu</h4>
                          <p className="text-sm mt-1">{t('quote.title')}Lütfen tekrar deneyin veya doğrudan bizimle iletişime geçin.</p>
                        </div>
                      </div>
                    </div>
                  )} */}

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;