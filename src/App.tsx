import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import ScrollToTop from './ScrollToTop';

import './i18n/config';

// Google Translate Integration
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}




function App() {
   const { i18n } = useTranslation();

  useEffect(() => {
    // Google Translate Integration
    const addGoogleTranslateScript = () => {
      if (document.getElementById('google-translate-script')) return;

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'tr',
          includedLanguages: 'tr,en,de',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },
        'google_translate_element'
      );
    };

    addGoogleTranslateScript();

    return () => {
      const script = document.getElementById('google-translate-script');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    
    <Router>
      <ScrollToTop behavior="smooth" />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>  
              <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/urunlerimiz" element={<Products />} />
            <Route path="/urun/:id" element={<ProductDetail />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/teklifal" element={<Quote />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
   
  );
}

export default App;