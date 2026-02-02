import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Award, Cpu, Database } from "lucide-react";

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

const DepartmentInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-10 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Department of Computer Applications
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            NIT Tiruchirappalli
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            One of India's premier technical institutions, fostering innovation and excellence 
            in computer science education and research since 1964.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-xl p-4 text-center border border-border hover:border-primary/50 transition-colors"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card rounded-xl p-5 border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DepartmentInfo;
