import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { url: "/slider/slide-1.jpg", alt: "OPTIMA Event - Inauguration" },
  { url: "/slider/slide-2.jpg", alt: "OPTIMA Event - Faculty Group" },
  { url: "/slider/slide-3.jpg", alt: "OPTIMA Event - Panel Discussion" },
  { url: "/slider/slide-4.jpg", alt: "OPTIMA Event - Keynote Speech" },
  { url: "/slider/slide-5.jpg", alt: "OPTIMA Event - Award Ceremony" },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] rounded-xl sm:rounded-2xl overflow-hidden group shadow-xl">
      {/* Render all images but only show current one */}
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 1.05,
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ pointerEvents: index === currentIndex ? 'auto' : 'none' }}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />

          {/* Premium gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        </motion.div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2.5 rounded-full
        bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100
        transition-all duration-300 hover:bg-white/40 hover:scale-110 z-10 border border-white/30"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2.5 rounded-full
        bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100
        transition-all duration-300 hover:bg-white/40 hover:scale-110 z-10 border border-white/30"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
        <motion.div
          key={currentIndex}
          className="h-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4, ease: "linear" }}
        />
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "w-6 sm:w-8 bg-white shadow-lg"
                : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/30 backdrop-blur-md z-10 border border-white/20">
        <span className="text-white text-xs sm:text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
