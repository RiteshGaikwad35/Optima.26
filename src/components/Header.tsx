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
        <div className="flex items-center justify-between h-[100px] md:h-[110px] gap-4">
          {/* Left Logo (Circular White Background) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden">
              <img
                src="/OIP.png"
                alt="NIT Trichy"
                className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
              />
            </div>
          </motion.div>

          {/* Center Title (Tamil | Hindi | English) */}
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex-1 flex flex-col items-center text-center gap-1 min-w-0 px-2 md:px-4"
          >
            {/* Multilingual Row - Hidden on mobile, shown on larger screens */}
            <div className="hidden md:flex items-center justify-center gap-3 lg:gap-6 text-white font-serif font-semibold tracking-wide flex-wrap">
              <span className="text-xs lg:text-sm whitespace-nowrap">
                தேசிய தொழில்நுட்ப நிறுவனம், திருச்சிராப்பள்ளி
              </span>
              <span className="text-xs lg:text-sm whitespace-nowrap">
                राष्ट्रीय प्रौद्योगिकी संस्थान, तिरुचिरापल्ली
              </span>
              <span className="text-xs lg:text-sm whitespace-nowrap">
                National Institute of Technology, Tiruchirappalli
              </span>
            </div>

            {/* Mobile: Only English */}
            <div className="md:hidden text-white font-serif font-semibold tracking-wide">
              <span className="text-xs">NIT Tiruchirappalli</span>
            </div>

            {/* Color Belt for Department */}
            <div className="mt-2 md:mt-3 px-4 md:px-6 py-1 rounded-full bg-white/15 backdrop-blur-md">
              <p className="text-[10px] md:text-[11px] lg:text-xs tracking-[0.12em] md:tracking-[0.18em] text-white font-medium whitespace-nowrap">
                Department of Computer Applications
              </p>
            </div>
          </motion.div>

          {/* Right Logo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src="/favicon.png"
                alt="OPTIMA Logo"
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
