import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryImages = [
  { id: 1, url: "/gallery/20241109_100301.jpg", title: "OPTIMA Moments", year: "2024" },
  { id: 2, url: "/gallery/20241109_100635.jpg", title: "Event Highlights", year: "2024" },
  { id: 3, url: "/gallery/20241109_103453.jpg", title: "Student Participation", year: "2024" },
  { id: 4, url: "/gallery/20241109_112225.jpg", title: "Workshop Session", year: "2024" },
  { id: 5, url: "/gallery/20241109_112958.jpg", title: "Technical Showcase", year: "2024" },
  { id: 6, url: "/gallery/20241109_113420.jpg", title: "Team Collaboration", year: "2024" },
  { id: 7, url: "/gallery/20241109_115227.jpg", title: "Innovation in Action", year: "2024" },
  { id: 8, url: "/gallery/20241109_121306.jpg", title: "Audience Engagement", year: "2024" },
  { id: 9, url: "/gallery/20241109_121340.jpg", title: "Live Demonstration", year: "2024" },
  { id: 10, url: "/gallery/20241109_121416.jpg", title: "Creative Minds", year: "2024" },
  { id: 11, url: "/gallery/20241109_121457.jpg", title: "Learning Together", year: "2024" },
  { id: 12, url: "/gallery/20241109_121723 (1).jpg", title: "Tech Enthusiasm", year: "2024" },
  { id: 13, url: "/gallery/20241109_122139.jpg", title: "Hands-on Experience", year: "2024" },
  { id: 14, url: "/gallery/20241109_122336.jpg", title: "Group Activity", year: "2024" },
  { id: 15, url: "/gallery/20241109_173447.jpg", title: "Evening Session", year: "2024" },
  { id: 16, url: "/gallery/20241109_173455.jpg", title: "Closing Moments", year: "2024" },
  { id: 17, url: "/gallery/20241109_175347.jpg", title: "Celebration", year: "2024" },
  { id: 18, url: "/gallery/20241109_175347 (1).jpg", title: "Achievement", year: "2024" },
  { id: 19, url: "/gallery/cdfddb5d-a1f1-4b6e-9545-0e20fc255ea1.JPG", title: "OPTIMA Finale", year: "2024" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="section-container relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary font-medium mb-4">
            Memories
          </span>
          <h2 className="section-title">Event Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Relive the moments from our previous editions of OPTIMA — the energy,
            innovation, and excellence that define our event.
          </p>
        </div>

        {/* ✅ FIXED GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="relative rounded-xl overflow-hidden cursor-pointer group shadow-lg bg-black/5"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-card font-medium text-sm">{image.title}</p>
                  <p className="text-primary text-xs">{image.year}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <ZoomIn className="w-5 h-5 text-card" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox (unchanged – already perfect) */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 backdrop-blur-xl"
              onClick={closeLightbox}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-2 rounded-full bg-card/20 hover:bg-card/30"
              >
                <X className="w-6 h-6 text-card" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 md:left-8 p-3 rounded-full bg-card/20 hover:bg-card/30"
              >
                <ChevronLeft className="w-6 h-6 text-card" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 md:right-8 p-3 rounded-full bg-card/20 hover:bg-card/30"
              >
                <ChevronRight className="w-6 h-6 text-card" />
              </button>

              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-5xl max-h-[80vh] mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[selectedImage].url}
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-full object-contain rounded-xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Gallery;
