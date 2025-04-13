import Image from "next/image";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ImageSlide = () => {
  const images = [
    "./slideitem1.jpeg",
    "./slideitem2.jpeg",
    "./slideitem3.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-auto object-cover"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ImageSlide;
