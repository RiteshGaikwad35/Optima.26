import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-[#001845] via-[#002366] to-[#001845] shadow-2xl shadow-primary/20"
          : "bg-gradient-to-r from-[#001845]/95 via-[#002366]/95 to-[#001845]/95"
      }`}
    >
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />
      
      {/* Animated glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-60 h-60 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -top-20 right-1/4 w-60 h-60 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative">
        <div className="flex items-center justify-between h-[80px] sm:h-[90px] md:h-[100px] gap-2 sm:gap-4">
          {/* Left Logo (Circular White Background) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-500" />
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white flex items-center justify-center shadow-lg ring-2 ring-white/30 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/OIP.png"
                  alt="NIT Trichy"
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Center Title */}
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex-1 flex flex-col items-center text-center gap-0.5 sm:gap-1 min-w-0 px-1 sm:px-2 md:px-4"
          >
            {/* Multilingual Row - Hidden on mobile */}
            <div className="hidden lg:flex items-center justify-center gap-3 xl:gap-6 text-white/90 font-serif font-medium tracking-wide flex-wrap">
              <span className="text-[10px] xl:text-xs whitespace-nowrap">
                தேசிய தொழில்நுட்ப நிறுவனம், திருச்சிராப்பள்ளி
              </span>
              <span className="w-1 h-1 rounded-full bg-accent/60" />
              <span className="text-[10px] xl:text-xs whitespace-nowrap">
                राष्ट्रीय प्रौद्योगिकी संस्थान, तिरुचिरापल्ली
              </span>
              <span className="w-1 h-1 rounded-full bg-accent/60" />
              <span className="text-[10px] xl:text-xs whitespace-nowrap">
                National Institute of Technology, Tiruchirappalli
              </span>
            </div>

            {/* Tablet: Two languages */}
            <div className="hidden md:flex lg:hidden items-center justify-center gap-2 text-white/90 font-serif font-medium">
              <span className="text-[9px] sm:text-[10px]">NIT Tiruchirappalli</span>
              <span className="w-1 h-1 rounded-full bg-accent/60" />
              <span className="text-[9px] sm:text-[10px]">राष्ट्रीय प्रौद्योगिकी संस्थान</span>
            </div>

            {/* Mobile: Only English - Compact */}
            <div className="md:hidden text-white font-serif font-semibold">
              <span className="text-[10px] sm:text-xs tracking-wide">NIT Tiruchirappalli</span>
            </div>

            {/* Department Badge */}
            <motion.div 
              className="mt-1 sm:mt-2 md:mt-3 relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {/* Badge glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/30 via-primary/30 to-accent/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-inner">
                <p className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-xs tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.18em] text-white font-medium whitespace-nowrap">
                  Department of Computer Applications
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Logo - OPTIMA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              {/* Animated ring */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
                  padding: '2px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-[#002366]" />
              </motion.div>
              
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 
  rounded-full bg-gradient-to-br from-white/15 to-white/5 
  backdrop-blur-md flex items-center justify-center 
  shadow-lg border border-white/20 overflow-hidden 
  transition-transform duration-300 group-hover:scale-105">

  <img
    src="/favicon.png"
    alt="OPTIMA Logo"
    className="w-full h-full object-cover"
  />

</div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.header>
  );
};

export default Header;
