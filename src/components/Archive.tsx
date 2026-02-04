import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const archiveImages = [
  { url: "/archive/optima-23-1.jpeg", alt: "OPTIMA 2023 - Event Photo 1" },
  { url: "/archive/optima-23-1.JPG", alt: "OPTIMA 2023 - Event Photo 1 (Alt)" },

  { url: "/archive/optima-23-2.jpeg", alt: "OPTIMA 2023 - Event Photo 2" },
  { url: "/archive/optima-23-2.JPG", alt: "OPTIMA 2023 - Event Photo 2 (Alt)" },

  { url: "/archive/optima-23-3.jpeg", alt: "OPTIMA 2023 - Event Photo 3" },
  { url: "/archive/optima-23-3.JPG", alt: "OPTIMA 2023 - Event Photo 3 (Alt)" },

  { url: "/archive/optima-23-4.jpeg", alt: "OPTIMA 2023 - Event Photo 4" },
  { url: "/archive/optima-23-4.JPG", alt: "OPTIMA 2023 - Event Photo 4 (Alt)" },

  { url: "/archive/optima-23-5.jpeg", alt: "OPTIMA 2023 - Event Photo 5" },
  { url: "/archive/optima-23-5.JPG", alt: "OPTIMA 2023 - Event Photo 5 (Alt)" },

  { url: "/archive/optima-23-6.jpeg", alt: "OPTIMA 2023 - Event Photo 6" },
  { url: "/archive/optima-23-6.JPG", alt: "OPTIMA 2023 - Event Photo 6 (Alt)" },

  { url: "/archive/optima-23-7.jpeg", alt: "OPTIMA 2023 - Event Photo 7" },
  { url: "/archive/optima-23-7.JPG", alt: "OPTIMA 2023 - Event Photo 7 (Alt)" },

  { url: "/archive/optima-23-8.jpeg", alt: "OPTIMA 2023 - Event Photo 8" },
  { url: "/archive/optima-23-8.JPG", alt: "OPTIMA 2023 - Event Photo 8 (Alt)" },

  { url: "/archive/optima-23-9.jpeg", alt: "OPTIMA 2023 - Event Photo 9" },
  { url: "/archive/optima-23-9.JPG", alt: "OPTIMA 2023 - Event Photo 9 (Alt)" },

  { url: "/archive/optima-23-10.jpeg", alt: "OPTIMA 2023 - Event Photo 10" },
  { url: "/archive/optima-23-10.JPG", alt: "OPTIMA 2023 - Event Photo 10 (Alt)" },

  { url: "/archive/optima-23-11.jpeg", alt: "OPTIMA 2023 - Event Photo 11" },
  { url: "/archive/optima-23-11.JPG", alt: "OPTIMA 2023 - Event Photo 11 (Alt)" },

  { url: "/archive/optima-23-12.jpeg", alt: "OPTIMA 2023 - Event Photo 12" },
  { url: "/archive/optima-23-12.JPG", alt: "OPTIMA 2023 - Event Photo 12 (Alt)" },

  { url: "/archive/optima-23-13.jpeg", alt: "OPTIMA 2023 - Event Photo 13" },
  { url: "/archive/optima-23-13.JPG", alt: "OPTIMA 2023 - Event Photo 13 (Alt)" },

  { url: "/archive/optima-23-14.JPG", alt: "OPTIMA 2023 - Event Photo 14" },
  { url: "/archive/optima-23-15.JPG", alt: "OPTIMA 2023 - Event Photo 15" },
  { url: "/archive/optima-23-16.JPG", alt: "OPTIMA 2023 - Event Photo 16" },
  { url: "/archive/optima-23-17.JPG", alt: "OPTIMA 2023 - Event Photo 17" },
  { url: "/archive/optima-23-18.JPG", alt: "OPTIMA 2023 - Event Photo 18" },
  { url: "/archive/optima-23-19.JPG", alt: "OPTIMA 2023 - Event Photo 19" },
  { url: "/archive/optima-23-20.JPG", alt: "OPTIMA 2023 - Event Photo 20" },
  { url: "/archive/optima-23-21.JPG", alt: "OPTIMA 2023 - Event Photo 21" },
  { url: "/archive/optima-23-23.JPG", alt: "OPTIMA 2023 - Event Photo 23" },
  { url: "/archive/optima-23-25.JPG", alt: "OPTIMA 2023 - Event Photo 25" },
  { url: "/archive/optima-23-26.JPG", alt: "OPTIMA 2023 - Event Photo 26" },
  { url: "/archive/optima-23-31.JPG", alt: "OPTIMA 2023 - Event Photo 31" },
  { url: "/archive/optima-23-33.JPG", alt: "OPTIMA 2023 - Event Photo 33" },
  { url: "/archive/optima-23-34.JPG", alt: "OPTIMA 2023 - Event Photo 34" },
  { url: "/archive/optima-23-35.JPG", alt: "OPTIMA 2023 - Event Photo 35" },
  { url: "/archive/optima-23-36.JPG", alt: "OPTIMA 2023 - Event Photo 36" },
];

const Archive = () => {
  const [selectedImage, setSelectedImage] =
    useState<typeof archiveImages[0] | null>(null);

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
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-3xl md:text-4xl">Gallery</h2>
          <p className="text-muted-foreground mt-2">
            Memories from OPTIMA 2023
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {archiveImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              onClick={() => setSelectedImage(image)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index % 5 === 0 ? "row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index % 5 === 0 ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn className="text-white w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white/20 p-2 rounded-full"
                >
                  <X className="text-white" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Archive;
