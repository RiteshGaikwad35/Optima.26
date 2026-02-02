import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import TabNavigation from "@/components/TabNavigation";
import NotificationBar from "@/components/NotificationBar";
import SplitHeroSection from "@/components/SplitHeroSection";
import DepartmentInfo from "@/components/DepartmentInfo";
import About from "@/components/About";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Archive from "@/components/Archive";
import Team from "@/components/Team";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

type Section = "home" | "about" | "events" | "sponsors" | "gallery" | "team" | "archive";

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("home");

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case "about":
        return <About key="about" />;
      case "events":
        return <Events key="events" />;
      case "sponsors":
        return <Sponsors key="sponsors" />;
      case "gallery":
        return <Gallery key="gallery" />;
      case "team":
        return <Team key="team" />;
      case "archive":
        return <Archive key="archive" />;
      case "home":
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Fixed Header */}
      <Header />

      {/* Tab Navigation - Below Header */}
      <div className="pt-20">
        <TabNavigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      </div>

      {/* Notification Bar */}
      <NotificationBar />

      {/* Split Hero Section - Always Visible */}
      <SplitHeroSection />

      {/* Department Info - Always Visible */}
      <DepartmentInfo />

      {/* Dynamic Section Content */}
      <AnimatePresence mode="wait">
        {activeSection !== "home" && (
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {renderSectionContent()}
          </motion.div>
        )}
      </AnimatePresence>

      <Footer onSectionChange={(section) => handleSectionChange(section as Section)} />
    </div>
  );
};

export default Index;
