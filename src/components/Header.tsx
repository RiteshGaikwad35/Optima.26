import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-card border-b border-border"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Logo - NIT Trichy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/National_Institute_of_Technology%2C_Tiruchirappalli_Logo.svg/1200px-National_Institute_of_Technology%2C_Tiruchirappalli_Logo.svg.png"
              alt="NIT Trichy"
              className="h-12 md:h-14 object-contain"
            />
          </motion.div>

          {/* Center - Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-xl md:text-2xl font-display font-bold gradient-text tracking-wider">
              OPTIMA
            </h1>
            <p className="text-[10px] md:text-xs text-muted-foreground hidden sm:block">
              Department of Computer Applications | NIT Trichy
            </p>
          </motion.div>

          {/* Right Logo - OPTIMA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <span className="text-base md:text-lg font-display font-bold text-primary-foreground">O</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
