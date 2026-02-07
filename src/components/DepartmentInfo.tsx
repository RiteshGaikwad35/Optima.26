import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Award, Cpu, Database, Target, Code, Brain, Globe, Shield, Sparkles } from "lucide-react";
import { forwardRef } from "react";
import AnimatedCounter from "./AnimatedCounter";

const curriculumAreas = [
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: Cpu, label: "Machine Learning" },
  { icon: Database, label: "Data Science" },
  { icon: Globe, label: "Web Development" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Code, label: "Software Engineering" },
];

const stats = [
  { icon: Users, value: 20, suffix: "+", label: "Doctorate Faculty", isNumber: true },
  { icon: GraduationCap, value: 500, suffix: "+", label: "Students & Phd Scholars ", isNumber: true },
  { icon: Award, value: 30, suffix: "+", label: "Years Excellence", isNumber: true },
  { icon: BookOpen, value: 3, suffix: "", label: "Premier Courses", isNumber: true },
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
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary text-sm font-semibold mb-6 tracking-wide"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            About the Department
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Department of{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Computer Applications
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A <span className="text-foreground font-semibold">pioneering department</span> offering premier IT education
          </p>
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
              className="relative glass-card-elevated rounded-2xl p-6 text-center group hover:border-primary/30 transition-all duration-500 overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 w-fit mx-auto mb-4 group-hover:scale-110 transition-all duration-500"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-display font-bold mb-2">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix} 
                      duration={2.5}
                      className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                    />
                  </span>
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Left Column - Main Description */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div 
              className="luxury-card rounded-2xl p-8 relative overflow-hidden group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <motion.div 
                  className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  Premier <span className="text-primary">Institution</span>
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 relative z-10">
                The Department of Computer Applications is a <span className="text-foreground font-semibold">pioneering department</span> within the institution, offering premier IT courses, including the <span className="text-primary font-medium">Master of Computer Applications (MCA)</span>, <span className="text-primary font-medium">Master of Science in Computer Science</span>, and <span className="text-primary font-medium">M.Tech in Data Analytics</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed relative z-10">
  Recognized among the <span className="text-foreground font-bold">top five M.Tech (Data Analytics) and M.Sc. (Computer Science) programs</span> nationwide, the institution is committed to delivering <span className="text-foreground font-medium">high-quality education</span> that integrates strong theoretical foundations with extensive hands-on training.
</p>

            </motion.div>

            <motion.div 
              className="luxury-card rounded-2xl p-8 relative overflow-hidden group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <motion.div 
                  className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Users className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  Expert <span className="text-primary">Faculty</span>
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 relative z-10">
                Comprising over <span className="text-primary font-bold">20+ faculty members</span>, all holding <span className="text-foreground font-semibold">doctorate degrees</span>, the department actively engages in research and project work alongside teaching. Faculty dedication is reflected in successful student placements.
              </p>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                To keep pace with rapidly evolving technology, faculty participate in <span className="text-foreground font-medium">ongoing professional development</span> through refresher courses and symposia, ensuring they remain at the <span className="text-primary font-medium">forefront of advancements</span>.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Additional Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div 
              className="luxury-card rounded-2xl p-8 relative overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <motion.div 
                  className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <BookOpen className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  Comprehensive <span className="text-primary">Curriculum</span>
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                The curriculum provides a <span className="text-foreground font-semibold">comprehensive understanding</span> of both theoretical concepts and practical applications. Students work on <span className="text-primary font-medium">industry-relevant projects</span>, preparing them for the workforce.
              </p>
              <div className="grid grid-cols-2 gap-3 relative z-10">
                {curriculumAreas.map((area, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-r from-secondary/50 to-secondary/30 border border-primary/10 hover:border-primary/30 transition-colors"
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <area.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground font-medium">{area.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="luxury-card rounded-2xl p-8 relative overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <motion.div 
                  className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Award className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  Holistic <span className="text-primary">Development</span>
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 relative z-10">
                Students develop <span className="text-foreground font-semibold">organizational skills</span> and <span className="text-foreground font-semibold">teamwork</span> through seminars and group discussions. The department emphasizes <span className="text-primary font-medium">co-curricular and extracurricular activities</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                Regular <span className="text-primary font-bold">workshops</span>, <span className="text-primary font-bold">hackathons</span>, and <span className="text-primary font-bold">coding competitions</span> provide platforms for students to showcase their skills.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Industry & Alumni Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card-elevated rounded-2xl p-8 lg:p-12 text-center glow-primary"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold gradient-text">
              Industry Partnerships & Excellence
            </h3>
          </div>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
            The department has established strong ties with industry partners, facilitating internships and collaborative projects that provide real-world experience. Alumni of the department are well-placed in leading tech companies, and their achievements serve as an inspiration for current students.
          </p>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            With a commitment to nurturing future leaders in technology, the Department of Computer Applications continuously strives for excellence in education, research, and community engagement, preparing its students to meet the challenges of a dynamic and ever-evolving field.
          </p>
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
