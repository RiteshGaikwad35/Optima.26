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
    <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-20 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-1 md:gap-2 overflow-x-auto scrollbar-hide py-2">
          {tabs.map((tab) => (
            <button
              key={tab.section}
              onClick={() => onSectionChange(tab.section)}
              className="relative px-4 md:px-6 py-3 text-sm md:text-base font-medium transition-colors whitespace-nowrap"
            >
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  activeSection === tab.section
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.name}
              </span>
              {activeSection === tab.section && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TabNavigation;
