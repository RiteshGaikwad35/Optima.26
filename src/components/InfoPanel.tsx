import { motion } from "framer-motion";

const InfoPanel = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
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

  return (
    <motion.div
      className="h-full flex flex-col justify-center p-8 md:p-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Title */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 tracking-tight text-foreground"
      >
        OPTIMA
        <span className="block text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mt-3">
          Celebrating 30 Years
        </span>
      </motion.h1>

      {/* First Paragraph */}
      <motion.p
        variants={itemVariants}
        className="font-body text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mb-6"
      >
        OPTIMA is the official technical club of the Department of Computer
        Applications at NIT Trichy, for the students of M.Sc Computer Science and
        M.Tech Data Analytics programs. It provides a platform for technical
        growth through hackathons, coding contests, and workshops.
      </motion.p>

      {/* Divider */}
      <motion.div
        variants={itemVariants}
        className="w-24 h-[2px] bg-foreground/20 rounded-full mb-6"
      />

      {/* Second Paragraph */}
      <motion.p
        variants={itemVariants}
        className="font-body text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl"
      >
        Celebrating over 30 years of excellence, the club fosters hands-on
        learning, bridging academic knowledge with real-world applications, and
        connects students with industry trends and innovations in Information
        Technology.
      </motion.p>
    </motion.div>
  );
};

export default InfoPanel;
