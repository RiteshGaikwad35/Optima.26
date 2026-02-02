import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Trophy, Lightbulb, Users, Presentation, Brain } from "lucide-react";

const events = [
  {
    icon: Code,
    title: "Code Optimization Challenge",
    description: "Solve complex algorithmic problems with optimal time and space complexity. Test your coding skills against the best.",
    category: "Technical",
    prize: "₹25,000",
  },
  {
    icon: Brain,
    title: "OR Case Study",
    description: "Apply Operations Research techniques to real-world business scenarios. Present your optimization solutions to industry experts.",
    category: "Technical",
    prize: "₹20,000",
  },
  {
    icon: Presentation,
    title: "Paper Presentation",
    description: "Present your research on optimization algorithms, network flows, or computational methods to an academic panel.",
    category: "Academic",
    prize: "₹15,000",
  },
  {
    icon: Trophy,
    title: "Hackathon",
    description: "48-hour intensive coding marathon to build optimization-powered solutions for real-world challenges.",
    category: "Technical",
    prize: "₹50,000",
  },
  {
    icon: Lightbulb,
    title: "Ideathon",
    description: "Pitch innovative ideas that leverage optimization to solve pressing societal problems.",
    category: "Innovation",
    prize: "₹15,000",
  },
  {
    icon: Users,
    title: "Tech Quiz",
    description: "Test your knowledge of algorithms, optimization techniques, and computer science fundamentals.",
    category: "Fun",
    prize: "₹10,000",
  },
];

const Events = () => {
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
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary font-medium mb-4">
            Competitions
          </span>
          <h2 className="section-title">Featured Events</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Participate in our exciting lineup of technical events designed to challenge, 
            inspire, and reward the brightest minds in optimization and technology.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 lg:p-8 group hover:border-primary/30 transition-all duration-500 card-hover relative overflow-hidden"
            >
              {/* Category Badge */}
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                {event.category}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                <event.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {event.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {event.description}
              </p>

              {/* Prize */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold gradient-text">{event.prize}</span>
                </div>
                <button className="text-sm text-primary hover:text-accent transition-colors font-medium">
                  Learn More →
                </button>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Register CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-card font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
            Register for All Events
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Events;
