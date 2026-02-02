import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Archive from "@/components/Archive";
import Team from "@/components/Team";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Sponsors />
        <Gallery />
        <Archive />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
