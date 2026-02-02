import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Calendar, Trophy, Users, X, ChevronRight, Star } from "lucide-react";

const archives = [
  {
    year: "2024",
    theme: "Optimizing Tomorrow",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    participants: "1200+",
    events: 12,
    highlights: [
      "Record-breaking hackathon participation",
      "Industry partnerships with 15+ companies",
      "International guest speakers from MIT & Stanford",
    ],
    winners: ["Team Quantum - Hackathon", "Aravind Kumar - Paper Presentation"],
  },
  {
    year: "2023",
    theme: "The Algorithm Revolution",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
    participants: "900+",
    events: 10,
    highlights: [
      "First hybrid event with virtual participation",
      "Launch of OR research symposium",
      "Student-led workshops on ML optimization",
    ],
    winners: ["Team Nexus - Code Challenge", "Priya Sharma - Best Innovation"],
  },
  {
    year: "2022",
    theme: "Network Flows & Beyond",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop",
    participants: "750+",
    events: 8,
    highlights: [
      "Post-pandemic in-person return",
      "New logistics optimization track",
      "Alumni mentorship program launched",
    ],
    winners: ["Team Alpha - Quiz", "Rahul Menon - Best Paper"],
  },
  {
    year: "2021",
    theme: "Virtual Optimization",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
    participants: "500+",
    events: 6,
    highlights: [
      "Fully virtual edition during pandemic",
      "24-hour global hackathon",
      "Introduction of AI optimization track",
    ],
    winners: ["Team Binary - Hackathon", "Sneha Patel - Ideathon"],
  },
];

const Archive = () => {
  const [selectedArchive, setSelectedArchive] = useState<typeof archives[0] | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="archive" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
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
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary font-medium mb-4">
            Legacy
          </span>
          <h2 className="section-title">OPTIMA Archives</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the rich history of OPTIMA through the years — 
            each edition building on the legacy of innovation and excellence.
          </p>
        </motion.div>

        {/* Archive Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {archives.map((archive, index) => (
            <motion.div
              key={archive.year}
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
                  alt={`OPTIMA ${archive.year}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-4xl font-display font-bold gradient-text">{archive.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {archive.theme}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {archive.participants}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {archive.events} Events
                  </span>
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
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
              onClick={() => setSelectedArchive(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Image */}
                <div className="relative aspect-video">
                  <img
                    src={selectedArchive.image}
                    alt={`OPTIMA ${selectedArchive.year}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <button
                    onClick={() => setSelectedArchive(null)}
                    className="absolute top-4 right-4 p-2 rounded-full glass-card hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-6 left-6">
                    <span className="text-5xl font-display font-bold gradient-text">{selectedArchive.year}</span>
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
                      <span className="font-semibold">{selectedArchive.participants}</span>
                      <span className="text-muted-foreground">Participants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{selectedArchive.events}</span>
                      <span className="text-muted-foreground">Events</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-primary" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {selectedArchive.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Winners */}
                  <div>
                    <h4 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-primary" />
                      Notable Winners
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedArchive.winners.map((winner, index) => (
                        <span key={index} className="px-4 py-2 rounded-full glass-card text-sm">
                          {winner}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Archive;
