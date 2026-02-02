import { motion } from "framer-motion";
import ImageSlider from "./ImageSlider";
import InfoPanel from "./InfoPanel";

const SplitHeroSection = () => {
  return (
    <section className="py-6 md:py-10 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {/* Left Side - Image Slider */}
          <div className="order-2 lg:order-1">
            <ImageSlider />
          </div>

          {/* Right Side - Info Panel */}
          <div className="order-1 lg:order-2 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
            <InfoPanel />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SplitHeroSection;
