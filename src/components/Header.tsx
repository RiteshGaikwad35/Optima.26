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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-[#002366]/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-[#002366]/90 backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[110px]">
          {/* Left Logo (Circular White Background, Image Doubled) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden">
              <img
                src="/OIP.png"
                alt="NIT Trichy"
                className="w-28 h-28 md:w-32 md:h-32 object-contain"
              />
            </div>
          </motion.div>

          {/* Center Title (Tamil | Hindi | English) */}
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex flex-col items-center text-center gap-1"
          >
            {/* Multilingual Row */}
            <div className="flex items-center gap-6 text-white font-serif font-semibold tracking-wide">
              <span className="text-sm md:text-base">
                தேசிய தொழில்நுட்ப நிறுவனம், திருச்சிராப்பள்ளி
              </span>
              <span className="text-sm md:text-base">
                राष्ट्रीय प्रौद्योगिकी संस्थान, तिरुचिरापल्ली
              </span>
              <span className="text-sm md:text-base">
                National Institute of Technology, Tiruchirappalli
              </span>
            </div>

            {/* Color Belt for Department */}
            <div className="mt-3 px-6 py-1 rounded-full bg-white/15 backdrop-blur-md">
              <p className="text-[11px] md:text-xs tracking-[0.18em] text-white font-medium">
                Department of Computer Applications
              </p>
            </div>
          </motion.div>

          {/* Right Logo (Large, No Animation) */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src="/favicon.png"
                alt="OPTIMA Logo"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
