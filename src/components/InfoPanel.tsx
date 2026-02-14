import { motion } from "framer-motion";
import { Sparkles, Code, Trophy, Users } from "lucide-react";

const InfoPanel = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const glowAnimation = {
    textShadow: [
      "0 0 20px hsl(var(--primary) / 0.3)",
      "0 0 40px hsl(var(--primary) / 0.5)",
      "0 0 20px hsl(var(--primary) / 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  const highlights = [
    { icon: Code, label: "Hackathons" },
    { icon: Trophy, label: "Coding Contests" },
    { icon: Users, label: "Workshops" },
  ];

  return (
    <motion.div
      className="h-full flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-10 text-left"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Premium Badge */}
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-2 mb-4"
      >
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="w-5 h-5 text-primary" />
        </motion.div>
        <span className="text-sm font-semibold tracking-widest uppercase text-primary/80">
          Official Technical Club
        </span>
      </motion.div>

      {/* Title Section */}
      <motion.h1
        variants={itemVariants}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-3 sm:mb-4 tracking-tight text-left"
      >
        {/* OPTIMA */}
        <motion.span
          animate={glowAnimation}
          className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto]"
          style={{
            backgroundSize: "200% auto",
            animation: "gradient-shift 3s ease infinite",
          }}
        >
          OPTIMA
        </motion.span>

        {/* Celebrating Excellence */}
        <motion.span
          variants={itemVariants}
          className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mt-2 sm:mt-3"
        >
          <span className="text-muted-foreground">Celebrating </span>

          <span className="relative inline-block">
            <span className="text-primary font-bold">
              Excellence
            </span>

            <motion.span
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </span>
        </motion.span>

        {/* Centered Animated Tagline */}
<motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.9 }}
  className="w-full flex justify-center mt-6 translate-x-10"
>
  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-widest text-primary/80">
    THEN • NOW • ALWAYS
  </span>
</motion.div>

      </motion.h1>

      {/* First Paragraph */}
      <motion.p
        variants={itemVariants}
        className="font-body text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-4 sm:mb-6"
      >
        OPTIMA is the official technical club of the{" "}
        <span className="text-foreground font-semibold">
          Department of Computer Applications
        </span>{" "}
        at{" "}
        <span className="text-primary font-semibold">
          NIT Trichy
        </span>, for the students of{" "}
        <span className="text-foreground font-medium">
          M.Sc Computer Science
        </span>{" "}
        and{" "}
        <span className="text-foreground font-medium">
          M.Tech Data Analytics
        </span>{" "}
        programs.
      </motion.p>

      {/* Highlight Pills */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6"
      >
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
            whileHover={{
              scale: 1.05,
              backgroundColor: "hsl(var(--primary) / 0.2)",
            }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-foreground">
              {item.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated Divider */}
      <motion.div
        variants={itemVariants}
        className="relative w-24 sm:w-32 h-[2px] mb-4 sm:mb-6 overflow-hidden rounded-full"
      >
        <div className="absolute inset-0 bg-foreground/10" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Second Paragraph */}
      <motion.p
        variants={itemVariants}
        className="font-body text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl"
      >
        The club fosters{" "}
        <span className="text-foreground font-semibold">
          hands-on learning
        </span>, bridging{" "}
        <span className="text-foreground font-medium">
          academic knowledge
        </span>{" "}
        with{" "}
        <span className="text-primary font-semibold">
          real-world applications
        </span>, and connects students with{" "}
        <span className="text-foreground font-medium">
          industry trends
        </span>{" "}
        and innovations in{" "}
        <span className="text-foreground font-semibold">
          Information Technology
        </span>.
      </motion.p>
    </motion.div>
  );
};

export default InfoPanel;
