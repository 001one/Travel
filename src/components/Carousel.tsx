"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/linus1.jpg", "/linus2.jpg", "/linus3.jpg"];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Image Slideshow */}
      <div className="relative w-full h-auto">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width={1200} // Adjust to maintain clarity
          height={600} // Maintain aspect ratio
          className="w-full h- object-contain" // Prevent cropping
          priority
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-orange-500 scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
