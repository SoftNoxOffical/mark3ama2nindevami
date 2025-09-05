import React, { useState } from 'react';
import { Phone, Mail, MapPin, Copy, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import logo from "/photo/logo_only.png";

const Footer = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const address1 = t('footer.address1');
  const address2 = t('footer.address2');
  const email = "info@vonza.com.tr";
  const phone_number = "+90 530 830 34 22";
  const phone_whatsup = "+905308303422";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error("Kopyalama başarısız:", e);
    }
  };

  const mapsUrl = (addr: string) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`;

  const productKeys = ["ipaCloth", "silkMesh", "microFiber", "bandocuGlove"] as const;

  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-blue-900/90 to-gray-900/90 absolute z-10"></div>

      </div>

      <div className="relative z-20 container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4
                bg-white text-gray-900 rounded-xl px-3 py-2 shadow">
              <img
                src={logo}
                alt="Linenix"
                className={`h-12 w-12 object-contain transition-colors duration-300`}
              />
              <span className="font-bold transition-colors duration-300 text-lg sm:text-xl md:text-2xl text-[#014e84]">
                VONZA
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.productsTitle")}</h3>
            <ul className="space-y-2">
              {productKeys.map((k, i) => (
                <li key={k} className="text-gray-300 hover:text-white transition-colors duration-200">
                  <Link to={`/urun/${i + 1}`} className="hover:underline">
                    {t(`products.${k}.name`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contactTitle')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} />
                <a href={`tel:${phone_whatsup}`} className="hover:text-white">
                  {phone_number}
                </a>
              </div>

              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <a href={`mailto:${email}`} className="hover:text-white">{email}</a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="E-postayı kopyala"
                  title={copied ? "Kopyalandı!" : "Kopyala"}
                  className="p-1 rounded hover:bg-white/10 transition-colors"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
                {copied && (
                  <span
                    role="status"
                    aria-live="polite"
                    className="ml-2 inline-flex items-center gap-1 rounded-md bg-green-400 text-black text-xs font-semibold px-2 py-1 shadow transition-opacity"
                  >
                    <Check size={12} />
                    mail adresi kopyalandı
                  </span>
                )}
              </div>


              {/* Adres 1 */}
              <a
                href={mapsUrl(address1)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                title="Google Maps’te aç"
              >
                <MapPin size={16} />
                <span>{address1}</span>
              </a>

              {/* Adres 2 */}
              <a
                href={mapsUrl(address2)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                title="Google Maps’te aç"
              >
                <MapPin size={16} />
                <span>{address2}</span>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <a
            href="https://softnox.com.tr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            title="softnox.com.tr"
          >
            {t('footer.copyright')}
          </a>
        </div>

      </div>
    </footer >
  );
};

export default Footer;