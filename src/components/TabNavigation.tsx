import { motion } from "framer-motion";

type Section = "home" | "about" | "events" | "sponsors" | "gallery" | "team" | "archive";

interface TabNavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const tabs: { name: string; section: Section }[] = [
  { name: "Home", section: "home" },
  { name: "About", section: "about" },
  { name: "Events", section: "events" },
  { name: "Sponsors", section: "sponsors" },
  { name: "Gallery", section: "gallery" },
  { name: "Team", section: "team" },
  { name: "Archive", section: "archive" },
];

const TabNavigation = ({ activeSection, onSectionChange }: TabNavigationProps) => {
  return (
    <nav className="bg-card/95 backdrop-blur-lg border-b border-border/50 fixed top-[80px] sm:top-[90px] md:top-[100px] left-0 right-0 z-40 shadow-sm">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-start sm:justify-center gap-0.5 sm:gap-1 md:gap-3 overflow-x-auto scrollbar-hide py-2 sm:py-3 -mx-2 px-2">
          {tabs.map((tab) => (
            <button
              key={tab.section}
              onClick={() => onSectionChange(tab.section)}
              className="relative px-3 sm:px-5 md:px-7 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-medium transition-all duration-500 whitespace-nowrap group flex-shrink-0"
            >
              <span
                className={`relative z-10 transition-all duration-500 ${
                  activeSection === tab.section
                    ? "text-primary font-semibold"
                    : "text-muted-foreground group-hover:text-primary"
                }`}
              >
                {tab.name}
              </span>
              {activeSection === tab.section && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 35,
                  }}
                />
              )}
              {/* Hover indicator for inactive tabs */}
              {activeSection !== tab.section && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary/30 group-hover:w-1/2 transition-all duration-500 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TabNavigation;
