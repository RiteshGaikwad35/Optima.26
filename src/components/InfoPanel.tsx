import { motion } from "framer-motion";
import { Sparkles, Target, Zap, TrendingUp } from "lucide-react";

const InfoPanel = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      className="h-full flex flex-col justify-center p-6 md:p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-2">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          March 15-17, 2025
        </span>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4"
      >
        <span className="gradient-text">OPTIMA</span>
        <span className="text-foreground"> 2025</span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed"
      >
        The premier technical symposium dedicated to Operations Research and 
        Optimization, hosted by the Department of Computer Applications at 
        NIT Trichy.
      </motion.p>

      <motion.div variants={itemVariants} className="space-y-3 mb-6">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Target className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground text-sm">Optimization Excellence</h3>
            <p className="text-muted-foreground text-xs">Cutting-edge algorithms & techniques</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-accent/10">
            <Zap className="w-4 h-4 text-accent" />
          </div>
          <div>
            <h3 className="font-medium text-foreground text-sm">Real-World Applications</h3>
            <p className="text-muted-foreground text-xs">Industry-relevant problem solving</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground text-sm">Innovation Hub</h3>
            <p className="text-muted-foreground text-xs">Fostering next-gen solutions</p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
        <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
          Register Now
        </button>
        <button className="px-5 py-2.5 rounded-full border border-border bg-card/50 text-foreground font-medium text-sm transition-all duration-300 hover:bg-muted">
          Learn More
        </button>
      </motion.div>
    </motion.div>
  );
};

export default InfoPanel;
