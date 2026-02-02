import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Calendar, Trophy, Users, X, ChevronRight, Star } from "lucide-react";

const archives = [
  {

    theme: "Optimizing Tomorrow",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
  {
    theme: "The Algorithm Revolution",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
  },
  {
    theme: "Network Flows & Beyond",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop",
  },
  {
    theme: "Virtual Optimization",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
  },
];

const Archive = () => {
  const [selectedArchive, setSelectedArchive] = useState<typeof archives[0] | null>(null);
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

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Gallery</h2>
        </motion.div>

        {/* Archive Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {archives.map((archive, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedArchive(archive)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group card-hover"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={archive.image}
                  alt={`OPTIMA `}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {archive.theme}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  
                  
                </div>
                <button className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Archive Modal */}
        <AnimatePresence>
          {selectedArchive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-xl p-4"
              onClick={() => setSelectedArchive(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Image */}
                <div className="relative aspect-video">
                  <img
                    src={selectedArchive.image}
                    alt={`OPTIMA `}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <button
                    onClick={() => setSelectedArchive(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-card/80 hover:bg-card transition-colors"
                  >
                    <X className="w-5 h-5 text-foreground" />
                  </button>
                  <div className="absolute bottom-6 left-6">
                    <span className="text-5xl font-display font-bold gradient-text"></span>
                    <h3 className="text-2xl font-display font-semibold text-foreground mt-2">
                      {selectedArchive.theme}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Stats */}
                  <div className="flex gap-8 mb-8">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="font-semibold"></span>
                      <span className="text-muted-foreground">Participants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-semibold"></span>
                      <span className="text-muted-foreground">Events</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-primary" />
                      Key Highlights
                    </h4>
                  </div>

                  {/* Winners */}
                  <div>
                    <h4 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-primary" />
                      Notable Winners
                    </h4>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Archive;
