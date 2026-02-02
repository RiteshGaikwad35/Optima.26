import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

type Section = "home" | "about" | "events" | "sponsors" | "gallery" | "team" | "archive";

interface HeaderProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const navLinks: { name: string; section: Section }[] = [
  { name: "Home", section: "home" },
  { name: "About", section: "about" },
  { name: "Events", section: "events" },
  { name: "Sponsors", section: "sponsors" },
  { name: "Gallery", section: "gallery" },
  { name: "Team", section: "team" },
  { name: "Archive", section: "archive" },
];

const Header = ({ activeSection, onSectionChange }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: Section) => {
    setIsMobileMenuOpen(false);
    onSectionChange(section);
  };

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
            className="hidden lg:flex flex-col items-center"
          >
            <h1 className="text-2xl font-display font-bold gradient-text tracking-wider">
              OPTIMA
            </h1>
            <p className="text-xs text-muted-foreground">
              Department of Computer Applications | NIT Trichy
            </p>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                onClick={() => handleNavClick(link.section)}
                className={`nav-link text-sm font-medium ${
                  activeSection === link.section ? "active text-primary" : ""
                }`}
              >
                {link.name}
              </motion.button>
            ))}
          </nav>

          {/* Right Logo - OPTIMA (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block flex-shrink-0"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <span className="text-lg font-display font-bold text-card">O</span>
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-card border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavClick(link.section)}
                  className={`text-left py-2 text-lg font-medium transition-colors ${
                    activeSection === link.section
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
