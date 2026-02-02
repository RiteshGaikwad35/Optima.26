import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import NetworkBackground from "./NetworkBackground";

const slides = [
  {
    title: "OPTIMA 2025",
    subtitle: "Where Optimization Meets Innovation",
    description:
      "Explore how Operations Research and computational optimization techniques transform real-world systems — from electricity grids to transportation networks.",
  },
  {
    title: "Optimize The Future",
    subtitle: "Algorithms That Shape Tomorrow",
    description:
      "Join us for a journey through cutting-edge optimization techniques that power decision-making in logistics, communication systems, and beyond.",
  },
  {
    title: "Excellence in Research",
    subtitle: "Department of Computer Applications",
    description:
      "NIT Trichy's premier technical event showcasing the best minds in optimization and operations research.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background */}
      <NetworkBackground />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Slide Content */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary font-medium mb-6"
            >
              Department of Computer Applications • NIT Trichy
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4"
            >
              <span className="gradient-text">{slides[currentSlide].title}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-display font-medium mb-6"
            >
              {slides[currentSlide].subtitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              {slides[currentSlide].description}
            </motion.p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12"
          >
            <CountdownTimer targetDate="2025-03-15T09:00:00" />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-card font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 flex items-center gap-2">
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              Register Now
            </button>
            <button className="px-8 py-4 rounded-full glass-card text-foreground font-semibold text-lg transition-all duration-300 hover:bg-muted border border-border">
              Explore Events
            </button>
          </motion.div>

          {/* Slide Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full glass-card hover:bg-muted transition-colors"
            >
              <ChevronLeft size={24} className="text-foreground" />
            </button>
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full glass-card hover:bg-muted transition-colors"
            >
              <ChevronRight size={24} className="text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
