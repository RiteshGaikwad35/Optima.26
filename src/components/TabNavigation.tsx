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
    <nav className="bg-card/95 backdrop-blur-lg border-b border-border/50 sticky top-[120px] md:top-[130px] z-40 shadow-sm mt-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-1 md:gap-3 overflow-x-auto scrollbar-hide py-3">
          {tabs.map((tab) => (
            <button
              key={tab.section}
              onClick={() => onSectionChange(tab.section)}
              className="relative px-5 md:px-7 py-3 text-sm md:text-base font-medium transition-all duration-500 whitespace-nowrap group"
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
