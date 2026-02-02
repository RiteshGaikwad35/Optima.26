import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    title: "OPTIMA 2024 Opening Ceremony",
    year: "2024",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
    title: "Hackathon in Progress",
    year: "2024",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
    title: "Technical Workshop",
    year: "2023",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
    title: "Award Ceremony",
    year: "2023",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
    title: "Keynote Speech",
    year: "2024",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&h=600&fit=crop",
    title: "Panel Discussion",
    year: "2023",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
    title: "Team Collaboration",
    year: "2024",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=800&h=600&fit=crop",
    title: "Coding Competition",
    year: "2023",
  },
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
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="section-container relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary font-medium mb-4">
            Memories
          </span>
          <h2 className="section-title">Event Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Relive the moments from our previous editions of OPTIMA — 
            the energy, innovation, and excellence that define our event.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group shadow-lg"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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

        {/* Lightbox */}
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
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-2 rounded-full bg-card/20 hover:bg-card/30 transition-colors z-10"
              >
                <X className="w-6 h-6 text-card" />
              </button>

              {/* Navigation */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 md:left-8 p-3 rounded-full bg-card/20 hover:bg-card/30 transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6 text-card" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 md:right-8 p-3 rounded-full bg-card/20 hover:bg-card/30 transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6 text-card" />
              </button>

              {/* Image */}
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl max-h-[80vh] mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[selectedImage].url}
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-full object-contain rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/90 to-transparent rounded-b-xl">
                  <h3 className="text-xl font-display font-semibold text-card">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <p className="text-primary">{galleryImages[selectedImage].year}</p>
                </div>
              </motion.div>

              {/* Thumbnail Strip */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 px-4">
                {galleryImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
                    className={`w-12 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === selectedImage
                        ? "ring-2 ring-primary scale-110"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Gallery;
