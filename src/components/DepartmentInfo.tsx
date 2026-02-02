import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Award, Cpu, Database, Target, Lightbulb, Code, Brain, Globe, Shield } from "lucide-react";
import { forwardRef } from "react";

const curriculumAreas = [
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: Cpu, label: "Machine Learning" },
  { icon: Database, label: "Data Science" },
  { icon: Globe, label: "Web Development" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Code, label: "Software Engineering" },
];

const stats = [
  { icon: Users, value: "20+", label: "Doctorate Faculty" },
  { icon: GraduationCap, value: "Top 5", label: "MCA Programs" },
  { icon: Award, value: "30+", label: "Years Excellence" },
  { icon: BookOpen, value: "3", label: "Premier Courses" },
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
            About the Department
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Department of <span className="gradient-text">Computer Applications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto mb-6 rounded-full" />
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
            <div className="luxury-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">Premier Institution</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Department of Computer Applications is a pioneering department within the institution, offering premier Information Technology courses, including the Master of Computer Applications (MCA), Master of Science in Computer Science, and M.Tech in Data Analytics.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Recognized among the top five MCA programs in the country, the department is committed to delivering high-quality education that blends robust theoretical foundations with extensive practical training.
              </p>
            </div>

            <div className="luxury-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">Expert Faculty</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Comprising over 20 faculty members, all holding doctorate degrees, the department actively engages in research and project work alongside teaching. Faculty dedication is reflected in successful student placements and the production of Ph.D. graduates.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                To keep pace with rapidly evolving technology, faculty participate in ongoing professional development through refresher courses and symposia, ensuring they remain at the forefront of the latest advancements in the field.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Additional Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="luxury-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">Comprehensive Curriculum</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The curriculum is designed to provide a comprehensive understanding of both theoretical concepts and practical applications. Students have the opportunity to work on industry-relevant projects, enhancing their skills and preparing them for the workforce.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {curriculumAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50">
                    <area.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground font-medium">{area.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="luxury-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">Holistic Development</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Students are encouraged to develop organizational skills and teamwork through seminars and group discussions, alongside maintaining strong academic performance. The department also emphasizes participation in co-curricular and extracurricular activities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Regular workshops, hackathons, and coding competitions provide platforms for students to showcase their skills and collaborate on innovative solutions.
              </p>
            </div>
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
