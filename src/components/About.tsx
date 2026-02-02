import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Network, TrendingUp, Users, Award, Calendar, BookOpen, Zap } from "lucide-react";

const stats = [
  { icon: Calendar, value: 40, suffix: "+", label: "Years of Excellence" },
  { icon: Award, value: 25, suffix: "+", label: "Events Conducted" },
  { icon: Users, value: 5000, suffix: "+", label: "Student Participation" },
  { icon: BookOpen, value: 50, suffix: "+", label: "Research Areas" },
];

const features = [
  {
    icon: Cpu,
    title: "Operations Research",
    description: "Advanced mathematical modeling and optimization techniques for complex decision-making processes.",
  },
  {
    icon: Network,
    title: "Network Optimization",
    description: "Efficient algorithms for transportation, communication, and logistics network design.",
  },
  {
    icon: TrendingUp,
    title: "Resource Allocation",
    description: "Optimal distribution of resources across electricity grids, supply chains, and manufacturing.",
  },
  {
    icon: Zap,
    title: "Real-time Systems",
    description: "Dynamic optimization for real-time applications in smart cities and autonomous systems.",
  },
];

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const About = () => {
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
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary font-medium mb-4">
            About Us
          </span>
          <h2 className="section-title">Department of Computer Applications</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At the National Institute of Technology, Tiruchirappalli, we pioneer research in 
            Operations Research and Optimization, shaping the future of computational excellence.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center group hover:border-primary/30 transition-all duration-500 card-hover"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="glass-card rounded-2xl p-8 group hover:border-primary/30 transition-all duration-500 card-hover"
            >
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* NIT Trichy Excellence */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass-card rounded-2xl p-8 lg:p-12 text-center glow-primary"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold gradient-text mb-4">
            NIT Trichy - A Legacy of Excellence
          </h3>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Established in 1964, the National Institute of Technology, Tiruchirappalli stands as one of India's 
            premier engineering institutions. Our Department of Computer Applications has been at the forefront 
            of innovation, combining theoretical excellence with practical applications in optimization, 
            machine learning, and computational intelligence.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
