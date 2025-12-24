import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FullScreenCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2400&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=2400&q=80",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=2400&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=2400&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=2400&q=80",
  ];

  const overlayImages = [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&q=80",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
    "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

          <div className="w-full h-full absolute top-0 flex justify-center items-center z-30 duration-700">
            <img
              src={overlayImages[index]}
              alt={`Overlay ${index + 1}`}
              className="w-full h-full object-cover opacity-40"
            />
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 backdrop-blur-md hover:scale-110 active:scale-95 group"
        aria-label="Previous slide"
      >
        <ChevronLeft
          size={40}
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 group-hover:-translate-x-1 transition-transform"
        />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 backdrop-blur-md hover:scale-110 active:scale-95 group"
        aria-label="Next slide"
      >
        <ChevronRight
          size={40}
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 group-hover:translate-x-1 transition-transform"
        />
      </button>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "bg-white w-8 h-2 sm:w-10 sm:h-2.5 md:w-12 md:h-3"
                : "bg-white/40 hover:bg-white/60 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-30">
          <div className="text-white text-base sm:text-lg md:text-xl">
            Loading...
          </div>
        </div>
      )}
    </div>
  );
}
