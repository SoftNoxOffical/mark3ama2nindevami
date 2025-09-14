import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextModalImage = () => {
    setModalIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevModalImage = () => {
    setModalIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openModal = (index: number) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      } else if (event.key === 'ArrowLeft') {
        prevModalImage();
      } else if (event.key === 'ArrowRight') {
        nextModalImage();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      {/* Main Gallery */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="relative group overflow-hidden rounded-2xl shadow-lg bg-gray-100">
          <img
            src={images[currentIndex]}
            alt={`${productName} - ${currentIndex + 1}`}
            className="w-full h-96 sm:h-[500px] object-cover transition-transform duration-300 hover:scale-105 cursor-zoom-in"
            onClick={() => openModal(currentIndex)}
          />
          
          {/* Zoom overlay */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center cursor-zoom-in"
            onClick={() => openModal(currentIndex)}
          >
            <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
          </div>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-blue-600 hover:text-white text-gray-800 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100"
                aria-label="Önceki resim"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-blue-600 hover:text-white text-gray-800 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100"
                aria-label="Sonraki resim"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                  index === currentIndex
                    ? 'border-blue-600 ring-2 ring-blue-600 ring-opacity-50'
                    : 'border-gray-300 hover:border-blue-400'
                }`}
              >
                <img
                  src={image}
                  alt={`${productName} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
{/* Modal */}
{isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 h-[85dvh]">
    <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center -translate-y-6 sm:translate-y-0">
      {/* Kapat */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Galeriyi kapat"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Görsel */}
      <img
        src={images[modalIndex]}
        alt={`${productName} - ${modalIndex + 1}`}
        className="max-w-full max-h-[70svh] sm:max-h-[80vh] object-contain rounded-lg shadow-2xl"
      />

      {/* Oklar */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevModalImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-blue-600 text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full transition-all duration-300"
            aria-label="Önceki resim"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <button
            onClick={nextModalImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-blue-600 text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full transition-all duration-300"
            aria-label="Sonraki resim"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </>
      )}

      {/* Sayaç */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
          {modalIndex + 1} / {images.length}
        </div>
      )}
    </div>

    {/* Thumbnail şeridi */}
    {images.length > 1 && (
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setModalIndex(index)}
            className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${
              index === modalIndex
                ? 'border-blue-400 ring-2 ring-blue-400 ring-opacity-50'
                : 'border-white/30 hover:border-blue-400'
            }`}
          >
            <img src={image} alt={`${productName} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    )}
  </div>
)}

    </>
  );
};

export default ImageGallery;