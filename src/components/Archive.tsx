import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const archiveImages = [
  { url: "/archive/optima-1.jpeg", alt: "OPTIMA 2024 - Team Photo" },
  { url: "/archive/optima-2.jpg", alt: "OPTIMA 2024 - Award Ceremony" },
  { url: "/archive/optima-3.jpeg", alt: "OPTIMA 2024 - Audience" },
  { url: "/archive/optima-4.jpg", alt: "OPTIMA 2024 - Prize Distribution" },
  { url: "/archive/optima-5.jpeg", alt: "OPTIMA - Stage Event" },
  { url: "/archive/optima-6.jpg", alt: "OPTIMA 2024 - Guest Felicitation" },
  { url: "/archive/optima-7.jpeg", alt: "OPTIMA - Group Photo" },
  { url: "/archive/optima-8.jpg", alt: "OPTIMA 2024 - Winner" },
  { url: "/archive/optima-9.jpeg", alt: "OPTIMA 2024 - Organizing Team" },
  { url: "/archive/optima-10.jpg", alt: "OPTIMA 2024 - Ceremony" },
];

const Archive = () => {
  const [selectedImage, setSelectedImage] = useState<typeof archiveImages[0] | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="section-container relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">
            Gallery
          </h2>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base">
            Memories from past OPTIMA events
          </p>
        </motion.div>

        {/* Masonry-style Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {archiveImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedImage(image)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index % 5 === 0 ? 'row-span-2' : ''
              }`}
            >
              <div className={`relative ${index % 5 === 0 ? 'aspect-[3/4]' : 'aspect-square'} overflow-hidden`}>
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                    <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>

                {/* Glow border on hover */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl w-full max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 sm:top-4 sm:right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                <p className="absolute -bottom-10 left-0 right-0 text-center text-white/80 text-sm">
                  {selectedImage.alt}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Archive;
