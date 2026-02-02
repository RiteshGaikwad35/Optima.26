import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
    // Scroll to top of content area when section changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderSection = () => {
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
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      <main>
        <Hero />
        <AnimatePresence mode="wait">
          {activeSection !== "home" && renderSection()}
        </AnimatePresence>
      </main>
      <Footer onSectionChange={(section) => handleSectionChange(section as Section)} />
    </div>
  );
};

export default Index;
