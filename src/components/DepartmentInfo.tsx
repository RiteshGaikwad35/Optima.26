import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Award, Cpu, Database, Target, Lightbulb } from "lucide-react";
import { forwardRef } from "react";

const features = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Offering MCA and Ph.D. programs with focus on cutting-edge research in computer applications.",
  },
  {
    icon: BookOpen,
    title: "Research Focus",
    description: "Specializing in optimization algorithms, machine learning, data science, and operations research.",
  },
  {
    icon: Users,
    title: "Industry Connect",
    description: "Strong industry partnerships with leading tech companies for internships and placements.",
  },
  {
    icon: Award,
    title: "OPTIMA Legacy",
    description: "Hosting the annual OPTIMA symposium for over a decade, celebrating optimization excellence.",
  },
];

const stats = [
  { icon: Cpu, value: "50+", label: "Research Papers" },
  { icon: Database, value: "100+", label: "Students" },
  { icon: Award, value: "15+", label: "Awards" },
  { icon: Users, value: "20+", label: "Faculty" },
];

const highlights = [
  {
    icon: Target,
    title: "Vision",
    description: "To be a center of excellence in computer applications, nurturing innovative minds for global challenges.",
  },
  {
    icon: Lightbulb,
    title: "Mission",
    description: "Fostering research, innovation, and industry collaboration while maintaining academic rigor.",
  },
];

const DepartmentInfo = forwardRef<HTMLElement>((_, ref) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section ref={ref} className="py-16 md:py-24 platinum-section relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-px gold-divider" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 tracking-wide"
          >
            Department of Computer Applications
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            NIT <span className="gradient-text">Tiruchirappalli</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            One of India's premier technical institutions, fostering innovation and excellence 
            in computer science education and research since 1964. The Department of Computer Applications 
            stands at the forefront of technological advancement.
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="luxury-card rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
              <div className="relative z-10">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 w-fit mb-6 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card-elevated rounded-2xl p-6 text-center group hover:border-primary/30 transition-all duration-500"
            >
              <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="luxury-card rounded-2xl p-6 group relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 w-fit mb-5 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-3 text-base md:text-lg">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 gold-divider"
        />
      </div>
    </section>
  );
});

DepartmentInfo.displayName = "DepartmentInfo";

export default DepartmentInfo;
