import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const sponsors = {
  platinum: [
    { name: "TechCorp", logo: "https://placehold.co/200x80/f7f9fc/00cfff?text=TechCorp&font=montserrat" },
    { name: "InnovateTech", logo: "https://placehold.co/200x80/f7f9fc/00cfff?text=InnovateTech&font=montserrat" },
  ],
  gold: [
    { name: "DataFlow", logo: "https://placehold.co/180x70/f7f9fc/6c63ff?text=DataFlow&font=montserrat" },
    { name: "CloudBase", logo: "https://placehold.co/180x70/f7f9fc/6c63ff?text=CloudBase&font=montserrat" },
    { name: "AILabs", logo: "https://placehold.co/180x70/f7f9fc/6c63ff?text=AILabs&font=montserrat" },
  ],
  silver: [
    { name: "CodeStack", logo: "https://placehold.co/150x60/f7f9fc/5f6b85?text=CodeStack&font=montserrat" },
    { name: "DevTools", logo: "https://placehold.co/150x60/f7f9fc/5f6b85?text=DevTools&font=montserrat" },
    { name: "ByteForge", logo: "https://placehold.co/150x60/f7f9fc/5f6b85?text=ByteForge&font=montserrat" },
    { name: "NetWorks", logo: "https://placehold.co/150x60/f7f9fc/5f6b85?text=NetWorks&font=montserrat" },
  ],
};

const Sponsors = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="section-container relative overflow-hidden"
    >
      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary font-medium mb-4">
            Partners
          </span>
          <h2 className="section-title">Our Sponsors</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're grateful to our sponsors whose support makes OPTIMA possible. 
            Their commitment to innovation and education drives our event forward.
          </p>
        </motion.div>

        {/* Platinum Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-center text-lg font-display font-semibold text-primary mb-8 uppercase tracking-wider">
            Platinum Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {sponsors.platinum.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group card-hover"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-16 md:h-20 object-contain group-hover:scale-105 transition-transform"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gold Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-center text-lg font-display font-semibold text-accent mb-8 uppercase tracking-wider">
            Gold Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsors.gold.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-card rounded-xl p-5 hover:border-accent/30 transition-all duration-300 group card-hover"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-12 md:h-14 object-contain group-hover:scale-105 transition-transform"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Silver Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-center text-lg font-display font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
            Silver Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors.silver.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="glass-card rounded-xl p-4 hover:border-muted-foreground/30 transition-all duration-300 group card-hover"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-10 md:h-12 object-contain group-hover:scale-105 transition-transform"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Become Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">Interested in partnering with OPTIMA?</p>
          <button className="px-6 py-3 rounded-full glass-card text-foreground font-medium transition-all duration-300 hover:bg-muted border border-border">
            Become a Sponsor
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Sponsors;
